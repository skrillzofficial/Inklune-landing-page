import React from "react";

const ExploreCards = ({ imageUrl, Heading, text, children, }) => {
  return (
    <div className="flex justify-center items-center p-1 container mx-auto w-11/12">
      <div className={`flex flex-col w-[298px] h-[160px] bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer`}>
        {/* Icon Container */}
        {imageUrl && (
          <div className={`flex justify-center items-center py-6`}>
            <div className="p-2 bg-white rounded-full shadow-sm">
              <img
                src={imageUrl}
                alt={Heading || "Category icon"}
                className="w-6 h-6 object-contain"
              />
            </div>
          </div>
        )}

        {/* Content Section */}
        <div className="p-4 flex flex-col gap-2 h-full">
          {Heading && (
            <h3 className="font-semibold text-base text-gray-800 text-center">{Heading}</h3>
          )}
          {text && (
            <p className="text-sm text-gray-500 text-center">
              {text}
            </p>
          )}
          {children && (
            <div className="mt-auto text-xs text-center">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExploreCards;