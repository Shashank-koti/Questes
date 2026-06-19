import React from 'react';
import { Target, Eye, Globe2, ShieldCheck, Sparkles, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const VisionMission = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
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
            <Sparkles className="w-4 h-4 text-brand-accent" /> Core Purpose
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-black text-white tracking-tight">
            Vision & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-soft">Mission</span>
          </h1>
          <p className="text-lg text-brand-faint/80 max-w-2xl mx-auto font-light leading-relaxed">
            To develop and manufacture high-quality, affordable pharmaceutical products through innovation.
          </p>
        </div>
      </section>

      {/* Vision & Mission Sections */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 space-y-16 md:space-y-24 lg:space-y-32">

          {/* Vision Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-5 order-2 lg:order-1"
            >
              <h3 className="text-2xl md:text-4xl font-serif font-black text-brand-dark flex items-center gap-3">
                <Eye className="w-8 h-8 text-brand-primary" /> Our Vision
              </h3>
              <p className="text-brand-muted leading-relaxed text-sm md:text-base font-light">
                To create a world where quality medicines are accessible to everyone, contributing to better healthcare outcomes and improved quality of life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2rem] overflow-hidden shadow-xl h-[300px] md:h-[400px] order-1 lg:order-2"
            >
              <img
                src="/images/vission.jpg"
                alt="Vision - White Liquid Vitals"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2rem] overflow-hidden shadow-xl h-[300px] md:h-[400px]"
            >
              <img
                src="/images/mission.jpg"
                alt="Mission - Clean Injections"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5"
            >
              <h3 className="text-2xl md:text-4xl font-serif font-black text-brand-dark flex items-center gap-3">
                <Target className="w-8 h-8 text-brand-secondary" /> Our Mission
              </h3>
              <p className="text-brand-muted leading-relaxed text-sm md:text-base font-light">
                To develop and manufacture high-quality, affordable pharmaceutical products through innovation, advanced technology, and scientific excellence while maintaining the highest standards of quality and integrity.
              </p>
            </motion.div>
          </div>

          {/* Core Values / Future Outlook */}
          <div className="border-t border-b border-brand-border py-16 relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-brand-light/30 mix-blend-multiply"></div>
            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-soft font-bold tracking-[0.2em] uppercase text-xs block">The Foundation of Our Work</span>
              <h3 className="text-2xl md:text-4xl font-serif font-black text-brand-dark leading-tight">
                Empowering the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-soft">Healthcare</span>
              </h3>
              <p className="text-brand-muted leading-relaxed text-sm md:text-base font-light">
                At Questes Pharma, our Vision and Mission are not just statements on a wall—they are the guiding principles embedded in every formulation we create. We stand committed to breaking barriers in medical accessibility and forging a brighter, healthier future for communities everywhere.
              </p>
              <div className="flex justify-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-brand-dark font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-brand-primary" /> Integrity
                </div>
                <div className="flex items-center gap-2 text-brand-dark font-bold text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-brand-secondary" /> Innovation
                </div>
                <div className="flex items-center gap-2 text-brand-dark font-bold text-xs uppercase tracking-wider">
                  <Award className="w-4 h-4 text-brand-primary" /> Excellence
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default VisionMission;
