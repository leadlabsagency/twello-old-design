
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import SearchBar from '@/components/SearchBar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Briefcase, Calendar, Globe, Package2, Zap } from 'lucide-react';
import CategoryCard from '@/components/CategoryCard';
import TestimonialCard from '@/components/TestimonialCard';
import BrandsMarquee from '@/components/BrandsMarquee';

const Home = () => {
  const [activeTab, setActiveTab] = useState('deals');
  
  const categories = [
    { icon: Zap, name: 'Marketing', count: 128, color: 'bg-pink-100' },
    { icon: Globe, name: 'SEO', count: 84, color: 'bg-blue-100' },
    { icon: Package2, name: 'Ecommerce', count: 62, color: 'bg-green-100' },
    { icon: Briefcase, name: 'Analytics', count: 49, color: 'bg-purple-100' },
    { icon: Calendar, name: 'Social Media', count: 37, color: 'bg-amber-100' },
  ];
  
  const testimonials = [
    {
      content: "Twello has transformed how I discover affiliate tools. The verified discounts have saved my agency over $3,000 this year alone.",
      author: "Alexandra Smith",
      position: "Founder, Digital Edge Marketing",
      avatar: "/placeholder.svg"
    },
    {
      content: "As someone new to affiliate marketing, Twello has been an invaluable resource. The community is supportive and the tool discounts are incredible.",
      author: "Marcus Johnson",
      position: "Affiliate Marketer",
      avatar: "/placeholder.svg"
    },
    {
      content: "I've tried many platforms, but Twello stands out with its curated deals and genuine reviews. It's now my go-to for all affiliate tools.",
      author: "Priya Patel",
      position: "CEO, AffiliateBoost",
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section with Carousel */}
      <section className="py-12 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                Discover the <span className="gradient-text">best tools</span> for affiliate success
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join 32,000+ affiliates saving money on premium software with verified discounts
              </p>
              
              {/* Search Bar */}
              <div className="mb-8">
                <SearchBar />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8">Browse Deals</Button>
                <Button size="lg" variant="outline" className="px-8">Join Community</Button>
              </div>
            </div>
            
            <div className="relative">
              <Carousel className="w-full max-w-md mx-auto">
                <CarouselContent>
                  {[1, 2, 3].map((item) => (
                    <CarouselItem key={item}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <div className="text-center">
                              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Zap className="h-8 w-8 text-primary" />
                              </div>
                              <h3 className="text-2xl font-semibold mb-2">Save up to 75%</h3>
                              <p className="text-gray-500">On premium marketing tools</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="md:-left-12" />
                <CarouselNext className="md:-right-12" />
              </Carousel>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full opacity-70 blur-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-100 rounded-full opacity-70 blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeader
            title="Browse Categories"
            subtitle="Find the perfect tools for your affiliate business"
            coloredTitle
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
            {categories.map((category, index) => (
              <CategoryCard 
                key={index}
                icon={category.icon}
                name={category.name}
                count={category.count}
                color={category.color}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Tabbed Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeader
            title="Explore the Ecosystem"
            subtitle="Everything you need for affiliate success in one place"
            coloredTitle
          />
          
          <Tabs defaultValue="deals" className="mt-10">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-2xl grid-cols-5">
                <TabsTrigger value="deals">Deals</TabsTrigger>
                <TabsTrigger value="jobs">Jobs</TabsTrigger>
                <TabsTrigger value="networks">Networks</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="offers">Offers</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="deals" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <Card key={item} className="overflow-hidden card-hover">
                    <CardContent className="p-0">
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Package2 className="h-6 w-6 text-blue-600" />
                          </div>
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">75% Off</span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Email Marketing Pro</h3>
                        <p className="text-gray-500 text-sm mb-4">Powerful email automation platform for affiliate marketers</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">From $19/mo</span>
                          <Button size="sm" variant="outline">View Deal</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Link to="/deals">
                  <Button variant="outline" size="lg" className="gap-2">
                    View All Deals
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Button>
                </Link>
              </div>
            </TabsContent>
            
            <TabsContent value="jobs" className="animate-fade-in">
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-4">Browse Available Jobs</h3>
                <p className="text-gray-500 mb-6">Find your next opportunity in the affiliate marketing space</p>
                <Link to="/jobs">
                  <Button>Explore Jobs</Button>
                </Link>
              </div>
            </TabsContent>
            
            <TabsContent value="networks" className="animate-fade-in">
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-4">Connect with Networks</h3>
                <p className="text-gray-500 mb-6">Discover top affiliate networks to boost your earnings</p>
                <Link to="/networks">
                  <Button>View Networks</Button>
                </Link>
              </div>
            </TabsContent>
            
            <TabsContent value="events" className="animate-fade-in">
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-4">Upcoming Events</h3>
                <p className="text-gray-500 mb-6">Stay updated with industry conferences and meetups</p>
                <Link to="/events">
                  <Button>See Events</Button>
                </Link>
              </div>
            </TabsContent>
            
            <TabsContent value="offers" className="animate-fade-in">
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-4">Hot Affiliate Offers</h3>
                <p className="text-gray-500 mb-6">Browse trending offers with high conversion rates</p>
                <Link to="/offers">
                  <Button>View Offers</Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeader
            title="What Our Community Says"
            subtitle="Join thousands of satisfied affiliates on Twello"
            coloredTitle
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                position={testimonial.position}
                avatar={testimonial.avatar}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Brands Marquee */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-center text-gray-500 text-sm font-medium uppercase mb-8">Trusted by leading brands</p>
          <BrandsMarquee />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to boost your affiliate earnings?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join Twello today and get access to exclusive deals, offers, and a supportive community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Sign Up Free
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
