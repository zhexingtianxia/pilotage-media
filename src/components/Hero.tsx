import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f0f9ff] skew-x-[-10deg] translate-x-20 z-0" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#2DD876]/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#2D63EA]/10 rounded-full blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2DD876]"></span>
              <span className="text-sm font-medium text-gray-600 tracking-wide">官方认证 MCN 机构</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-6">
              领航<span className="text-[#2D63EA]">新媒体</span><br />
              创造<span className="text-[#2DD876]">无限可能</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              立足三门峡，辐射全国。我们深耕数字内容与直播电商领域，为您提供专业的一站式新媒体解决方案。
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#2D63EA] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1a4bd6] transition-all shadow-xl shadow-blue-500/20 flex items-center gap-2 group">
                立即咨询
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-gray-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-md border border-gray-100 flex items-center gap-2">
                <Play size={20} className="fill-gray-800" />
                了解更多
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 text-gray-400 grayscale opacity-70">
               {/* Placeholder for partner logos - using text for now or simple svgs */}
               <span className="font-bold text-xl">Douyin</span>
               <span className="font-bold text-xl">Bilibili</span>
               <span className="font-bold text-xl">Kuaishou</span>
               <span className="font-bold text-xl">WeChat</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 border-4 border-white transform rotate-[-2deg] hover:rotate-0 transition-all duration-500">
              <img 
                src="https://picsum.photos/seed/media/800/600" 
                alt="Live Streaming Studio" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-bold text-xl">专业直播基地</p>
                  <p className="text-white/80 text-sm">Professional Live Streaming Base</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#2DD876] rounded-2xl -z-10 opacity-20 rotate-12"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#2D63EA] rounded-full -z-10 opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
