import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface NetworkCardProps {
  name: string;
  description: string;
  logo?: string;
  id?: string;
  rating?: number;
  reviews?: number;
}

const NetworkCard: React.FC<NetworkCardProps> = ({
  name,
  description,
  logo,
  id = "1", // Default ID if none provided
  rating,
  reviews
}) => {
  return (
    <Card className="twello-card overflow-hidden">
      <div className="p-6">
        <div className="flex items-start mb-4">
          <div className="h-16 w-16 bg-gray-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
            {logo ? (
              <img 
                src={logo} 
                alt={`${name} logo`} 
                className="h-full w-full object-contain rounded-lg"
              />
            ) : (
              <div className="h-12 w-12 rounded-lg bg-gray-200 flex items-center justify-center">
                <span className="font-semibold text-gray-600 text-lg">
                  {name.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-xl mb-2 text-[#0F172A]">{name}</h3>
            <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
          </div>
        </div>
        
        {rating && (
          <div className="flex items-center mt-2 mb-4">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  className={i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">{reviews || 0} reviews</span>
          </div>
        )}
        
        <Link to={`/networks/${id}`}>
          <Button variant="outline" className="w-full mt-4 border-gray-200 hover:border-[#2563EB] hover:text-[#2563EB]">View Details</Button>
        </Link>
      </div>
    </Card>
  );
};

export default NetworkCard;