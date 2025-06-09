import React from "react";
import instagram from "../assets/hugeicons_instagram.png";
import facebook from "../assets/basil_facebook-outline.png";
import twitter from "../assets/pajamas_twitter.png";
import ril from "../assets/ri_medium-line.png";

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-4 container mx-auto w-11/12">
      {/* Footer Container */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side */}
        <div className="md:w-1/4 bg-gray-100 p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-4 text-purple-600">Inklune</h1>
          <p className="text-gray-600 mb-6">
            A living archive of voices where ideas are planted, conversations
            bloom, and communities grow.
          </p>
          <div className="flex gap-3">
            {[
              { icon: twitter, alt: "Twitter" },
              { icon: instagram, alt: "Instagram" },
              { icon: facebook, alt: "Facebook" },
              { icon: ril, alt: "Medium" },
            ].map((social, index) => (
              <div
                key={index}
                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center
                hover:bg-purple-100 transition-colors duration-200 cursor-pointer"
              >
                <img src={social.icon} alt={social.alt} className="w-5 h-5" />
              </div>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* First column */}
          <div className="space-y-4">
            <h1 className="text-lg font-semibold text-gray-800">Explore</h1>
            <ul className="space-y-3 text-gray-600">
              {[
                "Featured Stories",
                "Categories",
                "Communities Discussion",
                "Writing Resources",
                "Events & Workshops",
              ].map((item, index) => (
                <li
                  key={index}
                  className="hover:text-purple-600 cursor-pointer transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Second column */}
          <div className="space-y-4">
            <h1 className="text-lg font-semibold text-gray-800">Company</h1>
            <ul className="space-y-3 text-gray-600">
              {["About Us", "Our Team", "Careers", "Press", "Contact"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="hover:text-purple-600 cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Third column */}
          <div className="space-y-4">
            <h1 className="text-lg font-semibold text-gray-800">Legal</h1>
            <ul className="space-y-3 text-gray-600">
              {[
                "Terms of Service",
                "Privacy Policy",
                "Cookies Policy",
                "Content Guidelines",
                "Accessibility",
              ].map((item, index) => (
                <li
                  key={index}
                  className="hover:text-purple-600 cursor-pointer transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex flex-col md:flex-row items-center justify-between mx-auto mt-12 pt-6 border-t border-gray-200 px-4">
        <div className="text-gray-500 mb-4 md:mb-0">
          &copy; 2025, Inklune. All rights reserved.
        </div>
        <div className="text-gray-500 font-manRope font-light">
          "Write Under the Moon. Shine beyond the Stars"
        </div>
      </div>
    </footer>
  );
};

export default Footer;
