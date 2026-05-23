import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Typography, Button, Container } from '@mui/material';
import { ArrowRight, Handshake, Compass, FlaskConical, Building2 } from 'lucide-react';
import { heroSlides } from '../data';

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);


  return (
    <Box component="section" className="relative w-full h-[95vh] md:h-[100vh] bg-brand-dark overflow-hidden group">
      {/* Persistent Animated Orbs / Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-secondary rounded-full mix-blend-screen filter blur-[130px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-brand-primary rounded-full mix-blend-screen filter blur-[150px]"
        />
      </div>

      {/* Slider with AnimatePresence */}
      <div className="w-full h-full relative z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full flex items-center pt-20"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={heroSlides[current].image}
                alt={heroSlides[current].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/40 to-transparent"></div>
            </div>

            {/* Content */}
            <Container maxWidth="lg" className="relative z-20 h-full flex flex-col justify-center">
              <Box className="max-w-3xl">
                <div className="flex flex-col gap-6">


                  {/* Heading */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-black text-white leading-tight tracking-tight drop-shadow-lg">
                      {heroSlides[current].title} <span className="text-brand-primary block sm:inline drop-shadow-md">{heroSlides[current].subtitle}</span>
                    </h2>
                  </motion.div>

                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    <p className="text-base md:text-lg font-sans text-white/95 font-light leading-relaxed max-w-2xl drop-shadow-md">
                      {heroSlides[current].desc}
                    </p>
                  </motion.div>

                  {/* Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 mt-4"
                  >
                    <Button
                      variant="contained"
                      onClick={() => navigate(heroSlides[current].link)}
                      className="group/btn relative overflow-hidden bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-full font-bold text-sm md:text-base normal-case shadow-[0_4px_14px_rgba(223,30,97,0.35)] hover:shadow-[0_6px_20px_rgba(223,30,97,0.5)] transition-all duration-300"
                      sx={{ borderRadius: '9999px', backgroundColor: '#DF1E61', '&:hover': { backgroundColor: '#B31048' } }}
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]"></span>
                      {heroSlides[current].btn}
                    </Button>
                  </motion.div>
                </div>
              </Box>
            </Container>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-3.5 z-20">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ease-out focus:outline-none ${current === idx
              ? 'w-10 bg-[#E91E63] shadow-[0_0_12px_rgba(233,30,99,0.7)]'
              : 'w-4.5 bg-white/35 hover:bg-white/60'
              }`}
            style={{ width: current === idx ? '40px' : '18px' }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Global tailwind shimmer animation */}
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </Box>
  );
};

export default HeroSlider;
