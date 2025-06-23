
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NetworkCard from '@/components/NetworkCard';
import SearchBar from '@/components/SearchBar';
import { Filter, Tag, ChevronDown, ChevronUp, SlidersHorizontal } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Networks = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const networksPerPage = 10;
  const isMobile = useIsMobile();
  const [openFilterSections, setOpenFilterSections] = useState({
    categories: true,
    minPayout: true,
    paymentFrequency: true,
    rating: true
  });

  // Toggle filter section visibility
  const toggleFilterSection = (section) => {
    setOpenFilterSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Sample data for networks
  const allNetworks = [
    {
      id: "1",
      name: 'Adsempire',
      description: 'Our CPA Network has everything you need to maximize your affiliate marketing success with high-converting offers.',
      logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: "2",
      name: 'AffiliateGrid',
      description: 'Connect with leading advertisers and optimize your affiliate marketing campaigns with our advanced tracking system.',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: "3",
      name: 'MaxBounty',
      description: 'Award-winning CPA network with high-converting offers in multiple verticals and reliable weekly payments.',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: "4",
      name: 'ClickDealer',
      description: 'Global performance marketing network with premium offers, dedicated account management, and real-time reporting.',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: "5",
      name: 'PeerFly',
      description: 'Innovative affiliate platform with thousands of exclusive offers and advanced targeting capabilities.',
      logo: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: "6",
      name: 'AdCombo',
      description: 'International CPA network specializing in nutra, e-commerce, and finance verticals with multilingual support.',
      logo: 'https://images.unsplash.com/photo-1592659762303-90081d34b277?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: "7",
      name: 'ShareASale',
      description: 'Leading affiliate marketing network with thousands of merchants and competitive commission rates.',
      logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: "8",
      name: 'CJ Affiliate',
      description: 'Commission Junction - One of the largest affiliate networks with premium brand partnerships.',
      logo: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: "9",
      name: 'Impact',
      description: 'Partnership automation platform for managing all types of partnerships at scale.',
      logo: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: "10",
      name: 'PartnerStack',
      description: 'B2B partnership platform for channel partnerships and affiliate programs.',
      logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: "11",
      name: 'TradeDoubler',
      description: 'European affiliate marketing network with strong presence in Nordics and DACH regions.',
      logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: "12",
      name: 'Awin',
      description: 'Global affiliate network with extensive advertiser portfolio and innovative technology.',
      logo: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: "13",
      name: 'Rakuten Marketing',
      description: 'Global affiliate network with advanced tracking and reporting capabilities.',
      logo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: "14",
      name: 'Avangate',
      description: 'Digital commerce solution specializing in software and SaaS products.',
      logo: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: "15",
      name: 'Admitad',
      description: 'Global partner network with a focus on performance-based marketing.',
      logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: "16",
      name: 'FlexOffers',
      description: 'Affiliate marketing network with a wide range of offers across multiple verticals.',
      logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: "17",
      name: 'Travelpayouts',
      description: 'Travel affiliate network with a focus on flights, hotels, and car rentals.',
      logo: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: "18",
      name: 'Pepperjam',
      description: 'Affiliate marketing network with a focus on retail and e-commerce.',
      logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center'
    },
  ];

  // Pagination logic
  const totalPages = Math.ceil(allNetworks.length / networksPerPage);
  const startIndex = (currentPage - 1) * networksPerPage;
  const endIndex = startIndex + networksPerPage;
  const currentNetworks = allNetworks.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to networks section
    document.getElementById('networks-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const MobileFilterItem = ({ title, isOpen, onToggle, children }) => (
    <Collapsible open={isOpen} onOpenChange={onToggle} className="border-b border-gray-200 py-3">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium">{title}</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="p-0 h-auto">
            {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="pt-2">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );

  const FilterContent = () => (
    <div className="space-y-1">
      {isMobile ? (
        // Mobile filter layout
        <div>
          <MobileFilterItem
            title="Categories"
            isOpen={openFilterSections.categories}
            onToggle={() => toggleFilterSection('categories')}
          >
            <div className="flex flex-wrap gap-2 mt-2">
              {["CPA", "Adult", "Finance", "Health", "E-commerce", "Gaming"].map((tag) => (
                <div key={tag} className="flex items-center px-3 py-1 bg-white hover:bg-gray-100 border border-gray-200 rounded-full text-sm cursor-pointer transition-colors">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </div>
              ))}
            </div>
          </MobileFilterItem>
          
          <MobileFilterItem
            title="Minimum Payout" 
            isOpen={openFilterSections.minPayout}
            onToggle={() => toggleFilterSection('minPayout')}
          >
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Any Amount" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Amount</SelectItem>
                <SelectItem value="50">$50</SelectItem>
                <SelectItem value="100">$100</SelectItem>
                <SelectItem value="250">$250</SelectItem>
                <SelectItem value="500">$500</SelectItem>
              </SelectContent>
            </Select>
          </MobileFilterItem>
          
          <MobileFilterItem
            title="Payment Frequency" 
            isOpen={openFilterSections.paymentFrequency}
            onToggle={() => toggleFilterSection('paymentFrequency')}
          >
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Any Frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Frequency</SelectItem>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="biweekly">Bi-weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </MobileFilterItem>
          
          <MobileFilterItem
            title="Rating" 
            isOpen={openFilterSections.rating}
            onToggle={() => toggleFilterSection('rating')}
          >
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Any Rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Rating</SelectItem>
                <SelectItem value="5">5.0 Stars</SelectItem>
                <SelectItem value="4.5">4.5+ Stars</SelectItem>
                <SelectItem value="4">4.0+ Stars</SelectItem>
                <SelectItem value="3.5">3.5+ Stars</SelectItem>
              </SelectContent>
            </Select>
          </MobileFilterItem>
          
          <div className="pt-4 flex justify-between">
            <Button variant="outline" size="sm">Clear All</Button>
            <Button size="sm">Apply Filters</Button>
          </div>
        </div>
      ) : (
        // Desktop filter layout
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">Categories</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="cpa">CPA</SelectItem>
                <SelectItem value="adult">Adult</SelectItem>
                <SelectItem value="ecommerce">E-commerce</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="health">Health & Beauty</SelectItem>
                <SelectItem value="mobile">Mobile</SelectItem>
                <SelectItem value="gaming">Gaming</SelectItem>
                <SelectItem value="crypto">Crypto</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">Minimum Payout</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Any Amount" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Amount</SelectItem>
                <SelectItem value="50">$50</SelectItem>
                <SelectItem value="100">$100</SelectItem>
                <SelectItem value="250">$250</SelectItem>
                <SelectItem value="500">$500</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">Payment Frequency</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Any Frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Frequency</SelectItem>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="biweekly">Bi-weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">Rating</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Any Rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Rating</SelectItem>
                <SelectItem value="5">5.0 Stars</SelectItem>
                <SelectItem value="4.5">4.5+ Stars</SelectItem>
                <SelectItem value="4">4.0+ Stars</SelectItem>
                <SelectItem value="3.5">3.5+ Stars</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">Sort By</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Newest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="rating">Best Rating</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="payout">Highest Payout</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="mt-2">Apply Filters</Button>
          <Button variant="outline">Clear All</Button>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-34 py-26 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center py-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-6">
              Partner with top affiliate networks
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with premium networks offering high-converting offers and reliable payouts. 
              Join thousands of affiliates earning with trusted partners worldwide.
            </p>
            
            <div className="flex justify-center">
              <SearchBar placeholder="Search networks, categories..." />
            </div>
          </div>
        </div>
      </section>
      
      {/* Networks Section with Filters */}
      <section id="networks-section" className="py-16" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex gap-6">
            {/* Desktop Sidebar Filters */}
            {!isMobile && (
              <div className="w-64 flex-shrink-0">
                <Card className="p-6 sticky top-4">
                  <div className="flex items-center mb-4">
                    <Filter className="h-5 w-5 mr-2 text-gray-600" />
                    <h3 className="font-semibold text-lg">Filters</h3>
                  </div>
                  <FilterContent />
                </Card>
              </div>
            )}
            
            {/* Main Content */}
            <div className="flex-1">
              {/* Mobile Filter Header */}
              {isMobile && (
                <div className="mb-4">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="w-full flex justify-between items-center">
                        <div className="flex items-center">
                          <SlidersHorizontal className="h-4 w-4 mr-2" />
                          Filters
                        </div>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="bottom" className="h-[85vh] rounded-t-xl">
                      <SheetHeader className="mb-2">
                        <SheetTitle>Filter Networks</SheetTitle>
                        <SheetDescription>
                          Find the perfect affiliate network
                        </SheetDescription>
                      </SheetHeader>
                      <div className="mt-2 overflow-y-auto">
                        <FilterContent />
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              )}
            
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  All Networks ({allNetworks.length})
                </h2>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Newest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="rating">Best Rating</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="payout">Highest Payout</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-8">
                {currentNetworks.map((network) => (
                  <NetworkCard key={network.id} {...network} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                        className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                    
                    {[...Array(totalPages)].map((_, index) => {
                      const pageNumber = index + 1;
                      return (
                        <PaginationItem key={pageNumber}>
                          <PaginationLink
                            onClick={() => handlePageChange(pageNumber)}
                            isActive={currentPage === pageNumber}
                            className="cursor-pointer"
                          >
                            {pageNumber}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    })}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                        className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Networks;
