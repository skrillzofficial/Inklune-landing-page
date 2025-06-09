import React from "react";
import blog from "../assets/blog.gif";

const Hero = () => {
  return (
    <div className="relative z-10 container mx-auto w-11/12 pt-[90px]"> {/* Added z-index positioning */}
      <div className="flex flex-col md:flex-row md:h-[400px] w-full mx-auto">
        {/* left div */}
        <div className="flex flex-col w-full md:w-auto gap-[30px] md:gap-[57px] py-[20px] md:py-[41px] md:pr-[20px] items-center md:items-start">
          <div className="flex flex-col w-full gap-5 text-center md:text-left">
            <h1 className="text-[32px] md:text-[38px] font-semibold font-Manrope">
              Write Under the Moon. Shine Beyond the Stars.
            </h1>
            <p className="text-[16px] font-normal font-Manrope max-w-[600px]">
              A living archive of voices where ideas are planted, conversations
              bloom, and communities grow. Join the writers and thinkers who
              value connection over noise.
            </p>
          </div>
          <div className="flex gap-[10px] flex-wrap justify-center md:justify-start">
            <button className="text-[16px] w-[120px] md:w-[170px] h-[40px] py-[5px] px-[10px] text-white bg border-[1px] rounded-sm border-purple-500 hover:bg-purple-600 transition-colors">
              Start Writing
            </button>
            <button className="text-[16px] w-[150px] md:w-[170px] h-[40px] py-[5px] px-[10px] text-black border-[1px] rounded-sm border-purple-500 hover:bg-gray-100 transition-colors">
              Explore Stories
            </button>
          </div>
        </div>
        {/* right div */}
        <div className="h-[300px] md:h-full w-full md:w-auto flex items-center justify-center">
          <img 
            className="w-full h-full object-contain md:object-cover" 
            src={blog} 
            alt="Blog illustration" 
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;