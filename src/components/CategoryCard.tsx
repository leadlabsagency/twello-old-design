
import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  icon: LucideIcon;
  name: string;
  count: number;
  color?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  icon: Icon, 
  name, 
  count, 
  color = 'bg-gray-100' 
}) => {
  return (
    <Link to={`/categories/${name.toLowerCase()}`}>
      <div className="bg-white border border-gray-100 rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col items-center text-center">
        <div className={`${color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
          <Icon className="h-8 w-8 text-gray-700" />
        </div>
        <h3 className="font-semibold text-lg mb-1">{name}</h3>
        <p className="text-sm text-gray-500">{count} tools</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
