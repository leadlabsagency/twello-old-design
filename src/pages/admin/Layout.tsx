
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, Users, Settings, LogOut, 
  Menu, X, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { signOut, userProfile } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  const NavItems = () => (
    <>
      <Link 
        to="/admin" 
        className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-100 transition-all"
      >
        <LayoutDashboard className="h-5 w-5" />
        <span>Dashboard</span>
      </Link>
      <Link 
        to="/admin/users" 
        className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-100 transition-all"
      >
        <Users className="h-5 w-5" />
        <span>Users</span>
      </Link>
      <Link 
        to="/admin/settings" 
        className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-100 transition-all"
      >
        <Settings className="h-5 w-5" />
        <span>Settings</span>
      </Link>
    </>
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 flex-col border-r bg-white p-6">
        <div className="flex items-center gap-2 mb-8">
          <h1 className="text-xl font-bold">Twello Admin</h1>
        </div>
        
        <nav className="flex flex-col gap-2">
          <NavItems />
        </nav>
        
        <div className="mt-auto">
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                {userProfile?.full_name?.[0] || 'A'}
              </div>
              <div>
                <p className="text-sm font-medium">{userProfile?.full_name || 'Admin User'}</p>
                <p className="text-xs text-gray-500">{userProfile?.email}</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="w-full justify-start gap-2" 
              onClick={handleSignOut}
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Header */}
      <div className="flex flex-col flex-1">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-6 md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] p-0">
              <div className="flex flex-col h-full bg-white">
                <div className="p-6 border-b">
                  <div className="flex items-center justify-between">
                    <h1 className="text-xl font-bold">Twello Admin</h1>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <nav className="flex-1 p-6 space-y-2">
                  <NavItems />
                </nav>
                <div className="p-6 border-t">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      {userProfile?.full_name?.[0] || 'A'}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{userProfile?.full_name || 'Admin User'}</p>
                      <p className="text-xs text-gray-500">{userProfile?.email}</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start gap-2" 
                    onClick={handleSignOut}
                  >
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex-1">
            <h1 className="text-lg font-semibold">Twello Admin</h1>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
