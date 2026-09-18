import React from 'react';
import { Award, Globe2, ShieldCheck, HeartPulse } from 'lucide-react';
import { motion } from 'framer-motion';

const displayData = () => {
  const stats = [
    {
      value: "5+",
      label: "Continents",
      desc: "Delivering crucial therapeutics globally across European and Asian markets.",
      icon: <Globe2 className="w-6 h-6 text-brand-accent" />
    },
    {
      value: "100+",
      label: "SKUs Portfolio",
      desc: "Comprehensive critical care formulations developed to satisfy global therapeutic needs.",
      icon: <HeartPulse className="w-6 h-6 text-brand-secondary" />
    },
    {
      value: "5+",
      label: "Years Domain Expertise",
      desc: "Deep knowledge in pharmaceutical sciences led by veteran researchers and technicians.",
      icon: <Award className="w-6 h-6 text-brand-accent" />
    },
    {
      value: "100%",
      label: "Global Compliance",
      desc: "Strictly manufactured under world class cGMP standards for ultimate safety.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-secondary" />
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 py-6 sm:py-12">
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1, duration: 0.6 }}
          className="group bg-white p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl border border-brand-border/60 hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
          <div className="relative z-10">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-faint flex items-center justify-center mb-4 sm:mb-6">
              {stat.icon}
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-dark mb-1.5 sm:mb-2 tracking-tight">
              {stat.value}
            </div>
            <h4 className="font-bold text-brand-dark text-base sm:text-lg mb-1">{stat.label}</h4>
            <p className="text-brand-muted text-sm sm:text-base leading-relaxed">{stat.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default displayData;
