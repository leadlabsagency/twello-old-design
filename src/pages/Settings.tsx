
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Bell, Shield, Lock, Eye, EyeOff, Info } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Settings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    deals: true,
    jobs: true,
    events: false,
    marketing: false
  });

  const [privacySettings, setPrivacySettings] = useState({
    publicProfile: true,
    showEmail: false,
    activityVisible: true,
    dataCollection: true
  });

  const toggleNotification = (key: keyof typeof notificationSettings) => {
    setNotificationSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const togglePrivacy = (key: keyof typeof privacySettings) => {
    setPrivacySettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gray-50 pt-32 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>
          
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="privacy">Privacy & Security</TabsTrigger>
            </TabsList>
            
            {/* Account Settings */}
            <TabsContent value="account">
              <Card className="shadow-sm border-gray-200">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="text-gray-900">Account Settings</CardTitle>
                  <CardDescription className="text-gray-600">Manage your account details and password</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                        <Input id="email" type="email" defaultValue="alex.johnson@example.com" className="border-gray-200 focus:border-blue-500" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="username" className="text-gray-700">Username</Label>
                        <Input id="username" defaultValue="alexjohnson" className="border-gray-200 focus:border-blue-500" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t border-gray-100">
                    <h3 className="text-lg font-medium text-gray-900">Change Password</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password" className="text-gray-700">Current Password</Label>
                        <div className="relative">
                          <Input 
                            id="current-password" 
                            type={showPassword ? "text" : "password"} 
                            placeholder="••••••••"
                            className="border-gray-200 focus:border-blue-500"
                          />
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-gray-100"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password" className="text-gray-700">New Password</Label>
                        <Input 
                          id="new-password" 
                          type={showPassword ? "text" : "password"} 
                          placeholder="••••••••"
                          className="border-gray-200 focus:border-blue-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password" className="text-gray-700">Confirm New Password</Label>
                        <Input 
                          id="confirm-password" 
                          type={showPassword ? "text" : "password"} 
                          placeholder="••••••••"
                          className="border-gray-200 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t border-gray-100">
                    <h3 className="text-lg font-medium text-gray-900">Danger Zone</h3>
                    <Alert className="border-red-200 bg-red-50">
                      <Info className="h-4 w-4 text-red-600" />
                      <AlertTitle className="text-red-600">Delete Account</AlertTitle>
                      <AlertDescription className="text-red-600">
                        Once you delete your account, there is no going back. Please be certain.
                      </AlertDescription>
                    </Alert>
                    <Button variant="destructive" className="mt-2">Delete Account</Button>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-gray-100 pt-6">
                  <Button className="ml-auto bg-blue-600 hover:bg-blue-700">Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* Notification Settings */}
            <TabsContent value="notifications">
              <Card className="shadow-sm border-gray-200">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2 text-gray-900">
                    <Bell className="h-5 w-5" />
                    Notification Settings
                  </CardTitle>
                  <CardDescription className="text-gray-600">Control how and when you receive notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                      <div>
                        <h3 className="font-medium text-gray-900">Email Notifications</h3>
                        <p className="text-sm text-gray-500">Receive notifications via email</p>
                      </div>
                      <Switch 
                        checked={notificationSettings.email} 
                        onCheckedChange={() => toggleNotification('email')} 
                      />
                    </div>
                    
                    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                      <div>
                        <h3 className="font-medium text-gray-900">Deal Alerts</h3>
                        <p className="text-sm text-gray-500">Get notified about new deals and discounts</p>
                      </div>
                      <Switch 
                        checked={notificationSettings.deals} 
                        onCheckedChange={() => toggleNotification('deals')} 
                      />
                    </div>
                    
                    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                      <div>
                        <h3 className="font-medium text-gray-900">Job Notifications</h3>
                        <p className="text-sm text-gray-500">Be alerted of new job postings</p>
                      </div>
                      <Switch 
                        checked={notificationSettings.jobs} 
                        onCheckedChange={() => toggleNotification('jobs')} 
                      />
                    </div>
                    
                    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                      <div>
                        <h3 className="font-medium text-gray-900">Event Reminders</h3>
                        <p className="text-sm text-gray-500">Receive reminders about upcoming events</p>
                      </div>
                      <Switch 
                        checked={notificationSettings.events} 
                        onCheckedChange={() => toggleNotification('events')} 
                      />
                    </div>
                    
                    <div className="flex items-center justify-between py-3">
                      <div>
                        <h3 className="font-medium text-gray-900">Marketing Communications</h3>
                        <p className="text-sm text-gray-500">Receive marketing emails and newsletters</p>
                      </div>
                      <Switch 
                        checked={notificationSettings.marketing} 
                        onCheckedChange={() => toggleNotification('marketing')} 
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-gray-100 pt-6">
                  <Button className="ml-auto bg-blue-600 hover:bg-blue-700">Save Preferences</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* Privacy Settings */}
            <TabsContent value="privacy">
              <Card className="shadow-sm border-gray-200">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2 text-gray-900">
                    <Shield className="h-5 w-5" />
                    Privacy & Security
                  </CardTitle>
                  <CardDescription className="text-gray-600">Control your privacy settings and security preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900">Privacy</h3>
                    
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div>
                        <h4 className="font-medium text-gray-900">Public Profile</h4>
                        <p className="text-sm text-gray-500">Make your profile visible to other users</p>
                      </div>
                      <Switch 
                        checked={privacySettings.publicProfile} 
                        onCheckedChange={() => togglePrivacy('publicProfile')} 
                      />
                    </div>
                    
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div>
                        <h4 className="font-medium text-gray-900">Show Email</h4>
                        <p className="text-sm text-gray-500">Display your email on your public profile</p>
                      </div>
                      <Switch 
                        checked={privacySettings.showEmail} 
                        onCheckedChange={() => togglePrivacy('showEmail')} 
                      />
                    </div>
                    
                    <div className="flex items-center justify-between py-3">
                      <div>
                        <h4 className="font-medium text-gray-900">Activity Visibility</h4>
                        <p className="text-sm text-gray-500">Allow others to see your recent activity</p>
                      </div>
                      <Switch 
                        checked={privacySettings.activityVisible} 
                        onCheckedChange={() => togglePrivacy('activityVisible')} 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t border-gray-100">
                    <h3 className="text-lg font-medium text-gray-900">Security</h3>
                    
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div>
                        <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
                        <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                      </div>
                      <Button variant="outline" size="sm" className="border-gray-200 hover:bg-gray-50">
                        <Lock className="mr-2 h-4 w-4" />
                        Enable
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div>
                        <h4 className="font-medium text-gray-900">Data Collection</h4>
                        <p className="text-sm text-gray-500">Allow us to collect analytics to improve your experience</p>
                      </div>
                      <Switch 
                        checked={privacySettings.dataCollection} 
                        onCheckedChange={() => togglePrivacy('dataCollection')} 
                      />
                    </div>
                    
                    <div className="pt-2">
                      <Button variant="outline" size="sm" className="border-gray-200 hover:bg-gray-50">
                        Download My Data
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-gray-100 pt-6">
                  <Button className="ml-auto bg-blue-600 hover:bg-blue-700">Save Settings</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
