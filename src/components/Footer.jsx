import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Award, Globe, Heart, Shield } from 'lucide-react';
import logo from "../assets/navImg.png"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#EBF3FC] via-[#E2EDF9] to-[#D5E5F7] text-brand-dark relative z-20 shadow-[0_-25px_50px_-12px_rgba(8,73,149,0.18),0_-10px_25px_-5px_rgba(0,0,0,0.08)] border-t-2 border-[#084995]/20">

      {/* Subtle ambient light glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-200/50 rounded-full filter blur-[100px]" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-100/50 rounded-full filter blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#084995_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* Brand Info */}
          <div className="space-y-3">
            <img src={logo} alt="questus logo" className='h-12 sm:h-14 w-auto object-contain' />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xs font-normal">
              A premier global pharmaceutical manufacturer delivering patient-centric formulations across Cardiology, Antifungal, Anaesthesia and ICU range.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-[#0A2E5C]">Quick Links</h4>
            <ul className="space-y-2 text-sm sm:text-base text-slate-600">
              <li>
                <Link to="/about/questus-pharma" className="hover:text-brand-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-brand-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>Portfolio
                </Link>
              </li>
              <li>
                <Link to="/science" className="hover:text-brand-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>Science & DNA
                </Link>
              </li>
              <li>
                <Link to="/infrastructure" className="hover:text-brand-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-brand-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Therapeutic Areas */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-[#0A2E5C]">Therapeutic Portfolio</h4>
            <ul className="space-y-2 text-sm sm:text-base text-slate-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span> Cardiovascular
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span> Antifungals
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span> Anaesthesia
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span> ICU
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span> Nutritional
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-[#0A2E5C]">Contact Us</h4>
            <ul className="space-y-3 text-sm sm:text-base text-slate-600">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-brand-primary flex-shrink-0 mt-1" />
                <span className="leading-relaxed">
                  3rd Floor, Niharika Enclave, HIG-71, Phase-V, KPHB Colony, Kukatpally, Hyderabad, Telangana – 500085, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <a href="tel:+918121009675" className="hover:text-brand-primary transition-colors">+91-8121009675</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <a href="mailto:connect@questuspharma.com" className="hover:text-brand-primary transition-colors break-all">connect@questuspharma.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-8 sm:mt-12 pt-6 border-t border-brand-border text-center text-xs sm:text-sm text-slate-500 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
          <p>&copy; {new Date().getFullYear()} Questus Pharma Private Limited  | All rights reserved | Powered by <a href="https://arccreativemedia.com/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary underline transition-colors">Arc Creative Media</a></p>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
