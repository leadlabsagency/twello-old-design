import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface TestimonialCardProps {
  content: string;
  author: string;
  position: string;
  avatar: string;
  verified?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  content,
  author,
  position,
  avatar,
  verified = false
}) => {
  return (
    <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-xl">
      <CardContent className="p-6">
        <div className="mb-4">
          {/* Quote icon */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-gray-300"
          >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
          </svg>
        </div>
        <p className="mb-6 text-gray-600 font-light">{content}</p>
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-4">
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback className="bg-[#2563EB] text-white">{author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex items-center">
            <div>
              <h4 className="font-medium text-[#0F172A]">{author}</h4>
              <p className="text-xs text-gray-500">{position}</p>
            </div>
            {verified && (
              <div className="ml-2 bg-[#2563EB] text-white rounded-full p-0.5" title="Verified Testimonial">
                <Check className="h-3 w-3" />
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;