import React from 'react';
import { Zap, FileText, Users, Shield, Mail, Heart, Twitter, Github, Linkedin, MessageCircle, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0a0a0a] via-[#0f0f23] to-[#1a1a2e] border-t border-[#16213e] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Newsletter section */}
          <div className="mb-16 lg:mb-20">
            <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0f0f23]/80 to-[#1a1a2e]/80 backdrop-blur-xl border border-[#16213e] shadow-2xl">
              <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] animate-pulse"></div>
                    <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#06b6d4] bg-clip-text text-transparent">
                      Stay updated
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed max-w-lg">
                    Subscribe to our newsletter for the latest tutorials, updates, and community insights delivered directly to your inbox.
                  </p>
                </div>
                <div className="w-full lg:w-auto lg:flex-shrink-0">
                  <div className="flex flex-col sm:flex-row gap-3 min-w-0">
                    <div className="relative flex-1 sm:min-w-[320px]">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#64748b] w-5 h-5" />
                      <input 
                        type="email" 
                        placeholder="Enter your email address" 
                        className="w-full pl-12 pr-4 py-4 bg-[#0f0f23]/50 border border-[#16213e] rounded-2xl text-white placeholder:text-[#64748b] focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      />
                    </div>
                    <button className="group px-8 py-4 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 whitespace-nowrap flex items-center gap-2">
                      Subscribe
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main footer content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16 lg:mb-20">
            {/* Brand section */}
            <div className="space-y-6 sm:col-span-2 lg:col-span-1">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#8b5cf6] to-[#06b6d4] p-3 rounded-2xl flex-shrink-0 shadow-lg shadow-purple-500/25">
                  <Zap className="text-white w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent mb-2">
                    TanStack Journey
                  </h2>
                  <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                    Master modern React data management with our comprehensive structured learning paths and expert resources.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3 pt-2">
                {[
                  { icon: Twitter, color: 'hover:text-[#06b6d4]', bg: 'hover:bg-cyan-500/10' },
                  { icon: Github, color: 'hover:text-[#8b5cf6]', bg: 'hover:bg-purple-500/10' },
                  { icon: Linkedin, color: 'hover:text-[#06b6d4]', bg: 'hover:bg-cyan-500/10' },
                  { icon: MessageCircle, color: 'hover:text-[#8b5cf6]', bg: 'hover:bg-purple-500/10' }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className={`text-[#64748b] ${social.color} ${social.bg} transition-all duration-300 p-3 rounded-xl hover:shadow-lg hover:scale-110`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Resources section */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#06b6d4] to-[#0891b2] flex items-center justify-center shadow-lg">
                  <FileText size={16} className="text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Resources
                </h3>
              </div>
              <ul className="space-y-3">
                {['Documentation', 'Tutorials', 'Examples', 'Blog', 'Cheatsheets', 'Workshops'].map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-sm sm:text-base text-[#94a3b8] hover:text-[#06b6d4] transition-all duration-300 flex items-center gap-3 group py-2 px-2 rounded-lg hover:bg-[#1e293b]/50 hover:translate-x-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#64748b] group-hover:bg-[#06b6d4] group-hover:w-2 group-hover:h-2 transition-all duration-300 flex-shrink-0"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community section */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] flex items-center justify-center shadow-lg">
                  <Users size={16} className="text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Community
                </h3>
              </div>
              <ul className="space-y-3">
                {['GitHub', 'Discord', 'Twitter', 'Stack Overflow', 'Meetups', 'Contributors'].map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-sm sm:text-base text-[#94a3b8] hover:text-[#8b5cf6] transition-all duration-300 flex items-center gap-3 group py-2 px-2 rounded-lg hover:bg-[#1e293b]/50 hover:translate-x-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#64748b] group-hover:bg-[#8b5cf6] group-hover:w-2 group-hover:h-2 transition-all duration-300 flex-shrink-0"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal section */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#06b6d4] to-[#0891b2] flex items-center justify-center shadow-lg">
                  <Shield size={16} className="text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Legal
                </h3>
              </div>
              <ul className="space-y-3">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Licensing', 'Compliance'].map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-sm sm:text-base text-[#94a3b8] hover:text-[#06b6d4] transition-all duration-300 flex items-center gap-3 group py-2 px-2 rounded-lg hover:bg-[#1e293b]/50 hover:translate-x-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#64748b] group-hover:bg-[#06b6d4] group-hover:w-2 group-hover:h-2 transition-all duration-300 flex-shrink-0"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom footer */}
          <div className="border-t border-[#16213e] pt-8 sm:pt-10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="text-[#64748b] text-xs sm:text-sm flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
                <span className="font-medium">© 2024 TanStack Journey. All rights reserved.</span>
                <span className="hidden sm:inline text-[#334155]">•</span>
                <span className="flex items-center gap-2 justify-center">
                  Made with 
                  <Heart size={14} className="text-[#8b5cf6] animate-pulse" /> 
                  in San Francisco
                </span>
              </div>
              
              <div className="flex gap-6 sm:gap-8 flex-wrap justify-center">
                {['Status', 'Contact', 'Careers'].map((item, index) => {
                  const colors = ['hover:text-[#06b6d4]', 'hover:text-[#8b5cf6]', 'hover:text-[#06b6d4]'];
                  return (
                    <a 
                      key={index}
                      href="#" 
                      className={`text-[#64748b] text-xs sm:text-sm ${colors[index]} transition-all duration-300 hover:scale-105 font-medium`}
                    >
                      {item}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;