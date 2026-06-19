import React from 'react';
import HeroSlider from '../components/HeroSlider';
import DisplayData from '../components/sections/displayData';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const offerCards = [
    {
      title: "Cardiology – Critical Emergencies",
      desc: "Pharmaceutical formulations designed to support the management of critical cardiovascular conditions.",
      image: "/images/drug_discovery.png",
      link: "/portfolio"
    },
    {
      title: "Anesthesia",
      desc: "Quality anesthetic formulations developed for surgical and emergency care settings.",
      image: "/images/clinical_research.png",
      link: "/portfolio"
    },
    {
      title: "ICU – Critical Care",
      desc: "Specialized medicines that support intensive care units and emergency healthcare environments.",
      image: "/images/quality_assurance.png",
      link: "/portfolio"
    }
  ];

  return (
    <div className="bg-brand-light min-h-screen">
      {/* Slider Hero - DO NOT TOUCH as per user request */}
      <HeroSlider />

      {/* SECTION 1: Premium Corporate Intro */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Image Column with Glassmorphic Card overlay */}
            <div className="relative order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-[2rem] overflow-hidden shadow-xl border-none max-w-lg mx-auto lg:max-w-none w-full h-[400px] md:h-[400px]"
              >
                <img
                  src="/images/pharma_home_hero.png"
                  alt="Advanced Pharmaceutical Science"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </motion.div>

              {/* Overlapping Glass Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-8 right-2 sm:-right-4 md:-right-12 bg-white/90 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(14,22,36,0.1)] border border-white max-w-[200px] md:max-w-[280px]"
              >
                <div className="flex items-center justify-between border-t border-brand-border/30 ">
                  <div>
                    <p className="text-2xl md:text-3xl font-black text-brand-primary">100<span className="text-base md:text-lg text-brand-accent">+</span></p>
                    <p className="text-[10px] md:text-xs font-bold text-brand-dark uppercase tracking-wider">SKUs</p>
                  </div>
                  <div className="w-px h-10 bg-brand-border/30 mx-2"></div>
                  <div>
                    <p className="text-2xl md:text-3xl font-black text-brand-secondary">100<span className="text-base md:text-lg text-brand-soft">%</span></p>
                    <p className="text-[10px] md:text-xs font-bold text-brand-dark uppercase tracking-wider">cGMP</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Text Column */}
            <div className="order-1 lg:order-2 space-y-8 lg:pl-8 relative z-10">

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl sm:text-3xl lg:text-3xl font-serif font-black text-brand-dark leading-[1.1] tracking-tight"
              >
                Excellence Through <br />
                <span className="text-brand-primary">Expertise</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-brand-muted font-sans font-light leading-relaxed"
              >
                At Questus Pharma, we combine infrastructure, scientific expertise, and passion to develop pharmaceutical solutions that improve lives. Our integrated Research & Development and Manufacturing Centre spans over 6 acres, supported by a 12,000 sq. ft. Center of Excellence, enabling us to deliver quality medicines for global healthcare markets.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-4"
              >
                <Link
                  to="/about/questes-pharma"
                  className="group inline-flex items-center justify-center gap-3 bg-brand-dark hover:bg-gradient-to-r hover:from-brand-accent hover:to-brand-soft text-white font-semibold px-8 py-4 rounded-full transition-all duration-500 ease-out shadow-lg"
                >
                  Discover Our Story
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT WE OFFER (Premium Image Cards) */}
      <section className="py-24 md:py-32 bg-brand-faint relative">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">

          <div className="flex flex-col md:flex-row md:items-end justify-center gap-8 mb-16 md:mb-24">
            <div className="max-w-3xl space-y-4 text-center">
              <span className="text-[11px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-soft uppercase tracking-[0.2em] block">
                WHY QUESTUS PHARMA?
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-brand-dark leading-tight tracking-tight uppercase">
                Specialized Focus on Critical Care Segments
              </h2>
              <p className="text-lg text-brand-muted font-sans font-light leading-relaxed mt-4">
                State-of-the-Art R&D and Manufacturing Facilities • Experienced Pharmaceutical Leadership • Global Quality Standards • Commitment to Innovation and Patient Care
              </p>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {offerCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.7, ease: "easeOut" }}
                className="group block relative rounded-[2rem] overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-none hover:-translate-y-2 transition-all duration-500"
              >
                {/* Image Container with Zoom effect */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-brand-dark/10 group-hover: transition-colors duration-500 z-10"></div>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Floating Action Button */}
                  <Link
                    to={card.link}
                    className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur text-brand-dark rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl hover:bg-brand-accent hover:text-white"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-8 bg-white relative z-20">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-brand-dark mb-3 group-hover:text-brand-accent transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-brand-muted font-sans font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>

          {/* Stats Display area */}
          <div className="mt-16 md:mt-32 pt-12 md:pt-20 border-t border-brand-border/10">
            <div className="text-center max-w-xl mx-auto mb-12 space-y-4">
              <span className="text-[11px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-soft uppercase tracking-[0.2em] block">
                At a Glance
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-black text-brand-dark">Questes Global Footprint</h3>
            </div>
            <DisplayData />
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;
