import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface OfferCardProps {
  title: string;
  payout?: string;
  type?: string;
  tags?: string[];
  id?: string;
  description?: string;
  revShare?: string;
  features?: string[];
  verified?: boolean;
}

const OfferCard: React.FC<OfferCardProps> = ({
  title,
  payout,
  type,
  tags = [],
  id = "1",
  description = "Top-rated finance offer with high EPC and fast approvals",
  revShare = "40",
  features = ["High Paying", "SaaS", "Premium"],
  verified = true
}) => {
  return (
    <Card className="twello-card p-6">
      <div className="space-y-4">
        {/* Header */}
        <div>
          <h3 className="font-bold text-xl text-[#0F172A] mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
        
        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {features.map((feature, index) => (
            <span 
              key={index}
              className="text-sm font-medium text-gray-700"
            >
              {feature}
            </span>
          ))}
          {verified && (
            <span className="text-sm font-medium text-gray-500 ml-auto">
              Verified
            </span>
          )}
        </div>
        
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {type && (
              <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100">
                {type}
              </Badge>
            )}
            
            {payout && (
              <Badge variant="default" className="bg-green-100 text-green-700 hover:bg-green-100 text-xs">
                ${payout}
              </Badge>
            )}
            
            {tags.map((tag, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        {/* Action Button */}
        <div className="pt-2">
          <Link to={`/offers/${id}`}>
            <Button 
              variant="outline" 
              className="w-full border-2 border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white font-medium py-2 px-6 rounded-xl transition-colors"
            >
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default OfferCard;