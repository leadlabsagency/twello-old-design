
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, Mail, MapPin, Calendar, Briefcase, Edit, Check, X, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    bio: 'Digital marketing specialist with over 5 years of experience in affiliate marketing and SEO optimization. Passionate about driving conversions and building successful partnerships.',
    location: 'San Francisco, CA',
    joined: 'January 2023',
    title: 'Digital Marketing Manager',
    company: 'TechGrowth Inc.'
  });

  const [editForm, setEditForm] = useState({...userProfile});

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setEditForm({...userProfile});
    setIsEditing(false);
  };

  const handleSave = () => {
    setUserProfile({...editForm});
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Content Section */}
      <section className="flex-1 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Page Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <Star className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
                  Profile Overview
                </h1>
                <p className="text-lg text-gray-600">Manage your personal information and preferences</p>
              </div>
            </div>
          </div>
          
          {/* Profile Header Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
                <AvatarImage src="https://api.dicebear.com/7.x/personas/svg?seed=Alex" alt="Alex Johnson" />
                <AvatarFallback className="text-2xl">AJ</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div>
                    <h2 className="text-3xl font-semibold text-gray-900 mb-2">{userProfile.name}</h2>
                    <p className="text-lg text-gray-600">{userProfile.title}</p>
                  </div>
                  {!isEditing && (
                    <Button variant="outline" size="lg" onClick={handleEdit} className="border-gray-300 hover:bg-gray-50">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Profile
                    </Button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center justify-center md:justify-start text-gray-600">
                    <Mail className="h-4 w-4 mr-3 text-blue-600" />
                    {userProfile.email}
                  </div>
                  <div className="flex items-center justify-center md:justify-start text-gray-600">
                    <MapPin className="h-4 w-4 mr-3 text-blue-600" />
                    {userProfile.location}
                  </div>
                  <div className="flex items-center justify-center md:justify-start text-gray-600">
                    <Calendar className="h-4 w-4 mr-3 text-blue-600" />
                    Joined {userProfile.joined}
                  </div>
                  <div className="flex items-center justify-center md:justify-start text-gray-600">
                    <Briefcase className="h-4 w-4 mr-3 text-blue-600" />
                    {userProfile.company}
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">{userProfile.title}</Badge>
                  <Badge variant="outline" className="border-gray-300">{userProfile.company}</Badge>
                  <Badge variant="outline" className="border-gray-300">Affiliate Marketing</Badge>
                  <Badge variant="outline" className="border-gray-300">SEO</Badge>
                </div>
              </div>
            </div>
          </div>

          {isEditing ? (
            <Card className="shadow-sm border-0 bg-white">
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="text-2xl font-semibold text-gray-900">Edit Profile</CardTitle>
                <CardDescription className="text-gray-600">Update your personal information</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-900">Full Name</label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={editForm.name} 
                        onChange={handleChange}
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-900">Email</label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={editForm.email} 
                        onChange={handleChange}
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="location" className="text-sm font-medium text-gray-900">Location</label>
                      <Input 
                        id="location" 
                        name="location" 
                        value={editForm.location} 
                        onChange={handleChange}
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="title" className="text-sm font-medium text-gray-900">Job Title</label>
                      <Input 
                        id="title" 
                        name="title" 
                        value={editForm.title} 
                        onChange={handleChange}
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label htmlFor="company" className="text-sm font-medium text-gray-900">Company</label>
                      <Input 
                        id="company" 
                        name="company" 
                        value={editForm.company} 
                        onChange={handleChange}
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="bio" className="text-sm font-medium text-gray-900">Bio</label>
                    <Textarea 
                      id="bio" 
                      name="bio" 
                      rows={4} 
                      value={editForm.bio} 
                      onChange={handleChange}
                      className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between p-8 border-t border-gray-100">
                <Button variant="outline" onClick={handleCancel} className="border-gray-300 hover:bg-gray-50">
                  <X className="mr-2 h-4 w-4" />
                  Cancel
                </Button>
                <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Check className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Tabs defaultValue="overview" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-2xl grid-cols-3 bg-gray-50 p-1">
                  <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Overview</TabsTrigger>
                  <TabsTrigger value="activity" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Activity</TabsTrigger>
                  <TabsTrigger value="saved" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Saved Items</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="overview">
                <Card className="shadow-sm border-0 bg-white">
                  <CardHeader className="border-b border-gray-100">
                    <CardTitle className="text-xl font-semibold text-gray-900">About</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-8">{userProfile.bio}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Professional Information</h4>
                      <div className="flex items-center text-gray-700">
                        <Briefcase className="mr-3 h-5 w-5 text-blue-600" />
                        <span>{userProfile.title} at {userProfile.company}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="activity">
                <Card className="shadow-sm border-0 bg-white">
                  <CardHeader className="border-b border-gray-100">
                    <CardTitle className="text-xl font-semibold text-gray-900">Recent Activity</CardTitle>
                    <CardDescription className="text-gray-600">Your recent interactions on the platform</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {[1, 2, 3].map((_, i) => (
                        <div key={i} className="flex items-start gap-4 pb-6 border-b border-gray-100 last:border-0">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-lg">
                            {i === 0 ? "📝" : i === 1 ? "💬" : "❤️"}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900 mb-1">
                              {i === 0 ? "Applied to a job" : i === 1 ? "Commented on a deal" : "Saved an offer"}
                            </p>
                            <p className="text-gray-600 mb-2">
                              {i === 0 ? "Senior Affiliate Manager at TechBoost Inc." : 
                               i === 1 ? "50% off SocialPulse Pro Annual Plan" : 
                               "Free trial of SEO Analytics Package"}
                            </p>
                            <p className="text-sm text-gray-400">
                              {i === 0 ? "2 days ago" : i === 1 ? "Last week" : "2 weeks ago"}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="saved">
                <Card className="shadow-sm border-0 bg-white">
                  <CardHeader className="border-b border-gray-100">
                    <CardTitle className="text-xl font-semibold text-gray-900">Saved Items</CardTitle>
                    <CardDescription className="text-gray-600">Deals, jobs, and offers you've saved</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star className="h-8 w-8 text-gray-400" />
                      </div>
                      <p className="text-gray-500 text-lg">You haven't saved any items yet</p>
                      <p className="text-gray-400 text-sm mt-2">Start exploring to save your favorite deals and opportunities</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Profile;
