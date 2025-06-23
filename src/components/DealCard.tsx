
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tag, Package, Star, Bookmark } from "lucide-react";

interface DealCardProps {
  title: string;
  category?: string;
  description: string;
  image?: string;
  tags?: string[];
  id?: string;
}

const DealCard: React.FC<DealCardProps> = ({
  title,
  category,
  description,
  image,
  tags = [],
  id = "1"
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white border border-gray-100 relative group">
      {/* Save Badge */}
      <div className="absolute top-4 right-4 z-10">
        <Badge className="bg-black text-white hover:bg-gray-800 cursor-pointer">
          <Bookmark className="h-3 w-3 mr-1" />
          Save
        </Badge>
      </div>
      
      <div className="p-6">
        {/* Image/Icon Section */}
        <div className="h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center mb-4 transition-all duration-300">
          <div className="flex flex-col items-center justify-center text-gray-500">
            <Package size={40} strokeWidth={1.5} />
            <div className="mt-2 text-xs font-medium">{category}</div>
          </div>
        </div>
        
        {/* Content */}
        <div className="space-y-3">
          <h3 className="font-semibold text-xl text-gray-900 line-clamp-2">
            {title}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={12} className="text-yellow-400" fill="#FBBF24" />
              ))}
            </div>
            <span className="text-xs text-gray-500 font-medium">5.0 (24)</span>
          </div>
          
          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
            {description}
          </p>
          
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.slice(0, 2).map((tag, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className="text-xs px-2 py-1 bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                >
                  {tag}
                </Badge>
              ))}
              {tags.length > 2 && (
                <Badge variant="outline" className="text-xs px-2 py-1 bg-gray-50 text-gray-500 border-gray-200">
                  +{tags.length - 2}
                </Badge>
              )}
            </div>
          )}
          
          {/* CTA Button */}
          <Link to={`/deals/${id}`} className="block w-full mt-4">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-all duration-200">
              View Deal
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default DealCard;
