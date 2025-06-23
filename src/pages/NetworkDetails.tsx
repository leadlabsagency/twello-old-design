import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Globe, Users, Award, CheckCircle2, XCircle, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionHeader from '@/components/SectionHeader';
import OfferCard from '@/components/OfferCard';
import NetworkCard from '@/components/NetworkCard';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

// Background colors for network header (we'll pick one at random)
const headerBackgroundColors = [
  'bg-blue-600',
  'bg-purple-600',
  'bg-indigo-600', 
  'bg-teal-600',
  'bg-green-600',
  'bg-orange-600'
];

const NetworkDetails = () => {
  const { id } = useParams();
  const [network, setNetwork] = useState<any>(null);
  const [headerColor, setHeaderColor] = useState('');
  const [reviewForm, setReviewForm] = useState({
    name: '',
    email: '',
    rating: 5,
    comment: ''
  });
  const { toast } = useToast();
  
  // Create random background color on component mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * headerBackgroundColors.length);
    setHeaderColor(headerBackgroundColors[randomIndex]);
  }, []);
  
  // Sample data - in a real app, you'd fetch this based on the id
  useEffect(() => {
    // Simulate API fetch
    const networkData = {
      id: id,
      name: 'AffiliateGrid',
      tagline: 'Connect with leading advertisers and optimize your campaigns',
      description: 'AffiliateGrid is a premier affiliate network connecting publishers with high-quality advertisers across multiple verticals. With advanced tracking technology, transparent reporting, and dedicated support, we help affiliates maximize their earnings potential.',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      website: 'https://example.com',
      founded: '2015',
      headquarters: 'San Francisco, CA',
      affiliates: '5,000+',
      advertisers: '500+',
      minimumPayment: '$50',
      paymentFrequency: 'Net-15',
      paymentMethods: ['PayPal', 'Wire Transfer', 'Check', 'Payoneer'],
      verticals: ['E-commerce', 'Finance', 'Health & Beauty', 'Software', 'Education'],
      topOffers: [
        {
          title: 'Premium VPN Service',
          payout: '45.00',
          type: 'CPA',
          tags: ['software']
        },
        {
          title: 'Investment Platform',
          payout: '120.00',
          type: 'CPL',
          tags: ['finance']
        },
        {
          title: 'Beauty Subscription Box',
          payout: '35.00',
          type: 'CPA',
          tags: ['health']
        }
      ],
      pros: [
        'High-converting offers with competitive payouts',
        'Weekly payment options available',
        'Dedicated affiliate manager for each partner',
        'Advanced tracking and reporting dashboard',
        'Regular bonuses and performance incentives'
      ],
      cons: [
        'Minimum payment threshold of $50',
        'Strict compliance requirements',
        'Some offers limited by geo-targeting'
      ],
      rating: 4.8,
      reviews: 156
    };
    setNetwork(networkData);
  }, [id]);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Review submitted:', reviewForm);
    // In a real app, you would send this data to your backend
    toast({
      title: "Review Submitted",
      description: "Thank you for your review! It will be published after moderation.",
    });
    setReviewForm({
      name: '',
      email: '',
      rating: 5,
      comment: ''
    });
  };

  if (!network) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-xl">Loading network details...</div>
        </div>
        <Footer />
      </div>
    );
  }

  // Sample similar networks data
  const similarNetworks = [
    {
      id: "101",
      name: 'MaxBounty',
      description: 'Award-winning CPA network with high-converting offers in multiple verticals and reliable weekly payments.',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center',
      rating: 4.7,
      reviews: 89
    },
    {
      id: "102", 
      name: 'ClickDealer',
      description: 'Global performance marketing network with premium offers, dedicated account management, and real-time reporting.',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&crop=center',
      rating: 4.6,
      reviews: 124
    },
    {
      id: "103",
      name: 'AdCombo',
      description: 'International CPA network specializing in nutra, e-commerce, and finance verticals with multilingual support.',
      logo: 'https://images.unsplash.com/photo-1592659762303-90081d34b277?w=100&h=100&fit=crop&crop=center',
      rating: 4.5,
      reviews: 67
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 w-full">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/networks" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Networks
          </Link>
        </div>
        
        {/* Network Header */}
        <Card className="overflow-hidden mb-8">
          <div className={`h-48 relative ${headerColor}`}>
            <div className="absolute bottom-0 left-0 w-full p-6 pb-0">
              <div className="flex items-end">
                <div className="h-24 w-24 bg-white rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
                  {network.logo ? (
                    <img 
                      src={network.logo} 
                      alt={network.name} 
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <Globe size={48} className="text-gray-300" />
                  )}
                </div>
                
                <div className="ml-6 pb-4">
                  <h1 className="text-3xl font-bold text-white">{network.name}</h1>
                  <p className="text-white/80">{network.tagline}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 pt-10 flex flex-col md:flex-row justify-between items-start md:items-center bg-white">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="flex items-center mr-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < Math.floor(network.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
                <span className="ml-2 font-medium">{network.rating}</span>
              </div>
              <div className="text-gray-500 text-sm">
                {network.reviews} reviews
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Button>
                <a href={network.website} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Globe size={16} className="mr-2" />
                  Visit Website
                </a>
              </Button>
            </div>
          </div>
        </Card>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* About */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-xl">About {network.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6">{network.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500">Founded</div>
                    <div className="font-medium">{network.founded}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500">Headquarters</div>
                    <div className="font-medium">{network.headquarters}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500">Affiliates</div>
                    <div className="font-medium">{network.affiliates}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500">Advertisers</div>
                    <div className="font-medium">{network.advertisers}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Payment Info */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-xl">Payment Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-medium mb-2">Minimum Payment</h3>
                    <div className="text-lg font-semibold text-green-600">{network.minimumPayment}</div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Payment Frequency</h3>
                    <div>{network.paymentFrequency}</div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Payment Methods</h3>
                    <div className="flex flex-wrap gap-2">
                      {network.paymentMethods.map((method: string, index: number) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Verticals */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-xl">Verticals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {network.verticals.map((vertical: string, index: number) => (
                    <div key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg">
                      {vertical}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Pros and Cons */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-xl">Pros & Cons</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-medium flex items-center text-green-600 mb-4">
                      <CheckCircle2 size={18} className="mr-2" />
                      Pros
                    </h3>
                    <ul className="space-y-2">
                      {network.pros.map((pro: string, index: number) => (
                        <li key={index} className="flex">
                          <CheckCircle2 size={16} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium flex items-center text-red-600 mb-4">
                      <XCircle size={18} className="mr-2" />
                      Cons
                    </h3>
                    <ul className="space-y-2">
                      {network.cons.map((con: string, index: number) => (
                        <li key={index} className="flex">
                          <XCircle size={16} className="mr-2 text-red-500 flex-shrink-0 mt-1" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div>
            {/* Top Offers */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-xl">Popular Offers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {network.topOffers.map((offer: any, index: number) => (
                    <div key={index} className="border-b pb-4 last:border-0">
                      <h4 className="font-medium mb-1">{offer.title}</h4>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-500">{offer.type}</span>
                        <span className="font-semibold text-green-600">${offer.payout}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {offer.tags.map((tag: string, i: number) => (
                          <span key={i} className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="w-full">View Offer</Button>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Link to="/offers" className="text-blue-600 hover:underline text-sm">
                    View all offers from {network.name}
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            {/* Join Network */}
            <Card className="bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Join this Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Become a partner with {network.name} and get access to exclusive offers, competitive commissions, and dedicated support.
                </p>
                <Button className="w-full mb-4">Apply Now</Button>
                <p className="text-xs text-center text-gray-500">
                  Free to join. Approval usually takes 24-48 hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Review Section */}
        <Card className="mt-16 mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Share Your Experience</CardTitle>
            <p className="text-gray-600">Help others by sharing your experience with {network.name}</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleReviewSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <Input
                    placeholder="Your name"
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={reviewForm.email}
                    onChange={(e) => setReviewForm(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={24}
                      className={
                        reviewForm.rating >= star
                          ? "text-yellow-400 fill-yellow-400 cursor-pointer"
                          : "text-gray-300 cursor-pointer"
                      }
                      onClick={() => setReviewForm(prev => ({ ...prev, rating: star }))}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {reviewForm.rating} star{reviewForm.rating !== 1 ? 's' : ''}
                  </span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
                <Textarea
                  placeholder="Share your experience with this network..."
                  className="min-h-[120px]"
                  value={reviewForm.comment}
                  onChange={(e) => setReviewForm(prev => ({ ...prev, comment: e.target.value }))}
                  required
                />
              </div>
              
              <div className="flex justify-end">
                <Button type="submit" className="px-8">
                  Submit Review
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      
      {/* Similar Networks */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeader 
            title="Similar Networks" 
            subtitle="Other affiliate networks you might be interested in" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {similarNetworks.map((similarNetwork) => (
              <NetworkCard 
                key={similarNetwork.id}
                id={similarNetwork.id}
                name={similarNetwork.name}
                description={similarNetwork.description}
                logo={similarNetwork.logo}
                rating={similarNetwork.rating}
                reviews={similarNetwork.reviews}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default NetworkDetails;
