import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Globe, DollarSign, Clock, AlertTriangle, Check, Copy, Shield, Tag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import SectionHeader from '@/components/SectionHeader';
import OfferCard from '@/components/OfferCard';

const OfferDetails = () => {
  const { id } = useParams();
  const [offer, setOffer] = useState<any>(null);
  
  // Sample data - in a real app, you'd fetch this based on the id
  useEffect(() => {
    // Simulate API fetch
    const offerData = {
      id: id,
      title: 'Crypto Trading Platform',
      payout: '85.00',
      type: 'CPA',
      tags: ['crypto', 'finance'],
      network: 'AffiliateGrid',
      networkLogo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      description: 'Promote this premium crypto trading platform and earn high commissions on qualified sign-ups. The platform offers advanced trading tools, multiple cryptocurrencies, and a user-friendly interface.',
      landingPages: ['English', 'Spanish', 'German', 'French'],
      targeting: {
        countries: ['United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France'],
        devices: ['Desktop', 'Mobile', 'Tablet'],
        trafficSources: ['Email', 'Native', 'Social', 'PPC', 'Display'],
        restricted: ['Incentive', 'Adult', 'Toolbar', 'Brand bidding']
      },
      requirements: 'Qualified sign-up with minimum deposit of $250',
      epc: '$1.45',
      conversion: '4.2%',
      category: 'Finance',
      expiry: 'Ongoing',
      lastUpdated: '2025-05-01',
      status: 'Active',
      highlighted: true
    };
    setOffer(offerData);
  }, [id]);

  if (!offer) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-xl">Loading offer details...</div>
        </div>
        <Footer />
      </div>
    );
  }

  // Sample similar offers data
  const similarOffers = [
    {
      id: "101",
      title: 'Similar Crypto Trading App',
      payout: '95.00',
      type: 'CPA',
      tags: ['crypto', 'finance'],
      description: 'High-converting crypto trading platform with excellent support',
      features: ['High Paying', 'SaaS', 'Premium'],
      verified: true
    },
    {
      id: "102",
      title: 'Forex Investment Platform',
      payout: '80.00',
      type: 'CPL',
      tags: ['forex', 'finance', 'trading'],
      description: 'Leading forex platform with proven conversion rates',
      features: ['Fast Approval', 'Recurring', 'Global'],
      verified: true
    },
    {
      id: "103",
      title: 'Investment Advisory App',
      payout: '75.00',
      type: 'CPA',
      tags: ['investment', 'finance', 'advisory'],
      description: 'Financial advisory platform with excellent EPC',
      features: ['Top Rated', 'Finance', 'Mobile'],
      verified: true
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 w-full">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/offers" className="flex items-center text-gray-600 hover:text-twello-blue transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Offers
          </Link>
        </div>
        
        {/* Offer Header */}
        <Card className={`border-l-4 ${offer.highlighted ? 'border-l-yellow-400' : 'border-l-green-400'} mb-8`}>
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div className="mb-4 md:mb-0">
                <div className="flex items-center mb-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${offer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'} mr-2`}>
                    {offer.status}
                  </span>
                  {offer.highlighted && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Featured
                    </span>
                  )}
                </div>
                <h1 className="text-2xl md:text-3xl font-bold mb-1">{offer.title}</h1>
                <div className="flex items-center text-gray-600">
                  <span className="text-sm">by </span>
                  <div className="ml-1 flex items-center">
                    <div className="h-5 w-5 bg-gray-100 rounded-full mr-1 flex items-center justify-center overflow-hidden">
                      {offer.networkLogo ? (
                        <img 
                          src={offer.networkLogo} 
                          alt={offer.network} 
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <Globe size={12} className="text-gray-400" />
                      )}
                    </div>
                    <span className="text-sm font-medium">{offer.network}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-end">
                <div className="text-sm text-gray-500 mb-1">Payout</div>
                <div className="text-3xl font-bold text-green-600">${offer.payout}</div>
                <div className="text-sm text-gray-500">{offer.type}</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {offer.tags.map((tag: string, index: number) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                  {tag}
                </span>
              ))}
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                {offer.category}
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-sm text-gray-500">EPC</div>
                <div className="font-semibold">{offer.epc}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-sm text-gray-500">Avg. Conversion</div>
                <div className="font-semibold">{offer.conversion}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-sm text-gray-500">Last Updated</div>
                <div className="font-semibold">{offer.lastUpdated}</div>
              </div>
            </div>
            
            <Button size="lg" className="w-full sm:w-auto">
              Promote This Offer
            </Button>
          </div>
        </Card>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Offer Description */}
            <Card className="p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Offer Description</h2>
              <p className="text-gray-700 mb-6">{offer.description}</p>
              
              <h3 className="font-semibold text-lg mb-3">Requirements</h3>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mb-6">
                <p className="text-blue-700">{offer.requirements}</p>
              </div>
              
              <h3 className="font-semibold text-lg mb-3">Available Landing Pages</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {offer.landingPages.map((language: string, index: number) => (
                  <div key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded">
                    {language}
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Targeting Information */}
            <Card className="p-6 mb-8">
              <h2 className="text-xl font-semibold mb-6">Targeting Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium mb-3">Allowed Countries</h3>
                  <div className="bg-gray-50 p-4 rounded">
                    <ul className="space-y-2">
                      {offer.targeting.countries.map((country: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <Check size={16} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                          <span>{country}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <h3 className="font-medium mt-6 mb-3">Allowed Devices</h3>
                  <div className="flex flex-wrap gap-2">
                    {offer.targeting.devices.map((device: string, index: number) => (
                      <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        {device}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Allowed Traffic Sources</h3>
                  <div className="bg-gray-50 p-4 rounded mb-6">
                    <ul className="space-y-2">
                      {offer.targeting.trafficSources.map((source: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <Check size={16} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                          <span>{source}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <h3 className="font-medium mb-3">Restricted</h3>
                  <div className="bg-red-50 p-4 rounded">
                    <ul className="space-y-2">
                      {offer.targeting.restricted.map((item: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <AlertTriangle size={16} className="mr-2 text-red-500 flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div>
            {/* Quick Actions */}
            <Card className="p-6 mb-8">
              <h3 className="font-semibold text-xl mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full">Promote This Offer</Button>
                <Button variant="outline" className="w-full">Save for Later</Button>
                <Button variant="outline" className="w-full">Contact Manager</Button>
              </div>
            </Card>
            
            {/* Network Information */}
            <Card className="p-6 mb-8">
              <h3 className="font-semibold text-xl mb-4">Network Information</h3>
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center mr-3 overflow-hidden">
                  {offer.networkLogo ? (
                    <img 
                      src={offer.networkLogo} 
                      alt={offer.network} 
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Globe size={20} className="text-gray-400" />
                  )}
                </div>
                <div>
                  <div className="font-medium">{offer.network}</div>
                  <div className="text-sm text-gray-500">Affiliate Network</div>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">
                {offer.network} is a premier affiliate network specializing in finance and crypto offers.
              </p>
              
              <Link to={`/networks/1`} className="text-twello-blue hover:underline text-sm flex items-center">
                View network details
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </Card>
            
            {/* Categories & Tags */}
            <Card className="p-6">
              <h3 className="font-semibold text-xl mb-4">Categories & Tags</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Category</h4>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    {offer.category}
                  </span>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {offer.tags.map((tag: string, index: number) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Similar Offers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeader 
            title="Similar Offers" 
            subtitle="You might also be interested in these offers" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {similarOffers.map((similarOffer) => (
              <OfferCard 
                key={similarOffer.id}
                id={similarOffer.id}
                title={similarOffer.title}
                payout={similarOffer.payout}
                type={similarOffer.type}
                tags={similarOffer.tags}
                description={similarOffer.description}
                features={similarOffer.features}
                verified={similarOffer.verified}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default OfferDetails;
