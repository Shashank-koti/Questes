import React from 'react';
import { Building2, Factory, CheckCircle2, Sparkles, Shield, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const Infrastructure = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 85, damping: 14 }
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
            <Sparkles className="w-4 h-4 text-brand-accent" /> Advanced Facilities
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-black text-white tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-soft">Infrastructure</span>
          </h1>
          <p className="text-lg text-brand-faint/80 max-w-2xl mx-auto font-light leading-relaxed">
            Manufacturing wide range of quality products that improves lives.
          </p>
        </div>
      </section>

      {/* Infrastructure Showcase */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 space-y-16 md:space-y-24">
          
          {/* R&D Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2rem] overflow-hidden shadow-xl h-[300px] md:h-[350px] order-2 lg:order-1 group"
            >
              <img 
                src="/images/page_infra_rd.png" 
                alt="Center of Excellence R&D" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute top-5 left-5 z-20 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full font-bold text-brand-primary flex items-center gap-2 shadow-lg text-xs uppercase tracking-wide border border-brand-border">
                <Building2 className="w-4 h-4" /> 12,000 sq.ft.
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-5 order-1 lg:order-2"
            >
              <span className="text-brand-secondary font-bold tracking-wider uppercase text-xs block">Advanced Research</span>
              <h2 className="text-2xl md:text-4xl font-serif font-black text-brand-dark leading-tight">
                State of the art center of excellence
              </h2>
              <p className="text-brand-muted leading-relaxed text-base font-light">
                We have invested to establish the state-of-the-art manufacturing facilities meeting global pharma standards. spreading over 12,000 sq.ft.
              </p>
              <ul className="space-y-3 pt-3 border-t border-brand-border/60">
                {['Advanced Formulation Suites', 'HPLC & Gas Chromatography', 'Stability Testing Chambers', 'ISO 9001:2015 Operations'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-brand-dark text-sm font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-brand-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Manufacturing Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-5"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-soft font-bold tracking-wider uppercase text-xs block">Scale & Precision</span>
              <h2 className="text-2xl md:text-4xl font-serif font-black text-brand-dark leading-tight">
                Integrated R&D and Manufacturing centre
              </h2>
              <p className="text-brand-muted leading-relaxed text-base font-light">
                It is spread over an area of 6 acres and will be engaged in production of Oncology and Critical Care molecules. The manufacturing facilities are approvable by major global regulatory agencies including the USFDA, MHRA, EMA, TGA, MCC, ANVISA and more.
              </p>
              <ul className="space-y-3 pt-3 border-t border-brand-border/60">
                {['Class 100 Cleanrooms', 'Automated Filling Lines', 'Zero Liquid Discharge (ZLD)', 'cGMP Compliant Zones'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-brand-dark text-sm font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2rem] overflow-hidden shadow-xl h-[300px] md:h-[350px] group"
            >
              <img 
                src="/images/page_infra_mfg.png" 
                alt="Manufacturing Center" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute bottom-5 right-5 z-20 bg-brand-dark/95 backdrop-blur-md px-4 py-2 rounded-full font-bold text-white flex items-center gap-2 shadow-xl text-xs uppercase tracking-wide border border-white/10">
                <Factory className="w-4 h-4 text-brand-secondary" /> 6 Acres Facility
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Infrastructure;
