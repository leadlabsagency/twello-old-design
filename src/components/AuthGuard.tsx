
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface AuthGuardProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
  redirectTo?: string;
}

const AuthGuard = ({ 
  children, 
  requireAdmin = false,
  redirectTo = '/login' 
}: AuthGuardProps) => {
  const { user, isLoading, userProfile } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        navigate(redirectTo);
      } else if (requireAdmin && userProfile?.role !== 'admin') {
        navigate('/'); // Redirect non-admin users to home
      }
    }
  }, [user, isLoading, navigate, redirectTo, requireAdmin, userProfile]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!user || (requireAdmin && userProfile?.role !== 'admin')) {
    return null;
  }

  return <>{children}</>;
};

export default AuthGuard;
