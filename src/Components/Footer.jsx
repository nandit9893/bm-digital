import React from "react";
import footer_bg from "../assets/footer-bg.png";
import logo from "../assets/bmdu-logo.png";
import { Facebook, Instagram, Linkedin, Mail, MapPin, PhoneCall, Twitter } from "lucide-react";

const Footer = () => {
  return (
<div
  className="w-full h-[1300px] lg:h-[800px]"
  style={{
    backgroundImage: `url(${footer_bg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  }}
>

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-20 py-20 lg:px-0 sm:px-10 px-5">
        <p className="text-2xl md:text-6xl font-semibold text-white md:leading-[80px] leading-[37px] w-full lg:w-4xl">Ready To Get Free Consulations For Any Kind Of It Solutions ?</p>
        <div className="flex lg:flex-row flex-col gap-20 w-full">
            <div className="lg:w-1/2 w-full flex flex-col gap-10">
                <img src={logo} alt="BMDU Logo" className="w-40" />
                <p className="text-[#bdb2b2] text-base font-normal">We offers a comprehensive suite of digital marketing services that cover all aspects of our online presence. From SEO and social media marketing to content creation and PPC advertising, they have the expertise and resources to handle our diverse marketing needs.</p>
                <div className="flex gap-5 w-full items-center">
                   <a href="https://www.facebook.com/DigitalUtilization" target="_blank" className="w-10 h-10 rounded-full bg-white p-2">
                       <Facebook className="text-black w-6 h-6" />
                   </a>
                   <a href="https://x.com/digitalutiliza1" target="_blank" className="w-10 h-10 rounded-full bg-white p-2">
                       <Twitter className="text-black w-6 h-6" />
                   </a>
                   <a href="https://www.linkedin.com/company/digitalutilization" target="_blank" className="w-10 h-10 rounded-full bg-white p-2">
                       <Linkedin className="text-black w-6 h-6" />
                   </a>
                   <a href="https://www.instagram.com/digitalutilization/" target="_blank" className="w-10 h-10 rounded-full bg-white p-2">
                       <Instagram className="text-black w-6 h-6" />
                   </a>
                </div>
            </div>
            <div className="lg:w-1/2 w-full grid md:grid-cols-3 grid-cols-2 gap-5">
                <div className="flex flex-col gap-10 w-full">
                    <p className="text-white font-semibold text-lg">Navigation</p>
                    <div className="flex flex-col gap-5 w-full">
                        <p className="text-base font-normal text-[#bdb2b2]">Service</p>
                        <p className="text-base font-normal text-[#bdb2b2]">Agency</p>
                        <p className="text-base font-normal text-[#bdb2b2]">Case Study</p>
                        <p className="text-base font-normal text-[#bdb2b2]">Resource</p>
                        <p className="text-base font-normal text-[#bdb2b2]">Contact</p>
                    </div>
                </div>
                <div className="flex flex-col gap-10 w-full">
                    <p className="text-white font-semibold text-lg">Licence</p>
                    <div className="flex flex-col gap-5 w-full">
                        <p className="text-base font-normal text-[#bdb2b2]">Privacy Policy</p>
                        <p className="text-base font-normal text-[#bdb2b2]">Copyright</p>
                        <p className="text-base font-normal text-[#bdb2b2]">Email Address</p>
                    </div>
                </div>
                <div className="flex flex-col gap-10 w-full lg:mt-0 mt-10">
                    <p className="text-white font-semibold text-lg">Contact</p>
                    <div className="flex flex-col gap-5 w-full">
                       <div className="flex gap-2 items-center w-full">
                            <PhoneCall className="text-white w-5 h-5" />
                            <p className="text-base font-normal text-[#bdb2b2]">+91 759 949 0885</p>
                       </div>
                        <div className="flex gap-2 items-center w-full">
                            <Mail className="text-white w-5 h-5" />
                            <p className="text-base font-normal text-[#bdb2b2]">info@digitalutilization.com</p>
                       </div>
                        <div className="flex gap-2 items-center w-full">
                            <MapPin className="text-white w-5 h-5" />
                            <p className="text-base font-normal text-[#bdb2b2]">Sector-63, Noida</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
