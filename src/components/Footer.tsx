import React from 'react';
import { Logo } from './Logo';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-[#111827] text-white pt-16 pb-8 lg:pt-20 lg:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12 lg:mb-16">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="mb-6 bg-white/10 p-2 rounded-lg inline-block hover:bg-white/20 transition-colors">
               <img src="/logo-horizontal.png" alt="Pilotage Media" className="h-10 sm:h-12 w-auto object-contain" />
            </Link>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 max-w-sm">
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
            <h4 className="text-lg font-bold mb-5 lg:mb-6">快速链接</h4>
            <ul className="space-y-3 lg:space-y-4 text-gray-400 text-sm sm:text-base">
              <li><a href="/#home" className="hover:text-[#2DD876] transition-colors">首页 Home</a></li>
              <li><a href="/#about" className="hover:text-[#2DD876] transition-colors">关于我们 About</a></li>
              <li><a href="/#services" className="hover:text-[#2DD876] transition-colors">业务领域 Services</a></li>
              <li><a href="/#partners" className="hover:text-[#2DD876] transition-colors">合作伙伴 Partners</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-5 lg:mb-6">联系方式</h4>
            <ul className="space-y-3 lg:space-y-4 text-gray-400 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 text-[#2D63EA] mt-0.5" size={18} />
                <span>河南省三门峡市九孔桥夜市二楼</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-[#2D63EA]" size={18} />
                <span>13323667247</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-[#2D63EA]" size={18} />
                <span>jaimeluvavocados@hotmail.com</span>
              </li>
            </ul>
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-bold mb-5 lg:mb-6">加入我们</h4>
            <p className="text-gray-400 text-sm sm:text-base mb-4">
              寻找有才华的主播、运营与创意人才。
            </p>
            <Link to="/contact" className="inline-block text-center w-full sm:w-auto lg:w-full bg-[#2DD876] text-black font-bold py-3 px-8 rounded-xl hover:bg-[#25b864] transition-colors">
              投递简历
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 lg:pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs sm:text-sm gap-4 text-center md:text-left">
          <p>&copy; 2024 河南三门峡领航传媒有限公司. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
