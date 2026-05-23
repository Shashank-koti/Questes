import React from 'react';
import { FlaskConical, ShieldCheck, Activity } from 'lucide-react';

export const heroSlides = [
  {
    id: 2,
    title: "Driven by Science.",
    subtitle: "Built for Impact.",
    desc: "Our research and development efforts focus on creating safe, stable, and effective pharmaceutical products.",
    btn: "Our Science",
    link: "/science",
    image: "/images/hero_slide_2.png",
    // icon: <Activity className="w-5 h-5 text-brand-primary" />
  },
  {
    id: 1,
    title: "Making Essential Medicines",
    subtitle: "More Accessible.",
    desc: "A comprehensive portfolio of high-quality injectables and oral solid dosage formulations for hospitals worldwide.",
    btn: "View Portfolio",
    link: "/portfolio",
    image: "/images/white_liquid_vitals.png",
    // icon: <FlaskConical className="w-5 h-5 text-cyan-400" />
  },
  {
    id: 3,
    title: "Partnering for",
    subtitle: "Better Healthcare.",
    desc: "We collaborate with global healthcare institutions to deliver reliable medicines where they matter most.",
    btn: "About Us",
    link: "/about/questes-pharma",
    image: "/images/white_injections.png",
    // icon: <ShieldCheck className="w-5 h-5 text-blue-400" />
  }
];

export const jobRoles = [
  { role: "Senior Formulation Scientist", department: "R&D", location: "Hyderabad" },
  { role: "Quality Assurance Manager", department: "Quality", location: "Hyderabad" },
  { role: "Regulatory Affairs Specialist", department: "Compliance", location: "Hyderabad" }
];

export const portfolioCategories = [
  {
    title: "Cardiology",
    description: "Advanced formulations addressing complex cardiovascular conditions, engineered to improve heart health and patient lifespans.",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=800&auto=format&fit=crop",
    color: "from-rose-500/20 to-transparent",
    iconName: "HeartPulse"
  },
  {
    title: "ICU Management",
    description: "Critical life-saving therapies designed for rapid intervention and stabilization in intensive care environments.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    color: "from-blue-500/20 to-transparent",
    iconName: "Activity"
  },
  {
    title: "Critical Care Injectables",
    description: "High-precision sterile injectables manufactured under rigorous global standards for immediate patient care.",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=800&auto=format&fit=crop",
    color: "from-teal-500/20 to-transparent",
    iconName: "Syringe"
  },
  {
    title: "Pain Management",
    description: "Targeted analgesic solutions providing effective relief while maintaining optimal safety and tolerability profiles.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ad?q=80&w=800&auto=format&fit=crop",
    color: "from-purple-500/20 to-transparent",
    iconName: "Pill"
  }
];
