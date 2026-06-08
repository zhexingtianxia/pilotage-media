import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';

// 模拟案例详情数据
// 后续您可以将 images 数组中的链接替换为您 public 文件夹中的长图，例如 "/case1-detail.jpg"
const casesData = {
  "1": { 
    title: "抖音账号运营", 
    desc: "粉丝增长与内容策略", 
    images: [
      "/case1.jpg", "/case2.jpg", "/case3.jpg", "/case4.jpg", "/case5.jpg", 
      "/case6.jpg", "/case7.jpg", "/case8.jpg", "/case9.jpg", "/case10.jpg", 
      "/case11.jpg", "/case12.jpg", "/case13.jpg", "/case14.jpg", "/case15.jpg",
      "/case16.jpg", "/case17.jpg",  "/case18.jpg"
    ] 
  },
  "2": { 
    title: "直播带货数据", 
    desc: "单场直播GMV突破", 
    images: [
      "/shuju1.jpg", "/shuju2.jpg", "/shuju3.png", "/shuju4.png", "/shuju5.png", 
      "/shuju6.png", "/shuju7.jpg", "/shuju8.png", "/shuju9.jpg", "/shuju10.png",
      "/shuju11.jpg", "/shuju12.jpg", "/shuju13.jpg", "/shuju14.jpg", "/shuju15.jpg"
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
  "4": { 
    title: "后台经营效果", 
    desc: "成交数据成倍增长", 
    images: [
      "/houtai1.png", "/houtai2.png", "/houtai3.png", "/houtai4.png", "/houtai5.png"
    ] 
  },
  "5": { 
    title: "直播间人气", 
    desc: "人气爆棚，宣传、成交效果显著", 
    images: [
      "/zhibo1.jpg", "/zhibo2.jpg", "/zhibo3.jpg", "/zhibo4.jpg"
    ] 
  },
  "6": { 
    title: "爆款作品", 
    desc: "高播放量与强互动性内容创作", 
    images: [
      "/baokuan1.jpg", "/baokuan2.jpg", "/baokuan3.jpg", "/baokuan4.jpg", "/baokuan5.jpg", 
      "/baokuan6.jpg"
    ] 
  }
};

export const CaseDetail = () => {
  const { id } = useParams();
  const caseInfo = casesData[id as keyof typeof casesData];
  
  const [previewIndex, setPreviewIndex] = useState<number>(-1);

  const openPreview = (index: number) => {
    setPreviewIndex(index);
  };

  const closePreview = () => {
    setPreviewIndex(-1);
  };

  const isPreviewOpen = previewIndex >= 0;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!caseInfo) return;
    setPreviewIndex((prev) => (prev > 0 ? prev - 1 : caseInfo.images.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!caseInfo) return;
    setPreviewIndex((prev) => (prev < caseInfo.images.length - 1 ? prev + 1 : 0));
  };

  // 每次进入页面时滚动到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closePreview();
      } else if (e.key === 'ArrowLeft') {
        setPreviewIndex((prev) => {
           if (prev < 0 || !caseInfo) return prev;
           return prev > 0 ? prev - 1 : caseInfo.images.length - 1;
        });
      } else if (e.key === 'ArrowRight') {
        setPreviewIndex((prev) => {
           if (prev < 0 || !caseInfo) return prev;
           return prev < caseInfo.images.length - 1 ? prev + 1 : 0;
        });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [caseInfo]);

  if (!caseInfo) {
    return (
      <div className="font-sans antialiased text-gray-900 bg-slate-50 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-32 pb-20 px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">案例未找到</h1>
          <Link to="/cases" className="text-[#c82e29] hover:underline">返回案例列表</Link>
        </main>
        <Footer />
      </div>
    );
  }

  // 动态生成业务标签
  const businessTag = caseInfo.title.includes("运营") ? "账号运营" 
                    : caseInfo.title.includes("直播") ? "直播带货" 
                    : caseInfo.title.includes("客资") ? "客资转化" 
                    : caseInfo.title.includes("爆款") ? "内容创作"
                    : "数据增长";

  // 动态确定图片预览框的宽高比例
  const aspectClass = caseInfo.title.includes("直播带货数据") ? "aspect-[16/9]"
                    : (caseInfo.title.includes("抖音账号运营") || 
                       caseInfo.title.includes("客资转化案例") || 
                       caseInfo.title.includes("后台经营效果") || 
                       caseInfo.title.includes("直播间人气") ||
                       caseInfo.title.includes("爆款作品")) ? "aspect-[9/16]"
                    : "aspect-square";

  return (
    <div className="font-sans antialiased text-gray-900 bg-slate-50 min-h-screen flex flex-col selection:bg-[#c82e29] selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-0">
        
        {/* 模块 1 & 2：导航区和 Hero 区 */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          {/* 面包屑导航 */}
          <div className="flex items-center gap-3 mb-6">
            <Link to="/cases" className="inline-flex items-center gap-1.5 text-gray-500 hover:text-[#c82e29] transition-colors text-sm font-medium">
              <ArrowLeft size={16} /> 返回
            </Link>
            <span className="text-gray-300">|</span>
            <div className="flex items-center gap-1.5 text-sm text-gray-500">
              <Link to="/" className="hover:text-[#c82e29] transition-colors">首页</Link>
              <span>&gt;</span>
              <Link to="/cases" className="hover:text-[#c82e29] transition-colors">成功案例</Link>
              <span>&gt;</span>
              <span className="text-gray-900 font-medium">{caseInfo.title}</span>
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">{caseInfo.title}</h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">{caseInfo.desc}</p>
          
          <div className="flex flex-wrap gap-2.5">
            <span className="rounded-full px-4 py-1.5 text-sm border border-gray-200 bg-white text-gray-600 hover:bg-[#c82e29] hover:text-white hover:border-[#c82e29] transition-colors cursor-default shadow-sm hover:shadow-md">
              {businessTag}
            </span>
            <span className="rounded-full px-4 py-1.5 text-sm bg-red-50 text-[#c82e29] border border-red-100 font-medium hidden sm:inline-block">
              成果展示
            </span>
            <span className="rounded-full px-4 py-1.5 text-sm bg-[#c82e29] text-white border border-[#c82e29] font-medium hidden sm:inline-block shadow-sm">
              成功案例
            </span>
          </div>
        </div>
        
        {/* 模块 3：图片缩略图全览区 */}
        {caseInfo.images.length > 0 && (
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {caseInfo.images.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`${aspectClass} rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-gray-100 border border-gray-200 cursor-pointer group`}
                  onClick={() => openPreview(idx)}
                >
                  <img 
                    src={img} 
                    alt={`${caseInfo.title} - 图片 ${idx + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer" 
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 模块 6：案例小结区 */}
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 text-center">
            <h3 className="text-xl font-bold text-[#c82e29] mb-4">案例总结</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto">
              通过定制化的策略和专业的内容执行，我们为客户实现了显著的数据提升与商业转化。无论是品牌曝光还是直播带货，喆也传媒始终坚持以结果为导向。
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">专业运营服务</span>
              <span className="text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">精准直播策划</span>
              <span className="text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">高效流量转化</span>
              <span className="text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">优质内容共创</span>
            </div>
          </div>
        </div>

      </main>

      <Footer />

      {/* 灯箱预览区 */}
      {isPreviewOpen && caseInfo && (
        <div className="fixed inset-0 z-[100]">
          {/* 背景遮罩 */}
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={closePreview} />
          
          {/* 上下滚动区域 */}
          <div 
            className="absolute inset-0 overflow-y-auto overflow-x-hidden"
            onClick={closePreview}
          >
            <div className="min-h-full w-full flex items-start justify-center cursor-zoom-out">
              <img 
                src={caseInfo.images[previewIndex]} 
                alt={`Preview ${previewIndex + 1}`} 
                style={{ imageRendering: 'crisp-edges' }}
                className="w-full h-auto block drop-shadow-2xl cursor-default" 
                onClick={(e) => e.stopPropagation()} 
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <button 
            className="fixed left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-3 z-10 hidden sm:block shadow-lg"
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button 
            className="fixed right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-3 z-10 hidden sm:block shadow-lg"
            onClick={handleNext}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          <button 
            className="fixed top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2 z-10 shadow-lg"
            onClick={closePreview}
            aria-label="Close preview"
          >
            <X size={24} />
          </button>
          
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-black/50 px-4 py-1.5 rounded-full font-mono z-10 flex items-center gap-4 shadow-lg">
            <button className="sm:hidden p-1" onClick={handlePrev}><ChevronLeft size={20} /></button>
            <span>{previewIndex + 1} / {caseInfo.images.length}</span>
            <button className="sm:hidden p-1" onClick={handleNext}><ChevronRight size={20} /></button>
          </div>
        </div>
      )}
    </div>
  );
};
