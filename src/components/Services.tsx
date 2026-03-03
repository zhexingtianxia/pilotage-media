import React from 'react';
import { Smartphone, ShoppingBag, Video, Mic2, BarChart3, Globe } from 'lucide-react';

const services = [
  {
    icon: <Smartphone size={32} />,
    title: "MCN 机构运营",
    desc: "全平台达人孵化与管理，提供内容策划、流量扶持与商业变现服务。",
    color: "bg-blue-500"
  },
  {
    icon: <ShoppingBag size={32} />,
    title: "直播电商",
    desc: "专业的直播间搭建与运营团队，助力品牌实现高效的直播带货转化。",
    color: "bg-green-500"
  },
  {
    icon: <Video size={32} />,
    title: "短视频制作",
    desc: "创意脚本、专业拍摄与后期剪辑，打造具有传播力的爆款短视频内容。",
    color: "bg-indigo-500"
  },
  {
    icon: <Mic2 size={32} />,
    title: "娱乐直播",
    desc: "招募与培养优质才艺主播，提供专业的直播培训与公会运营服务。",
    color: "bg-purple-500"
  },
  {
    icon: <BarChart3 size={32} />,
    title: "品牌全案营销",
    desc: "基于大数据的品牌营销策略，整合多渠道资源，提升品牌影响力。",
    color: "bg-orange-500"
  },
  {
    icon: <Globe size={32} />,
    title: "本地生活服务",
    desc: "连接本地商家与消费者，通过新媒体手段赋能实体经济发展。",
    color: "bg-cyan-500"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#2DD876] font-bold tracking-wider uppercase text-sm mb-2">业务领域 Services</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">全方位新媒体解决方案</h3>
          <p className="text-gray-600">我们提供从账号孵化到商业变现的全链路服务，助力企业和个人在新媒体时代乘风破浪。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className={`w-14 h-14 rounded-xl ${item.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
