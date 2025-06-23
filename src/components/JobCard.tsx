
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface JobCardProps {
  title: string;
  company: string;
  description: string;
  logo?: string;
  companyTag?: string;
  id?: string;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  description,
  logo,
  companyTag,
  id = "1" // Default ID if none provided
}) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="p-6">
        <div className="flex justify-between">
          <div className="flex">
            <div className="h-12 w-12 bg-gray-100 rounded-md flex items-center justify-center mr-4">
              {logo ? (
                <img 
                  src={logo} 
                  alt={company} 
                  className="h-full w-full object-contain"
                />
              ) : (
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="font-medium text-gray-600">
                    {company.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <div className="flex items-center mt-1">
                <span className="text-sm text-gray-600">{company}</span>
                {companyTag && (
                  <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded">
                    {companyTag}
                  </span>
                )}
              </div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-red-500 transition-colors">
            <Heart size={20} />
          </button>
        </div>
        
        <p className="text-sm text-gray-600 my-4 line-clamp-2">{description}</p>
        
        <Link to={`/jobs/${id}`}>
          <Button variant="default" size="sm">View Details</Button>
        </Link>
      </div>
    </Card>
  );
};

export default JobCard;
