/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
const ProblemSolution = lazy(() => import('./components/ProblemSolution'));
const Services = lazy(() => import('./components/Services'));
const TechStack = lazy(() => import('./components/TechStack'));
const Workflow = lazy(() => import('./components/Workflow'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030303] text-on-surface selection:bg-[#d946ef]/30 selection:text-white antialiased overflow-x-hidden relative">
      
      {/* Background decoration layout highlights representing Nexio's signature glowing ambient layout */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[85%] max-w-[1200px] aspect-[1/0.5] rounded-full bg-gradient-to-tr from-[#d946ef]/20 via-[#a21caf]/12 to-transparent blur-[140px] pointer-events-none -z-10"></div>
      
      {/* Mid section glowing spotlights for visual density */}
      <div className="absolute top-[32%] right-[-10%] w-[50%] aspect-square rounded-full bg-[#d946ef]/10 blur-[150px] pointer-events-none -z-10"></div>
      <div className="absolute top-[52%] left-[-10%] w-[50%] aspect-square rounded-full bg-[#a21caf]/8 blur-[160px] pointer-events-none -z-10"></div>
      
      {/* Bottom CTA glow spotlight */}
      <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 w-[80%] max-w-[1000px] aspect-[1/0.5] rounded-full bg-gradient-to-tr from-[#d946ef]/15 via-[#a21caf]/10 to-transparent blur-[130px] pointer-events-none -z-10"></div>
      
      {/* Structural layout components */}
      <Navbar />
      
      <main className="space-y-4">
        <Hero />
        <Suspense fallback={<div className="min-h-[300px]" />}> 
          <ProblemSolution />
          <Services />
          <TechStack />
          <Workflow />
          <About />
          <Contact />
        </Suspense>
      </main>
      
      <Footer/>
      <WhatsAppButton/>
    </div>
  );
}
