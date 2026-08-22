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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 py-12">
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1, duration: 0.6 }}
          className="group bg-white p-8 rounded-3xl border border-brand-border/60 hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-brand-faint flex items-center justify-center mb-6">
              {stat.icon}
            </div>
            <div className="text-5xl font-extrabold text-brand-dark mb-2 tracking-tight">
              {stat.value}
            </div>
            <h4 className="font-bold text-brand-dark text-lg mb-1">{stat.label}</h4>
            <p className="text-brand-muted text-base leading-relaxed">{stat.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default displayData;
