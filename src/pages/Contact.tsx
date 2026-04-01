import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Contact = () => {
  return (
    <div className="font-sans antialiased text-gray-900 bg-slate-50 min-h-screen flex flex-col selection:bg-[#2D63EA] selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative">
        {/* Background Elements */}
        <div className="absolute top-20 right-10 md:right-20 w-64 md:w-96 h-64 md:h-96 bg-[#2DD876]/10 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 w-48 md:w-72 h-48 md:h-72 bg-[#2D63EA]/10 rounded-full blur-3xl z-0" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-blue-900/10 max-w-md w-full text-center border border-gray-100"
        >
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#2D63EA] transition-colors mb-8 text-sm font-medium self-start absolute top-8 left-8">
            <ArrowLeft size={16} /> 返回首页
          </Link>
          
          <div className="mt-8">
            <h1 className="text-3xl font-black text-gray-900 mb-2">联系我们</h1>
            <p className="text-gray-500 mb-8">扫描下方二维码，添加微信客服</p>
            
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 mb-8 inline-block">
              <img 
                src="/wechat-qr.jpg" 
                alt="WeChat QR Code" 
                className="w-64 h-64 object-cover rounded-xl mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="space-y-3 text-sm text-gray-600">
              <p><strong>电话咨询：</strong> 13323667247</p>
              <p><strong>邮箱：</strong> jaimeluvavocados@hotmail.com</p>
              <p><strong>地址：</strong> 河南省三门峡市九孔桥夜市二楼</p>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};
