
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import DealCard from '@/components/DealCard';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';

const Index = () => {
  // Sample data for the deals section
  const deals = [
    {
      title: 'Cloud Storage 2TB',
      category: 'Cloud Services',
      description: 'Unlimited storage for your data.',
      tags: ['Cloud Service'],
    },
    {
      title: 'Email Automation Pro',
      category: 'Marketing',
      description: 'Automate campaigns effortlessly.',
      tags: ['Marketing'],
    },
    {
      title: 'Pro SEO Tool',
      category: 'SEO',
      description: 'SEO tool for agencies.',
      tags: ['SEO'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-light-bg py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Smart software savings</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            for growing affiliates
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Discover verified discounts on 500+ affiliate tools. Our community has saved over
            $4M this year.
          </p>
          
          <SearchBar placeholder="Search software, categories..." />
          
          <div className="mt-8 flex items-center justify-center space-x-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white"></div>
            </div>
            <p className="text-sm text-gray-600">32,891 affiliates saved $1.4M this month</p>
          </div>
        </div>
      </section>
      
      {/* Deals Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeader 
            title="Featured Deals" 
            subtitle="Exclusive discounts on top affiliate tools" 
            viewAllLink="/deals"
            coloredTitle
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deals.map((deal, index) => (
              <DealCard key={index} {...deal} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-light-bg">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">What do we have for you?</h2>
          <h3 className="text-2xl font-bold mb-6 gradient-text">Get in front of buyers</h3>
          <p className="mb-8 max-w-2xl mx-auto">
            Join 1,000+ vendors reaching our community of 100,000+ qualified buyers
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-twello-blue">
                  <path d="M17 7.5l-10 10"></path>
                  <path d="M12 6l-7.5 7.5L12 21"></path>
                  <path d="M7 11l-3 3 7.5 7.5L21 12l-3-3"></path>
                </svg>
              </div>
              <h4 className="font-semibold text-lg mb-2">Reach qualified buyers</h4>
              <p className="text-gray-600 text-sm">
                Get your product in front of thousands of businesses actively searching for solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-twello-blue">
                  <path d="M22 12V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v5"></path>
                  <path d="m4 19 8-3 8 3"></path>
                  <path d="m4 12 8 3 8-3"></path>
                </svg>
              </div>
              <h4 className="font-semibold text-lg mb-2">Boost conversions</h4>
              <p className="text-gray-600 text-sm">
                Our community converts 3x better than average with verified purchase intent.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-twello-blue">
                  <circle cx="12" cy="8" r="5"></circle>
                  <path d="M20 21a8 8 0 0 0-16 0"></path>
                </svg>
              </div>
              <h4 className="font-semibold text-lg mb-2">Gain authentic reviews</h4>
              <p className="text-gray-600 text-sm">
                Get feedback from real users to build trust and improve your product.
              </p>
            </div>
          </div>
          
          <Button size="lg" className="px-8">
            List your software
          </Button>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeader 
            title="Loved by community" 
            subtitle="We cherish relations to blossom and last" 
            coloredTitle
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg border border-gray-100 card-hover">
                <h4 className="font-semibold text-lg mb-3">
                  Choosing Brandly was one of the best decisions we've made
                </h4>
                <p className="text-gray-600 mb-4">
                  Their tech support is fantastic – extremely helpful, incredibly quick, and utterly professional in every interaction. From the get-go, they devoted closely with us, ensuring that our vision was brought to life in a way that exceeded our expectations. The creativity and skill is off the charts!
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                  <div>
                    <p className="font-medium">Reece Akhtar</p>
                    <p className="text-xs text-gray-500">CEO & Co-Founder @Decent Signal</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Trusted Brands */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="uppercase text-sm font-medium text-gray-500 tracking-wider mb-6">
            POWERING 1,300+ TRUSTED BRANDS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['Alibaba', 'Amazon', 'Booking.com', 'Facebook', 'Outbrain', 'Payoneer'].map((brand) => (
              <div key={brand} className="h-8 text-gray-400 font-bold text-xl">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
