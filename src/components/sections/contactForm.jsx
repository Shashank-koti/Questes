import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const contactForm = () => {
  const [formStatus, setFormStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '', email: '', mobile: '', country: '', message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', mobile: '', country: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 border border-brand-border shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-brand-dark mb-2">Send us a Message</h3>
        <p className="text-brand-muted font-light text-sm">We'll get back to you within 24 hours.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div>
          <label className="block text-xs font-bold text-brand-muted uppercase tracking-wider mb-2">
            FULL NAME <span className="text-red-400">*</span>
          </label>
          <input 
            type="text" 
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3.5 rounded-xl bg-brand-light border border-brand-border focus:bg-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-all outline-none text-brand-dark font-medium"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-brand-muted uppercase tracking-wider mb-2">
              EMAIL <span className="text-red-400">*</span>
            </label>
            <input 
              type="email" 
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3.5 rounded-xl bg-brand-light border border-brand-border focus:bg-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-all outline-none text-brand-dark font-medium"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-brand-muted uppercase tracking-wider mb-2">
              MOBILE <span className="text-red-400">*</span>
            </label>
            <input 
              type="tel" 
              name="mobile"
              required
              value={formData.mobile}
              onChange={handleInputChange}
              className="w-full px-4 py-3.5 rounded-xl bg-brand-light border border-brand-border focus:bg-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-all outline-none text-brand-dark font-medium"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-brand-muted uppercase tracking-wider mb-2">
            COUNTRY <span className="text-red-400">*</span>
          </label>
          <input 
            type="text" 
            name="country"
            required
            value={formData.country}
            onChange={handleInputChange}
            className="w-full px-4 py-3.5 rounded-xl bg-brand-light border border-brand-border focus:bg-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-all outline-none text-brand-dark font-medium"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-brand-muted uppercase tracking-wider mb-2">
            MESSAGE <span className="text-red-400">*</span>
          </label>
          <textarea 
            name="message"
            required
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-3.5 rounded-xl bg-brand-light border border-brand-border focus:bg-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-all outline-none resize-none text-brand-dark font-medium"
            placeholder="Tell us about your requirements..."
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={formStatus !== 'idle'}
          className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
            formStatus === 'success' 
              ? 'bg-green-500' 
              : 'bg-brand-dark hover:bg-brand-primary shadow-lg hover:shadow-xl hover:-translate-y-0.5'
          }`}
        >
          {formStatus === 'idle' && <>Submit <Send className="w-4 h-4 ml-1" /></>}
          {formStatus === 'submitting' && (
            <span className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Submitting...
            </span>
          )}
          {formStatus === 'success' && <>Submitted Successfully <CheckCircle2 className="w-5 h-5 ml-1" /></>}
        </button>
      </form>
    </div>
  );
};

export default contactForm;
