import React from "react";
import { Phone, Mail, Smartphone, MapPin } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="w-full bg-white py-10">
      <div className="flex lg:flex-row flex-col justify-between items-start lg:px-20 sm:px-10 px5">
        <div className="flex flex-col gap-7 lg:w-1/2 w-full lg:px-20 p-5">
          <p className="text-5xl font-bold text-black">Contact Us</p>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-xl font-semibold text-black">Get in Touch</p>
            <p className="text-base text-gray-600">You can reach us anytime</p>
          </div>
          <form className="flex flex-col gap-5 w-full">
            <div className="flex flex-col w-full">
              <label className="text-sm font-medium text-black">Name</label>
              <input type="text" className="border-b-2 border-black outline-none w-full"/>
            </div>
            <div className="flex flex-col w-full">
              <label className="text-sm font-medium text-black">Email</label>
              <input type="email" className="border-b-2 border-black outline-none w-full"/>
            </div>
            <div className="flex flex-col w-full">
              <label className="text-sm font-medium text-black">Phone number</label>
              <input type="tel" className="border-b-2 border-black outline-none w-full"/>
            </div>
            <textarea rows="6" placeholder="How can we help?" className="border-2 border-black rounded-md p-2 placeholder:text-black text-sm font-semibold"></textarea>
            <button type="button" className="bg-[#005989] text-white text-lg font-medium w-32 py-2 rounded-full">Submit</button>
          </form>
        </div>
        <div className="relative w-[500px] lg:block hidden">
          <div className="absolute -right-20 top-10 w-[200px] h-[400px] bg-[#005989] rounded-bl-2xl rounded-tl-2xl"></div>
          <div className="relative top-24 -right-12 z-10 w-[500px] h-[300px] bg-black text-white rounded-2xl p-10 flex flex-col gap-4 shadow-lg">
            <p className="text-xl font-semibold">Contact us</p>
            <div className="flex items-center gap-3">
              <Phone className="text-white w-5 h-5" />
              <span className="text-white text-sm">+91 759 949 0885</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-white w-5 h-5" />
              <span className="text-white text-sm">info@digitalutilization.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Smartphone className="text-white w-5 h-5" />
              <span className="text-white text-sm">+91 96667 371 301</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-white w-5 h-5" />
              <span className="text-white text-sm">B-41, B-Block, Sector-63, Noida, Uttar Pradesh 201301 (India)</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full lg:hidden bg-black lg:rounded-lg p-5">
            <p className="text-xl font-semibold">Contact us</p>
            <div className="flex items-center gap-3">
              <Phone className="text-white w-5 h-5" />
              <span className="text-white text-sm">+91 759 949 0885</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-white w-5 h-5" />
              <span className="text-white text-sm">info@digitalutilization.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Smartphone className="text-white w-5 h-5" />
              <span className="text-white text-sm">+91 96667 371 301</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-white w-5 h-5" />
              <span className="text-white text-sm">B-41, B-Block, Sector-63, Noida, Uttar Pradesh 201301 (India)</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
