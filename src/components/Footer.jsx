import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Award, Globe, Heart, Shield } from 'lucide-react';
import logo from "../assets/navImg.png"

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white relative overflow-hidden border-t border-white/5">

      <div className="container mx-auto px-4 md:px-6 py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand Info */}
          <div>
            <img src={logo} alt="questus logo" className='h-14 w-28' />
            <p className="text-brand-faint/70 text-base leading-relaxed max-w-xs">
              A premier global pharmaceutical manufacturer delivering patient-centric formulations across Cardiology, Antifungal, Anaesthesia and ICU range.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-base text-brand-faint/75">
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
            <h4 className="font-bold text-lg mb-4">Therapeutic Portfolio</h4>
            <ul className="space-y-2 text-base text-brand-faint/75">
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
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-base text-brand-faint/75">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                <span>
                  3rd Floor, Niharika Enclave, HIG-71, Phase-V, KPHB Colony, Kukatpally, Hyderabad, Telangana – 500085, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-primary" />
                <span>+91-8121009675</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-primary" />
                <span>connect@questuspharma.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center text-sm text-brand-muted flex flex-col sm:flex-row justify-center items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Questus Pharma Pvt. Ltd | All rights reserved | Powered by <a href="https://arccreativemedia.com/" target="_blank" rel="noopener noreferrer">Arc Creative Media</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
