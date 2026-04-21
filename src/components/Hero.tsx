import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center pt-24 pb-12 overflow-hidden bg-slate-50">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-[#f0f9ff] skew-x-0 md:skew-x-[-10deg] md:translate-x-20 z-0 opacity-50 md:opacity-100" />
      <div className="absolute top-20 right-10 md:right-20 w-64 md:w-96 h-64 md:h-96 bg-[#2DD876]/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 w-48 md:w-72 h-48 md:h-72 bg-[#2D63EA]/10 rounded-full blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left pt-10 lg:pt-0"
          >
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 mb-6 md:mb-8">
              <span className="w-2 h-2 rounded-full bg-[#2DD876]"></span>
              <span className="text-xs sm:text-sm font-medium text-gray-600 tracking-wide">官方认证 MCN 机构</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.2] md:leading-[1.1] mb-6">
              领航<span className="text-[#2D63EA]">新媒体</span><br />
              创造<span className="text-[#2DD876]">无限可能</span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              立足三门峡，辐射全国。我们深耕数字内容与直播电商领域，为您提供专业的一站式新媒体解决方案。
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link to="/contact" className="w-full sm:w-auto justify-center bg-[#2D63EA] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1a4bd6] transition-all shadow-xl shadow-blue-500/20 flex items-center gap-2 group">
                立即咨询
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/cases" className="w-full sm:w-auto justify-center bg-white text-gray-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-md border border-gray-100 flex items-center gap-2">
                <Play size={20} className="fill-gray-800" />
                了解更多
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block mt-10 lg:mt-0"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 border-4 border-white transform lg:rotate-[-2deg] hover:rotate-0 transition-all duration-500">
              <img 
                src="https://picsum.photos/seed/media/800/600" 
                alt="Live Streaming Studio" 
                className="w-full h-auto object-cover aspect-video lg:aspect-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-6 md:p-8">
                <div className="text-white">
                  <p className="font-bold text-lg md:text-xl">专业直播基地</p>
                  <p className="text-white/80 text-xs md:text-sm mt-1">Professional Live Streaming Base</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-32 h-32 md:w-40 md:h-40 bg-[#2DD876] rounded-2xl -z-10 opacity-20 rotate-12"></div>
            <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-32 h-32 md:w-40 md:h-40 bg-[#2D63EA] rounded-full -z-10 opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
