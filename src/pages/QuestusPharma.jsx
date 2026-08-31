import React from 'react';
import { Award, ShieldCheck, Heart, Sparkles, Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';



const QuestusPharma = () => {

  const directors = [
    { name: "Asheesh Bhatnagar", role: "Director - Sales, Marketing & Business Development" },
    { name: "Pameela Paruchuri", role: "Director - Finance, Legal & CS" }
  ];

  const salesTeam = [
    { name: "Shailesh Kumar Pandey", role: "Associate Vice President (Sales)" },
    { name: "Naik Pravin Purushottam", role: "General Manager (Sales)" },
    { name: "Pawan Arora", role: "Sales Manager" },
    { name: "M. Raghurama Chary", role: "Sales Manager" },
    { name: "Akhilesh Kumar Vishwakarma", role: "Divisional Sales Manager" },
    { name: "Debasish Rudra", role: "Divisional Sales Manager" },
    { name: "Shiv Rajendra Agrahari", role: "Divisional Sales Manager" },
    { name: "Agrawal Bhuvanbhai Ramchandra", role: "Divisional Sales Manager" },
  ]

  return (
    <div className="bg-brand-light min-h-screen">
      {/* Page Header */}
      <section className="relative py-24 bg-brand-dark overflow-hidden">
        <img src="/images/bg/about_bg_clean_1784458852093.png" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center space-y-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-brand-accent" /> About Us
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-black text-white tracking-tight uppercase">
            WHO WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-soft">ARE</span>
          </h1>
          <p className="text-xl text-brand-faint/80 max-w-2xl mx-auto font-sans font-medium leading-relaxed [text-shadow:_0_1px_3px_rgb(0_0_0_/_100%)]">
            Headquartered in Hyderabad, India, Questus Pharma serves both domestic and international markets with a focus on quality, compliance, and excellence.
          </p>
        </div>
      </section>

      {/* Main Corporate Profile */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">

          <div className="max-w-4xl mx-auto mb-32 md:mb-40">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-center"
            >
              <div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-soft font-bold tracking-wider uppercase text-sm block mb-2">Our Corporate Identity</span>
                <h2 className="text-3xl md:text-4xl font-serif font-black text-brand-dark leading-tight">
                  Questus Pharma Private Limited<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-soft">A patient centric pharmaceutical company.</span>
                </h2>
              </div>

              <p className="text-brand-muted leading-relaxed text-lg font-sans font-light">
                We are committed to improving the quality of treatment and enhancing quality of life by delivering safe, effective, and affordable medicines. Backed by experienced professionals and a strong scientific foundation, we continuously innovate to meet evolving healthcare needs. Questus Pharma specializes in the development and manufacturing of formulations for Cardiology – Critical Emergencies, Anesthesia, and ICU – Critical Care.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 text-left">
                <div className="flex gap-4 p-6 bg-brand-light rounded-2xl border border-brand-border">
                  <div className="w-12 h-12 rounded-full bg-white border border-brand-border flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Award className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-lg">The experience from working with the best.</h4>
                    <p className="text-brand-muted text-sm mt-1">Seasoned experts, proven expertise and a genuine passion for what we do.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-brand-light rounded-2xl border border-brand-border">
                  <div className="w-12 h-12 rounded-full bg-white border border-brand-border flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Users className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-lg">Home to seasoned talent in pharma sciences.</h4>
                    <p className="text-brand-muted text-sm mt-1">Some of the pharma industry’s most seasoned talent today provide us the impetus to deliver on our promise.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Standard of Excellence */}
          <div className="mb-32 md:mb-40 relative max-w-4xl mx-auto text-center space-y-6">
            <Star className="w-10 h-10 text-brand-primary mx-auto" />
            <h3 className="text-3xl md:text-4xl font-serif font-black text-brand-dark">Quality at Every Step</h3>
            <p className="text-brand-muted text-lg leading-relaxed font-light">
              Quality is at the heart of everything we do. From research and development to manufacturing and delivery, every process is guided by stringent quality standards to ensure safety, efficacy, and reliability.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4 text-sm font-semibold text-brand-dark">
              <span className="px-4 py-2 rounded-full bg-brand-light border border-brand-border flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand-primary" /> cGMP Compliant</span>
              <span className="px-4 py-2 rounded-full bg-brand-light border border-brand-border flex items-center gap-2"><Heart className="w-4 h-4 text-brand-secondary" /> Sterile Operations</span>
              <span className="px-4 py-2 rounded-full bg-brand-light border border-brand-border flex items-center gap-2"><Award className="w-4 h-4 text-brand-primary" /> Global Recognition</span>
            </div>
          </div>

          {/* Leadership & Sales Sections */}
          <div className="mt-32 md:mt-40 mb-24 md:mb-32 max-w-[1400px] mx-auto px-4 md:px-8">

            <div className="text-center mb-20 space-y-4">
              <h2 className="text-5xl md:text-7xl font-serif font-black text-brand-dark tracking-tight uppercase">
                OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-soft">PEOPLE</span>
              </h2>
            </div>

            {/* Board of Directors */}
            <div className="mb-32">
              <div className="text-center mb-16 space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif font-black text-brand-dark tracking-tight">Board of Directors</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 justify-center max-w-3xl mx-auto">
                {directors.map((director, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: (idx % 3) * 0.15 }}
                    className="h-full"
                  >
                    <div className="bg-slate-200 hover:bg-slate-100 transition-colors duration-300 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/60 flex flex-col h-full overflow-hidden max-w-[320px] mx-auto w-full justify-center">
                      <div className="flex-grow flex flex-col items-center justify-center text-center p-8">
                        <h4 className="text-lg md:text-xl font-serif font-black text-brand-dark mb-2 leading-snug">{director.name}</h4>
                        <p className="text-brand-secondary font-bold text-xs tracking-wide uppercase">{director.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Sales & Marketing Leadership */}
              <div>
                <div className="text-center mb-16 mt-14 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-serif font-black text-brand-dark tracking-tight">Sales & Marketing Leadership</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 justify-center">
                  {salesTeam.map((member, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: (idx % 3) * 0.15 }}
                      className="h-full"
                    >
                      <div className="bg-slate-200 hover:bg-slate-100  transition-colors duration-300 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/60 flex flex-col h-full overflow-hidden justify-center min-h-[160px]">
                        <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
                          <h4 className="text-lg md:text-xl font-serif font-black text-brand-dark mb-2 leading-snug">{member.name}</h4>
                          <p className="text-brand-primary font-bold text-xs tracking-wide uppercase">{member.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>

            {/* Our Enduring Commitment (New Premium Text Section) */}
            <div className="border-t border-b border-brand-border py-24 md:py-32 mt-32 md:mt-40 relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-light/50 mix-blend-multiply"></div>
              <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
                <span className="text-brand-secondary font-bold tracking-[0.2em] uppercase text-sm block">Global Reach</span>
                <p className="text-2xl md:text-3xl text-brand-dark font-serif italic leading-relaxed">
                  "Our products are manufactured to meet the quality requirements of multiple international markets."
                </p>
                <div className="pt-2">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuestusPharma;
