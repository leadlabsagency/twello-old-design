import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EventCard from '@/components/EventCard';
import SearchBar from '@/components/SearchBar';
import { Filter, SlidersHorizontal, ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { useState } from 'react';
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

const Events = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 10;
  const isMobile = useIsMobile();
  const [openFilterSections, setOpenFilterSections] = useState({
    eventType: true,
    dateRange: true,
    location: true,
    price: true
  });

  // Toggle filter section visibility
  const toggleFilterSection = (section: keyof typeof openFilterSections) => {
    setOpenFilterSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Sample data for events with images
  const allEvents = [
    {
      id: "1",
      title: 'Clickbid Meet up San Diego 2025',
      date: 'SEP 18',
      description: 'ClickBid Las Vegas 2025 is the ultimate gathering for affiliate marketers, digital advertisers, and industry professionals...',
      tag: 'affiliate conference',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=200&fit=crop',
      price: '$10.00',
      venue: 'Convention Center',
      city: 'San Diego, CA'
    },
    {
      id: "2",
      title: 'Dream World Wide in Jakarta',
      date: 'SEP 17',
      description: 'Join thousands of affiliate marketers in London for the biggest European affiliate marketing conference of the year.',
      tag: 'affiliate conference',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=200&fit=crop',
      price: 'FREE',
      venue: 'Jakarta Center',
      city: 'Jakarta, Indonesia'
    },
    {
      id: "3",
      title: 'Pesta Kembang Api Terbesar',
      date: 'SEP 16',
      description: 'Learn cutting-edge strategies for growing your digital business and maximizing ROI on your marketing campaigns.',
      tag: 'growth',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=200&fit=crop',
      price: '$12.00',
      venue: 'Sky Gardens',
      city: 'Yogyakarta, Indonesia'
    },
    {
      id: "4",
      title: 'Event Untuk Para Jomblo',
      date: 'SEP 15',
      description: 'Intensive 2-day workshop teaching advanced SEO techniques specifically for affiliate marketers.',
      tag: 'workshop',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=200&fit=crop',
      price: '$10.00',
      venue: 'Central Park',
      city: 'Yogyakarta, Indonesia'
    },
    {
      id: "5",
      title: 'Makan Bersama Di Malam Hari',
      date: 'SEP 14',
      description: 'Build valuable relationships with top CPA networks, advertisers, and fellow affiliates in this exclusive networking event.',
      tag: 'networking',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=200&fit=crop',
      price: 'FREE',
      venue: 'Food Court',
      city: 'Yogyakarta, Indonesia'
    },
    {
      id: "6",
      title: 'Konser Musik Terbesar',
      date: 'SEP 13',
      description: 'The global gathering for affiliate and performance marketing professionals with top-tier speakers and networking opportunities.',
      tag: 'affiliate conference',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=200&fit=crop',
      price: '$12.00',
      venue: 'Music Hall',
      city: 'Yogyakarta, Indonesia'
    },
    {
      id: "7",
      title: 'UI UX Design & Prototyping',
      date: 'SEP 12',
      description: 'Learn the latest UI/UX design trends and prototyping techniques.',
      tag: 'design workshop',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=200&fit=crop',
      price: '$10.00',
      venue: 'Design Studio',
      city: 'Yogyakarta, Indonesia'
    },
    {
      id: "8",
      title: 'Presiden Amerika Ke Indonesia',
      date: 'SEP 11',
      description: 'Special diplomatic event and cultural exchange program.',
      tag: 'cultural event',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=200&fit=crop',
      price: 'FREE',
      venue: 'Government Hall',
      city: 'Jakarta, Indonesia'
    },
    {
      id: "9",
      title: 'Tahap Awal Belajar UI UX',
      date: 'SEP 10',
      description: 'Beginner-friendly introduction to UI/UX design principles.',
      tag: 'beginner workshop',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=200&fit=crop',
      price: '$12.00',
      venue: 'Learning Center',
      city: 'Yogyakarta, Indonesia'
    },
    {
      id: "10",
      title: 'Digital Marketing Summit 2025',
      date: 'SEP 9',
      description: 'Annual summit for digital marketing professionals and enthusiasts.',
      tag: 'marketing',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=200&fit=crop',
      price: '$25.00',
      venue: 'Convention Center',
      city: 'Bandung, Indonesia'
    },
  ];

  // Pagination logic
  const totalPages = Math.ceil(allEvents.length / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage;
  const endIndex = startIndex + eventsPerPage;
  const currentEvents = allEvents.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById('events-section')?.scrollIntoView({ behavior: 'smooth' });
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
            title="Event Type"
            isOpen={openFilterSections.eventType}
            onToggle={() => toggleFilterSection('eventType')}
          >
            <div className="space-y-2">
              {["Conference", "Workshop", "Networking", "Webinar", "Meetup"].map((type) => (
                <label key={type} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-sm">{type}</span>
                </label>
              ))}
            </div>
          </MobileFilterItem>
          
          <MobileFilterItem
            title="Date Range" 
            isOpen={openFilterSections.dateRange}
            onToggle={() => toggleFilterSection('dateRange')}
          >
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Any Date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Date</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="tomorrow">Tomorrow</SelectItem>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
              </SelectContent>
            </Select>
          </MobileFilterItem>
          
          <MobileFilterItem
            title="Location" 
            isOpen={openFilterSections.location}
            onToggle={() => toggleFilterSection('location')}
          >
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Any Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Location</SelectItem>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="san-diego">San Diego</SelectItem>
                <SelectItem value="jakarta">Jakarta</SelectItem>
                <SelectItem value="yogyakarta">Yogyakarta</SelectItem>
              </SelectContent>
            </Select>
          </MobileFilterItem>
          
          <MobileFilterItem
            title="Price" 
            isOpen={openFilterSections.price}
            onToggle={() => toggleFilterSection('price')}
          >
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="radio" name="price" className="border-gray-300" />
                <span className="text-sm">Any Price</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="price" className="border-gray-300" />
                <span className="text-sm">Free</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="price" className="border-gray-300" />
                <span className="text-sm">Paid</span>
              </label>
            </div>
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
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Event Type</h4>
            <div className="space-y-2">
              {["Conference", "Workshop", "Networking", "Webinar", "Meetup"].map((type) => (
                <label key={type} className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Date Range</h4>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Any Date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Date</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="tomorrow">Tomorrow</SelectItem>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Location</h4>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Any Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Location</SelectItem>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="san-diego">San Diego</SelectItem>
                <SelectItem value="jakarta">Jakarta</SelectItem>
                <SelectItem value="yogyakarta">Yogyakarta</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Price</h4>
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm">
                <input type="radio" name="price" className="border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-gray-700">Any Price</span>
              </label>
              <label className="flex items-center space-x-2 text-sm">
                <input type="radio" name="price" className="border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-gray-700">Free</span>
              </label>
              <label className="flex items-center space-x-2 text-sm">
                <input type="radio" name="price" className="border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-gray-700">Paid</span>
              </label>
            </div>
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
      <section className="pt-34 py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center py-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-6">
              Connect, learn and grow at events
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover networking opportunities, conferences, and workshops designed for affiliate marketers and performance marketing professionals.
            </p>
            
            <div className="flex justify-center">
              <SearchBar placeholder="Search events, locations, categories..." />
            </div>
          </div>
        </div>
      </section>
      
      {/* Events Section with Filters */}
      <section id="events-section" className="py-16" style={{ backgroundColor: '#F9FAFB' }}>
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
                        <SheetTitle>Filter Events</SheetTitle>
                        <SheetDescription>
                          Find the perfect events for you
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
                  All Events ({allEvents.length})
                </h2>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by Date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">Sort by Date</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {currentEvents.map((event) => (
                  <EventCard key={event.id} {...event} />
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
      
      {/* Host Your Own Event Section - modified height and background color */}
      <section className="py-10 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-gray-900 rounded-2xl px-8 py-8 md:px-12 md:py-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                  Ready to host your own event?
                </h2>
                <p className="text-lg text-gray-300">
                  Create your own networking opportunity with our events platform
                </p>
              </div>
              <Button 
                variant="outline" 
                className="bg-white text-gray-900 hover:bg-gray-100 border-0 flex-shrink-0"
              >
                Create Event
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Events;
