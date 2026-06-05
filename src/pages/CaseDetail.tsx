import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react';

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
    desc: "成交数据成倍增长", 
    images: [
      "/houtai1.png", "/houtai2.png", "/houtai3.png", "/houtai4.png", "/houtai5.png"
    ] 
  },
  "6": { 
    title: "直播间人气", 
    desc: "人气爆棚，宣传、成交效果显著", 
    images: [
      "/zhibo1.jpg", "/zhibo2.jpg", "/zhibo3.jpg", "/zhibo4.jpg"
    ] 
  }
};

export const CaseDetail = () => {
  const { id } = useParams();
  const caseInfo = casesData[id as keyof typeof casesData];

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // 每次进入页面时滚动到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // 开启预览时锁定 body 滚动，防止背景页面联动滚动
  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [currentIndex]);

  // 监听键盘快捷键（ESC 关闭，左右方向键切换）
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null || !caseInfo) return;
      if (e.key === 'Escape') {
        setCurrentIndex(null);
      } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        setCurrentIndex((prev) => {
          if (prev === null) return null;
          return prev === 0 ? caseInfo.images.length - 1 : prev - 1;
        });
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        setCurrentIndex((prev) => {
          if (prev === null) return null;
          return prev === caseInfo.images.length - 1 ? 0 : prev + 1;
        });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, caseInfo]);

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
      
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link to="/cases" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#2D63EA] transition-colors mb-6 text-sm font-medium">
            <ArrowLeft size={16} /> 返回案例列表
          </Link>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">{caseInfo.title}</h1>
          <p className="text-lg text-gray-600">{caseInfo.desc}</p>
        </div>
        
        {/* 精致缩略图纵览排布区域 */}
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
            {caseInfo.images.map((img, idx) => (
              <div 
                key={idx} 
                className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-zoom-in"
                onClick={() => setCurrentIndex(idx)}
              >
                {/* 缩略图 - 采用高度裁剪展示，展现纵览效果 */}
                <img 
                  src={img} 
                  alt={`${caseInfo.title} - 预览图 ${idx + 1}`} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                  referrerPolicy="no-referrer" 
                />
                
                {/* 遮罩、序号与文字指示 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-[10px] text-white/70 font-mono tracking-widest uppercase mb-1">图片 {idx + 1}</span>
                  <div className="flex items-center justify-between text-white">
                    <span className="text-xs font-semibold">点击查看高清大图</span>
                    <span className="text-xs bg-[#2D63EA] text-white w-5 h-5 rounded-full flex items-center justify-center font-bold font-mono">+</span>
                  </div>
                </div>

                {/* 始终显示的精致序列角标 */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-gray-800 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-sm border border-gray-100/50">
                  {idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* 高清灯箱全屏图片/幻灯片预览与切换功能 */}
      {currentIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex flex-col bg-black/98 select-none transition-all duration-300"
          onClick={() => setCurrentIndex(null)}
        >
          {/* 顶部控制栏及页数展示 */}
          <div className="absolute top-0 inset-x-0 h-16 flex items-center justify-between px-6 bg-gradient-to-b from-black/90 to-transparent text-white pointer-events-none z-30">
            <div className="text-sm font-medium tracking-wide">
              {caseInfo.title} <span className="text-white/40 mx-2">|</span> 图片 {currentIndex + 1} / {caseInfo.images.length}
            </div>
            <button 
              className="pointer-events-auto w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white backdrop-blur-md shadow-md focus:outline-none"
              onClick={() => setCurrentIndex(null)}
            >
              <X size={20} />
            </button>
          </div>

          {/* 核心可滚动大图区域 */}
          <div 
            className="w-full h-full overflow-y-auto overflow-x-hidden pt-20 pb-36 flex justify-center items-start pointer-events-auto cursor-zoom-out scrollbar-thin"
            onClick={() => setCurrentIndex(null)}
          >
            <div 
              className="relative w-full max-w-[95vw] sm:max-w-[550px] md:max-w-[650px] lg:max-w-[750px] mx-auto shadow-2xl rounded-2xl overflow-hidden my-4 bg-zinc-950 cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={caseInfo.images[currentIndex]} 
                alt={`${caseInfo.title} 大图预览 ${currentIndex + 1}`} 
                className="w-full h-auto block select-none"
                style={{
                  imageRendering: 'auto',
                }}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* 左右切换快捷控制区 (仅在图片总数 > 1 时渲染) */}
          {caseInfo.images.length > 1 && (
            <div className="absolute inset-y-0 inset-x-4 md:inset-x-8 flex items-center justify-between pointer-events-none z-20">
              {/* 上一张 按钮 */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex((prev) => (prev === null ? null : (prev === 0 ? caseInfo.images.length - 1 : prev - 1)));
                }}
                className="pointer-events-auto w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md shadow-lg transition-all border border-white/5 active:scale-95 focus:outline-none"
              >
                <ChevronLeft size={24} />
              </button>

              {/* 下一张 按钮 */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex((prev) => (prev === null ? null : (prev === caseInfo.images.length - 1 ? 0 : prev + 1)));
                }}
                className="pointer-events-auto w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md shadow-lg transition-all border border-white/5 active:scale-95 focus:outline-none"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}

          {/* 底部全尺寸缩略图滑轨导览 */}
          {caseInfo.images.length > 1 && (
            <div className="absolute bottom-6 inset-x-0 flex justify-center pointer-events-none z-20 px-4">
              <div className="flex gap-2.5 pointer-events-auto py-2.5 px-4 bg-black/80 backdrop-blur-lg rounded-2xl max-w-[90vw] overflow-x-auto scrollbar-none shadow-2xl border border-white/5">
                {caseInfo.images.map((imgSrc, tIdx) => (
                  <button
                    key={tIdx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(tIdx);
                    }}
                    className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 focus:outline-none ${
                      currentIndex === tIdx 
                        ? 'border-[#2D63EA] scale-110 shadow-md shadow-blue-500/20' 
                        : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                    }`}
                  >
                    <img 
                      src={imgSrc} 
                      className="w-full h-full object-cover object-top" 
                      alt={`切换缩略图-${tIdx + 1}`} 
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <Footer />
    </div>
  );
};
