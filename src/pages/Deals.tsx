
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DealCard from '@/components/DealCard';
import SectionHeader from '@/components/SectionHeader';
import SearchBar from '@/components/SearchBar';
import { Filter, Tag, Star, TrendingUp, SlidersHorizontal, ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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
import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const Deals = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dealsPerPage = 6;
  const isMobile = useIsMobile();
  const [openFilterSections, setOpenFilterSections] = useState({
    categories: true,
    priceRange: true,
    dealType: true,
    rating: true,
  });

  // Toggle filter section visibility
  const toggleFilterSection = (section: keyof typeof openFilterSections) => {
    setOpenFilterSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Sample data for deals - expanded for pagination
  const allDeals = [
    {
      id: "1",
      title: 'Cloud Storage 2TB',
      category: 'Cloud Services',
      description: 'Unlimited storage for your data.',
      tags: ['Cloud Service'],
    },
    {
      id: "2",
      title: 'Email Automation Pro',
      category: 'Marketing',
      description: 'Automate campaigns effortlessly.',
      tags: ['Marketing'],
    },
    {
      id: "3",
      title: 'Pro SEO Tool',
      category: 'SEO',
      description: 'SEO tool for agencies.',
      tags: ['SEO'],
    },
    {
      id: "4",
      title: 'Smartproxy - Residential Proxies',
      category: 'Development',
      description: 'Get IPs with IP quality, range of free trials, and 24/7 tech support with your subscription.',
      tags: ['Proxy', 'Development'],
    },
    {
      id: "5",
      title: 'Analytics Dashboard Pro',
      category: 'Analytics',
      description: 'Track and visualize your marketing performance with advanced dashboards.',
      tags: ['Analytics'],
    },
    {
      id: "6",
      title: 'Social Media Management Suite',
      category: 'Social Media',
      description: 'All-in-one platform to schedule, post, and monitor your social media presence.',
      tags: ['Social Media'],
    },
    {
      id: "7",
      title: 'CRM Software Pro',
      category: 'Business',
      description: 'Manage customer relationships and sales pipelines effectively.',
      tags: ['CRM', 'Business'],
    },
    {
      id: "8",
      title: 'Video Editing Suite',
      category: 'Creative',
      description: 'Professional video editing tools for content creators.',
      tags: ['Video', 'Creative'],
    },
    {
      id: "9",
      title: 'Project Management Tool',
      category: 'Productivity',
      description: 'Collaborate and manage projects with advanced planning features.',
      tags: ['Project Management'],
    },
    {
      id: "10",
      title: 'Email Marketing Platform',
      category: 'Marketing',
      description: 'Create and send professional email campaigns with automation.',
      tags: ['Email', 'Marketing'],
    },
    {
      id: "11",
      title: 'Web Hosting Premium',
      category: 'Hosting',
      description: 'Fast and reliable web hosting with 99.9% uptime guarantee.',
      tags: ['Hosting', 'Web'],
    },
    {
      id: "12",
      title: 'Design Software Pro',
      category: 'Design',
      description: 'Professional design tools for graphics and user interfaces.',
      tags: ['Design', 'Graphics'],
    },
  ];

  // Pagination logic
  const totalPages = Math.ceil(allDeals.length / dealsPerPage);
  const startIndex = (currentPage - 1) * dealsPerPage;
  const endIndex = startIndex + dealsPerPage;
  const currentDeals = allDeals.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to deals section
    document.getElementById('deals-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const MobileFilterItem = ({ title, isOpen, onToggle, children }: {
    title: string;
    isOpen: boolean;
    onToggle: () => void;
    children: React.ReactNode;
  }) => (
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
            <div className="space-y-2">
              {["Marketing", "SEO", "Development", "Analytics", "Social Media", "Cloud Services"].map((category) => (
                <label key={category} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-sm">{category}</span>
                </label>
              ))}
            </div>
          </MobileFilterItem>
          
          <MobileFilterItem
            title="Price Range"
            isOpen={openFilterSections.priceRange}
            onToggle={() => toggleFilterSection('priceRange')}
          >
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Any Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Price</SelectItem>
                <SelectItem value="under50">Under $50</SelectItem>
                <SelectItem value="50to100">$50 - $100</SelectItem>
                <SelectItem value="100to200">$100 - $200</SelectItem>
                <SelectItem value="over200">Over $200</SelectItem>
              </SelectContent>
            </Select>
          </MobileFilterItem>
          
          <MobileFilterItem
            title="Deal Type"
            isOpen={openFilterSections.dealType}
            onToggle={() => toggleFilterSection('dealType')}
          >
            <div className="space-y-2">
              {["Lifetime Deal", "Subscription", "Free Trial", "Discount"].map((type) => (
                <label key={type} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-sm">{type}</span>
                </label>
              ))}
            </div>
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
                <SelectItem value="5star">5.0 Stars</SelectItem>
                <SelectItem value="4.5star">4.5+ Stars</SelectItem>
                <SelectItem value="4star">4.0+ Stars</SelectItem>
                <SelectItem value="3.5star">3.5+ Stars</SelectItem>
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
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Categories</h4>
            <div className="space-y-2">
              {["Marketing", "SEO", "Development", "Analytics", "Social Media", "Cloud Services"].map((category) => (
                <label key={category} className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-gray-700">{category}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Price Range</h4>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Any Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Price</SelectItem>
                <SelectItem value="under50">Under $50</SelectItem>
                <SelectItem value="50to100">$50 - $100</SelectItem>
                <SelectItem value="100to200">$100 - $200</SelectItem>
                <SelectItem value="over200">Over $200</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Deal Type</h4>
            <div className="space-y-2">
              {["Lifetime Deal", "Subscription", "Free Trial", "Discount"].map((type) => (
                <label key={type} className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Rating</h4>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Any Rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Rating</SelectItem>
                <SelectItem value="5star">5.0 Stars</SelectItem>
                <SelectItem value="4.5star">4.5+ Stars</SelectItem>
                <SelectItem value="4star">4.0+ Stars</SelectItem>
                <SelectItem value="3.5star">3.5+ Stars</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="pt-2 space-y-2">
            <Button className="w-full" size="sm">Apply Filters</Button>
            <Button variant="outline" className="w-full" size="sm">Clear All</Button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Header Section - Updated padding to ensure content is visible */}
      <section className="pt-32 py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center py-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-6">
              Smart software savings for affiliate marketers
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover verified discounts on 500+ affiliate tools. Our community has saved over $4M this year. 
              No fluff, just deals that actually work for performance marketers.
            </p>
            
            <div className="flex justify-center">
              <SearchBar placeholder="Search software, categories..." />
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Section with Sidebar Filter */}
      <section id="deals-section" className="py-16" style={{backgroundColor: '#F9FAFB'}}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex gap-6">
            {/* Desktop Sidebar Filters */}
            {!isMobile && (
              <div className="w-64 flex-shrink-0">
                <Card className="p-6 sticky top-4 shadow-sm">
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
                        <SheetTitle>Filter Deals</SheetTitle>
                        <SheetDescription>
                          Find the perfect deals for you
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
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">All Deals</h2>
                    <p className="text-gray-600">Browse our curated collection of deals ({allDeals.length} total)</p>
                  </div>
                </div>
                
                {/* Sort dropdown */}
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort By: Newest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="rating">Best Rating</SelectItem>
                    <SelectItem value="discount">Best Discount</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-8">
                {currentDeals.map((deal) => (
                  <DealCard key={deal.id} {...deal} />
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

export default Deals;
