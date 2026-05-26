import React, { useState } from 'react';
import { Briefcase, GraduationCap, Building } from 'lucide-react';

const careerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    phone: "",
    education: "",
    department: "",
    experience: "",
    location: "",
    company: "",
    currentSalary: "",
    expectedSalary: "",
    resumeUrl: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.resumeUrl) return alert("Please provide a Google Drive link to your resume");
    if (!formData.email.includes("@")) return alert("Invalid email");
    if (formData.phone.length < 10) return alert("Invalid phone number");

    setLoading(true);

    try {
      const sheetPayload = new URLSearchParams();
      Object.entries({ ...formData, secret: "critigen_secure_2026" }).forEach(
        ([key, value]) => sheetPayload.append(key, value)
      );

      await fetch("https://script.google.com/macros/s/AKfycbxm2IKZkYBtnsP8_olK-BYbTCZHuRHcdbdkHv6iBzI2tp8A_gFSXP8KV0z6aWvYx2lK/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: sheetPayload.toString(),
      });

      alert("Application submitted successfully!");

      setFormData({
        name: "",
        dob: "",
        email: "",
        phone: "",
        education: "",
        department: "",
        experience: "",
        location: "",
        company: "",
        currentSalary: "",
        expectedSalary: "",
        resumeUrl: "",
      });

    } catch (err) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-brand-muted uppercase tracking-wider">Full Name *</label>
            <input name="name" value={formData.name} onChange={handleChange}
              type="text" className="w-full px-5 py-4 rounded-xl bg-brand-light border-2 border-brand-border focus:bg-white focus:border-brand-primary transition-colors outline-none text-brand-dark font-medium" required />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-brand-muted uppercase tracking-wider">Date of Birth *</label>
            <input name="dob" value={formData.dob} onChange={handleChange}
              type="date" className="w-full px-5 py-4 rounded-xl bg-brand-light border-2 border-brand-border focus:bg-white focus:border-brand-primary transition-colors outline-none text-brand-dark font-medium" required />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-brand-muted uppercase tracking-wider">Email Address *</label>
            <input name="email" value={formData.email} onChange={handleChange}
              type="email" className="w-full px-5 py-4 rounded-xl bg-brand-light border-2 border-brand-border focus:bg-white focus:border-brand-primary transition-colors outline-none text-brand-dark font-medium" required />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-brand-muted uppercase tracking-wider">Mobile Number *</label>
            <input name="phone" value={formData.phone} onChange={handleChange}
              type="tel" className="w-full px-5 py-4 rounded-xl bg-brand-light border-2 border-brand-border focus:bg-white focus:border-brand-primary transition-colors outline-none text-brand-dark font-medium" required />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-brand-muted uppercase tracking-wider">Educational Qualification *</label>
            <div className="relative">
              <GraduationCap className="absolute left-4 top-4 text-brand-muted" size={20} />
              <input name="education" value={formData.education} onChange={handleChange}
                type="text" className="w-full pl-12 pr-5 py-4 rounded-xl bg-brand-light border-2 border-brand-border focus:bg-white focus:border-brand-primary transition-colors outline-none text-brand-dark font-medium" required />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-brand-muted uppercase tracking-wider">Department / Area of Interest *</label>
            <select name="department" value={formData.department} onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl bg-brand-light border-2 border-brand-border focus:bg-white focus:border-brand-primary transition-colors outline-none text-brand-dark font-medium appearance-none" required>
              <option value="">Select Department</option>
              <option value="R&D">Research & Development</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Quality Assurance">Quality Assurance</option>
              <option value="Sales & Marketing">Sales & Marketing</option>
              <option value="Regulatory Affairs">Regulatory Affairs</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 border-t border-brand-border pt-6 mt-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-brand-muted uppercase tracking-wider">Total Experience *</label>
            <input name="experience" value={formData.experience} onChange={handleChange}
              type="number" min="0" step="0.5"
              className="w-full px-5 py-4 rounded-xl bg-brand-light border-2 border-brand-border focus:bg-white focus:border-brand-primary transition-colors outline-none text-brand-dark font-medium" required />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-brand-muted uppercase tracking-wider">Current Location</label>
            <input name="location" value={formData.location} onChange={handleChange}
              type="text" className="w-full px-5 py-4 rounded-xl bg-brand-light border-2 border-brand-border focus:bg-white focus:border-brand-primary transition-colors outline-none text-brand-dark font-medium" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-brand-muted uppercase tracking-wider">Current Company Name</label>
            <div className="relative">
              <Building className="absolute left-4 top-4 text-brand-muted" size={20} />
              <input name="company" value={formData.company} onChange={handleChange}
                type="text" className="w-full pl-12 pr-5 py-4 rounded-xl bg-brand-light border-2 border-brand-border focus:bg-white focus:border-brand-primary transition-colors outline-none text-brand-dark font-medium" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-brand-muted uppercase tracking-wider">Current Salary <span className="lowercase font-medium">(Lakhs)</span></label>
              <input name="currentSalary" value={formData.currentSalary} onChange={handleChange} placeholder="e.g. 10.5" className="w-full px-5 py-4 rounded-xl bg-brand-light border-2 border-brand-border focus:bg-white focus:border-brand-primary transition-colors outline-none text-brand-dark font-medium" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-brand-muted uppercase tracking-wider">Expected Salary <span className="lowercase font-medium">(Lakhs)</span></label>
              <input name="expectedSalary" value={formData.expectedSalary} onChange={handleChange} placeholder="e.g. 15.0" className="w-full px-5 py-4 rounded-xl bg-brand-light border-2 border-brand-border focus:bg-white focus:border-brand-primary transition-colors outline-none text-brand-dark font-medium" />
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-brand-border mt-6">
          <label className="text-xs font-bold text-brand-muted uppercase tracking-wider block mb-2">Resume Google Drive Link *</label>
          <input
            name="resumeUrl"
            value={formData.resumeUrl}
            onChange={handleChange}
            type="url"
            placeholder="https://drive.google.com/file/d/..."
            className="w-full px-5 py-4 rounded-xl bg-brand-light border-2 border-brand-border focus:bg-white focus:border-brand-primary transition-colors outline-none text-brand-dark font-medium"
            required
          />
          <p className="text-xs text-brand-muted mt-2">
            Please ensure the link access is set to "Anyone with the link can view".
          </p>
        </div>

        <div className="pt-6">
          <button type="submit" disabled={loading}
            className="w-full py-5 rounded-xl font-bold text-white bg-brand-primary hover:bg-brand-secondary shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 text-lg disabled:opacity-70 disabled:hover:-translate-y-0 disabled:hover:shadow-lg disabled:cursor-not-allowed">
            <Briefcase size={20} />
            <span>{loading ? "Submitting..." : "Submit Application"}</span>
          </button>
        </div>

      </form>
    </div>
  );
};

export default careerForm;
