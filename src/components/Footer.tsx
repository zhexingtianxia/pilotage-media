import React from 'react';
import { Logo } from './Logo';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-[#111827] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="mb-6 bg-white/10 p-2 rounded-lg inline-block">
               {/* Logo adapted for dark background */}
               <Logo className="h-10" />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              立足三门峡，辐射全国。<br/>
              做最懂内容的新媒体服务商。
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2D63EA] transition-colors">
                <span className="font-bold text-xs">DY</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2D63EA] transition-colors">
                <span className="font-bold text-xs">WX</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2D63EA] transition-colors">
                <span className="font-bold text-xs">BL</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">快速链接</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-[#2DD876] transition-colors">首页 Home</a></li>
              <li><a href="#about" className="hover:text-[#2DD876] transition-colors">关于我们 About</a></li>
              <li><a href="#services" className="hover:text-[#2DD876] transition-colors">业务领域 Services</a></li>
              <li><a href="#partners" className="hover:text-[#2DD876] transition-colors">合作伙伴 Partners</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">联系方式</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 text-[#2D63EA]" size={20} />
                <span>河南省三门峡市商务中心区<br/>领航传媒大厦</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-[#2D63EA]" size={20} />
                <span>0398-8888888</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-[#2D63EA]" size={20} />
                <span>contact@pilotage.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">加入我们</h4>
            <p className="text-gray-400 mb-4">
              寻找有才华的主播、运营与创意人才。
            </p>
            <button className="w-full bg-[#2DD876] text-black font-bold py-3 rounded-lg hover:bg-[#25b864] transition-colors">
              投递简历
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; 2024 河南三门峡领航传媒有限公司. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">隐私政策</a>
            <a href="#" className="hover:text-white">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
