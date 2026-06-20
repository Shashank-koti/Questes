import React from 'react';
import { Award, ShieldCheck, Heart, Sparkles, Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import DisplayData from '../components/sections/displayData';

const QuestusPharma = () => {
  return (
    <div className="bg-brand-light min-h-screen">
      {/* Page Header */}
      <section className="relative py-24 md:py-32 bg-brand-dark overflow-hidden">
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
            Headquartered in Hyderabad, India, Questus Pharma serves both domestic and international markets with a focus on quality, compliance, and excellence.
          </p>
        </div>
      </section>

      {/* Main Corporate Profile */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-32 md:mb-40">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-soft font-bold tracking-wider uppercase text-xs block mb-2">Our Corporate Identity</span>
                <h2 className="text-xl md:text-2xl font-serif font-black text-brand-dark leading-tight">
                  Questus Pharma Private Limited<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-soft">A patient centric pharmaceutical company.</span>
                </h2>
              </div>

              <p className="text-brand-muted leading-relaxed text-sm font-sans font-light">
                We are committed to improving the quality of treatment and enhancing quality of life by delivering safe, effective, and affordable medicines. Backed by experienced professionals and a strong scientific foundation, we continuously innovate to meet evolving healthcare needs. Questus Pharma specializes in the development and manufacturing of formulations for Cardiology – Critical Emergencies, Anesthesia, and ICU – Critical Care.
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
                alt="Questus Corporate Team"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>
          </div>

          {/* Standard of Excellence */}
          <div className="mb-32 md:mb-40 relative max-w-4xl mx-auto text-center space-y-6">
            <Star className="w-10 h-10 text-brand-primary mx-auto" />
            <h3 className="text-2xl md:text-3xl font-serif font-black text-brand-dark">Quality at Every Step</h3>
            <p className="text-brand-muted text-base leading-relaxed font-light">
              Quality is at the heart of everything we do. From research and development to manufacturing and delivery, every process is guided by stringent quality standards to ensure safety, efficacy, and reliability.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4 text-xs font-semibold text-brand-dark">
              <span className="px-4 py-2 rounded-full bg-brand-light border border-brand-border flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand-primary" /> cGMP Compliant</span>
              <span className="px-4 py-2 rounded-full bg-brand-light border border-brand-border flex items-center gap-2"><Heart className="w-4 h-4 text-brand-secondary" /> Sterile Operations</span>
              <span className="px-4 py-2 rounded-full bg-brand-light border border-brand-border flex items-center gap-2"><Award className="w-4 h-4 text-brand-primary" /> Global Recognition</span>
            </div>
          </div>

          {/* Board of Directors Section */}
          <div className="mt-32 md:mt-40 mb-24 md:mb-32">
            <div className="text-center mb-16 space-y-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-soft font-bold tracking-wider uppercase text-xs block">Leadership</span>
              <h3 className="text-3xl md:text-4xl font-serif font-black text-brand-dark">The Questus Board of Directors</h3>
              <p className="text-brand-muted max-w-2xl mx-auto font-light leading-relaxed">
                Guided by seasoned experts, our leadership team is dedicated to steering Questus Pharma towards new horizons in global healthcare.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-5xl mx-auto">

              {/* Director 1 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-[0_20px_50px_rgba(14,22,36,0.15)] transition-all duration-500 w-full max-w-[320px] aspect-[4/5] mb-8">
                  <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                    alt="Managing Director"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  {/* Glassmorphic Name Plate */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xl p-4 rounded-3xl shadow-lg border border-white/50 transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                    <h4 className="text-xl font-serif font-black text-brand-dark">Name</h4>
                    <p className="text-brand-primary font-bold text-[10px] uppercase tracking-widest mt-1">Managing Director</p>
                  </div>
                </div>
                <p className="text-brand-muted text-sm leading-relaxed px-4 font-light">
                  With over 25 years of pharmaceutical expertise, Name drives our strategic vision, focusing on global expansion and continuous operational excellence.
                </p>
              </motion.div>

              {/* Director 2 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-[0_20px_50px_rgba(14,22,36,0.15)] transition-all duration-500 w-full max-w-[320px] aspect-[4/5] mb-8">
                  <div className="absolute inset-0 bg-brand-secondary/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                    alt="Executive Director"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  {/* Glassmorphic Name Plate */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xl p-4 rounded-3xl shadow-lg border border-white/50 transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                    <h4 className="text-xl font-serif font-black text-brand-dark">Pameela Paruchuri</h4>
                    <p className="text-brand-secondary font-bold text-[10px] uppercase tracking-widest mt-1">Executive Director</p>
                  </div>
                </div>
                <p className="text-brand-muted text-sm leading-relaxed px-4 font-light">
                  Pameela Paruchuri ensures our therapeutic formulations adhere to the highest international quality standards, leading our clinical and regulatory affairs.
                </p>
              </motion.div>

            </div>
          </div>

          {/* Our Enduring Commitment (New Premium Text Section) */}
          <div className="border-t border-b border-brand-border py-24 md:py-32 mt-32 md:mt-40 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-light/50 mix-blend-multiply"></div>
            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
              <span className="text-brand-secondary font-bold tracking-[0.2em] uppercase text-xs block">Global Reach</span>
              <p className="text-xl md:text-2xl text-brand-dark font-serif italic leading-relaxed">
                "Our products are manufactured to meet the quality requirements of multiple international markets, including regions across Europe, Asia, Africa, Australia, and Latin America."
              </p>
              <div className="pt-2">
                <div className="w-12 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto rounded-full"></div>
              </div>
            </div>
          </div>



        </div>
      </section>
    </div>
  );
};

export default QuestusPharma;
