import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Activity, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../assets/navImg.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      name: 'About Us',
      hasDropdown: true,
      items: [
        { name: 'Questus Pharma', to: '/about/questus-pharma', icon: <Activity className="w-4 h-4 mr-2 text-brand-primary" /> },
        { name: 'Vision and Mission', to: '/about/vision-mission', icon: <Globe className="w-4 h-4 mr-2 text-brand-secondary" /> }
      ]
    },
    { name: 'Portfolio', to: '/portfolio' },
    { name: 'Science & DNA', to: '/science' },
    { name: 'Infrastructure', to: '/infrastructure' },
    { name: 'Careers', to: '/careers' },
    { name: 'Contact', to: '/contact' }
  ];

  const handleDropdownEnter = (name) => {
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const forceSolidNav = !isHomePage || isScrolled;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${forceSolidNav ? 'glass-nav py-1.5 sm:py-2' : 'bg-white/75 backdrop-blur-md border-b border-brand-border/40 py-2 sm:py-2.5 shadow-[0_2px_10px_rgba(8,73,149,0.03)]'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-10 flex justify-between items-center">
        {/* Logo area */}
        <Link to="/" className="flex items-center cursor-pointer group">
          <img
            src={Logo}
            alt="questus logo"
            className={`w-auto object-contain transition-all duration-300 ${forceSolidNav ? 'h-11 sm:h-12 lg:h-14' : 'h-12 sm:h-14 lg:h-16'}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => link.hasDropdown && handleDropdownEnter(link.name)}
              onMouseLeave={handleDropdownLeave}
            >
              {link.hasDropdown ? (
                <div
                  className="flex items-center text-sm xl:text-base font-semibold transition-colors duration-300 cursor-pointer text-brand-dark hover:text-brand-primary"
                >
                  {link.name}
                  <ChevronDown className="ml-1 w-4 h-4" />
                </div>
              ) : (
                <Link
                  to={link.to}
                  className="flex items-center text-sm xl:text-base font-semibold transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-brand-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left text-brand-dark hover:text-brand-primary">
                  {link.name}
                </Link>
              )}

              {/* Dropdown Menu */}
              {link.hasDropdown && (
                <div
                  className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-brand-border/50 py-2 transition-all duration-300 transform origin-top ${activeDropdown === link.name ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                    }`}
                >
                  {link.items.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.to}
                      className="flex items-center px-4 py-3 hover:bg-brand-faint text-sm xl:text-base font-medium text-brand-dark transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <a href="https://wa.me/919581118081" className="bg-brand-primary hover:bg-brand-secondary text-white px-4 xl:px-5 py-1.5 xl:py-2 rounded-full text-sm font-bold shadow-[0_4px_14px_rgba(6,76,157,0.35)] hover:shadow-[0_6px_20px_rgba(6,76,157,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap" target="_blank" rel="noopener noreferrer">
            Chat With Us
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-lg focus:outline-none transition-colors text-brand-dark hover:bg-brand-light"
          onClick={() => {
            setIsOpen(!isOpen);
            setMobileActiveDropdown(null);
          }}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-y-auto overscroll-contain ${isOpen ? 'bg-white/98 backdrop-blur-xl max-h-[85vh] py-4 shadow-2xl border-b border-brand-border opacity-100 visible' : 'bg-transparent max-h-0 py-0 opacity-0 invisible pointer-events-none border-none shadow-none'
          }`}
      >
        <div className="flex flex-col px-5 sm:px-8 gap-1">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col">
              {link.hasDropdown ? (
                <div
                  onClick={() => setMobileActiveDropdown(mobileActiveDropdown === link.name ? null : link.name)}
                  className="py-3 font-semibold text-brand-dark border-b border-brand-border/40 flex justify-between items-center cursor-pointer select-none text-base"
                >
                  {link.name}
                  <ChevronDown className={`w-4 h-4 text-brand-secondary transition-transform duration-300 ${mobileActiveDropdown === link.name ? 'rotate-180' : ''}`} />
                </div>
              ) : (
                <Link
                  to={link.to}
                  className="py-3 font-semibold text-brand-dark border-b border-brand-border/40 block text-base hover:text-brand-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )}
              {link.hasDropdown && (
                <div className={`flex flex-col pl-3 gap-1 bg-brand-light/70 rounded-xl overflow-hidden transition-all duration-300 ${mobileActiveDropdown === link.name ? 'max-h-48 py-2 my-1 border border-brand-border/30' : 'max-h-0 py-0'}`}>
                  {link.items.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.to}
                      className="flex items-center py-2.5 px-2 text-sm font-medium text-brand-dark hover:text-brand-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <Link to="/contact" onClick={() => setIsOpen(false)} className="flex-1 bg-brand-primary text-white py-3 px-4 rounded-xl font-bold text-center shadow-md hover:bg-brand-secondary transition-colors text-sm sm:text-base">
              Partner With Us
            </Link>
            <a href="https://wa.me/919581118081" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-xl font-bold text-center shadow-md transition-colors text-sm sm:text-base">
              Chat With Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
