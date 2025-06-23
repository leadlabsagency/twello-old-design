
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();

  // This would normally fetch from an API based on the ID
  // For now, we'll use a static post for demonstration
  const post = {
    id: id,
    title: "Top 10 Affiliate Marketing Strategies for 2025",
    content: `
      <p class="text-lg mb-4">The affiliate marketing landscape is constantly evolving, and staying ahead of the curve is essential for success. In this comprehensive guide, we'll explore the top 10 affiliate marketing strategies that are driving results in 2025.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">1. Leverage AI-Powered Content Creation</h2>
      <p class="mb-4">Artificial intelligence has revolutionized content creation for affiliate marketers. By using AI tools, you can generate high-quality content that's tailored to your target audience's needs and interests. These tools can help you create engaging blog posts, social media captions, and even video scripts that convert.</p>
      <p class="mb-4">Key benefits of AI-powered content creation include:</p>
      <ul class="list-disc ml-6 mb-4">
        <li>Increased productivity and content output</li>
        <li>Improved content relevance and personalization</li>
        <li>Consistent quality across all content pieces</li>
        <li>Data-driven content optimization</li>
      </ul>

      <h2 class="text-2xl font-bold mt-8 mb-4">2. Focus on Micro-Niches</h2>
      <p class="mb-4">Rather than targeting broad audiences, successful affiliate marketers are diving deep into micro-niches. By focusing on a highly specific segment, you can position yourself as an expert and reduce competition. This approach allows for more targeted content and product recommendations, resulting in higher conversion rates.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">3. Prioritize Mobile Optimization</h2>
      <p class="mb-4">With over 60% of internet traffic coming from mobile devices, mobile optimization is no longer optional. Ensure your affiliate websites and landing pages deliver a seamless mobile experience with fast loading times, easy navigation, and mobile-friendly CTAs.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">4. Embrace Video Marketing</h2>
      <p class="mb-4">Video content continues to dominate social media and search platforms. Creating product reviews, tutorials, and comparisons in video format can significantly boost engagement and conversions. Platforms like YouTube, TikTok, and Instagram Reels offer excellent opportunities for affiliate marketers to showcase products in action.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">5. Implement Omnichannel Strategies</h2>
      <p class="mb-4">Successful affiliate marketers are meeting their audience across multiple channels. By integrating your affiliate marketing efforts across blogs, social media, email, and even podcasts, you create multiple touchpoints with potential customers, increasing the likelihood of conversion.</p>
    `,
    date: "May 12, 2025",
    author: "Jane Cooper",
    authorImage: "https://i.pravatar.cc/150?img=1",
    category: "Marketing",
    tags: ["Affiliate Marketing", "Digital Strategy", "Conversion Optimization"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  };

  // Related posts
  const relatedPosts = [
    {
      id: 2,
      title: "How to Build a High-Converting Landing Page",
      date: "May 5, 2025",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 3,
      title: "Email Marketing Techniques for Affiliates",
      date: "April 28, 2025",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 4,
      title: "SEO Best Practices for Affiliate Websites",
      date: "April 21, 2025",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-8 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <Link to="/blog" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-4 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="aspect-video mb-6 rounded-lg overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2 text-gray-500" />
              <span className="text-gray-600">{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-gray-500" />
              <span className="text-gray-600">{post.date}</span>
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-2 text-gray-500" />
              <span className="text-gray-600">{post.category}</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-4">
            {post.title}
          </h1>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="flex-1 py-6" style={{backgroundColor: '#F9FAFB'}}>
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          {/* Post content */}
          <Card className="p-8 mb-8 shadow-lg">
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
            
            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </Card>
          
          {/* Author bio */}
          <Card className="p-6 mb-8 shadow-lg">
            <div className="flex items-center gap-4">
              <img 
                src={post.authorImage} 
                alt={post.author} 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold">{post.author}</h3>
                <p className="text-gray-600">Content Marketing Specialist at Twello</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">Jane is a digital marketing expert with over 10 years of experience in affiliate marketing strategies. She helps businesses maximize their affiliate partnerships and revenue.</p>
          </Card>
          
          {/* Share buttons */}
          <Card className="p-6 mb-8 shadow-lg">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Share this article:</span>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                  <span className="sr-only">Share on Facebook</span>
                </Button>
                <Button variant="outline" size="icon">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                  <span className="sr-only">Share on Twitter</span>
                </Button>
                <Button variant="outline" size="icon">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.7 3H4.3C3.582 3 3 3.582 3 4.3v15.4c0 .718.582 1.3 1.3 1.3h15.4c.718 0 1.3-.582 1.3-1.3V4.3c0-.718-.582-1.3-1.3-1.3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z"></path>
                  </svg>
                  <span className="sr-only">Share on LinkedIn</span>
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Copy link</span>
                </Button>
              </div>
            </div>
          </Card>
          
          {/* Related posts */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(post => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <Link to={`/blog/${post.id}`} className="group">
                    <div className="aspect-video mb-3 overflow-hidden rounded-t-lg">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold group-hover:text-blue-600 transition-colors mb-2">{post.title}</h3>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
