import { ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A0E27] via-[#1a1f4d] to-[#0A0E27]">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D9FF] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4F46E5] rounded-full blur-3xl opacity-10"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00D9FF]/10 border border-[#00D9FF]/30 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#00D9FF]" />
              <span className="text-sm text-[#00D9FF]">Powered by AI</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white">
              Automate Your Business With AI Agents
            </h1>
            
            <p className="text-xl text-gray-300 max-w-xl">
              Chat, voice, workflows, CRM — all in one intelligent platform.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-[#00D9FF] to-[#4F46E5] text-white rounded-2xl hover:shadow-lg hover:shadow-[#00D9FF]/50 transition-all duration-300 flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="px-8 py-4 bg-transparent text-[#00D9FF] border-2 border-[#00D9FF] rounded-2xl hover:bg-[#00D9FF]/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div>
                <div className="text-3xl text-[#00D9FF]">10k+</div>
                <div className="text-sm text-gray-400">Active Users</div>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div>
                <div className="text-3xl text-[#00D9FF]">500k+</div>
                <div className="text-sm text-gray-400">Automations</div>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div>
                <div className="text-3xl text-[#00D9FF]">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Dashboard Illustration */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00D9FF] to-[#4F46E5] rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative border-2 border-[#00D9FF]/30 rounded-3xl overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1653933686802-86d21b59b03b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGRhc2hib2FyZCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjUzNTYxNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="AI Dashboard Interface"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}