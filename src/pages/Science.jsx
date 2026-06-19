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
      <section className="relative py-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-brand-dark"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-brand-accent" /> R&D Paradigms
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-black text-white tracking-tight uppercase">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-soft">SCIENCE IS</span> OUR QUEST
          </h1>
          <p className="text-lg text-brand-faint/80 max-w-2xl mx-auto font-light leading-relaxed">
            Science drives everything we do at Questus Pharma.
          </p>
        </div>
      </section>

      {/* Main Science & DNA Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-soft font-bold tracking-wider uppercase text-xs block">Scientific Innovation</span>
                <h2 className="text-2xl md:text-4xl font-serif font-black text-brand-dark leading-tight">
                  Science drives everything we do <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-soft">at Questus Pharma.</span>
                </h2>
                <p className="text-brand-muted leading-relaxed font-sans font-light text-base max-w-lg">
                  Through continuous research and innovation, we strive to deliver safe, effective, and affordable pharmaceutical solutions for healthcare providers worldwide.
                </p>
              </div>

              <div className="space-y-5 pt-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-light border border-brand-border flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Microscope className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-dark mb-1">Expertise across disciplines</h4>
                    <p className="text-brand-muted leading-relaxed text-sm">Our team brings together expertise in pharmaceutical chemistry, formulation development, biotechnology, regulatory affairs, and manufacturing sciences to develop medicines that improve patient care.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-light border border-brand-border flex items-center justify-center flex-shrink-0 shadow-sm">
                    <TestTube2 className="w-5 h-5 text-brand-secondary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-dark mb-1">Continuous Research & Innovation</h4>
                    <p className="text-brand-muted leading-relaxed text-sm">We strive to deliver safe, effective, and affordable pharmaceutical solutions for healthcare providers worldwide.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2rem] overflow-hidden shadow-xl h-[300px] md:h-[350px]"
            >
              <div className="absolute inset-0 bg-brand-dark/10 mix-blend-multiply z-10"></div>
              <img
                src="/images/page_science.png"
                alt="Questes Science Lab"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
              {/* Premium Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/95 backdrop-blur-xl p-5 rounded-[1.25rem] shadow-xl border border-white/50">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-brand-primary flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-brand-dark mb-1">Uncompromising Quality</h4>
                    <p className="text-brand-muted text-xs font-medium leading-relaxed">Embedding clinical precision into every product lifecycle, adhering to global standards.</p>
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
