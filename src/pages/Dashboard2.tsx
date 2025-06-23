
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  BellRing, 
  CalendarDays, 
  ChevronRight, 
  CircleCheck, 
  CircleX, 
  DollarSign, 
  Heart, 
  Info, 
  LayoutDashboard, 
  TrendingUp 
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  ResponsiveContainer,
  Tooltip,
  Legend,
  LineChart,
  Line
} from 'recharts';

const Dashboard2 = () => {
  // Sample data for stats
  const stats = [
    { title: 'Saved Deals', value: 12, icon: Heart, color: 'bg-blue-500' },
    { title: 'Saved Offers', value: 9, icon: CircleCheck, color: 'bg-purple-500' },
    { title: 'Saved Jobs', value: 5, icon: TrendingUp, color: 'bg-green-500' },
    { title: 'Upcoming Events', value: 3, icon: CalendarDays, color: 'bg-indigo-500' }
  ];

  // Sample data for offers
  const offers = [
    { name: 'Credit Card Signup', category: 'Finance', type: 'CPA', payout: '$50', conversion: '12%' },
    { name: 'Ecom Lead Gen Offer', category: 'E-commerce', type: 'CPL', payout: '$20', conversion: '24%' },
    { name: 'Health Newsletter', category: 'Health', type: 'CPL', payout: '$15', conversion: '18%' },
    { name: 'Travel Insurance', category: 'Travel', type: 'CPS', payout: '$35', conversion: '8%' }
  ];

  // Sample data for chart
  const chartData = [
    { name: 'Jan', deals: 4, offers: 8, jobs: 2 },
    { name: 'Feb', deals: 7, offers: 5, jobs: 3 },
    { name: 'Mar', deals: 9, offers: 12, jobs: 4 },
    { name: 'Apr', deals: 6, offers: 10, jobs: 6 },
    { name: 'May', deals: 12, offers: 9, jobs: 5 },
    { name: 'Jun', deals: 8, offers: 11, jobs: 7 },
  ];

  // Sample data for performance chart
  const performanceData = [
    { name: 'Mon', clicks: 120, conversions: 12 },
    { name: 'Tue', clicks: 145, conversions: 15 },
    { name: 'Wed', clicks: 132, conversions: 14 },
    { name: 'Thu', clicks: 165, conversions: 16 },
    { name: 'Fri', clicks: 172, conversions: 18 },
    { name: 'Sat', clicks: 110, conversions: 10 },
    { name: 'Sun', clicks: 95, conversions: 9 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-1 py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
            <div>
              <h1 className="text-3xl font-bold gradient-text mb-2">Dashboard 2.0</h1>
              <p className="text-gray-500">Welcome back! Here's what's happening with your affiliate activity.</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-2">
              <Button variant="outline" className="flex items-center gap-1">
                <Info size={16} />
                <span>Reports</span>
              </Button>
              <Button className="flex items-center gap-1 bg-gradient-to-r from-twello-blue to-twello-purple text-white">
                <LayoutDashboard size={16} />
                <span>Customize</span>
              </Button>
            </div>
          </div>
          
          {/* Stats Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className={`h-1 ${stat.color}`} />
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">{stat.title}</p>
                      <h3 className="text-3xl font-bold">{stat.value}</h3>
                    </div>
                    <div className={`p-2 rounded-full ${stat.color} bg-opacity-10`}>
                      <stat.icon className={`h-6 w-6 ${stat.color.replace('bg-', 'text-')}`} />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm">
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-green-500 font-medium">12% increase</span>
                    <span className="text-gray-400 ml-1">from last week</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-medium">Activity Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer className="h-80" config={{}}>
                  <BarChart data={chartData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="deals" fill="#4169E1" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="offers" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="jobs" fill="#10B981" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-medium">Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer className="h-80" config={{}}>
                  <LineChart data={performanceData}>
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="clicks" stroke="#4169E1" strokeWidth={2} />
                    <Line yAxisId="right" type="monotone" dataKey="conversions" stroke="#8B5CF6" strokeWidth={2} />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
          
          {/* Tabs Section */}
          <div className="grid grid-cols-1 gap-6 mb-8">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-medium">Your Affiliate Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="offers" className="w-full">
                  <TabsList className="w-full justify-start mb-6 bg-gray-100">
                    <TabsTrigger value="offers">Active Offers</TabsTrigger>
                    <TabsTrigger value="deals">Recent Deals</TabsTrigger>
                    <TabsTrigger value="notifications">Notifications</TabsTrigger>
                    <TabsTrigger value="events">Upcoming Events</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="offers">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Offer Name</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Payout</TableHead>
                            <TableHead>Conversion</TableHead>
                            <TableHead>Action</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {offers.map((offer, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium">{offer.name}</TableCell>
                              <TableCell>{offer.category}</TableCell>
                              <TableCell>
                                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                                  {offer.type}
                                </span>
                              </TableCell>
                              <TableCell className="font-medium text-green-600">{offer.payout}</TableCell>
                              <TableCell>{offer.conversion}</TableCell>
                              <TableCell>
                                <Button variant="ghost" size="sm" className="text-blue-500">View</Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="deals">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[1, 2, 3, 4].map((item) => (
                        <Card key={item} className="bg-white border">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-center">
                              <div>
                                <h4 className="font-medium">Summer Hosting Deal {item}</h4>
                                <p className="text-sm text-gray-500">Hosting • $50 Off</p>
                              </div>
                              <Button variant="outline" size="sm" className="text-twello-blue">View</Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="notifications">
                    <div className="space-y-4">
                      <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                        <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <BellRing className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">New offer available: "Premium Finance Lead Gen"</p>
                          <p className="text-sm text-gray-500">1 hour ago</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-4 bg-green-50 rounded-lg">
                        <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                          <DollarSign className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">Commission payment of $250 received</p>
                          <p className="text-sm text-gray-500">Yesterday</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                        <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                          <Info className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-medium">Your saved deal "Hosting Lifetime Discount" is expiring soon</p>
                          <p className="text-sm text-gray-500">2 days ago</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="events">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        {title: "Affiliate Summit East", date: "June 25, 2025", location: "New York"},
                        {title: "Lead Gen Masterclass", date: "July 10, 2025", location: "Online"},
                        {title: "Affiliate World Europe", date: "July 18, 2025", location: "Barcelona"},
                        {title: "Digital Marketing Conference", date: "August 5, 2025", location: "London"}
                      ].map((event, i) => (
                        <Card key={i} className="bg-white border">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium">{event.title}</h4>
                                <p className="text-sm text-gray-500">{event.date} • {event.location}</p>
                              </div>
                              <Button variant="outline" size="sm" className="text-twello-blue">RSVP</Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          
          {/* Recommended Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <span className="gradient-text">Recommended For You</span>
              <ChevronRight className="h-5 w-5 text-twello-blue ml-1" />
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-blue-500" />
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Hot</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">High Payout Insurance CPL</h3>
                  <p className="text-gray-500 mb-4 text-sm">$80 per qualified lead, 24hr approval</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-green-600">$80 per lead</span>
                    <Button size="sm">View</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <BarChart3 className="h-6 w-6 text-purple-500" />
                    </div>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Featured</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Remote Marketing Jobs</h3>
                  <p className="text-gray-500 mb-4 text-sm">Top companies hiring now for remote positions</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-blue-600">Updated Daily</span>
                    <Button size="sm">View</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <CalendarDays className="h-6 w-6 text-green-500" />
                    </div>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">New</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Affiliate Summit 2025</h3>
                  <p className="text-gray-500 mb-4 text-sm">Network with top industry leaders and affiliates</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">June 25-27, 2025</span>
                    <Button size="sm">Register</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="mt-8">
            <Card className="border-0 bg-gradient-to-r from-twello-blue/10 to-twello-purple/10">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="mb-4 md:mb-0">
                    <h3 className="font-bold text-lg mb-1">Ready to boost your earnings?</h3>
                    <p className="text-gray-600">Discover our top performing offers with highest conversion rates</p>
                  </div>
                  <div className="flex space-x-3">
                    <Button variant="outline" className="border-twello-blue text-twello-blue">
                      <Info className="h-4 w-4 mr-1" />
                      Learn More
                    </Button>
                    <Button className="bg-gradient-to-r from-twello-blue to-twello-purple">
                      Explore Offers
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard2;
