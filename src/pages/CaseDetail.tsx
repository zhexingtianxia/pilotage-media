import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

// 模拟案例详情数据
// 后续您可以将 images 数组中的链接替换为您 public 文件夹中的长图，例如 "/case1-detail.jpg"
const casesData = {
  "1": { 
    title: "抖音账号运营", 
    desc: "粉丝增长与内容策略", 
    images: [
      "/case1.jpg", "/case2.jpg", "/case3.jpg", "/case4.jpg", "/case5.jpg", 
      "/case6.jpg", "/case7.jpg", "/case8.jpg", "/case9.jpg", "/case10.jpg", 
      "/case11.jpg", "/case12.jpg", "/case13.jpg"
    ] 
  },
  "2": { 
    title: "直播带货数据", 
    desc: "单场直播GMV突破", 
    images: [
      "/shuju1.jpg", "/shuju2.jpg", "/shuju3.png", "/shuju4.png", "/shuju5.png", 
      "/shuju6.png", "/shuju7.jpg", "/shuju8.png", "/shuju9.jpg", "/shuju10.png"
    ] 
  },
  "3": { 
    title: "客资转化案例", 
    desc: "高效客户转化", 
    images: [
      "/kezi1.jpg", "/kezi2.jpg", "/kezi3.jpg", "/kezi4.jpg", "/kezi5.jpg", 
      "/kezi6.jpg", "/kezi7.png"
    ] 
  },
  "5": { 
    title: "后台经营效果", 
    desc: "千万级播放量", 
    images: [
      "/houtai1.png", "/houtai2.png", "/houtai3.png", "/houtai4.png", "/houtai5.png"
    ] 
  },
  "6": { 
    title: "直播间人气", 
    desc: "多平台联动", 
    images: [
      "/zhibo1.jpg", "/zhibo2.jpg", "/zhibo3.jpg", "/zhibo4.jpg"
    ] 
  }
};

export const CaseDetail = () => {
  const { id } = useParams();
  const caseInfo = casesData[id as keyof typeof casesData];

  // 每次进入页面时滚动到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!caseInfo) {
    return (
      <div className="font-sans antialiased text-gray-900 bg-slate-50 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-32 pb-20 px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">案例未找到</h1>
          <Link to="/cases" className="text-[#2D63EA] hover:underline">返回案例列表</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="font-sans antialiased text-gray-900 bg-slate-50 min-h-screen flex flex-col selection:bg-[#2D63EA] selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link to="/cases" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#2D63EA] transition-colors mb-6 text-sm font-medium">
            <ArrowLeft size={16} /> 返回案例列表
          </Link>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">{caseInfo.title}</h1>
          <p className="text-lg text-gray-600">{caseInfo.desc}</p>
        </div>
        
        {/* 纯图片排布区域 - 双列瀑布流布局 */}
        <div className="w-full max-w-6xl mx-auto px-2 sm:px-0">
          <div className="columns-2 gap-3 sm:gap-4 md:gap-6 space-y-3 sm:space-y-4 md:space-y-6">
            {caseInfo.images.map((img, idx) => (
              <div key={idx} className="break-inside-avoid rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white border border-gray-100">
                <img 
                  src={img} 
                  alt={`${caseInfo.title} - 详情图 ${idx + 1}`} 
                  className="w-full h-auto block hover:scale-105 transition-transform duration-700" 
                  referrerPolicy="no-referrer" 
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
