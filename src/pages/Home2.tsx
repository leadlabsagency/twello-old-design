
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Briefcase, Calendar, Check, ChevronRight, Globe, Package2, Play, Search, Zap } from 'lucide-react';
import CategoryCard from '@/components/CategoryCard';
import TestimonialCard from '@/components/TestimonialCard';
import BrandsMarquee from '@/components/BrandsMarquee';

const Home2 = () => {
  const [activeTab, setActiveTab] = useState('deals');
  
  const categories = [
    { icon: Package2, name: 'Affiliate Offers', count: 3420, color: 'bg-blue-50' },
    { icon: Globe, name: 'Networks', count: 156, color: 'bg-blue-50' },
    { icon: Zap, name: 'Tools & Software', count: 284, color: 'bg-blue-50' },
    { icon: Briefcase, name: 'Jobs', count: 129, color: 'bg-blue-50' },
    { icon: Calendar, name: 'Events', count: 57, color: 'bg-blue-50' },
  ];
  
  const testimonials = [
    {
      content: "Twello has transformed how I find affiliate offers. I've discovered three new verticals that perfectly match my audience, increasing my conversions by 40%.",
      author: "Alexandra Smith",
      position: "Media Buyer",
      avatar: "/placeholder.svg",
      verified: true
    },
    {
      content: "As someone running high-volume campaigns, Twello saves me hours of research each week. The network verification feature alone has helped me avoid several questionable programs.",
      author: "Marcus Johnson",
      position: "Performance Marketing Lead",
      avatar: "/placeholder.svg",
      verified: true
    },
    {
      content: "The software deals section is a goldmine. I found a tracking platform at 60% off that completely upgraded my affiliate operation. Twello pays for itself many times over.",
      author: "Priya Patel",
      position: "Solo Affiliate",
      avatar: "/placeholder.svg",
      verified: true
    }
  ];

  const features = [
    {
      icon: Search,
      title: "Advanced Offer Search",
      description: "Find and filter affiliate programs by vertical, payout type, and more to match your audience perfectly."
    },
    {
      icon: Check,
      title: "Vetted Networks",
      description: "All affiliate networks are verified for reliability, payment history, and offer quality."
    },
    {
      icon: Zap,
      title: "Exclusive Deals",
      description: "Access special tool discounts and software deals specifically for performance marketers."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Modern Hero Section - Added pt-28 to ensure at least 100px spacing from fixed navbar */}
      <section className="pt-28 py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Left Content */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 border border-blue-100 shadow-sm">
                <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full mr-2">New</span>
                <span className="text-gray-600">All-in-One Affiliate Search Engine</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
                Your complete affiliate marketing resource hub
              </h1>
              
              <p className="text-lg text-gray-600 max-w-lg">
                Find the best affiliate offers, networks, tools, jobs, and events—all in one place. 
                No fluff, just what actually works for performance marketers.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8">
                  Start Searching
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-50 px-8">
                  How It Works
                  <Play className="h-4 w-4 ml-2" />
                </Button>
              </div>
              
              <div className="flex items-center gap-3 pt-6">
                <div className="flex -space-x-2">
                  <Avatar className="border-2 border-white">
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback>U1</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-white">
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback>U2</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-white">
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback>U3</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">12k+</p>
                  <p className="text-sm text-gray-500">Affiliates and performance marketers</p>
                </div>
              </div>
            </div>
            
            {/* Right Content - Hero Image */}
            <div className="w-full md:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&h=600" 
                  alt="Affiliate Marketing Analytics Dashboard" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Brands */}
          <div className="mt-16 pt-8 border-t border-gray-100">
            <p className="text-center text-sm text-gray-500 mb-6">Trusted by top affiliate marketers and networks</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
              <img src="/placeholder.svg" alt="Brand" className="h-6" />
              <img src="/placeholder.svg" alt="Brand" className="h-6" />
              <img src="/placeholder.svg" alt="Brand" className="h-6" />
              <img src="/placeholder.svg" alt="Brand" className="h-6" />
              <img src="/placeholder.svg" alt="Brand" className="h-6" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">Everything You Need</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">One platform for all your affiliate marketing requirements</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
            {categories.map((category, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center bg-blue-50">
                    <category.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} listings</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Tabbed Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">Explore What's Available</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Discover the best opportunities in affiliate marketing, all in one place</p>
          </div>
          
          <Tabs defaultValue="deals" className="mt-10">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-2xl grid-cols-5 bg-white p-1 shadow-sm">
                <TabsTrigger value="deals" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Offers</TabsTrigger>
                <TabsTrigger value="jobs" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Jobs</TabsTrigger>
                <TabsTrigger value="networks" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Networks</TabsTrigger>
                <TabsTrigger value="events" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Events</TabsTrigger>
                <TabsTrigger value="offers" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Tools</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="deals" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <Card key={item} className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                            <Package2 className="h-6 w-6 text-blue-600" />
                          </div>
                          <span className="bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded">Exclusive</span>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">TravelPlus Rewards</h3>
                        <p className="text-gray-600 text-sm mb-4">Hotel & flight booking program with high conversions</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-blue-700">$45 CPA + 10% Revenue Share</span>
                          <Button size="sm" variant="outline" className="text-sm">View Details</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Link to="/deals">
                  <Button variant="outline" className="group">
                    View All Offers
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </Link>
              </div>
            </TabsContent>
            
            {/* Other tab contents */}
            <TabsContent value="jobs" className="animate-fade-in">
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Affiliate Marketing Jobs</h3>
                <p className="text-gray-600 mb-6">Find opportunities with top networks and affiliate teams</p>
                <Link to="/jobs">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Browse Jobs</Button>
                </Link>
              </div>
            </TabsContent>
            
            <TabsContent value="networks" className="animate-fade-in">
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Verified Affiliate Networks</h3>
                <p className="text-gray-600 mb-6">Connect with trusted networks that pay on time</p>
                <Link to="/networks">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Explore Networks</Button>
                </Link>
              </div>
            </TabsContent>
            
            <TabsContent value="events" className="animate-fade-in">
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Industry Events</h3>
                <p className="text-gray-600 mb-6">Stay updated on affiliate conferences, meetups and webinars</p>
                <Link to="/events">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">View Calendar</Button>
                </Link>
              </div>
            </TabsContent>
            
            <TabsContent value="offers" className="animate-fade-in">
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Affiliate Tools & Software</h3>
                <p className="text-gray-600 mb-6">Exclusive deals on essential marketing tools</p>
                <Link to="/offers">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Browse Tools</Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">Why use <span className="text-blue-600">Twello</span>?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join 12,000+ performance marketers who use Twello to find what actually works
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-10">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">Start Using Twello Free</Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section with verified badges */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">From Actual Affiliates</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Hear from people who actually run traffic and use Twello daily</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                position={testimonial.position}
                avatar={testimonial.avatar}
                verified={testimonial.verified}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Brands Marquee */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-center text-gray-500 text-sm font-medium uppercase mb-8">Featured Networks and Advertisers</p>
          <BrandsMarquee />
        </div>
      </section>
      
      {/* CTA Section - Updated with lighter background and button hover styles */}
      <section className="py-20 bg-[#1c1c24] text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready to find better affiliate opportunities?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of performance marketers using Twello to discover what works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-200 px-8 font-medium">
              Create Free Account
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black bg-white hover:bg-transparent hover:text-white px-8">
              Browse Offers
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home2;
