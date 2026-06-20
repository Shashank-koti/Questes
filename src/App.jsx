import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import QuestusPharma from './pages/QuestusPharma';
import VisionMission from './pages/VisionMission';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Infrastructure from './pages/Infrastructure';
import Portfolio from './pages/Portfolio';
import Science from './pages/Science';

function PageWrapper({ children }) {
  return (
    <div className="pt-20 lg:pt-24 min-h-[calc(100vh-100px)]">
      {children}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-brand-light font-sans text-brand-dark selection:bg-brand-primary/30 selection:text-brand-dark">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<Home />} />

            {/* Sub-Pages */}
            <Route path="/about/questus-pharma" element={<PageWrapper><QuestusPharma /></PageWrapper>} />
            <Route path="/about/vision-mission" element={<PageWrapper><VisionMission /></PageWrapper>} />
            <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
            <Route path="/science" element={<PageWrapper><Science /></PageWrapper>} />
            <Route path="/infrastructure" element={<PageWrapper><Infrastructure /></PageWrapper>} />
            <Route path="/careers" element={<PageWrapper><Careers /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
