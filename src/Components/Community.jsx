import React, { useState } from "react";
import CommunityCard from "./CommunityCard";
import ImageU from "../assets/author-img1.jpg";

const Community = () => {
  const [followedWriters, setFollowedWriters] = useState([]);
  

  const toggleFollow = (writerId) => {
    if (followedWriters.includes(writerId)) {
      setFollowedWriters(followedWriters.filter((id) => id !== writerId));
    } else {
      setFollowedWriters([...followedWriters, writerId]);
    }
  };

  return (
    <section id="Community" className="container mx-auto px-4 sm:px-6 py-8 md:py-12 w-11/12">
      {/* Section Header */}
      <div className="text-center mb-8 md:mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 font-Manrope">
          Community Voices
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
        {/* Discussions Section */}
        <div className="lg:w-2/3 bg-gray-50 rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 pb-2">
            Trending Discussions
          </h2>

          <div className="md:space-y-4">
            <CommunityCard
              imageUrl={ImageU}
              Name="Bibian"
              Time="2 hours ago"
              Data="Craft & Techniques"
              Title="How do you overcome writer's block when on a deadline?"
              Story="I'm struggling with a project due next week and can't seem to get past the introduction. Any proven techniques from the community?"
              like="242"
              comment="50"
              Text="Join Discussion"
            />

            <CommunityCard
              imageUrl={ImageU}
              Name="Bibian"
              Time="2 hours ago"
              Data="Craft & Techniques"
              Title="How do you overcome writer's block when on a deadline?"
              Story="I'm struggling with a project due next week and can't seem to get past the introduction. Any proven techniques from the community?"
              like="242"
              comment="50"
              Text="Join Discussion"
            />
          </div>

          {/* <div className="mt-6 md:mt-8 text-center">
            <button className="px-4 py-1.5 md:px-6 md:py-2 bg-white border border-gray-300 rounded-full text-sm md:text-base text-gray-700 hover:bg-gray-100 transition-colors">
              View All Discussions
            </button>
          </div> */}
        </div>

        {/* Featured Writers Section */}
        <div className="lg:w-1/3 bg-gray-50 rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm mt-4 lg:mt-0">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 pb-2">
            Featured Writers
          </h2>

          <div className="space-y-3 md:space-y-4">
            {[1, 2, 3].map((writer) => (
              <div
                key={writer}
                className="flex items-center gap-3 md:gap-4 p-2 md:p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <img
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-white"
                  src={ImageU}
                  alt="Writer profile"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-800 truncate">
                    Maryann
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 truncate">
                    Poetry & Memoir
                  </p>
                </div>
                <button
                  onClick={() => toggleFollow(writer)}
                  className={`px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm rounded-full transition-colors whitespace-nowrap ${
                    followedWriters.includes(writer)
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {followedWriters.includes(writer) ? "Following" : "Follow"}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4 md:mt-6">
            <h1 className="font-semibold text-base md:text-lg">Popular Tags</h1>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                "#Fiction",
                "#Poetry",
                "#CreativeProcess",
                "#Love",
                "#WritingLife",
                "#VentureCapital",
                "#WritingCommunity",
                "#Inspiration",
                "#LiteraryLife",
                "#TraumaHealing",
                "#Gaming",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs md:text-sm px-2 py-1 bg-gray-200 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
