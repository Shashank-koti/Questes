import React from 'react';
import { Award, ShieldCheck, Heart, Sparkles, Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import DisplayData from '../components/sections/displayData';

const QuestesPharma = () => {
  return (
    <div className="bg-brand-light min-h-screen">
      {/* Page Header */}
      <section className="relative py-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-brand-dark"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-brand-accent" /> About Us
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-black text-white tracking-tight uppercase">
            WHO WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-soft">ARE</span>
          </h1>
          <p className="text-lg text-brand-faint/80 max-w-2xl mx-auto font-sans font-light leading-relaxed">
            Hyderabad based, we are pan-Indian and global at once.
          </p>
        </div>
      </section>

      {/* Main Corporate Profile */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-soft font-bold tracking-wider uppercase text-xs block mb-2">Our Corporate Identity</span>
                <h2 className="text-2xl md:text-3xl font-serif font-black text-brand-dark leading-tight">
                  Formulations that Care. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-soft">Chemistry for a Better World.</span>
                </h2>
              </div>

              <p className="text-brand-muted leading-relaxed text-sm font-sans font-light">
                We are patient-centric formulation manufacturers with focus on medicines for Cardiology, Critical Care and Pain Management. At Questus, we are committed to improving the quality of treatment and quality of life. Our medicines deliver a positive impact, where it matters most — Cardiology, in the ICU and in Pain Management. Some of the pharma industry’s most seasoned talent today provide us the impetus to deliver on our promise. We innovate and push boundaries to bring quality medicines within the reach of patients and care givers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-light border border-brand-border flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Award className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-base">The experience from working with the best.</h4>
                    <p className="text-brand-muted text-xs mt-0.5">Seasoned experts, proven expertise and a genuine passion for what we do.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-light border border-brand-border flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Users className="w-5 h-5 text-brand-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-base">Home to seasoned talent in pharma sciences.</h4>
                    <p className="text-brand-muted text-xs mt-0.5">Some of the pharma industry’s most seasoned talent today provide us the impetus to deliver on our promise.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2rem] overflow-hidden shadow-xl h-[300px] md:h-[350px] group max-w-lg mx-auto lg:max-w-none w-full"
            >
              <img
                src="/images/page_about.png"
                alt="Questes Corporate Team"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>
          </div>

          {/* Standard of Excellence */}
          <div className="mb-24 relative max-w-4xl mx-auto text-center space-y-6">
            <Star className="w-10 h-10 text-brand-primary mx-auto" />
            <h3 className="text-2xl md:text-3xl font-serif font-black text-brand-dark">Quality, from start to finish</h3>
            <p className="text-brand-muted text-base leading-relaxed font-light">
              Quality is paramount because we know what we promise impacts lives. The expertise to meet European, Asian, African, Australian and Latin American standards.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4 text-xs font-semibold text-brand-dark">
              <span className="px-4 py-2 rounded-full bg-brand-light border border-brand-border flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand-primary" /> cGMP Compliant</span>
              <span className="px-4 py-2 rounded-full bg-brand-light border border-brand-border flex items-center gap-2"><Heart className="w-4 h-4 text-brand-secondary" /> Sterile Operations</span>
              <span className="px-4 py-2 rounded-full bg-brand-light border border-brand-border flex items-center gap-2"><Award className="w-4 h-4 text-brand-primary" /> Global Recognition</span>
            </div>
          </div>

          {/* Our Enduring Commitment (New Premium Text Section) */}
          <div className="border-t border-b border-brand-border py-16 mt-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-light/50 mix-blend-multiply"></div>
            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
              <span className="text-brand-secondary font-bold tracking-[0.2em] uppercase text-xs block">Our Enduring Commitment</span>
              <p className="text-xl md:text-2xl text-brand-dark font-serif italic leading-relaxed">
                "We commit to innovate continuously for a better world, to be the leader in all that we do."
              </p>
              <div className="pt-2">
                <div className="w-12 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto rounded-full"></div>
                <h4 className="text-brand-dark font-bold text-sm tracking-widest uppercase mt-6">The Questes Board of Directors</h4>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default QuestesPharma;
