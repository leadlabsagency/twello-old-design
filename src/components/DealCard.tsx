import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bookmark, ExternalLink, Heart, Share } from "lucide-react";

interface DealCardProps {
  title: string;
  category?: string;
  description: string;
  image?: string;
  tags?: string[];
  id?: string;
  discount?: string;
  originalPrice?: string;
  salePrice?: string;
}

const DealCard: React.FC<DealCardProps> = ({
  title,
  category = "Leadpages",
  description,
  image,
  tags = [],
  id = "1",
  discount = "40% OFF",
  originalPrice = "$498.33",
  salePrice = "$299"
}) => {
  return (
    <Card className="overflow-hidden bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex flex-col md:flex-row">
        {/* Discount Badge */}
        <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-6 flex flex-col justify-center md:w-[140px] md:flex-shrink-0">
          <div className="text-2xl font-bold">{discount}</div>
          <div className="text-sm">Limited Time</div>
        </div>
        
        <div className="p-6 flex-1">
          <div className="flex justify-between">
            <div>
              {/* Title and Provider */}
              <h3 className="text-xl font-bold text-[#0F172A] mb-1">{title}</h3>
              <Link to="/networks/leadpages" className="text-[#2563EB] text-sm font-medium hover:underline mb-2 inline-block">
                {category}
              </Link>
              
              {/* Pricing */}
              <div className="flex items-center mt-2 mb-3">
                <span className="text-green-600 font-medium text-xl mr-2">{salePrice}</span>
                <span className="text-gray-400 line-through text-sm">{originalPrice}</span>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 text-sm mb-4">
                {description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, index) => (
                  <Badge 
                    key={index}
                    className="bg-orange-100 text-orange-800 hover:bg-orange-200 border-0"
                  >
                    {tag}
                  </Badge>
                ))}
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">
                  Conversion
                </Badge>
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 border-0">
                  Annual Deal
                </Badge>
              </div>
            </div>
            
            <div className="flex flex-col items-end gap-2">
              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button className="p-2 rounded-full border border-gray-200 hover:border-gray-300">
                  <Bookmark className="h-4 w-4 text-gray-500" />
                </button>
                <button className="p-2 rounded-full border border-gray-200 hover:border-gray-300">
                  <Heart className="h-4 w-4 text-gray-500" />
                </button>
                <button className="p-2 rounded-full border border-gray-200 hover:border-gray-300">
                  <Share className="h-4 w-4 text-gray-500" />
                </button>
              </div>
              
              {/* CTA Button */}
              <Link to={`/deals/${id}`} className="mt-auto">
                <Button className="bg-[#E05D37] hover:bg-[#D04D27] text-white font-medium py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center">
                  View Deal
                  <ExternalLink className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DealCard;