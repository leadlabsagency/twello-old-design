import React from 'react';
import { Link } from 'react-router-dom';
import { DivideIcon as LucideIcon } from 'lucide-react';

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
  color = 'bg-blue-100' 
}) => {
  return (
    <Link to={`/categories/${name.toLowerCase()}`}>
      <div className="category-card">
        <div className={`category-icon ${color}`}>
          <Icon className="h-7 w-7 text-[#2563EB]" />
        </div>
        <h3 className="font-semibold text-lg mb-1 text-[#0F172A]">{name}</h3>
        <p className="text-sm text-gray-500">{count} listings</p>
      </div>
    </Link>
  );
};

export default CategoryCard;