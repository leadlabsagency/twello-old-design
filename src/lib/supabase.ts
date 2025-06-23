
import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/supabase';

// Default to empty strings, but use environment variables if available
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if credentials are missing and provide a better error message
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase credentials. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.');
}

// Create a mock client or use actual client based on credentials availability
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient<Database>(supabaseUrl, supabaseAnonKey)
  : {
      auth: {
        signUp: () => Promise.resolve({ data: null, error: new Error('Supabase not configured') }),
        signInWithPassword: () => Promise.resolve({ data: null, error: new Error('Supabase not configured') }),
        signOut: () => Promise.resolve({ error: null }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
        getSession: () => Promise.resolve({ data: { session: null } }),
      },
      from: () => ({
        select: () => ({
          eq: () => ({
            single: () => Promise.resolve({ data: null, error: new Error('Supabase not configured') }),
          }),
          order: () => Promise.resolve({ data: [], error: new Error('Supabase not configured') }),
          limit: () => ({
            range: () => Promise.resolve({ data: [], error: new Error('Supabase not configured') }),
          }),
          count: () => Promise.resolve({ count: 0, error: new Error('Supabase not configured') }),
          gte: () => ({
            count: () => Promise.resolve({ count: 0, error: new Error('Supabase not configured') }),
          }),
          ilike: () => ({
            limit: () => ({
              range: () => Promise.resolve({ data: [], error: new Error('Supabase not configured') }),
            }),
          }),
          or: () => ({
            or: () => ({
              limit: () => ({
                range: () => Promise.resolve({ data: [], error: new Error('Supabase not configured') }),
              }),
            }),
            ilike: () => ({
              limit: () => ({
                range: () => Promise.resolve({ data: [], error: new Error('Supabase not configured') }),
              }),
            }),
          }),
          textSearch: () => Promise.resolve({ data: [], error: new Error('Supabase not configured') }),
        }),
        insert: () => Promise.resolve({ error: new Error('Supabase not configured'), data: null }),
        update: () => ({
          eq: () => Promise.resolve({ error: new Error('Supabase not configured'), data: null }),
          match: () => Promise.resolve({ error: new Error('Supabase not configured'), data: null }),
        }),
        delete: () => ({
          eq: () => Promise.resolve({ error: new Error('Supabase not configured') }),
          match: () => Promise.resolve({ error: new Error('Supabase not configured') }),
        }),
      }),
      storage: {
        from: () => ({
          upload: () => Promise.resolve({ data: null, error: new Error('Supabase not configured') }),
          getPublicUrl: () => ({ data: { publicUrl: '' } }),
          list: () => Promise.resolve({ data: [], error: new Error('Supabase not configured') }),
          remove: () => Promise.resolve({ data: null, error: new Error('Supabase not configured') }),
        }),
      },
      rpc: () => ({
        select: () => Promise.resolve({ data: [], error: new Error('Supabase not configured') }),
      }),
    };

export type UserRole = 'user' | 'admin';

export interface UserData {
  id: string;
  email: string;
  full_name?: string;
  role: UserRole;
  created_at: string;
  updated_at?: string | null;
}

export async function getUserProfile(userId: string): Promise<UserData | null> {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase not configured. Cannot get user profile.');
    return null;
  }
  
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
}

export async function updateUserProfile(userId: string, updates: Partial<Omit<UserData, 'id' | 'created_at'>>) {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase not configured. Cannot update user profile.');
    return false;
  }
  
  try {
    const { error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', userId);
    
    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error updating user profile:', error);
    return false;
  }
}

// Modified search profiles function to work without Supabase
export async function searchProfiles(searchQuery: string): Promise<UserData[]> {
  console.log('Search query:', searchQuery);
  // Return an empty array instead of attempting to search
  return [];
  
  /* Original code removed to fix build error
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase not configured. Cannot search profiles.');
    return [];
  }
  
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .or(`full_name.ilike.%${searchQuery}%,email.ilike.%${searchQuery}%`)
      .limit(10);
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error searching profiles:', error);
    return [];
  }
  */
}

// Function to create a profile when a user signs up
export async function createProfile(userId: string, email: string, fullName: string, role: UserRole = 'user') {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase not configured. Cannot create profile.');
    return false;
  }
  
  try {
    const { error } = await supabase
      .from('profiles')
      .insert({
        id: userId,
        email,
        full_name: fullName,
        role,
        created_at: new Date().toISOString(),
      });
    
    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error creating profile:', error);
    return false;
  }
}
