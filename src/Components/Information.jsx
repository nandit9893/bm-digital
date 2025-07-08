import React from "react";
import MapBoxPreview from "./MapBox";

const Information = () => {
  return (
    <div className="w-full my-10 flex flex-col gap-20">
      <div className="max-w-7xl w-full mx-auto bg-gradient-to-b from-[#e3eff8] to-[#719fb8] lg:p-20 sm:p-10 p-5 rounded-none lg:rounded-2xl">
        <div className="flex flex-col gap-10 w-full">
          <p className="text-2xl md:text-4xl font-semibold text-black">General Information</p>
          <p className="lg:w-2xl w-full text-black font-medium leading-[27px] md:leading-[37px] text-base md:text-xl">For general information, please get in touch with us at <span className="text-[#005989] font-semibold">{" "}info@digitalutilization.com</span>{" "}or give us call at{" "}<span className="text-[#005989] font-semibold">{" "}+91 7599490885</span>{" "}and we’ll take it from here.</p>
          <div className="flex lg:flex-row flex-col justify-between gap-10 w-full">
            <div className="flex flex-col gap-5 w-full lg:w-1/2">
              <p className="text-xl md:text-3xl font-semibold text-black">Location</p>
              <div className="flex gap-3 items-start w-full">
                <img src="https://flagcdn.com/w40/in.png" alt="" className="w-6 h-6 mt-2"/>
                <p className="text-sm md:text-base font-semibold text-black">B-41, B-Block, Sector-63, Noida, Uttar Pradesh 201301 (India)</p>
              </div>
              <div className="flex gap-3 items-start w-full">
                <img src="https://static.vecteezy.com/system/resources/previews/006/329/132/original/national-flag-of-canada-3d-rendering-waving-flag-high-quality-image-original-colors-sizes-and-shapes-free-photo.jpg"alt=""className="w-6 h-6" />
                <p className="text-sm md:text-base font-semibold text-black">1335 13th Ave Calgary, AB, Canada</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <MapBoxPreview />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 items-center max-w-7xl w-full mx-auto justify-center lg:px-20 sm:px-10 px5">
        <p className="text-2xl md:text-4xl w-full lg:w-xl font-semibold text-center text-black">Talk to Our Sales & Marketing Department Team</p>
        <p className="text-base md:text-lg md:leading-[27px] leading-[24px] w-full lg:w-4xl text-center font-medium text-gray-800">Discover tailored strategies and collaborative solutions for your business growth. From innovative marketing campaigns to strategic partnerships, our team is ready to propel your success. Reach out today to start a conversation that unlocks new opportunities for your business.</p>
      </div>
      <div className="max-w-7xl w-full mx-auto">
        <div className="w-full bg-[#C5D9F1] flex flex-col gap-10 lg:p-10 md:p-10 p-5 py-10   rounded-none lg:rounded-2xl items-center">
          <p className="text-2xl md:text-5xl font-semibold text-black text-center">Do you have any questions for us?</p>
          <p className="text-lg md:text-2xl font-medium lg:w-2xl w-full text-center text-gray-800">If there are question you want to ask, we will answer all your question.</p>
          <button type="button" className="bg-[#005989] text-white text-lg font-medium w-36 py-2 rounded-full">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Information;
