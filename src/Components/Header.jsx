import React, { useState } from "react";
import { SquareMenu, X } from "lucide-react";
import { Search } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="fixed w-full z-50 backdrop-blur-sm bg-white/80 shadow-sm">
      <div className="relative z-50 container mx-auto">
        <nav className="bg-white/0"> {/* Changed to transparent background */}
          <div className="px-[10px] md:px-[50px] py-[20px] flex justify-between items-center w-11/1mx-auto">
            <div className="flex items-center gap-[10px] md:gap-[20px]">
              <h1 className="text-[36px] font-semibold text-color">
                Inklune
              </h1>

              {/* Desktop Navigation */}
              <div className="hidden md:flex gap-8">
                <a className="text-[16px] font-Manrope text-gray-500 font-normal hover:text-color transition-colors" href="#">
                  Home
                </a>
                <a className="text-[16px] font-Manrope text-gray-500 font-normal hover:text-color transition-colors" href="#Explore">
                  Explore
                </a>
                <a className="text-[16px] font-Manrope text-gray-500 font-normal hover:text-color transition-colors" href="#Categories">
                  Categories
                </a>
                <a className="text-[16px] font-Manrope text-gray-500 font-normal hover:text-color transition-colors" href="#Community">
                  Community
                </a>
              </div>
            </div>

            {/* Desktop Search and Auth */}
            <div className="hidden md:flex items-center gap-[18px]">
              <div className="relative w-[273px]">
                <div className="absolute top-2 px-2 opacity-50"><Search /></div>
                <input
                  className="w-full h-[40px] px-[40px] border border-gray-300 rounded-full focus:outline-purple-500 bg-white/80 backdrop-blur-sm"
                  type="text"
                  placeholder="Search Stories"
                />
              </div>
              <div className="flex gap-[16px]">
                <button className="text-[16px] w-[83px] h-[40px] border text-color rounded-sm hover:bg-gray-50 transition-colors bg-white/80 backdrop-blur-sm">
                  Sign In
                </button>
                <button className="text-[16px] w-[83px] h-[40px] bg text-white rounded-sm hover:bg-purple-600 transition-colors">
                  Sign Up
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={30} color="gray" /> 
              ) : (
                <SquareMenu size={30} color="gray" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-40 py-4 px-5 md:hidden">
              <div className="flex flex-col gap-4">
                <a className="text-[16px] font-Manrope text-gray-500 font-normal py-2 hover:text-purple-500" href="#">
                  Home
                </a>
                <a className="text-[16px] font-Manrope text-gray-500 font-normal py-2 hover:text-purple-500" href="#">
                  Explore
                </a>
                <a className="text-[16px] font-Manrope text-gray-500 font-normal py-2 hover:text-purple-500" href="#">
                  Categories
                </a>
                <a className="text-[16px] font-Manrope text-gray-500 font-normal py-2 hover:text-purple-500" href="#">
                  Community
                </a>
              </div>
              <div className="flex flex-col gap-3 mt-4">
                <input
                  className="w-full h-[40px] px-[10px] border border-gray-300 rounded-sm mb-2 bg-white/90"
                  type="text"
                  placeholder="Search Stories"
                />
                <button className="w-full h-[40px] border text-color rounded-sm hover:bg-gray-50 transition-colors bg-white/90">
                  Sign In
                </button>
                <button className="w-full h-[40px] bg text-white rounded-sm hover:bg-purple-600 transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;