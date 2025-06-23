
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Users, Clock, Globe, Share2, CalendarPlus } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import SectionHeader from '@/components/SectionHeader';
import EventCard from '@/components/EventCard';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<any>(null);
  
  // Sample data - in a real app, you'd fetch this based on the id
  useEffect(() => {
    // Simulate API fetch
    const eventData = {
      id: id,
      title: 'Affiliate Summit Europe',
      date: 'May 15-17, 2025',
      time: '9:00 AM - 6:00 PM',
      location: 'London, United Kingdom',
      venue: 'ExCeL London Exhibition Centre',
      address: 'Royal Victoria Dock, 1 Western Gateway, London E16 1XL',
      price: '€699',
      earlyBirdPrice: '€499',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      description: 'Join thousands of affiliate marketers in London for the biggest European affiliate marketing conference of the year. Network with industry leaders, learn cutting-edge strategies, and discover new partnerships to grow your business.',
      organizer: 'Affiliate Summit',
      organizerLogo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      attendees: 3500,
      website: 'https://example.com',
      schedule: [
        {
          day: 'Day 1 - May 15',
          sessions: [
            { time: '9:00 AM', title: 'Registration & Coffee' },
            { time: '10:00 AM', title: 'Opening Keynote: The Future of Affiliate Marketing' },
            { time: '11:30 AM', title: 'Panel: Adapting to Regulatory Changes' },
            { time: '1:00 PM', title: 'Lunch Break & Networking' },
            { time: '2:30 PM', title: 'Workshop: Advanced Tracking Techniques' },
            { time: '4:00 PM', title: 'Case Studies: Successful Campaign Strategies' },
            { time: '6:00 PM', title: 'Welcome Reception' }
          ]
        },
        {
          day: 'Day 2 - May 16',
          sessions: [
            { time: '9:30 AM', title: 'Keynote: Emerging Markets Opportunities' },
            { time: '11:00 AM', title: 'Breakout Sessions by Vertical' },
            { time: '12:30 PM', title: 'Lunch & Exhibitor Hall' },
            { time: '2:00 PM', title: 'Panel: Maximizing ROI with Data Analysis' },
            { time: '3:30 PM', title: 'Workshop: Compliance Best Practices' },
            { time: '7:00 PM', title: 'Official Conference Party' }
          ]
        },
        {
          day: 'Day 3 - May 17',
          sessions: [
            { time: '9:30 AM', title: 'Roundtable Discussions' },
            { time: '11:00 AM', title: 'Keynote: The Next Generation of Affiliate Tech' },
            { time: '12:30 PM', title: 'Closing Remarks & Awards' },
            { time: '1:30 PM', title: 'Farewell Networking Lunch' }
          ]
        }
      ],
      sponsors: [
        'AffiliateGrid', 'MaxBounty', 'ClickDealer', 'TrafficForce', 'ConvertFlow'
      ],
      tag: 'affiliate conference'
    };
    setEvent(eventData);
  }, [id]);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-xl">Loading event details...</div>
        </div>
        <Footer />
      </div>
    );
  }

  // Sample similar events data that matches the structure expected by EventCard
  const similarEvents = [
    {
      id: "101",
      title: 'Affiliate World Asia',
      date: 'NOV 28',
      description: 'The biggest affiliate conference in Asia, bringing together the top affiliates, advertisers, and networks.',
      tag: 'affiliate conference',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=200&fit=crop',
      price: '$699',
      venue: 'Marina Bay Sands',
      city: 'Singapore'
    },
    {
      id: "102",
      title: 'Performance Marketing Summit',
      date: 'OCT 15',
      description: 'An exclusive gathering focusing on the latest trends and strategies in performance marketing.',
      tag: 'summit',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=200&fit=crop',
      price: '$499',
      venue: 'Hilton Hotel',
      city: 'Barcelona, Spain'
    },
    {
      id: "103",
      title: 'Digital Marketing Masterclass',
      date: 'SEP 05',
      description: 'Intensive workshops led by industry experts covering SEO, PPC, content marketing, and more.',
      tag: 'workshop',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=200&fit=crop',
      price: 'FREE',
      venue: 'Tech Campus',
      city: 'Berlin, Germany'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 w-full">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/events" className="flex items-center text-gray-600 hover:text-twello-blue transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Events
          </Link>
        </div>
        
        {/* Event Header */}
        <div className="relative mb-8 rounded-xl overflow-hidden">
          <div className="h-64 md:h-96 bg-gray-200 relative">
            {event.image ? (
              <img 
                src={event.image} 
                alt={event.title} 
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center bg-gray-100">
                <Calendar size={64} className="text-gray-300" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-3 py-1 bg-twello-purple/90 text-white text-sm rounded-full backdrop-blur-sm">
                {event.tag}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{event.title}</h1>
            <div className="flex flex-col md:flex-row md:items-center text-white/90 gap-4 md:gap-6">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {event.date}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                {event.time}
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                {event.location}
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Event Description */}
            <Card className="p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">About This Event</h2>
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                  {event.organizerLogo ? (
                    <img 
                      src={event.organizerLogo} 
                      alt={event.organizer} 
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <Users size={20} className="text-gray-400" />
                  )}
                </div>
                <div>
                  <div className="text-sm">Organized by</div>
                  <div className="font-medium">{event.organizer}</div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                {event.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg flex">
                  <Users size={20} className="text-gray-500 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Attendees</div>
                    <div className="text-gray-600">{event.attendees.toLocaleString()}+ expected</div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg flex">
                  <MapPin size={20} className="text-gray-500 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Venue</div>
                    <div className="text-gray-600">{event.venue}</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Button className="flex-1 sm:flex-none">Register Now</Button>
                <Button variant="outline" className="flex-1 sm:flex-none">
                  <a href={event.website} target="_blank" rel="noopener noreferrer">
                    Visit Event Website
                  </a>
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 size={18} />
                </Button>
                <Button variant="outline" size="icon">
                  <CalendarPlus size={18} />
                </Button>
              </div>
            </Card>
            
            {/* Schedule */}
            <Card className="p-6 mb-8">
              <h2 className="text-xl font-semibold mb-6">Event Schedule</h2>
              
              <div className="space-y-8">
                {event.schedule.map((day: any, dayIndex: number) => (
                  <div key={dayIndex}>
                    <h3 className="font-semibold text-lg mb-4 pb-2 border-b">{day.day}</h3>
                    <div className="space-y-4">
                      {day.sessions.map((session: any, sessionIndex: number) => (
                        <div key={sessionIndex} className="flex">
                          <div className="w-24 flex-shrink-0 font-medium text-gray-600">{session.time}</div>
                          <div className="flex-1">
                            <div className="font-medium">{session.title}</div>
                            {session.speaker && (
                              <div className="text-sm text-gray-500">{session.speaker}</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Location */}
            <Card className="p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Location</h2>
              <div className="mb-4">
                <h3 className="font-medium">{event.venue}</h3>
                <p className="text-gray-600">{event.address}</p>
              </div>
              <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                {/* This would be a map in a real app */}
                <div className="h-full w-full flex items-center justify-center bg-gray-100 text-gray-400">
                  Map would be displayed here
                </div>
              </div>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div>
            {/* Registration */}
            <Card className="p-6 mb-8">
              <h3 className="font-semibold text-xl mb-6">Registration</h3>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-medium">Standard Ticket</div>
                  <div className="text-lg font-bold">{event.price}</div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="font-medium text-green-600">Early Bird</div>
                  <div className="text-lg font-bold text-green-600">{event.earlyBirdPrice}</div>
                </div>
                <div className="text-sm text-gray-500 mb-6">
                  Early bird pricing ends April 15, 2025
                </div>
                <Button className="w-full mb-3">Register Now</Button>
                <p className="text-xs text-center text-gray-500">
                  Includes access to all sessions, workshops, and networking events
                </p>
              </div>
              
              <div className="border-t pt-6">
                <h4 className="font-medium mb-4">Registration includes:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <svg className="mr-2 h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Full conference access (all 3 days)
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="mr-2 h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Networking events & parties
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="mr-2 h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Workshop materials
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="mr-2 h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Lunch & refreshments
                  </li>
                </ul>
              </div>
            </Card>
            
            {/* Sponsors */}
            <Card className="p-6">
              <h3 className="font-semibold text-xl mb-4">Event Sponsors</h3>
              <div className="flex flex-wrap gap-4">
                {event.sponsors.map((sponsor: string, index: number) => (
                  <div key={index} className="bg-gray-50 py-2 px-4 rounded text-sm font-medium">
                    {sponsor}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Similar Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeader 
            title="Other Events You Might Like" 
            subtitle="Upcoming events in affiliate marketing" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {similarEvents.map((event) => (
              <EventCard 
                key={event.id}
                id={event.id}
                title={event.title}
                date={event.date}
                description={event.description}
                tag={event.tag}
                image={event.image}
                price={event.price}
                venue={event.venue}
                city={event.city}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default EventDetails;
