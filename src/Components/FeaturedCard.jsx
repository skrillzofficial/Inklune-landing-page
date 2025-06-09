import React from "react";
import { Heart, MessageSquareText } from 'lucide-react';

const FeaturedCard = ({
  imageUrl,
  PhotoImage,
  Name,
  Date,
  Time,
  Title,
  Story,
  holder,
  like,
  comment,
  children,
}) => {
  return (
    <div className="max-w-[370px] min-w-[280px] w-11/12 container mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Featured Image */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt=""
          className="w-full h-[180px] object-cover rounded-t-xl"
        />
      )}

      {/* Author Section */}
      <div className="flex items-center gap-3 p-4">
        {PhotoImage && (
          <img
            src={PhotoImage}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
        )}
        <div>
          <h2 className="font-medium text-sm">{Name}</h2>
          <div className="flex gap-4 text-xs text-gray-500">
            <p>{Date}</p>
            <p>{Time}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 pb-3">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{Title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{Story}</p>
      </div>

      {/* Tags and Stats */}
      <div className="flex justify-between items-center px-4 pb-4">
        {holder && (
          <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
            {holder}
          </span>
        )}
        <div className="flex gap-4 text-sm text-gray-500">
          <button disabled={true} style={{cursor:"not-allowed"}}><span className="flex gap-2 opacity-60"> <Heart/> {like} </span></button>
          <button disabled={true} style={{cursor:"not-allowed"}}><span className="flex gap-2 opacity-60"><MessageSquareText/> {comment}</span></button>
        </div>
      </div>

      {/* Optional Children */}
      {children && <div className="px-6 pb-4">{children}</div>}
    </div>
  );
};

export default FeaturedCard;
