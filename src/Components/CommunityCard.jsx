import React, { useState } from "react";
import { Heart, MessageSquareText } from "lucide-react";
import CommunityModal from "./CommunityModal";

const CommunityCard = ({
  imageUrl,
  Text,
  Name,
  Data,
  Time,
  Title,
  Story,
  like,
  comment,
  children,
}) => {
  const [JoinDiscussion, SetJoinDiscussion] = useState(false);

  const HandleDiscussion = () => {
    SetJoinDiscussion(!JoinDiscussion);
  };

  const closeModal = () => {
    SetJoinDiscussion(false);
  };

  return (
    <div className="p-1 sm:p-3 md:p-4 w-full">
      {/* Card Container */}
      <div className="flex p-2 md:p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[200px]">
        {/* Avatar */}
        <div className="mr-1 md:mr-3 sm:mr-4 flex-shrink-0">
          <img
            className="w-9 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white"
            src={imageUrl}
            alt={Name || "User"}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-1 sm:gap-2 w-full">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="font-normal text-gray-900 text-[15px] md:text-sm sm:text-base">
                {Name}
              </h1>
              <p className="text-[10px] md:text-xs text-gray-500">{Time}</p>
            </div>
            <span className="text-[10px] sm:text-xs text-gray-500 bg-gray-100 px-2 sm:px-3 sm:py-1 rounded-xl">
              {Data}
            </span>
          </div>

          {/* Post content - full text display */}
          <div className="py-1 sm:py-2 flex-1">
            {Title && (
              <h2 className="font-semibold text-[14px] sm:text-lg md:text-[20px] text-gray-800 mb-1">
                {Title}
              </h2>
            )}
            {Story && (
              <p className="text-sm sm:text-base text-gray-600 whitespace-pre-wrap break-words">
                {Story}
              </p>
            )}
          </div>

          {/* Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-1 sm:pt-2">
            <div className="flex gap-4 text-sm text-gray-500">
              <button disabled className="opacity-60 cursor-not-allowed">
                <span className="flex gap-1 items-center">
                  <Heart size={15} /> {like}
                </span>
              </button>
              <button disabled className="opacity-60 cursor-not-allowed">
                <span className="flex gap-1 items-center">
                  <MessageSquareText size={15} /> {comment}
                </span>
              </button>
            </div>
            {Text && (
              <button
                onClick={HandleDiscussion}
                className="px-2 py-0.5 sm:py-1 text-xs text-gray-500 border-2 rounded-full whitespace-nowrap"
              >
                {Text}
              </button>
            )}
          </div>
          <div className="relative top-10">
            {JoinDiscussion && <CommunityModal closeModal={closeModal} />}
          </div>
        </div>
      </div>

      {/* Optional children */}
      {children && <div className="mt-1 sm:mt-2">{children}</div>}
    </div>
  );
};

export default CommunityCard;