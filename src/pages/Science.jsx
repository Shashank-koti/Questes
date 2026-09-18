import React from 'react';
import { Microscope, TestTube2, ClipboardCheck, Users, Shield, Sparkles, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Science = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 90, damping: 14 }
    }
  };

  return (
    <div className="bg-brand-light min-h-screen">
      {/* Page Header */}
      <section className="relative py-14 sm:py-20 md:py-24 bg-brand-dark overflow-hidden">
        <img src="/images/bg/science_bg_clean_1784458886866.png" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />

        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 text-center space-y-3 sm:space-y-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-accent" /> R&D Paradigms
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black text-white tracking-tight uppercase">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-soft">SCIENCE IS</span> OUR QUEST
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-brand-faint/80 max-w-2xl mx-auto font-medium leading-relaxed [text-shadow:_0_1px_3px_rgb(0_0_0_/_100%)]">
            Science drives everything we do at Questus Pharma.
          </p>
        </div>
      </section>

      {/* Main Science & DNA Grid */}
      <section className="py-12 sm:py-16 md:py-24 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="space-y-2 sm:space-y-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-soft font-bold tracking-wider uppercase text-xs sm:text-sm block">Scientific Innovation</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-black text-brand-dark leading-tight">
                  Science drives everything we do <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-soft">at Questus Pharma.</span>
                </h2>
                <p className="text-brand-muted leading-relaxed font-sans font-light text-sm sm:text-base md:text-lg max-w-lg">
                  Through continuous research and innovation, we strive to deliver safe, effective, and affordable pharmaceutical solutions for healthcare providers worldwide.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-5 pt-2 sm:pt-4">
                <div className="flex gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-light border border-brand-border flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Microscope className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-brand-dark mb-1">Expertise across disciplines</h4>
                    <p className="text-brand-muted leading-relaxed text-sm sm:text-base">Our team brings together expertise in pharmaceutical chemistry, formulation development, biotechnology, regulatory affairs, and manufacturing sciences to develop medicines that improve patient care.</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-light border border-brand-border flex items-center justify-center flex-shrink-0 shadow-sm">
                    <TestTube2 className="w-5 h-5 text-brand-secondary" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-brand-dark mb-1">Continuous Research & Innovation</h4>
                    <p className="text-brand-muted leading-relaxed text-sm sm:text-base">We strive to deliver safe, effective, and affordable pharmaceutical solutions for healthcare providers worldwide.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-xl h-[260px] sm:h-[320px] md:h-[380px]"
            >
              <div className="absolute inset-0 bg-brand-dark/10 mix-blend-multiply z-10"></div>
              <img
                src="/images/page_science.png"
                alt="Questus Science Lab"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
              {/* Premium Floating Card */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 z-20 bg-white/95 backdrop-blur-xl p-3.5 sm:p-5 rounded-xl sm:rounded-[1.25rem] shadow-xl border border-white/50">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-brand-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl font-bold text-brand-dark mb-0.5 sm:mb-1">Uncompromising Quality</h4>
                    <p className="text-brand-muted text-xs sm:text-sm font-medium leading-relaxed">Embedding clinical precision into every product lifecycle, adhering to global standards.</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Science;
