import React from 'react';
import { Briefcase, ArrowUpRight, GraduationCap, Sparkles, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { jobRoles } from '../data';
import CareerForm from '../components/sections/careerForm';

const Careers = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  const scrollToForm = () => {
    const element = document.getElementById('apply-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-brand-light min-h-screen">
      {/* Page Header */}
      <section className="relative py-24 bg-brand-dark overflow-hidden">
        <img src="/images/bg/careers_bg_1784458101451.png" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center space-y-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-brand-accent" /> Join Our Team
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-black text-white tracking-tight">
            Build Your Future <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-soft">with Questus Pharma</span>
          </h1>
          <p className="text-xl text-brand-faint/80 max-w-2xl mx-auto font-medium leading-relaxed [text-shadow:_0_1px_3px_rgb(0_0_0_/_100%)]">
            At Questus Pharma, people are our greatest strength. We provide an environment that encourages learning, growth, collaboration, and professional development.
          </p>
        </div>
      </section>

      {/* Culture & Benefits Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-24">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2rem] overflow-hidden shadow-xl h-[300px] md:h-[350px] group order-2 lg:order-1 max-w-lg mx-auto lg:max-w-none w-full"
            >
              <img 
                src="/images/page_careers.png" 
                alt="Questus Scientists" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply"></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-5 order-1 lg:order-2"
            >
              <div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-soft font-bold tracking-wider uppercase text-sm block mb-2">Our Culture</span>
                <h2 className="text-3xl md:text-4xl font-serif font-black text-brand-dark leading-tight">
                  Unlocking Potential. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-soft">Driving Innovation.</span>
                </h2>
              </div>
              <p className="text-brand-muted leading-relaxed font-sans font-light text-base max-w-lg">
                As an equal opportunity employer, we value talent, diversity, and innovation. If you are passionate about pharmaceutical sciences and aspire to make a meaningful impact in healthcare, we invite you to join our growing team.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-light border border-brand-border flex items-center justify-center flex-shrink-0 shadow-sm">
                    <GraduationCap className="w-4 h-4 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-dark mb-0.5">Continuous Learning</h4>
                    <p className="text-brand-muted text-sm font-light">Direct mentoring programs and clinical case studies to enhance your expertise.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-light border border-brand-border flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Briefcase className="w-4 h-4 text-brand-secondary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-dark mb-0.5">Impactful Work</h4>
                    <p className="text-brand-muted text-sm font-light">Develop high precision formulations targeting critical therapeutic areas globally.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Application Form Section */}
          <div id="apply-form" className="max-w-4xl mx-auto">
            <div className="bg-white rounded-[2rem] sm:rounded-[3rem] p-5 sm:p-10 md:p-16 border border-brand-border/80 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-faint rounded-bl-full -z-0"></div>
              <div className="relative z-10 text-center mb-12 space-y-3">
                <h3 className="text-4xl md:text-5xl font-serif font-black text-brand-dark">Start Your Journey</h3>
                <p className="text-brand-muted text-xl font-light">Submit your details below for our HR team to review.</p>
              </div>
              <div className="relative z-10">
                <CareerForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
