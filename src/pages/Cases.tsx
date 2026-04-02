import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cases.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl bg-white border border-gray-100 transition-all duration-300 flex flex-col"
              >
                <Link to={`/cases/${item.id}`} className="block w-full h-full flex flex-col">
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                      <span className="text-xs font-bold text-[#2D63EA]">Case {item.id < 10 ? `0${item.id}` : item.id}</span>
                    </div>
                  </div>
                  <div className="p-5 md:p-6 flex-grow flex flex-col justify-center bg-white z-10 relative border-t border-gray-50">
                    <h3 className="text-gray-900 font-bold text-xl mb-2 group-hover:text-[#2D63EA] transition-colors">{item.title}</h3>
                    <p className="text-gray-500 text-sm line-clamp-2">{item.desc}</p>
                    <div className="mt-4 flex items-center text-[#2D63EA] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                      查看详情 <ArrowRight size={16} className="ml-1" />
                    </div>
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
