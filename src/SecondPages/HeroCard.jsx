import React from "react";

const HeroCard = ({ imageUrl, Title, Story, Time, More, children }) => {
  return (
    <div className="w-[298px] relative group overflow-hidden rounded-lg shadow-lg">
      {/* Image container with gradient and blur */}
      <div className="relative">
        <img 
          className="w-[290px] h-[298px] object-cover transition-transform" 
          src={imageUrl} 
          alt="" 
        />
        {/* Gradient overlay for bottom blur effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pt-[50%]">
          {/* Blurred overlay for bottom half */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 backdrop-blur-md"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white font-manRope space-y-2 z-10">
        <h1 className="font-semibold text-lg">{Title}</h1>
        <p className="text-sm line-clamp-2">{Story}</p>
        <div className="flex justify-between text-xs opacity-80">
          <span>{Time}</span>
          <span className="hover:underline cursor-pointer">{More}</span>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;