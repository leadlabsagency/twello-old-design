import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeader from '@/components/SectionHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Briefcase, Heart, Globe, Users, Award, Coffee } from 'lucide-react';

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Affiliate Marketing Specialist",
      department: "Marketing",
      location: "New York, NY",
      type: "Full-time"
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Content Marketing Manager",
      department: "Marketing",
      location: "London, UK",
      type: "Full-time"
    },
    {
      title: "Backend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Customer Success Representative",
      department: "Customer Support",
      location: "Remote",
      type: "Part-time"
    }
  ];

  const benefits = [
    {
      title: "Remote-first Culture",
      description: "Work from anywhere in the world with our globally distributed team.",
      icon: Globe
    },
    {
      title: "Flexible Hours",
      description: "Set your own schedule and work when you're most productive.",
      icon: Clock
    },
    {
      title: "Competitive Salary",
      description: "We offer industry-competitive compensation packages.",
      icon: Award
    },
    {
      title: "Learning Budget",
      description: "Annual budget for courses, books, and conferences.",
      icon: Briefcase
    },
    {
      title: "Health Benefits",
      description: "Comprehensive health, dental, and vision coverage.",
      icon: Heart
    },
    {
      title: "Team Retreats",
      description: "Twice-yearly company retreats in exciting locations.",
      icon: Coffee
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We're always pushing boundaries and exploring new possibilities in affiliate marketing."
    },
    {
      title: "Transparency",
      description: "Open communication and honest feedback drive our culture and decision-making."
    },
    {
      title: "Growth Mindset",
      description: "We invest in our team's development and celebrate continuous learning."
    },
    {
      title: "Impact Driven",
      description: "Every role contributes meaningfully to our mission and customer success."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section - Modern design similar to index page */}
        <section className="pt-28 py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              {/* Left Content */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 border border-blue-100">
                  <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full mr-2">Hiring</span>
                  <span className="text-gray-600">Join our growing team</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
                  Build the future of affiliate marketing
                </h1>
                
                <p className="text-lg text-gray-600 max-w-lg">
                  Join a team of passionate builders creating tools that empower thousands of affiliate marketers worldwide.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8">
                    View Open Positions
                  </Button>
                  <Button size="lg" variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-50 px-8">
                    Learn About Us
                  </Button>
                </div>
                
                <div className="flex items-center gap-3 pt-6">
                  <div className="flex -space-x-2">
                    <Avatar className="border-2 border-white w-10 h-10">
                      <AvatarImage src="https://i.pravatar.cc/150?img=33" alt="Team member" />
                      <AvatarFallback>T1</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-white w-10 h-10">
                      <AvatarImage src="https://i.pravatar.cc/150?img=34" alt="Team member" />
                      <AvatarFallback>T2</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-white w-10 h-10">
                      <AvatarImage src="https://i.pravatar.cc/150?img=35" alt="Team member" />
                      <AvatarFallback>T3</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">50+</p>
                    <p className="text-sm text-gray-500">Team members across 15+ countries</p>
                  </div>
                </div>
              </div>
              
              {/* Right Content - Team image */}
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Twello team" 
                    className="rounded-xl shadow-lg w-full"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-900">Remote-first team</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">Why Work With Us</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer more than just a job—we offer a career and lifestyle
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Open Positions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">Open Positions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find your next career opportunity with us
              </p>
            </div>
            
            <Tabs defaultValue="all" className="mt-10">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-2xl grid-cols-4 bg-white p-1 shadow-sm">
                  <TabsTrigger value="all" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">All Roles</TabsTrigger>
                  <TabsTrigger value="engineering" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Engineering</TabsTrigger>
                  <TabsTrigger value="marketing" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Marketing</TabsTrigger>
                  <TabsTrigger value="design" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Design</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="animate-fade-in">
                <div className="space-y-4">
                  {jobOpenings.map((job, index) => (
                    <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                                <Briefcase className="w-3 h-3 mr-1" />
                                {job.department}
                              </Badge>
                              <Badge variant="secondary" className="bg-gray-50 text-gray-700 hover:bg-gray-100">
                                <MapPin className="w-3 h-3 mr-1" />
                                {job.location}
                              </Badge>
                              <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100">
                                <Clock className="w-3 h-3 mr-1" />
                                {job.type}
                              </Badge>
                            </div>
                          </div>
                          <Button className="bg-black hover:bg-gray-800 text-white">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="engineering" className="animate-fade-in">
                <div className="space-y-4">
                  {jobOpenings.filter(job => job.department === "Engineering").map((job, index) => (
                    <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                                <Briefcase className="w-3 h-3 mr-1" />
                                {job.department}
                              </Badge>
                              <Badge variant="secondary" className="bg-gray-50 text-gray-700 hover:bg-gray-100">
                                <MapPin className="w-3 h-3 mr-1" />
                                {job.location}
                              </Badge>
                              <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100">
                                <Clock className="w-3 h-3 mr-1" />
                                {job.type}
                              </Badge>
                            </div>
                          </div>
                          <Button className="bg-black hover:bg-gray-800 text-white">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="marketing" className="animate-fade-in">
                <div className="space-y-4">
                  {jobOpenings.filter(job => job.department === "Marketing").map((job, index) => (
                    <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                                <Briefcase className="w-3 h-3 mr-1" />
                                {job.department}
                              </Badge>
                              <Badge variant="secondary" className="bg-gray-50 text-gray-700 hover:bg-gray-100">
                                <MapPin className="w-3 h-3 mr-1" />
                                {job.location}
                              </Badge>
                              <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100">
                                <Clock className="w-3 h-3 mr-1" />
                                {job.type}
                              </Badge>
                            </div>
                          </div>
                          <Button className="bg-black hover:bg-gray-800 text-white">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="design" className="animate-fade-in">
                <div className="space-y-4">
                  {jobOpenings.filter(job => job.department === "Design").map((job, index) => (
                    <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                                <Briefcase className="w-3 h-3 mr-1" />
                                {job.department}
                              </Badge>
                              <Badge variant="secondary" className="bg-gray-50 text-gray-700 hover:bg-gray-100">
                                <MapPin className="w-3 h-3 mr-1" />
                                {job.location}
                              </Badge>
                              <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100">
                                <Clock className="w-3 h-3 mr-1" />
                                {job.type}
                              </Badge>
                            </div>
                          </div>
                          <Button className="bg-black hover:bg-gray-800 text-white">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <div className="text-center mt-12">
                <p className="text-lg mb-4 text-gray-600">Don't see a position that fits your skills?</p>
                <Button variant="outline" size="lg" className="border-gray-300 text-gray-900 hover:bg-gray-50">
                  Submit a General Application
                </Button>
              </div>
            </Tabs>
          </div>
        </section>
        
        {/* Employee Testimonials */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">Meet the Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hear from the people who make Twello great
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Avatar className="w-16 h-16 mx-auto mb-4">
                      <AvatarImage src="https://i.pravatar.cc/150?img=33" alt="David Kim" />
                      <AvatarFallback>DK</AvatarFallback>
                    </Avatar>
                    <p className="mb-4 italic text-gray-600">
                      "Working at Twello has been the highlight of my career. The team is incredible, and we're solving real problems for affiliate marketers every day."
                    </p>
                    <h4 className="font-semibold text-gray-900">David Kim</h4>
                    <p className="text-sm text-gray-500">Lead Developer</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Avatar className="w-16 h-16 mx-auto mb-4">
                      <AvatarImage src="https://i.pravatar.cc/150?img=34" alt="Maria Garcia" />
                      <AvatarFallback>MG</AvatarFallback>
                    </Avatar>
                    <p className="mb-4 italic text-gray-600">
                      "The remote-first culture at Twello has allowed me to create the perfect work-life balance while still being part of an amazing team."
                    </p>
                    <h4 className="font-semibold text-gray-900">Maria Garcia</h4>
                    <p className="text-sm text-gray-500">Marketing Manager</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Avatar className="w-16 h-16 mx-auto mb-4">
                      <AvatarImage src="https://i.pravatar.cc/150?img=35" alt="James Wilson" />
                      <AvatarFallback>JW</AvatarFallback>
                    </Avatar>
                    <p className="mb-4 italic text-gray-600">
                      "I love the challenges we tackle at Twello. Every day I'm learning something new and helping to shape the future of affiliate marketing."
                    </p>
                    <h4 className="font-semibold text-gray-900">James Wilson</h4>
                    <p className="text-sm text-gray-500">Product Designer</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Application Process */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">Our Hiring Process</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                What to expect when you apply
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {[
                  { step: 1, title: "Application Review", description: "Our team reviews all applications and resumes within 5 business days." },
                  { step: 2, title: "Initial Interview", description: "A 30-minute video call with a team member to discuss your experience and the role." },
                  { step: 3, title: "Skills Assessment", description: "A practical assessment related to the role to showcase your skills." },
                  { step: 4, title: "Team Interview", description: "Meet with potential team members to ensure mutual fit and alignment." },
                  { step: 5, title: "Final Interview & Offer", description: "Final discussion with leadership and, if successful, a formal offer." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
