import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import JobCard from '@/components/JobCard';
import { Filter, ChevronDown, ChevronUp, Briefcase, MapPin, Clock, DollarSign, SlidersHorizontal } from 'lucide-react';
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
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Jobs = () => {
  const [showFilters, setShowFilters] = useState(false);
  const isMobile = useIsMobile();
  const [currentPage, setCurrentPage] = useState(1);
  const [openFilterSections, setOpenFilterSections] = useState({
    jobType: true,
    experience: true,
    location: true,
    salary: true
  });

  const itemsPerPage = 4;

  // Toggle filter section visibility
  const toggleFilterSection = (section) => {
    setOpenFilterSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Sample data for jobs
  const jobs = [
    {
      id: "1",
      title: 'Affiliate Program Manager',
      company: 'AffiliateMax',
      location: 'Portland, OR',
      type: 'Full-time',
      salary: '$65000k - $85000k',
      description: 'Seeking an Affiliate Program Manager to oversee our affiliate program, recruit new partners, optimize commission structures, and drive program growth for our e-commerce brand.',
      tags: ['Affiliate Marketing', 'Management'],
      posted: '1 day ago',
      level: 'Mid'
    },
    {
      id: "2",
      title: 'Digital Marketing Specialist',
      company: 'Growth Marketing Co',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$60,000 - $80,000',
      description: 'Execute digital marketing campaigns across multiple channels including PPC, social media, and content marketing.',
      tags: ['Digital Marketing', 'PPC'],
      posted: '1 week ago',
      level: 'Entry'
    },
    {
      id: "3",
      title: 'Performance Marketing Analyst',
      company: 'Data Driven Inc',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$70,000 - $90,000',
      description: 'Analyze campaign performance and optimize conversion rates using advanced analytics and testing methodologies.',
      tags: ['Analytics', 'Performance'],
      posted: '3 days ago',
      level: 'Mid'
    },
    {
      id: "4",
      title: 'Affiliate Network Coordinator',
      company: 'Network Pro',
      location: 'Remote',
      type: 'Contract',
      salary: '$50,000 - $65,000',
      description: 'Coordinate affiliate relationships and manage partnerships to maximize network performance and revenue.',
      tags: ['Affiliate Networks', 'Coordination'],
      posted: '5 days ago',
      level: 'Entry'
    },
    {
      id: "5",
      title: 'CRO Specialist',
      company: 'Conversion Labs',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$65,000 - $85,000',
      description: 'Optimize conversion rates through A/B testing, user experience analysis, and data-driven recommendations.',
      tags: ['CRO', 'Testing'],
      posted: '1 week ago',
      level: 'Mid'
    },
    {
      id: "6",
      title: 'Email Marketing Manager',
      company: 'Email Pro Solutions',
      location: 'Remote',
      type: 'Full-time',
      salary: '$55,000 - $75,000',
      description: 'Develop and execute comprehensive email marketing strategies to drive engagement and conversions.',
      tags: ['Email Marketing', 'Strategy'],
      posted: '4 days ago',
      level: 'Mid'
    },
    {
      id: "7",
      title: 'Content Marketing Specialist',
      company: 'Content Kings',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$60,000 - $75,000',
      description: 'Develop engaging content across multiple channels to drive traffic and conversions.',
      tags: ['Content Marketing', 'SEO'],
      posted: '3 days ago',
      level: 'Mid'
    },
    {
      id: "8",
      title: 'Affiliate Marketing Coordinator',
      company: 'PartnerBoost LLC',
      location: 'Remote',
      type: 'Part-time',
      salary: '$40,000 - $50,000',
      description: 'Assist in managing affiliate relationships and optimize campaign performance.',
      tags: ['Affiliate Marketing', 'Coordination'],
      posted: '1 day ago',
      level: 'Entry'
    },
    {
      id: "9",
      title: 'SEO Specialist',
      company: 'RankUp Digital',
      location: 'Boston, MA',
      type: 'Full-time',
      salary: '$65,000 - $85,000',
      description: 'Optimize website content and structure to improve search engine rankings and drive organic traffic.',
      tags: ['SEO', 'Analytics'],
      posted: '6 days ago',
      level: 'Mid'
    }
  ];

  // Pagination logic
  const totalPages = Math.ceil(jobs.length / itemsPerPage);
  
  // Get current jobs
  const indexOfLastJob = currentPage * itemsPerPage;
  const indexOfFirstJob = indexOfLastJob - itemsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  // Create page numbers array
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

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
            title="Job Type" 
            isOpen={openFilterSections.jobType}
            onToggle={() => toggleFilterSection('jobType')}
          >
            <ToggleGroup type="multiple" className="flex flex-wrap gap-2 mt-2">
              <ToggleGroupItem value="fulltime" aria-label="Full-time" className="text-xs">Full-time</ToggleGroupItem>
              <ToggleGroupItem value="parttime" aria-label="Part-time" className="text-xs">Part-time</ToggleGroupItem>
              <ToggleGroupItem value="contract" aria-label="Contract" className="text-xs">Contract</ToggleGroupItem>
              <ToggleGroupItem value="freelance" aria-label="Freelance" className="text-xs">Freelance</ToggleGroupItem>
            </ToggleGroup>
          </MobileFilterItem>
          
          <MobileFilterItem 
            title="Experience Level" 
            isOpen={openFilterSections.experience}
            onToggle={() => toggleFilterSection('experience')}
          >
            <ToggleGroup type="multiple" className="flex flex-wrap gap-2 mt-2">
              <ToggleGroupItem value="entry" aria-label="Entry Level" className="text-xs">Entry Level</ToggleGroupItem>
              <ToggleGroupItem value="mid" aria-label="Mid Level" className="text-xs">Mid Level</ToggleGroupItem>
              <ToggleGroupItem value="senior" aria-label="Senior Level" className="text-xs">Senior Level</ToggleGroupItem>
              <ToggleGroupItem value="executive" aria-label="Executive" className="text-xs">Executive</ToggleGroupItem>
            </ToggleGroup>
          </MobileFilterItem>
          
          <MobileFilterItem 
            title="Location" 
            isOpen={openFilterSections.location}
            onToggle={() => toggleFilterSection('location')}
          >
            <ToggleGroup type="multiple" className="flex flex-wrap gap-2 mt-2">
              <ToggleGroupItem value="remote" aria-label="Remote" className="text-xs">Remote</ToggleGroupItem>
              <ToggleGroupItem value="newyork" aria-label="New York" className="text-xs">New York</ToggleGroupItem>
              <ToggleGroupItem value="sanfrancisco" aria-label="San Francisco" className="text-xs">San Francisco</ToggleGroupItem>
              <ToggleGroupItem value="austin" aria-label="Austin" className="text-xs">Austin</ToggleGroupItem>
            </ToggleGroup>
          </MobileFilterItem>
          
          <MobileFilterItem 
            title="Salary Range" 
            isOpen={openFilterSections.salary}
            onToggle={() => toggleFilterSection('salary')}
          >
            <ToggleGroup type="multiple" className="flex flex-wrap gap-2 mt-2">
              <ToggleGroupItem value="40k-60k" aria-label="$40k - $60k" className="text-xs">$40k - $60k</ToggleGroupItem>
              <ToggleGroupItem value="60k-80k" aria-label="$60k - $80k" className="text-xs">$60k - $80k</ToggleGroupItem>
              <ToggleGroupItem value="80k-100k" aria-label="$80k - $100k" className="text-xs">$80k - $100k</ToggleGroupItem>
              <ToggleGroupItem value="100k+" aria-label="$100k+" className="text-xs">$100k+</ToggleGroupItem>
            </ToggleGroup>
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
            <label className="text-sm font-medium text-gray-700 block mb-2">Job Type</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="fulltime">Full-time</SelectItem>
                <SelectItem value="parttime">Part-time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="freelance">Freelance</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">Experience Level</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Levels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="entry">Entry Level</SelectItem>
                <SelectItem value="mid">Mid Level</SelectItem>
                <SelectItem value="senior">Senior Level</SelectItem>
                <SelectItem value="executive">Executive</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">Location</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
                <SelectItem value="newyork">New York</SelectItem>
                <SelectItem value="sanfrancisco">San Francisco</SelectItem>
                <SelectItem value="austin">Austin</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">Salary Range</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Ranges" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ranges</SelectItem>
                <SelectItem value="40k-60k">$40k - $60k</SelectItem>
                <SelectItem value="60k-80k">$60k - $80k</SelectItem>
                <SelectItem value="80k-100k">$80k - $100k</SelectItem>
                <SelectItem value="100k+">$100k+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0F172A] leading-tight mb-4">
              Find your next affiliate marketing opportunity
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Browse top affiliate marketing jobs from leading companies and networks
            </p>
            <div className="max-w-2xl mx-auto">
              <SearchBar placeholder="Search jobs, companies, skills..." />
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="flex-1 py-6">
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
                        <SheetTitle>Filter Jobs</SheetTitle>
                        <SheetDescription>
                          Find the perfect job opportunity
                        </SheetDescription>
                      </SheetHeader>
                      <div className="mt-2 overflow-y-auto">
                        <FilterContent />
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              )}
              
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-[#2563EB]" />
                  <h2 className="text-xl font-semibold text-[#0F172A]">
                    {jobs.length} jobs found
                  </h2>
                </div>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Most Relevant" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevant">Most Relevant</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="highToLow">Salary High to Low</SelectItem>
                    <SelectItem value="lowToHigh">Salary Low to High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Job Listings */}
              <div className="space-y-6">
                {currentJobs.map((job) => (
                  <JobCard 
                    key={job.id}
                    id={job.id}
                    title={job.title}
                    company={job.company}
                    description={job.description}
                    location={job.location}
                    salary={job.salary}
                    jobType={job.type}
                    postedTime={job.posted}
                    level={job.level}
                  />
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-8">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                    
                    {pageNumbers.map(number => (
                      <PaginationItem key={number}>
                        <PaginationLink 
                          isActive={currentPage === number}
                          onClick={() => setCurrentPage(number)}
                        >
                          {number}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
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

export default Jobs;