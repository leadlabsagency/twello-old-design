
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, MapPin, Clock, DollarSign, Building, Share2, Bookmark } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import SectionHeader from '@/components/SectionHeader';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState<any>(null);
  
  // Sample data - in a real app, you'd fetch this based on the id
  useEffect(() => {
    // Simulate API fetch
    const jobData = {
      id: id,
      title: 'Senior Affiliate Manager',
      company: 'BrandCo',
      location: 'Remote, Worldwide',
      type: 'Full-Time',
      salary: '$70,000 - $95,000',
      postedDate: '2 weeks ago',
      companyLogo: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      companySize: '50-100 employees',
      companySite: 'https://example.com',
      description: 'We are looking for an experienced Affiliate Manager to join our growing team. You will be responsible for managing our affiliate program, recruiting new affiliates, and optimizing campaign performance.',
      responsibilities: [
        'Manage day-to-day operations of our affiliate program',
        'Recruit and onboard new high-quality affiliates',
        'Monitor affiliate activities and ensure compliance with program terms',
        'Analyze campaign data and optimize for performance',
        'Create and implement affiliate marketing strategies',
        'Build and maintain strong relationships with top affiliates',
        'Stay up-to-date with industry trends and best practices'
      ],
      requirements: [
        '3+ years of experience in affiliate marketing',
        'Strong understanding of affiliate networks and tracking platforms',
        'Excellent communication and relationship-building skills',
        'Analytical mindset with data-driven decision making',
        'Experience with performance marketing and CPA-based campaigns',
        'Bachelor\'s degree in Marketing, Business, or related field (or equivalent experience)',
        'Knowledge of SEO, SEM, and other digital marketing channels'
      ],
      benefits: [
        'Competitive salary and performance bonuses',
        'Remote work flexibility',
        'Health insurance and wellness stipend',
        'Professional development budget',
        '401(k) matching',
        'Generous vacation policy',
        'Team retreats twice a year'
      ]
    };
    setJob(jobData);
  }, [id]);

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-xl">Loading job details...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 w-full">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/jobs" className="flex items-center text-gray-600 hover:text-twello-blue transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Jobs
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Job Header */}
            <Card className="p-6 mb-8">
              <div className="flex flex-col md:flex-row md:items-center mb-6">
                <div className="h-16 w-16 bg-gray-100 rounded-md flex items-center justify-center mr-6 mb-4 md:mb-0">
                  {job.companyLogo ? (
                    <img 
                      src={job.companyLogo} 
                      alt={job.company} 
                      className="h-full w-full object-contain rounded-md"
                    />
                  ) : (
                    <Building size={32} className="text-gray-400" />
                  )}
                </div>
                
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold mb-1">{job.title}</h1>
                  <div className="text-gray-600 mb-2">{job.company}</div>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {job.type}
                    </div>
                    <div className="flex items-center">
                      <DollarSign size={14} className="mr-1" />
                      {job.salary}
                    </div>
                  </div>
                </div>
                
                <div className="flex mt-4 md:mt-0 md:ml-auto space-x-2">
                  <Button variant="outline" size="icon">
                    <Bookmark size={18} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 size={18} />
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-twello-purple/10 text-twello-purple text-sm rounded-full">
                  Affiliate Marketing
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                  Performance Marketing
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                  Remote
                </span>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg flex flex-col md:flex-row md:items-center justify-between">
                <div className="mb-3 md:mb-0">
                  <div className="text-sm font-medium">Posted {job.postedDate}</div>
                  <div className="text-sm text-gray-500">Apply as soon as possible</div>
                </div>
                <Button size="lg">Apply for this job</Button>
              </div>
            </Card>
            
            {/* Job Description */}
            <Card className="p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Job Description</h2>
              <p className="text-gray-700 mb-6">{job.description}</p>
              
              <h3 className="text-lg font-semibold mb-3">Key Responsibilities</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                {job.responsibilities.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <h3 className="text-lg font-semibold mb-3">Requirements</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                {job.requirements.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <h3 className="text-lg font-semibold mb-3">Benefits</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                {job.benefits.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Card>
            
            {/* Application Process */}
            <Card className="p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">How to Apply</h2>
              <p className="text-gray-700 mb-6">
                To apply for this position, please submit your resume and a cover letter explaining 
                why you're the perfect fit for this role. Use the button below to submit your application.
              </p>
              <Button size="lg">Apply Now</Button>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div>
            {/* Company Card */}
            <Card className="p-6 mb-8">
              <h3 className="font-semibold text-xl mb-4">About {job.company}</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Building size={20} className="text-gray-400 mr-3" />
                  <div>
                    <div className="text-sm font-medium">Company Size</div>
                    <div className="text-sm text-gray-600">{job.companySize}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin size={20} className="text-gray-400 mr-3" />
                  <div>
                    <div className="text-sm font-medium">Headquarters</div>
                    <div className="text-sm text-gray-600">New York, USA</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Briefcase size={20} className="text-gray-400 mr-3" />
                  <div>
                    <div className="text-sm font-medium">Industry</div>
                    <div className="text-sm text-gray-600">Affiliate Marketing</div>
                  </div>
                </div>
              </div>
              
              <div className="border-t mt-6 pt-6">
                <p className="text-gray-700 mb-6">
                  BrandCo is a leading affiliate marketing company specializing in performance-based marketing solutions.
                  We connect brands with top affiliates to drive growth and increase revenue.
                </p>
                <Button variant="outline" className="w-full">
                  <a href={job.companySite} target="_blank" rel="noopener noreferrer" className="w-full flex justify-center">
                    Visit Company Website
                  </a>
                </Button>
              </div>
            </Card>
            
            {/* Similar Jobs */}
            <Card className="p-6">
              <h3 className="font-semibold text-xl mb-4">Similar Jobs</h3>
              <div className="space-y-6">
                {[
                  { title: 'Affiliate Marketing Manager', company: 'GrowthMedia', location: 'Remote' },
                  { title: 'Digital Marketing Specialist', company: 'WebPromo', location: 'New York' },
                  { title: 'Partner Program Lead', company: 'TechPartners', location: 'Remote' }
                ].map((item, index) => (
                  <div key={index} className="border-b pb-4 last:border-0">
                    <h4 className="font-medium mb-1">{item.title}</h4>
                    <div className="text-sm text-gray-600">{item.company}</div>
                    <div className="flex items-center text-xs text-gray-500 mt-1 mb-2">
                      <MapPin size={12} className="mr-1" />
                      {item.location}
                    </div>
                    <Button variant="outline" size="sm">View Job</Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeader 
            title="More Jobs For You" 
            subtitle="Based on your profile and search history" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6 card-hover">
                <h3 className="font-semibold text-lg mb-2">Marketing Position {i}</h3>
                <div className="text-sm text-gray-600 mb-3">Company Name</div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin size={14} className="mr-1" />
                  Remote
                </div>
                <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                  Short description about this job position and requirements.
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium text-twello-purple">$70k - $90k</div>
                  <Button variant="outline" size="sm">View Job</Button>
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

export default JobDetails;
