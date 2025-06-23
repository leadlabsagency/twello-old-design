import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tag, Package, Star, Bookmark, ExternalLink } from "lucide-react";

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
    <Card className="overflow-hidden bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
      {/* Deal Header with Discount Badge */}
      <div className="relative">
        <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-6 flex flex-col justify-center">
          <div className="text-2xl font-bold">40% OFF</div>
          <div className="text-sm">Limited Time</div>
        </div>
        
        {/* Save Button */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <button className="bg-white rounded-full p-1.5 shadow-sm hover:shadow-md transition-shadow">
            <Bookmark className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        {/* Title and Provider */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-[#0F172A] mb-1">{title}</h3>
          <Link to="/networks/leadpages" className="text-[#2563EB] text-sm font-medium hover:underline">
            Leadpages
          </Link>
        </div>
        
        {/* Pricing */}
        <div className="flex items-center mb-4">
          <span className="text-green-600 font-medium text-lg mr-2">$299</span>
          <span className="text-gray-400 line-through text-sm">$498.33</span>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 border-0">
            Landing Pages
          </Badge>
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">
            Conversion
          </Badge>
          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 border-0">
            Annual Deal
          </Badge>
        </div>
        
        {/* CTA Button */}
        <Link to={`/deals/${id}`} className="block w-full">
          <Button className="w-full bg-[#E05D37] hover:bg-[#D04D27] text-white font-medium py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center">
            View Deal
            <ExternalLink className="h-4 w-4 ml-1" />
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default DealCard;