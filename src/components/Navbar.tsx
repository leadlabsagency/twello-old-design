
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, User, Settings, X, LogOut, ChevronDown, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Navbar = () => {
  const { user, userProfile, signOut, userInitials, userDisplayName, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white py-4 px-4 md:px-8 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold">Twello</h1>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/deals" className="hover:text-twello-blue transition-colors">Deals</Link>
          <Link to="/jobs" className="hover:text-twello-blue transition-colors">Jobs</Link>
          <Link to="/networks" className="hover:text-twello-blue transition-colors">Networks</Link>
          <Link to="/events" className="hover:text-twello-blue transition-colors">Events</Link>
          <Link to="/offers" className="hover:text-twello-blue transition-colors">Offers</Link>
          {isAdmin && (
            <Link to="/admin" className="hover:text-twello-blue transition-colors">Admin</Link>
          )}
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 px-3 rounded-full hover:bg-gray-100">
                  <Avatar className="h-8 w-8 border border-gray-200">
                    <AvatarFallback className="bg-blue-600 text-white">
                      {userInitials}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{userDisplayName}</span>
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuItem className="py-2.5 cursor-pointer" asChild>
                  <Link to="/dashboard" className="flex items-center gap-2">
                    <LayoutDashboard size={18} />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-2.5 cursor-pointer" asChild>
                  <Link to="/profile" className="flex items-center gap-2">
                    <User size={18} />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-2.5 cursor-pointer" asChild>
                  <Link to="/settings" className="flex items-center gap-2">
                    <Settings size={18} />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="py-2.5 text-red-600 cursor-pointer" onClick={handleSignOut}>
                  <div className="flex items-center gap-2">
                    <LogOut size={18} />
                    <span>Sign Out</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center space-x-2">
              <Link to="/login">
                <Button variant="ghost">Log in</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign up</Button>
              </Link>
            </div>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80%] sm:w-[350px] p-0">
              <div className="flex flex-col h-full bg-white">
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center">
                      <h1 className="text-2xl font-bold">Twello</h1>
                    </Link>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetClose>
                  </div>
                </div>
                <div className="flex-1 overflow-auto">
                  <div className="flex flex-col p-0">
                    <Link to="/deals" className="flex gap-3 items-center p-4 hover:bg-gray-100 transition-colors">
                      <span className="text-base">Deals</span>
                    </Link>
                    <Link to="/jobs" className="flex gap-3 items-center p-4 hover:bg-gray-100 transition-colors">
                      <span className="text-base">Jobs</span>
                    </Link>
                    <Link to="/networks" className="flex gap-3 items-center p-4 hover:bg-gray-100 transition-colors">
                      <span className="text-base">Networks</span>
                    </Link>
                    <Link to="/events" className="flex gap-3 items-center p-4 hover:bg-gray-100 transition-colors">
                      <span className="text-base">Events</span>
                    </Link>
                    <Link to="/offers" className="flex gap-3 items-center p-4 hover:bg-gray-100 transition-colors">
                      <span className="text-base">Offers</span>
                    </Link>
                    {user && (
                      <Link to="/dashboard" className="flex gap-3 items-center p-4 hover:bg-gray-100 transition-colors">
                        <span className="text-base">Dashboard</span>
                      </Link>
                    )}
                    {isAdmin && (
                      <Link to="/admin" className="flex gap-3 items-center p-4 hover:bg-gray-100 transition-colors">
                        <span className="text-base">Admin</span>
                      </Link>
                    )}
                    {user && (
                      <>
                        <Link to="/profile" className="flex gap-3 items-center p-4 hover:bg-gray-100 transition-colors">
                          <span className="text-base">Profile</span>
                        </Link>
                        <Link to="/settings" className="flex gap-3 items-center p-4 hover:bg-gray-100 transition-colors">
                          <span className="text-base">Settings</span>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
                {user ? (
                  <div className="p-4 border-t">
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar className="h-10 w-10 border border-gray-200">
                        <AvatarFallback className="bg-blue-600 text-white">
                          {userInitials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{userDisplayName}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full text-base py-6 text-red-600"
                      onClick={handleSignOut}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign out
                    </Button>
                  </div>
                ) : (
                  <div className="p-4 border-t flex flex-col gap-3">
                    <Link to="/login" className="w-full">
                      <Button variant="outline" className="w-full text-base py-6">
                        Log in
                      </Button>
                    </Link>
                    <Link to="/signup" className="w-full">
                      <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 text-base py-6">
                        Sign up free
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
