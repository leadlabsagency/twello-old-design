
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import OfferCard from '@/components/OfferCard';
import { Filter, Star, SlidersHorizontal, ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
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

const Offers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const offersPerPage = 9;
  const isMobile = useIsMobile();
  const [openFilterSections, setOpenFilterSections] = useState({
    categories: true,
    types: true,
    networks: true,
    countries: true
  });

  // Toggle filter section visibility
  const toggleFilterSection = (section: keyof typeof openFilterSections) => {
    setOpenFilterSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Sample data for offers
  const offers = [
    {
      id: "1",
      title: 'Benaughty - SOI - CPA - Desktop',
      payout: '3.20',
      type: 'CPA',
      tags: ['adult'],
    },
    {
      id: "2",
      title: 'VPN Premium Subscription',
      payout: '4.50',
      type: 'CPA',
      tags: ['software'],
    },
    {
      id: "3",
      title: 'Crypto Trading Platform',
      payout: '85.00',
      type: 'CPA',
      tags: ['crypto', 'finance'],
    },
    {
      id: "4",
      title: 'Weight Loss Supplement',
      payout: '45.00',
      type: 'CPS',
      tags: ['health'],
    },
    {
      id: "5",
      title: 'Mobile Game Install',
      payout: '1.20',
      type: 'CPI',
      tags: ['gaming', 'mobile'],
    },
    {
      id: "6",
      title: 'Credit Card Application',
      payout: '60.00',
      type: 'CPL',
      tags: ['finance'],
    },
    {
      id: "7",
      title: 'Dating Site Registration',
      payout: '2.75',
      type: 'CPL',
      tags: ['dating'],
    },
    {
      id: "8",
      title: 'Online Education Course',
      payout: '25.00',
      type: 'CPA',
      tags: ['education'],
    },
    {
      id: "9",
      title: 'Streaming Service Trial',
      payout: '8.50',
      type: 'CPA',
      tags: ['entertainment'],
    },
    {
      id: "10",
      title: 'Forex Trading App',
      payout: '120.00',
      type: 'CPA',
      tags: ['finance', 'trading'],
    },
    {
      id: "11",
      title: 'Fitness Tracking App',
      payout: '15.00',
      type: 'CPI',
      tags: ['health', 'fitness'],
    },
    {
      id: "12",
      title: 'Language Learning Platform',
      payout: '35.00',
      type: 'CPA',
      tags: ['education'],
    },
  ];

  // Calculate pagination
  const totalPages = Math.ceil(offers.length / offersPerPage);
  const startIndex = (currentPage - 1) * offersPerPage;
  const endIndex = startIndex + offersPerPage;
  const currentOffers = offers.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
              {["Dating", "Finance", "Health", "Software", "Gaming"].map((category) => (
                <label key={category} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-sm">{category}</span>
                </label>
              ))}
            </div>
          </MobileFilterItem>
          
          <MobileFilterItem
            title="Types"
            isOpen={openFilterSections.types}
            onToggle={() => toggleFilterSection('types')}
          >
            <div className="space-y-2">
              {["CPA", "CPL", "CPS", "CPI"].map((type) => (
                <label key={type} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-sm">{type}</span>
                </label>
              ))}
            </div>
          </MobileFilterItem>
          
          <MobileFilterItem
            title="Networks"
            isOpen={openFilterSections.networks}
            onToggle={() => toggleFilterSection('networks')}
          >
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Networks" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Networks</SelectItem>
                <SelectItem value="adsempire">Adsempire</SelectItem>
                <SelectItem value="affiliategrid">AffiliateGrid</SelectItem>
                <SelectItem value="maxbounty">MaxBounty</SelectItem>
                <SelectItem value="clickdealer">ClickDealer</SelectItem>
              </SelectContent>
            </Select>
          </MobileFilterItem>
          
          <MobileFilterItem
            title="Countries"
            isOpen={openFilterSections.countries}
            onToggle={() => toggleFilterSection('countries')}
          >
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Countries" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Countries</SelectItem>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
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
              {["Dating", "Finance", "Health", "Software", "Gaming"].map((category) => (
                <label key={category} className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-gray-700">{category}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Types</h4>
            <div className="space-y-2">
              {["CPA", "CPL", "CPS", "CPI"].map((type) => (
                <label key={type} className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Networks</h4>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Networks" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Networks</SelectItem>
                <SelectItem value="adsempire">Adsempire</SelectItem>
                <SelectItem value="affiliategrid">AffiliateGrid</SelectItem>
                <SelectItem value="maxbounty">MaxBounty</SelectItem>
                <SelectItem value="clickdealer">ClickDealer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Countries</h4>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Countries" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Countries</SelectItem>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
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
      
      {/* Header Section */}
      <section className="pt-32 pb-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-4">
              High-converting offers for smart affiliates
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Browse and promote verified high-performing affiliate offers from top networks. Access exclusive deals and maximize your revenue potential.
            </p>
            
            <div className="max-w-2xl mx-auto">
              <SearchBar placeholder="Search offers, networks, categories..." />
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="flex-1 py-6" style={{backgroundColor: '#F9FAFB'}}>
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
                        <SheetTitle>Filter Offers</SheetTitle>
                        <SheetDescription>
                          Find the perfect offers for you
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
                    <h2 className="text-xl font-semibold text-gray-900">
                      {offers.length} offers found
                    </h2>
                    <p className="text-gray-600">Browse all available affiliate offers</p>
                  </div>
                </div>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Most Relevant" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevant">Most Relevant</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="highToLow">Payout High to Low</SelectItem>
                    <SelectItem value="lowToHigh">Payout Low to High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
                {currentOffers.map((offer) => (
                  <OfferCard key={offer.id} {...offer} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious 
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            if (currentPage > 1) handlePageChange(currentPage - 1);
                          }}
                          className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                        />
                      </PaginationItem>
                      
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                        if (
                          page === 1 ||
                          page === totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1)
                        ) {
                          return (
                            <PaginationItem key={page}>
                              <PaginationLink
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  handlePageChange(page);
                                }}
                                isActive={currentPage === page}
                              >
                                {page}
                              </PaginationLink>
                            </PaginationItem>
                          );
                        } else if (
                          page === currentPage - 2 ||
                          page === currentPage + 2
                        ) {
                          return (
                            <PaginationItem key={page}>
                              <PaginationEllipsis />
                            </PaginationItem>
                          );
                        }
                        return null;
                      })}
                      
                      <PaginationItem>
                        <PaginationNext 
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            if (currentPage < totalPages) handlePageChange(currentPage + 1);
                          }}
                          className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Offers;
