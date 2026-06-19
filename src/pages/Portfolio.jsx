import React, { useState } from 'react';
import { HeartPulse, Syringe, Activity, ArrowRight, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';



const Portfolio = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = portfolioData.map(categoryObj => {
    const categoryName = Object.keys(categoryObj)[0];
    const items = categoryObj[categoryName];

    const filteredItems = items.filter(item =>
      item.brand_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.generic_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return { categoryName, items: filteredItems };
  }).filter(category => category.items.length > 0);

  return (
    <div className=" pt-10 pb-24">
      {/* Container */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary mb-6"
          >
            Our Therapeutic <span className="text-brand-modern">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed"
          >
            Questus Pharma specializes in pharmaceutical formulations across critical healthcare segments.
          </motion.p>
        </div>

        {/* Row of Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1: Cardiology */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="group bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 border border-brand-border/60 relative overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden shrink-0">
              <img src="/images/cardiology_realistic.png" alt="Cardiology" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center text-brand-modern shadow-sm">
                <HeartPulse size={24} strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl font-sans font-bold text-brand-secondary mb-4">Cardiology – Critical Emergencies</h3>
            <p className="text-brand-muted mb-8 line-clamp-3 leading-relaxed flex-grow">
              Supporting healthcare professionals with reliable formulations designed for critical cardiovascular care and emergency interventions.
            </p>
            <button className="flex items-center text-brand-modern font-semibold group-hover:text-brand-accent transition-colors duration-300 mt-auto">
              Explore Treatments <ArrowRight size={20} className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </motion.div>

          {/* Card 2: Anesthesia */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="group bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 border border-brand-border/60 relative overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden shrink-0">
              <img src="/images/anesthesia_realistic.png" alt="Anesthesia" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center text-brand-accent shadow-sm">
                <Syringe size={24} strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl font-sans font-bold text-brand-secondary mb-4">Anesthesia</h3>
            <p className="text-brand-muted mb-8 line-clamp-3 leading-relaxed flex-grow">
              Delivering quality anesthetic solutions that support surgical procedures and patient care across healthcare settings.
            </p>
            <button className="flex items-center text-brand-modern font-semibold group-hover:text-brand-accent transition-colors duration-300 mt-auto">
              Explore Treatments <ArrowRight size={20} className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </motion.div>

          {/* Card 3: ICU */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="group bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 border border-brand-border/60 relative overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden shrink-0">
              <img src="/images/icu_abstract.png" alt="ICU" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center text-brand-modern shadow-sm">
                <Activity size={24} strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl font-sans font-bold text-brand-secondary mb-4">ICU – Critical Care</h3>
            <p className="text-brand-muted mb-8 line-clamp-3 leading-relaxed flex-grow">
              Providing specialized formulations developed to meet the demanding requirements of intensive care and emergency medicine.
            </p>
            <button className="flex items-center text-brand-modern font-semibold group-hover:text-brand-accent transition-colors duration-300 mt-auto">
              Explore Treatments <ArrowRight size={20} className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </motion.div>

        </div>

        {/* --- NEW CATALOG SECTION --- */}
        <div className="mt-32">
          {/* Header & Search */}
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-2">Product Catalog</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-secondary">
                Detailed <span className="text-brand-modern">Product</span><br />Information
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-full md:w-[400px]"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by Brand Name, Generic Name,"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-modern/20 focus:border-brand-modern transition-all shadow-sm text-gray-700 bg-white placeholder:text-gray-400"
              />
            </motion.div>
          </div>

          {/* Catalog Data */}
          <div className="space-y-8">
            {filteredData.length > 0 ? (
              filteredData.map((category, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={index}
                  className="bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden"
                >
                  {/* Category Header */}
                  <div className="p-6 md:p-8 border-b border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-8 bg-brand-modern rounded-full"></div>
                      <h3 className="text-2xl font-bold text-brand-secondary">{category.categoryName}</h3>
                    </div>
                  </div>

                  {/* Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse whitespace-nowrap min-w-[600px]">
                      <thead>
                        <tr className="bg-gray-50/50 border-b border-gray-100 text-[11px] font-bold text-brand-muted uppercase tracking-wider">
                          <th className="py-3 px-6 md:px-8">Brand Name</th>
                          <th className="py-3 px-6 md:px-8">Generic Name</th>
                          <th className="py-3 px-6 md:px-8">Dosage Form</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-sm">
                        {category.items.map((item, i) => (
                          <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                            <td className="py-3.5 px-6 md:px-8">
                              <span className="font-bold text-gray-900">{item.brand_name}</span>
                            </td>
                            <td className="py-3.5 px-6 md:px-8 text-gray-600">
                              {item.generic_name}
                            </td>
                            <td className="py-3.5 px-6 md:px-8">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#eef2f6] text-[#4a6b82] border border-[#d6e0e9]">
                                {item.dosage_form}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <p className="text-lg text-brand-muted">No products found matching "{searchTerm}"</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
