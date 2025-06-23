
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // FAQ categories with questions
  const faqCategories = [
    {
      category: "General",
      questions: [
        {
          question: "What is Twello?",
          answer: "Twello is a comprehensive platform for affiliate marketers that provides verified discounts on affiliate marketing tools, job listings, network connections, and industry events. We aim to be the one-stop resource for affiliate marketers at all experience levels."
        },
        {
          question: "Is Twello free to use?",
          answer: "Yes, basic access to Twello is completely free. We offer premium subscription plans that provide additional features such as early access to deals, premium filters, and dedicated support."
        },
        {
          question: "How do I create an account?",
          answer: "Creating an account is easy! Simply click on the 'Sign Up' button in the top right corner of our website, fill in your details, and follow the verification steps. Once verified, you'll have immediate access to our platform."
        },
        {
          question: "Can I use Twello on my mobile device?",
          answer: "Absolutely! Twello is fully responsive and works on all devices including smartphones and tablets. We also have a progressive web app (PWA) that you can install on your mobile device for a native app-like experience."
        }
      ]
    },
    {
      category: "Deals & Offers",
      questions: [
        {
          question: "How are affiliate deals verified?",
          answer: "Our team manually reviews and verifies each deal before it's published on our platform. We check for authenticity, current validity, and ensure that the deal provides real value to our users."
        },
        {
          question: "Can I submit a deal to be featured on Twello?",
          answer: "Yes! If you're a vendor or affiliate partner, you can submit your deal through our 'Submit a Deal' form. Our team will review your submission and contact you if more information is needed."
        },
        {
          question: "How often are new deals added?",
          answer: "We add new deals on a daily basis, with major updates happening weekly. Premium members receive notifications when deals relevant to their interests are added."
        },
        {
          question: "What if a deal doesn't work?",
          answer: "If you encounter a deal that doesn't work as described, please report it through the 'Report Issue' button on the deal page. Our team will investigate and take appropriate action."
        }
      ]
    },
    {
      category: "Jobs & Networking",
      questions: [
        {
          question: "How can I post a job on Twello?",
          answer: "If you're looking to hire affiliate marketers, you can post a job by clicking on the 'Post a Job' button on our Jobs page. You'll need to create an employer account if you don't already have one."
        },
        {
          question: "Are all jobs remote-friendly?",
          answer: "While many jobs posted on Twello are remote-friendly, it depends on the employer's preferences. Each job listing clearly indicates whether the position is remote, hybrid, or on-site."
        },
        {
          question: "How can I connect with affiliate networks?",
          answer: "Our Networks section allows you to browse and filter affiliate networks by niche, commission structure, and more. You can request connections directly through our platform."
        },
        {
          question: "Is there a way to showcase my portfolio or skills?",
          answer: "Yes, when you create your Twello profile, you can showcase your skills, experience, and portfolio pieces. This helps employers and networks find you when they're looking for specific talents."
        }
      ]
    },
    {
      category: "Events & Community",
      questions: [
        {
          question: "Does Twello host its own events?",
          answer: "Yes, we host regular virtual meetups, webinars, and an annual in-person conference. Our events bring together affiliate marketers, networks, and vendors for networking and learning opportunities."
        },
        {
          question: "How can I add an event to the calendar?",
          answer: "If you're organizing an event relevant to affiliate marketing, you can submit it through our 'Submit an Event' form. Please provide all relevant details including date, time, location (virtual or physical), and a description."
        },
        {
          question: "Are there community forums or discussion groups?",
          answer: "Yes, Twello has an active community forum where members can ask questions, share insights, and connect with peers. We also have specialized discussion groups for different niches and experience levels."
        },
        {
          question: "Can I become a contributor or guest writer?",
          answer: "We welcome industry experts who want to share their knowledge! You can apply to become a contributor through our 'Write for Us' page. We're looking for practical, actionable content that helps our community succeed."
        }
      ]
    },
    {
      category: "Account & Billing",
      questions: [
        {
          question: "How do I upgrade to a premium account?",
          answer: "You can upgrade to a premium account by visiting your account settings and clicking on 'Upgrade to Premium'. We offer monthly and annual subscription options with various benefits."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, PayPal, and select cryptocurrencies. All transactions are processed securely through our payment partners."
        },
        {
          question: "Can I cancel my premium subscription at any time?",
          answer: "Yes, you can cancel your premium subscription at any time from your account settings. If you cancel, you'll continue to have premium access until the end of your current billing period."
        },
        {
          question: "Is there a refund policy?",
          answer: "We offer a 14-day money-back guarantee for new premium subscriptions. If you're not satisfied with your premium experience, contact our support team within 14 days of your purchase for a full refund."
        }
      ]
    }
  ];

  // Filter questions based on search query
  const filterQuestions = () => {
    if (!searchQuery.trim()) {
      return faqCategories;
    }
    
    const filteredCategories = faqCategories.map(category => {
      const filteredQuestions = category.questions.filter(item => 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      return {
        ...category,
        questions: filteredQuestions
      };
    }).filter(category => category.questions.length > 0);
    
    return filteredCategories;
  };

  const filteredCategories = filterQuestions();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-gradient-to-r from-twello-blue to-twello-purple py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Frequently Asked Questions</h1>
            <p className="text-xl text-white/90 mt-4 max-w-2xl mx-auto">
              Find answers to common questions about Twello and affiliate marketing.
            </p>
            
            {/* Search bar */}
            <div className="mt-8 max-w-lg mx-auto">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search for questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-6 text-base"
                />
                <HelpCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-10">
                <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, questionIndex) => (
                    <AccordionItem key={questionIndex} value={`item-${categoryIndex}-${questionIndex}`}>
                      <AccordionTrigger className="text-lg font-medium">{item.question}</AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        <p>{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))
          ) : (
            <div className="text-center py-10">
              <HelpCircle className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">No results found</h3>
              <p className="text-gray-500">
                We couldn't find answers matching your search. Try different keywords or browse all categories.
              </p>
              <Button 
                variant="outline" 
                className="mt-4" 
                onClick={() => setSearchQuery('')}
              >
                View all questions
              </Button>
            </div>
          )}
        </div>
        
        {/* Still Need Help Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Contact Support</h3>
                <p className="text-gray-600 mb-4">
                  Get in touch with our support team for personalized assistance.
                </p>
                <Button>Contact Us</Button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Join Community</h3>
                <p className="text-gray-600 mb-4">
                  Connect with other users in our community forums for quick answers.
                </p>
                <Button variant="outline">Visit Forums</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
