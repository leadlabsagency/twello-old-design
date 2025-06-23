
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

const Dashboard = () => {
  // Sample data for stats
  const stats = [
    { title: 'Saved Deals', value: 12, icon: Heart, color: 'bg-blue-500' },
    { title: 'Saved Jobs', value: 5, icon: TrendingUp, color: 'bg-green-500' },
    { title: 'Saved Offers', value: 9, icon: CircleCheck, color: 'bg-purple-500' },
    { title: 'Upcoming Events', value: 3, icon: CalendarDays, color: 'bg-indigo-500' }
  ];

  // Sample data for offers table
  const offers = [
    { name: 'Credit Card Signup', category: 'Finance', type: 'CPA', payout: '$50', conversion: '12%' },
    { name: 'Ecom Lead Gen Offer', category: 'E-commerce', type: 'CPL', payout: '$20', conversion: '24%' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <div className="flex-1 pt-32 pb-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header Section with updated styles to match homepage */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 border border-blue-100 shadow-sm mb-3">
                <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full mr-2">Dashboard</span>
                <span className="text-gray-600">Your Activity Overview</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Affiliate Dashboard</h1>
              <p className="text-gray-600">Welcome back! Here's what's happening with your affiliate activity.</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-2">
              <Button variant="outline" className="flex items-center gap-1 border-gray-300 text-gray-700">
                <Info size={16} />
                <span>Export Report</span>
              </Button>
              <Button className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white">
                <LayoutDashboard size={16} />
                <span>Refresh Data</span>
              </Button>
            </div>
          </div>
          
          {/* Stats Cards Grid - Styled to match home page cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">{stat.title}</p>
                      <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                    </div>
                    <div className={`p-2 rounded-lg ${stat.color.replace('bg-', 'bg-') + '/10'}`}>
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
          
          {/* Saved Offers Table - Styled to match homepage aesthetic */}
          <Card className="mb-8 border border-gray-100 shadow-sm">
            <CardHeader className="bg-white border-b border-gray-100">
              <CardTitle className="text-lg font-medium text-gray-900">Saved Offers</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50 hover:bg-gray-50">
                      <TableHead className="text-gray-600">Offer Name</TableHead>
                      <TableHead className="text-gray-600">Category</TableHead>
                      <TableHead className="text-gray-600">Type</TableHead>
                      <TableHead className="text-gray-600">Payout</TableHead>
                      <TableHead className="text-gray-600">Conversion</TableHead>
                      <TableHead className="text-gray-600">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {offers.map((offer, index) => (
                      <TableRow key={index} className="hover:bg-gray-50">
                        <TableCell className="font-medium text-gray-900">{offer.name}</TableCell>
                        <TableCell>{offer.category}</TableCell>
                        <TableCell>
                          <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                            {offer.type}
                          </span>
                        </TableCell>
                        <TableCell className="font-medium text-green-600">{offer.payout}</TableCell>
                        <TableCell>{offer.conversion}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50">View</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
          
          {/* Recent Notifications - Updated to match homepage card style */}
          <Card className="mb-8 border border-gray-100 shadow-sm">
            <CardHeader className="bg-white border-b border-gray-100">
              <CardTitle className="text-lg font-medium text-gray-900">Recent Notifications</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <BellRing className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">You received an affiliate invite: "TechCPA Network"</p>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                  <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Info className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Your saved deal "Hosting Lifetime Discount" is expiring soon</p>
                    <p className="text-sm text-gray-500">Yesterday</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* My Saved Items - Updated tabs to match homepage style */}
          <Card className="mb-8 border border-gray-100 shadow-sm">
            <CardHeader className="bg-white border-b border-gray-100">
              <CardTitle className="text-lg font-medium text-gray-900">My Saved Items</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <Tabs defaultValue="deals" className="w-full">
                <TabsList className="w-full justify-start mb-6 bg-white border border-gray-100 p-1 rounded-lg">
                  <TabsTrigger value="deals" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md">Deals</TabsTrigger>
                  <TabsTrigger value="jobs" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md">Jobs</TabsTrigger>
                  <TabsTrigger value="offers" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md">Offers</TabsTrigger>
                  <TabsTrigger value="events" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md">Events</TabsTrigger>
                </TabsList>
                
                <TabsContent value="deals">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-white border border-gray-100">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold text-gray-900">Lifetime Hosting Deal</h4>
                            <p className="text-sm text-gray-500">Hosting • $50 Off</p>
                          </div>
                          <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">View</Button>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-white border border-gray-100">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold text-gray-900">Ecom Lead Gen Offer</h4>
                            <p className="text-sm text-gray-500">E-commerce • CPL</p>
                          </div>
                          <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">View</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="jobs">
                  <p className="text-center text-gray-500 py-8">No saved jobs yet.</p>
                </TabsContent>
                
                <TabsContent value="offers">
                  <p className="text-center text-gray-500 py-8">No saved offers yet.</p>
                </TabsContent>
                
                <TabsContent value="events">
                  <p className="text-center text-gray-500 py-8">No saved events yet.</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          {/* Trending and Upcoming Events - Styled to match homepage */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="border border-gray-100 shadow-sm">
              <CardHeader className="bg-white border-b border-gray-100">
                <CardTitle className="text-lg font-medium text-gray-900">Trending Offers</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <p className="font-medium text-gray-900">Credit Card Signup</p>
                    <span className="text-green-500 text-sm">+20% Click Rate</span>
                  </div>
                  <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <p className="font-medium text-gray-900">Finance Survey CPL</p>
                    <span className="text-green-500 text-sm">+12% Redemptions</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-100 shadow-sm">
              <CardHeader className="bg-white border-b border-gray-100">
                <CardTitle className="text-lg font-medium text-gray-900">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <p className="font-medium text-gray-900">Affiliate Summit East</p>
                    <span className="text-gray-500 text-sm">25th June</span>
                  </div>
                  <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <p className="font-medium text-gray-900">Lead Gen Masterclass</p>
                    <span className="text-gray-500 text-sm">10th July</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Recommended Section - Styled to match homepage cards */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-6 flex items-center text-gray-900">
              <span>Recommended For You</span>
              <ChevronRight className="h-5 w-5 text-blue-600 ml-1" />
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full">Hot</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-1 text-gray-900">High Payout Insurance CPL</h3>
                  <p className="text-gray-500 mb-4 text-sm">$80 per qualified lead</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-green-600">$80 per lead</span>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">View</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <BarChart3 className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">Featured</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-1 text-gray-900">Remote Marketing Jobs</h3>
                  <p className="text-gray-500 mb-4 text-sm">Updated Daily</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-blue-600">Updated Daily</span>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">View</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
