
import { Link } from "react-router-dom";
import { MapPin, Heart, Share, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface EventCardProps {
  title: string;
  date: string;
  image?: string;
  description?: string;
  tag?: string;
  id?: string;
  price?: string;
  venue?: string;
  city?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  image,
  description,
  tag,
  id = "1",
  price = "FREE",
  venue,
  city
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-white rounded-xl border border-gray-100">
      {/* Image Section */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
            <div className="text-blue-400 text-4xl font-light">{date}</div>
          </div>
        )}
        
        {/* Price Tag */}
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
            price === 'FREE' 
              ? 'bg-green-500 text-white' 
              : 'bg-white text-gray-900 shadow-sm'
          }`}>
            {price}
          </span>
        </div>
        
        {/* Action Icons */}
        <div className="absolute top-3 right-3 flex space-x-2">
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
            <Share className="h-4 w-4 text-gray-600" />
          </button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
            <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
          </button>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-5">
        {/* Date and Title */}
        <div className="flex items-start gap-4 mb-3">
          <div className="flex-shrink-0">
            <div className="text-blue-600 text-xs font-semibold tracking-wide uppercase">
              {date.split(' ')[0]}
            </div>
            <div className="text-2xl font-bold text-gray-900 leading-none">
              {date.split(' ')[1]}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg text-gray-900 leading-tight mb-1 line-clamp-2">
              {title}
            </h3>
          </div>
        </div>
        
        {/* Location */}
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          <span className="text-sm truncate">
            {venue && city ? `${venue}, ${city}` : city || 'Location TBD'}
          </span>
        </div>
        
        {/* Description */}
        {description && (
          <p className="text-sm text-gray-600 line-clamp-2 mb-4">
            {description}
          </p>
        )}
        
        {/* Tag and Action */}
        <div className="flex items-center justify-between">
          {tag && (
            <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
              {tag}
            </span>
          )}
          <Link to={`/events/${id}`} className="ml-auto">
            <Button variant="outline" size="sm" className="text-xs px-4">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default EventCard;
