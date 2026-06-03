import React from 'react';
import { MapPin, Phone, Mail, Sparkles } from 'lucide-react';
import ContactForm from '../components/sections/contactForm';

const Contact = () => {
  return (
    <div className="bg-brand-light min-h-screen pb-24">
      {/* Page Header */}
      <section className="relative py-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-brand-dark"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-brand-accent" /> Contact Us
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black text-white leading-tight tracking-tight">
            Partner <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-soft">With Us</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-faint/80 max-w-2xl mx-auto font-light leading-relaxed">
            Reach out to our global coordination teams for business, formulation supplies, or general questions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-5xl pt-12 md:pt-24">

        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-24">

          {/* Text and Info Column */}
          <div className="w-full lg:w-5/12 pt-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-soft font-bold tracking-[0.15em] uppercase text-xs mb-6 block">
              CONTACT US
            </span>

            <h2 className="text-xl sm:text-2xl lg:text-3xl leading-[1.1] font-bold text-brand-dark mb-8 font-serif">
              Let's Build Something Meaningful Together
            </h2>

            <p className="text-brand-muted leading-relaxed text-[1.05rem] font-light mb-12">
              Whether you are exploring partnership opportunities, contract manufacturing, product licensing, or simply have a question about our capabilities. we would love to hear from you. Our business development team is ready to discuss how Questes Pharma can support your goals.
            </p>

            <div className="space-y-8">
              {/* Headquarters */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg mb-1">Headquarters</h4>
                  <p className="text-brand-muted leading-relaxed font-light text-sm max-w-[280px]">
                    Sirisuns Hirise Building, First & Second Floor, Plot No.13, Sy. No. 70, Image Garden Road, Silicon Valley, Madhapur, Hyderabad-500081
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-brand-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-brand-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg mb-1">Phone</h4>
                  <p className="text-brand-muted font-light text-sm">
                    +91-8121009671
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg mb-1">Email</h4>
                  <p className="text-brand-muted font-light text-sm">
                    connect@questuspharma.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="w-full lg:w-6/12 relative">
            {/* The Form */}
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
