import { Link as ScrollLink } from "react-scroll";
import { Phone, Globe, Calendar } from "lucide-react";
import collegeNameImage from "@/assets/images/m-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-12 border-t border-gray-400">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* College Logo & Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img 
            src={collegeNameImage} 
            alt="SCOE Logo" 
            className="w-76 h-auto object-contain transition-transform hover:scale-105 duration-300" 
          />
          <a 
            href="https://www.sce.edu.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-3 text-lg font-semibold text-[#a99955] hover:underline transition-all duration-300"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Saraswati College of Engineering, Navi Mumbai
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#74946c] flex items-center mb-4">
            <Globe className="w-5 h-5 mr-2 text-[#74946c]" /> Quick Links
          </h3>
          <hr className="border-gray-400 mb-4" />
          <ul className="space-y-3">
            <li><ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer hover:text-[#bc5939] text-sm">Home</ScrollLink></li>
            <li><ScrollLink to="scoe" smooth={true} duration={500} className="cursor-pointer hover:text-[#bc5939] text-sm">About SCOE</ScrollLink></li>
            <li><ScrollLink to="conference" smooth={true} duration={500} className="cursor-pointer hover:text-[#bc5939] text-sm">Conference</ScrollLink></li>
            <li><ScrollLink to="patrons-chairs" smooth={true} duration={500} className="cursor-pointer hover:text-[#bc5939] text-sm">Patrons & Chairs</ScrollLink></li>
            <li><ScrollLink to="committee" smooth={true} duration={500} className="cursor-pointer hover:text-[#bc5939] text-sm">Committee</ScrollLink></li>
          </ul>
        </div>

        {/* Conference Details */}
        <div>
          <h3 className="text-xl font-semibold text-[#74946c] flex items-center mb-4">
            <Calendar className="w-5 h-5 mr-2 text-[#74946c]" /> Conference Details
          </h3>
          <hr className="border-gray-400 mb-4" />
          <ul className="space-y-3">
            <li><ScrollLink to="timeline" smooth={true} duration={500} className="cursor-pointer hover:text-[#bc5939] text-sm">Conference Timeline</ScrollLink></li>
            <li><ScrollLink to="conference-tracks" smooth={true} duration={500} className="cursor-pointer hover:text-[#bc5939] text-sm">Tracks</ScrollLink></li>
            <li><ScrollLink to="call-for-paper" smooth={true} duration={500} className="cursor-pointer hover:text-[#bc5939] text-sm">Call for Papers</ScrollLink></li>
            <li><ScrollLink to="registration" smooth={true} duration={500} className="cursor-pointer hover:text-[#bc5939] text-sm">Registrations</ScrollLink></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold text-[#74946c] flex items-center mb-4">
            <Phone className="w-5 h-5 mr-2 text-[#74946c]" /> Contact Us
          </h3>
          <hr className="border-gray-400 mb-4" />
          <ul className="space-y-3 text-sm">
            <li> Prof. Manoj Pillai: <a href="tel:9969361243" className="text-[#bc5939] text-sm ">9969361243</a></li>
            <li> Prof. Vaibhav Ajmire: <a href="tel:9766447290" className="text-[#bc5939] text-sm">9766447290</a></li>
            <li> Prof. Amruta Patil: <a href="tel:7709945423" className="text-[#bc5939] text-sm">7709945423</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-400 mt-8"></div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-600 mt-6">
        &copy; {new Date().getFullYear()} <a href="https://www.sce.edu.in/" className="text-[#a99955] hover:underline">sce.edu.in</a>. All rights reserved.
        <br /> Website Designed by <span className="text-[#5C7A4D] font-semibold">Saraswati College of Engineering</span>.
      </div>
    </footer>
  );
};

export default Footer;
