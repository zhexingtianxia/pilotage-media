import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-[#2D63EA] selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      
      {/* Partners Section (Simple) */}
      <section id="partners" className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 font-bold uppercase tracking-widest mb-8 text-sm">Trusted Partners & Platforms</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Using text placeholders styled as logos for now */}
             <div className="text-2xl font-black text-black flex items-center gap-2"><span className="w-8 h-8 bg-black rounded-md"></span> Douyin</div>
             <div className="text-2xl font-black text-[#FF4747] flex items-center gap-2"><span className="w-8 h-8 bg-[#FF4747] rounded-full"></span> Kuaishou</div>
             <div className="text-2xl font-black text-[#00A1D6] flex items-center gap-2"><span className="w-8 h-8 bg-[#00A1D6] rounded-md"></span> Bilibili</div>
             <div className="text-2xl font-black text-[#07C160] flex items-center gap-2"><span className="w-8 h-8 bg-[#07C160] rounded-md"></span> WeChat</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
