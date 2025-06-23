
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { BookOpen, Calendar, User } from 'lucide-react';

const BlogPosts = [
  {
    id: 1,
    title: "Top 10 Affiliate Marketing Strategies for 2025",
    excerpt: "Discover the latest affiliate marketing strategies that are driving results in 2025.",
    date: "May 12, 2025",
    author: "Jane Cooper",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "How to Build a High-Converting Landing Page",
    excerpt: "Learn the essential elements of high-converting landing pages for affiliate products.",
    date: "May 5, 2025",
    author: "Alex Morgan",
    category: "Conversion",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    title: "Email Marketing Techniques for Affiliates",
    excerpt: "Master email marketing techniques specifically designed for affiliate marketers.",
    date: "April 28, 2025",
    author: "Sarah Wilson",
    category: "Email Marketing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    title: "SEO Best Practices for Affiliate Websites",
    excerpt: "Implement these SEO best practices to drive more organic traffic to your affiliate website.",
    date: "April 21, 2025",
    author: "David Brown",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 5,
    title: "Affiliate Marketing Trends to Watch in 2025",
    excerpt: "Stay ahead of the curve with these emerging affiliate marketing trends for 2025.",
    date: "April 14, 2025",
    author: "Emily Taylor",
    category: "Trends",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-4">
              Insights and strategies for smart affiliates
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Stay ahead with expert tips, industry insights, and proven strategies to maximize your affiliate marketing success.
            </p>
            
            <div className="max-w-2xl mx-auto">
              <SearchBar placeholder="Search articles, topics, categories..." />
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="flex-1 py-6" style={{backgroundColor: '#F9FAFB'}}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {BlogPosts.length} articles found
                </h2>
                <p className="text-gray-600">Latest insights and guides</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
            {BlogPosts.map((post) => (
              <Card key={post.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-blue-600">{post.category}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl font-bold">
                    <Link to={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardContent>
                <CardFooter className="pt-0 border-t border-gray-100 mt-4">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1 text-gray-400" />
                      <span className="text-sm text-gray-500">{post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
                      <Link to={`/blog/${post.id}`}>
                        Read more
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
