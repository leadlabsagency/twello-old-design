import { Link } from "react-router-dom";
import { Heart, MapPin, Clock, DollarSign, Bookmark, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface JobCardProps {
  title: string;
  company: string;
  description: string;
  logo?: string;
  companyTag?: string;
  id?: string;
  location?: string;
  salary?: string;
  jobType?: string;
  postedTime?: string;
  level?: string;
  rating?: number;
  reviews?: number;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  description,
  logo,
  companyTag,
  id = "1",
  location = "Portland, OR",
  salary = "$65000k - $85000k",
  jobType = "Full Time",
  postedTime = "1 day ago",
  level = "Mid",
  rating = 4.8,
  reviews = 127
}) => {
  return (
    <Card className="overflow-hidden bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
      <div className="p-6">
        {/* Job Title and Level */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-[#0F172A]">{title}</h3>
          <div className="flex space-x-2">
            <Badge className="bg-blue-100 text-blue-700 border-0">{level}</Badge>
            <Badge className="bg-gray-100 text-gray-700 border-0">{jobType}</Badge>
          </div>
        </div>
        
        {/* Company and Location */}
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center">
            <span className="font-medium text-[#0F172A]">{company}</span>
          </div>
          
          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              {location}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {postedTime}
            </div>
          </div>
        </div>
        
        {/* Job Description */}
        <p className="text-gray-600 text-sm mb-4">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
            Affiliate Programs
          </Badge>
          <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
            E-commerce
          </Badge>
          <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
            Management
          </Badge>
        </div>
        
        {/* Salary and Actions */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 text-green-600 mr-1" />
            <span className="text-green-600 font-medium">{salary}</span>
            <div className="flex items-center ml-3">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="text-gray-600 text-sm ml-1">{rating} ({reviews} reviews)</span>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <button className="p-2 rounded-full border border-gray-200 hover:border-gray-300">
              <Bookmark className="h-4 w-4 text-gray-500" />
            </button>
            <Link to={`/jobs/${id}`}>
              <Button className="bg-[#4361EE] hover:bg-[#3A56E0] text-white">View Job</Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default JobCard;