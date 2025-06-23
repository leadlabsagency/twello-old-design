
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Tag, Share2, Heart, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeader from '@/components/SectionHeader';

const DealDetails = () => {
  const { id } = useParams();
  const [deal, setDeal] = useState<any>(null);
  
  // Sample data - in a real app, you'd fetch this based on the id
  useEffect(() => {
    // Simulate API fetch
    const dealData = {
      id: id,
      title: 'Cloud Storage 2TB',
      category: 'Cloud Services',
      description: 'Unlimited storage for your data with advanced security features and seamless integration with all your devices. Our cloud storage solution offers real-time syncing, file versioning, and collaborative features to enhance your productivity.',
      fullDescription: `
        <p>Get the storage space you need with our premium cloud solution. Features include:</p>
        <ul>
          <li>2TB of secure cloud storage</li>
          <li>End-to-end encryption</li>
          <li>Automatic file syncing across all devices</li>
          <li>File versioning and recovery</li>
          <li>Seamless integration with productivity tools</li>
          <li>24/7 customer support</li>
        </ul>
        <p>Perfect for businesses and individuals who need reliable storage solutions.</p>
      `,
      normalPrice: '$9.99/month',
      dealPrice: '$4.99/month',
      savings: '50%',
      link: 'https://example.com/cloud-deal',
      expiryDate: '2025-06-30',
      tags: ['Cloud Service', 'Storage', 'Business'],
      rating: 4.8,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    };
    setDeal(dealData);
  }, [id]);

  if (!deal) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-xl">Loading deal details...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link to="/deals" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-4 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Deals
          </Link>
          
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-4">
              {deal.title}
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              {deal.description}
            </p>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="flex-1 py-6" style={{backgroundColor: '#F9FAFB'}}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <Star className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Deal Details
                </h2>
                <p className="text-gray-600">Complete offer information</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden mb-8 shadow-lg">
                {/* Deal Header */}
                <div className="h-64 bg-gray-100 relative">
                  {deal.image ? (
                    <img 
                      src={deal.image} 
                      alt={deal.title} 
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center">
                      <Tag size={64} className="text-gray-300" />
                    </div>
                  )}
                  
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button variant="outline" size="icon" className="bg-white/80 backdrop-blur-sm hover:bg-white">
                      <Heart size={18} />
                    </Button>
                    <Button variant="outline" size="icon" className="bg-white/80 backdrop-blur-sm hover:bg-white">
                      <Share2 size={18} />
                    </Button>
                  </div>
                </div>
                
                {/* Deal Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {deal.tags.map((tag: string, index: number) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-sm text-gray-500 mb-6">{deal.category}</div>
                  
                  <div className="flex items-center mb-8">
                    <div className="mr-8">
                      <div className="text-sm text-gray-500">Normal price</div>
                      <div className="text-lg line-through text-gray-400">{deal.normalPrice}</div>
                    </div>
                    <div className="mr-8">
                      <div className="text-sm text-gray-500">Deal price</div>
                      <div className="text-2xl font-bold text-green-600">{deal.dealPrice}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">You save</div>
                      <div className="text-lg font-semibold text-red-500">{deal.savings}</div>
                    </div>
                  </div>
                  
                  <div className="mb-8" dangerouslySetInnerHTML={{ __html: deal.fullDescription }}></div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex items-center mr-4">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${i < Math.floor(deal.rating) ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">{deal.rating} ({deal.reviews} reviews)</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      Expires: {deal.expiryDate}
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 border-t">
                  <Button size="lg" className="w-full md:w-auto">
                    Get This Deal
                  </Button>
                </div>
              </Card>
              
              {/* Terms and conditions */}
              <Card className="p-6 mb-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Terms & Conditions</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Deal is valid until {deal.expiryDate}</li>
                  <li>Limited to one purchase per customer</li>
                  <li>Cannot be combined with other offers</li>
                  <li>All sales are final, no refunds</li>
                  <li>Provider terms and conditions apply</li>
                </ul>
              </Card>
            </div>
            
            {/* Sidebar */}
            <div>
              {/* CTA Card */}
              <Card className="p-6 mb-8 shadow-lg">
                <h3 className="font-semibold text-xl mb-4">Ready to save?</h3>
                <p className="text-gray-600 mb-6">Get this exclusive deal before it expires on {deal.expiryDate}.</p>
                <Button className="w-full mb-4">Get This Deal</Button>
                <p className="text-xs text-center text-gray-500">
                  By clicking this button, you'll be redirected to the offer page.
                </p>
              </Card>
              
              {/* Similar Deals */}
              <Card className="p-6 shadow-lg">
                <h3 className="font-semibold text-xl mb-4">Similar Deals</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start border-b pb-4 last:border-0">
                      <div className="h-12 w-12 bg-gray-100 rounded flex-shrink-0 mr-3 flex items-center justify-center">
                        <Tag size={20} className="text-gray-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Related Deal {i}</h4>
                        <p className="text-xs text-gray-500 mb-1">Software</p>
                        <div className="flex items-center">
                          <span className="text-xs font-semibold text-green-600 mr-2">${(4.99 * i).toFixed(2)}/mo</span>
                          <span className="text-xs line-through text-gray-400">${(9.99 * i).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related deals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeader 
            title="You May Also Like" 
            subtitle="Other deals that might interest you" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-1">
                  <div className="h-32 bg-gray-100 rounded-md flex items-center justify-center mb-4">
                    <Tag size={32} className="text-gray-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-1">Related Product {i}</h3>
                    <p className="text-xs text-gray-500 mb-2">Category</p>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      Short description about this related product or service.
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-semibold text-green-600">${(4.99 * i).toFixed(2)}</span>
                        <span className="text-xs line-through text-gray-400 ml-1">${(9.99 * i).toFixed(2)}</span>
                      </div>
                      <Button variant="outline" size="sm">View</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DealDetails;
