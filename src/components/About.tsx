import React from 'react';
import { Award, TrendingUp, Users, Video } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://picsum.photos/seed/office/400/500" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover mb-8"
                alt="Office"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://picsum.photos/seed/team/400/500" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
                alt="Team"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs text-center transform scale-110">
                <p className="text-4xl font-black text-[#2D63EA]">2019</p>
                <p className="text-gray-500 text-sm uppercase tracking-wider font-bold mt-1">成立于 Founded</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-[#2D63EA] font-bold tracking-wider uppercase text-sm mb-2">关于我们 About Us</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">豫西地区新媒体行业的<br/>标杆企业</h3>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              河南三门峡领航传媒有限公司，成立于2019年，是立足三门峡、辐射全国的领先新媒体综合服务机构。
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              自成立以来，我们深耕数字内容与直播电商领域，是抖音官方认证的MCN机构与直播公会，并获得了Bilibili、微信视频号、快手等多家主流平台的官方机构认证。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg text-[#2D63EA]">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">官方认证</h4>
                  <p className="text-sm text-gray-500 mt-1">抖音 MCN / 直播公会</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-50 p-3 rounded-lg text-[#2DD876]">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">行业标杆</h4>
                  <p className="text-sm text-gray-500 mt-1">三门峡优秀传媒企业</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
