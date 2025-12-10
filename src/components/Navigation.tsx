import { Menu } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl text-white bg-gradient-to-r from-[#00D9FF] to-white bg-clip-text text-transparent">
            AUTOMATIX
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-[#00D9FF] transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-[#00D9FF] transition-colors">How It Works</a>
            <a href="#pricing" className="text-gray-300 hover:text-[#00D9FF] transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-300 hover:text-[#00D9FF] transition-colors">Testimonials</a>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="hidden md:block text-gray-300 hover:text-[#00D9FF] transition-colors">
              Sign In
            </button>
            <button className="px-6 py-2.5 bg-gradient-to-r from-[#00D9FF] to-[#4F46E5] text-white rounded-xl hover:shadow-lg hover:shadow-[#00D9FF]/50 transition-all duration-300">
              Get Started
            </button>
            <button className="md:hidden text-gray-300">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}