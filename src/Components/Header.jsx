import React, { useState } from "react";
import logo from "../assets/bmdu-logo.png";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [isSideBarOpenMobile, setIsSideBarOpenMobile] = useState(false);

  return (
    <div>
      {/* for laptop and tablet */}
      <div className="max-w-7xl mx-auto lg:flex hidden justify-between items-center h-24 px-4">
        <div className="flex items-center gap-10">
          <img src={logo} alt="BMDU Logo" className="w-40" />
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <p className="text-base font-semibold text-black">Service</p>
              <ChevronDown className="w-5 h-5 text-black" />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-base font-semibold text-black">Agency</p>
              <ChevronDown className="w-5 h-5 text-black" />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-base font-semibold text-black">Case Study</p>
              <ChevronDown className="w-5 h-5 text-black" />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-base font-semibold text-black">Resources</p>
              <ChevronDown className="w-5 h-5 text-black" />
            </div>
            <p className="text-base font-semibold text-black">Contact</p>
          </div>
        </div>
        <div className="border-2 border-black rounded-md py-2 px-5">
          <p className="text-base font-semibold text-black">DESIGN PORTFOLIO</p>
        </div>
      </div>

      {/* for mobile and tablet */}
      <div className="lg:hidden flex justify-between items-center h-20 px-4">
        <img src={logo} alt="BMDU Logo" className="w-32" />
        <Menu className="w-8 h-8 text-[#005989] cursor-pointer" onClick={() => setIsSideBarOpenMobile(true)}/>
        <div className={`w-72 sm:w-96 h-screen bg-[#005989] fixed top-0 right-0 z-50 shadow-lg flex flex-col p-10 gap-5 transition-all duration-300 ${ isSideBarOpenMobile ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex justify-end">
            <X className="w-8 h-8 text-white cursor-pointer transition-all duration-300 hover:rotate-90" onClick={()=>setIsSideBarOpenMobile(false)} />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center w-full justify-between">
              <p className="text-base font-semibold text-white">Service</p>
              <ChevronDown className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-center w-full justify-between">
              <p className="text-base font-semibold text-white">Agency</p>
              <ChevronDown className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-center w-full justify-between">
              <p className="text-base font-semibold text-white">Case Study</p>
              <ChevronDown className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-center w-full justify-between">
              <p className="text-base font-semibold text-white">Resources</p>
              <ChevronDown className="w-5 h-5 text-white" />
            </div>
            <p className="text-base font-semibold text-white">Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
