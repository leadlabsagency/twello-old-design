
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase, UserData, getUserProfile, UserRole, createProfile } from '../lib/supabase';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AuthContextType {
  session: Session | null;
  user: User | null;
  userProfile: UserData | null;
  isLoading: boolean;
  isAdmin: boolean;
  signIn: (email: string, password: string) => Promise<{success: boolean, error?: string}>;
  signUp: (email: string, password: string, fullName: string) => Promise<{success: boolean, error?: string}>;
  signOut: () => Promise<void>;
  userInitials: string;
  userDisplayName: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data for testing
const mockUser: User = {
  id: 'mock-user-id',
  email: 'test@example.com',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  aud: 'authenticated',
  app_metadata: {},
  user_metadata: {},
  role: 'authenticated'
} as User;

const mockUserProfile: UserData = {
  id: 'mock-user-id',
  email: 'test@example.com',
  full_name: 'Test User',
  role: 'user' as UserRole,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString()
};

const mockAdminProfile: UserData = {
  id: 'mock-admin-id',
  email: 'admin@example.com',
  full_name: 'Admin User',
  role: 'admin' as UserRole,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString()
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMockMode, setIsMockMode] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if Supabase is configured
    const isSupabaseConfigured = import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY;
    
    if (!isSupabaseConfigured) {
      // Use mock mode
      setIsMockMode(true);
      setIsLoading(false);
      return;
    }

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        fetchUserProfile(session.user.id);
      } else {
        setIsLoading(false);
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          fetchUserProfile(session.user.id);
        } else {
          setUserProfile(null);
          setIsLoading(false);
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function fetchUserProfile(userId: string) {
    setIsLoading(true);
    const profile = await getUserProfile(userId);
    setUserProfile(profile);
    setIsLoading(false);
  }

  const isAdmin = userProfile?.role === 'admin';

  // Generate user initials and display name for the UI
  const userInitials = userProfile?.full_name 
    ? userProfile.full_name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2)
    : user?.email?.substring(0, 2).toUpperCase() || 'U';
  
  const userDisplayName = userProfile?.full_name || user?.email?.split('@')[0] || 'User';

  const signIn = async (email: string, password: string) => {
    if (isMockMode) {
      // Mock sign in logic
      try {
        if (email === 'admin@example.com' && password === 'admin123') {
          setUser(mockUser);
          setUserProfile(mockAdminProfile);
          toast({
            title: "Success!",
            description: "You've been signed in as admin.",
          });
          return { success: true };
        } else if (email === 'test@example.com' && password === 'password123') {
          setUser(mockUser);
          setUserProfile(mockUserProfile);
          toast({
            title: "Success!",
            description: "You've been signed in.",
          });
          return { success: true };
        } else {
          toast({
            title: "Sign in failed",
            description: "Invalid credentials. Try test@example.com / password123 or admin@example.com / admin123",
            variant: "destructive",
          });
          return { success: false, error: "Invalid credentials" };
        }
      } catch (error: any) {
        toast({
          title: "Sign in failed",
          description: "Something went wrong.",
          variant: "destructive",
        });
        return { success: false, error: "Something went wrong" };
      }
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      
      toast({
        title: "Success!",
        description: "You've been signed in.",
      });
      
      return { success: true };
    } catch (error: any) {
      console.error('Error signing in:', error);
      toast({
        title: "Sign in failed",
        description: error.message || "Please check your credentials and try again.",
        variant: "destructive",
      });
      return {
        success: false,
        error: error.message || "Failed to sign in.",
      };
    }
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    if (isMockMode) {
      toast({
        title: "Mock Mode",
        description: "Sign up not available in mock mode. Use existing test credentials.",
        variant: "destructive",
      });
      return { success: false, error: "Sign up not available in mock mode" };
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;

      if (data.user) {
        // Create profile entry using the helper function
        const profileCreated = await createProfile(
          data.user.id,
          email,
          fullName,
          'user' as UserRole
        );

        if (!profileCreated) {
          throw new Error("Failed to create user profile");
        }
      }

      toast({
        title: "Account created!",
        description: "Check your email to confirm your account.",
      });
      
      return { success: true };
    } catch (error: any) {
      console.error('Error signing up:', error);
      toast({
        title: "Sign up failed",
        description: error.message || "Please try again with different credentials.",
        variant: "destructive",
      });
      return {
        success: false,
        error: error.message || "Failed to sign up.",
      };
    }
  };

  const signOut = async () => {
    if (isMockMode) {
      setUser(null);
      setUserProfile(null);
      toast({
        title: "Signed out",
        description: "You have been signed out successfully.",
      });
      return;
    }

    await supabase.auth.signOut();
    toast({
      title: "Signed out",
      description: "You have been signed out successfully.",
    });
  };

  const value = {
    session,
    user,
    userProfile,
    isLoading,
    isAdmin,
    signIn,
    signUp,
    signOut,
    userInitials,
    userDisplayName,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
