
import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home2";
import Deals from "./pages/Deals";
import Jobs from "./pages/Jobs";
import Networks from "./pages/Networks";
import Events from "./pages/Events";
import Offers from "./pages/Offers";
import Dashboard from "./pages/Dashboard";
import Dashboard2 from "./pages/Dashboard2";
import NotFound from "./pages/NotFound";
import DealDetails from "./pages/DealDetails";
import JobDetails from "./pages/JobDetails";
import NetworkDetails from "./pages/NetworkDetails";
import EventDetails from "./pages/EventDetails";
import OfferDetails from "./pages/OfferDetails";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Privacy from "./pages/legal/Privacy";
import Terms from "./pages/legal/Terms";
import CookiePolicy from "./pages/legal/CookiePolicy";
import GDPR from "./pages/legal/GDPR";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Careers from "./pages/Careers";
import FAQ from "./pages/FAQ";
import AIAssistant from "./pages/AIAssistant";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminUsers from "./pages/admin/Users";
import { AuthProvider } from "./contexts/AuthContext";
import AuthGuard from "./components/AuthGuard";

const queryClient = new QueryClient();

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/index" element={<Home />} />
              <Route path="/" element={<Navigate to="/index" replace />} />
              <Route path="/deals" element={<Deals />} />
              <Route path="/deals/:id" element={<DealDetails />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/jobs/:id" element={<JobDetails />} />
              <Route path="/networks" element={<Networks />} />
              <Route path="/networks/:id" element={<NetworkDetails />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/:id" element={<EventDetails />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/offers/:id" element={<OfferDetails />} />
              <Route path="/dashboard" element={
                <AuthGuard>
                  <Dashboard />
                </AuthGuard>
              } />
              <Route path="/dashboard2" element={
                <AuthGuard>
                  <Dashboard2 />
                </AuthGuard>
              } />
              <Route path="/ai-assistant" element={<AIAssistant />} />
              <Route path="/profile" element={
                <AuthGuard>
                  <Profile />
                </AuthGuard>
              } />
              <Route path="/settings" element={
                <AuthGuard>
                  <Settings />
                </AuthGuard>
              } />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/gdpr" element={<GDPR />} />
              
              {/* Admin Routes */}
              <Route path="/admin" element={
                <AuthGuard requireAdmin={true} redirectTo="/index">
                  <AdminDashboard />
                </AuthGuard>
              } />
              <Route path="/admin/users" element={
                <AuthGuard requireAdmin={true} redirectTo="/index">
                  <AdminUsers />
                </AuthGuard>
              } />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
            <Sonner />
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
