import React from 'react';

const BrandsMarquee: React.FC = () => {
  const brands = [
    'Amazon', 'Booking.com', 'Shopify', 'Payoneer', 
    'Clickbank', 'Hubspot', 'Semrush', 'Fiverr', 
    'Udemy', 'Canva'
  ];
  
  return (
    <div className="relative overflow-hidden whitespace-nowrap py-6">
      <div className="flex animate-[scroll_25s_linear_infinite]">
        {brands.concat(brands).map((brand, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 flex items-center justify-center mx-8"
          >
            <span className="text-gray-500 font-bold text-xl">{brand}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsMarquee;