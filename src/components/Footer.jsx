import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Award, Globe, Heart, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white relative overflow-hidden border-t border-white/5">

      <div className="container mx-auto px-4 md:px-6 py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand Info */}
          <div>
            <img src="/src/assets/navImg.png" alt="questes logo" className='h-14 w-28' />
            <p className="text-brand-faint/70 text-sm leading-relaxed max-w-xs">
              A premier global pharmaceutical manufacturer delivering patient-centric formulations across Cardiology, ICU, and Pain Management.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-brand-faint/75">
              <li>
                <Link to="/about/vision-mission" className="hover:text-brand-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>Our Vision & Mission
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-brand-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>Therapeutics Portfolio
                </Link>
              </li>
              <li>
                <Link to="/science" className="hover:text-brand-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>R&D Sciences & DNA
                </Link>
              </li>
              <li>
                <Link to="/infrastructure" className="hover:text-brand-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>Scale & Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          {/* Therapeutic Areas */}
          <div>
            <h4 className="font-bold text-base mb-4">Therapeutic Focus</h4>
            <ul className="space-y-2 text-sm text-brand-faint/75">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span> Cardiology Range
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span> ICU Critical Care
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span> Sterile Injectables
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span> Pain Management
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-base mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-brand-faint/75">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                <span>
                  Sirisuns Hirise Building, First & Second Floor, Plot No.13, Sy. No. 70, Image Garden Road, Silicon Valley, Madhapur, Hyderabad-500081
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

        <div className="mt-10 pt-6 border-t border-white/5 text-center text-xs text-brand-muted flex flex-col sm:flex-row justify-center items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Questes Pharma Pvt. Ltd | All rights reserved | Powered by <a href="https://arccreativemedia.com/" target="_blank" rel="noopener noreferrer">Arc Creative Media</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
