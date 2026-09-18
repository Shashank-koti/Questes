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
    <Box component="section" className="relative w-full h-[90vh] min-h-[560px] sm:min-h-[620px] md:h-screen bg-gradient-to-br from-[#F5F9FF] via-[#EEF5FD] to-[#E5EFFB] overflow-hidden group selection:bg-brand-primary/20 selection:text-brand-dark">
      {/* Persistent Ambient Glows / Subtle Accents (Layered behind slider) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft cyan/blue glow from logo palette */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-sky-200/40 rounded-full filter blur-[90px] sm:blur-[130px]"
        />
        {/* Gentle warm rose hint from logo accent */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-24 -left-24 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-pink-100/50 rounded-full filter blur-[90px] sm:blur-[120px]"
        />
        {/* Subtle micro dot pattern for scientific precision look */}
        <div className="absolute inset-0 bg-[radial-gradient(#084995_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.03]" />
      </div>

      {/* Slider with AnimatePresence */}
      <div className="w-full h-full relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full flex items-center pt-16 sm:pt-20"
          >
            {/* Background Image with Natural Precision Overlay (Zero white cast on subject) */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={heroSlides[current].image}
                alt={heroSlides[current].title}
                className="w-full h-full object-cover object-center lg:object-[right_center]"
              />
              {/* Clean text backdrop on left, zero white cast on right */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5F9FF] via-[#F5F9FF]/80 via-35% md:via-40% to-transparent to-60% md:to-65%"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#F5F9FF]/85 via-transparent to-transparent sm:hidden"></div>
            </div>

            {/* Content */}
            <Container maxWidth="lg" className="relative z-20 h-full flex flex-col justify-center px-4 sm:px-6 md:px-8">
              <Box className="max-w-3xl">
                <div className="flex flex-col gap-4 sm:gap-6">

                  {/* Heading */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black text-[#0A2E5C] leading-[1.15] sm:leading-tight tracking-tight">
                      {heroSlides[current].title}{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-[#1E6FD9] to-[#d42278] block sm:inline">
                        {heroSlides[current].subtitle}
                      </span>
                    </h2>
                  </motion.div>

                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-sans text-slate-700 font-normal leading-relaxed max-w-2xl line-clamp-4 sm:line-clamp-none">
                      {heroSlides[current].desc}
                    </p>
                  </motion.div>

                  {/* Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 mt-2 sm:mt-4"
                  >
                    <Button
                      variant="contained"
                      onClick={() => navigate(heroSlides[current].link)}
                      className="group/btn relative overflow-hidden bg-brand-primary hover:bg-brand-secondary text-white px-7 sm:px-9 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg normal-case shadow-[0_10px_25px_rgba(8,73,149,0.25)] hover:shadow-[0_14px_30px_rgba(8,73,149,0.4)] transition-all duration-300 w-fit"
                      sx={{ borderRadius: '9999px', backgroundColor: '#084995', '&:hover': { backgroundColor: '#0A2E5C' } }}
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
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-2.5 sm:gap-3.5 z-20 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-brand-border/60 shadow-md">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition-all duration-500 ease-out focus:outline-none ${current === idx
              ? 'bg-gradient-to-r from-brand-primary to-[#d42278] shadow-[0_2px_8px_rgba(8,73,149,0.35)]'
              : 'bg-slate-300/80 hover:bg-slate-400'
              }`}
            style={{ width: current === idx ? '36px' : '12px' }}
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
