import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Cases = () => {
  const cases = [
    {
      id: 1,
      title: "抖音账号运营",
      desc: "粉丝增长与内容策略",
      img: "/case1.jpg"
    },
    {
      id: 2,
      title: "直播带货数据",
      desc: "单场直播GMV突破",
      img: "/shuju1.jpg"
    },
    {
      id: 3,
      title: "客资转化案例",
      desc: "高效客户转化",
      img: "/kezi1.jpg"
    },
    {
      id: 5,
      title: "后台经营效果",
      desc: "千万级播放量",
      img: "/houtai1.png"
    },
    {
      id: 6,
      title: "直播间人气",
      desc: "多平台联动",
      img: "/zhibo1.jpg"
    }
  ];

  return (
    <div className="font-sans antialiased text-gray-900 bg-slate-50 min-h-screen flex flex-col selection:bg-[#2D63EA] selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-[#f0f9ff] skew-x-0 md:skew-x-[-10deg] md:translate-x-20 z-0 opacity-50 md:opacity-100" />
        <div className="absolute top-20 right-10 md:right-20 w-64 md:w-96 h-64 md:h-96 bg-[#2DD876]/10 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 w-48 md:w-72 h-48 md:h-72 bg-[#2D63EA]/10 rounded-full blur-3xl z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16">
            <div>
              <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#2D63EA] transition-colors mb-6 text-sm font-medium">
                <ArrowLeft size={16} /> 返回首页
              </Link>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-4">
                成功<span className="text-[#2D63EA]">案例</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                我们用数据说话，用结果证明。以下是我们服务过的部分优秀案例展示。
              </p>
            </div>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {cases.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100 block"
              >
                <Link to={`/cases/${item.id}`} className="block w-full h-full">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-xl mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                    <p className="text-white/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
