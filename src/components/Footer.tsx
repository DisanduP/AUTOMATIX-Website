import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0A0E27] to-[#1a1f4d] text-white py-16 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00D9FF] rounded-full blur-3xl opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="text-2xl mb-4 bg-gradient-to-r from-[#00D9FF] to-white bg-clip-text text-transparent">
              AUTOMATIX
            </div>
            <p className="text-gray-400 mb-6">
              Automate your business with intelligent AI agents.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 border border-[#00D9FF]/20 rounded-lg flex items-center justify-center hover:bg-[#00D9FF]/20 hover:border-[#00D9FF]/50 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 border border-[#00D9FF]/20 rounded-lg flex items-center justify-center hover:bg-[#00D9FF]/20 hover:border-[#00D9FF]/50 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 border border-[#00D9FF]/20 rounded-lg flex items-center justify-center hover:bg-[#00D9FF]/20 hover:border-[#00D9FF]/50 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 border border-[#00D9FF]/20 rounded-lg flex items-center justify-center hover:bg-[#00D9FF]/20 hover:border-[#00D9FF]/50 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Product Column */}
          <div>
            <h4 className="mb-4 text-white">Product</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-[#00D9FF] transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-[#00D9FF] transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-[#00D9FF] transition-colors">Use Cases</a></li>
              <li><a href="#" className="hover:text-[#00D9FF] transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-[#00D9FF] transition-colors">API Docs</a></li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div>
            <h4 className="mb-4 text-white">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-[#00D9FF] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#00D9FF] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#00D9FF] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#00D9FF] transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-[#00D9FF] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Resources Column */}
          <div>
            <h4 className="mb-4 text-white">Resources</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-[#00D9FF] transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-[#00D9FF] transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-[#00D9FF] transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-[#00D9FF] transition-colors">Webinars</a></li>
              <li><a href="#" className="hover:text-[#00D9FF] transition-colors">Status</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 AUTOMATIX. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#00D9FF] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#00D9FF] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#00D9FF] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}