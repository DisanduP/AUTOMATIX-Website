import { MessageSquare, TrendingUp, Zap } from 'lucide-react';

export function DashboardPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            All-in-One Command Center
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Monitor, manage, and optimize your AI agents from a unified dashboard
          </p>
        </div>
        
        {/* Dashboard Mock UI */}
        <div className="bg-gradient-to-br from-[#0A0E27] to-[#1a1f4d] rounded-3xl p-8 shadow-2xl border border-[#00D9FF]/20">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Stat Cards */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-[#00D9FF]/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-300">Active Conversations</span>
                <MessageSquare className="w-5 h-5 text-[#00D9FF]" />
              </div>
              <div className="text-3xl text-white">2,847</div>
              <div className="text-sm text-[#00D9FF] mt-2">↑ 23% from last week</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-[#00D9FF]/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-300">Automation Rate</span>
                <Zap className="w-5 h-5 text-[#00D9FF]" />
              </div>
              <div className="text-3xl text-white">94.2%</div>
              <div className="text-sm text-[#00D9FF] mt-2">↑ 5% from last week</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-[#00D9FF]/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-300">Avg Response Time</span>
                <TrendingUp className="w-5 h-5 text-[#00D9FF]" />
              </div>
              <div className="text-3xl text-white">1.2s</div>
              <div className="text-sm text-[#00D9FF] mt-2">↓ 40% from last week</div>
            </div>
          </div>
          
          {/* Main Dashboard Area */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Chat View */}
            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg text-gray-900">Live Chat View</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00D9FF] rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-600">Live</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  { sender: 'Customer', message: 'Hi, I need help with my order', time: '2m ago' },
                  { sender: 'AI Agent', message: 'I\'d be happy to help! Could you provide your order number?', time: '2m ago' },
                  { sender: 'Customer', message: 'Sure, it\'s #12847', time: '1m ago' },
                  { sender: 'AI Agent', message: 'Found it! Your order is on the way. Tracking: TRK928473', time: 'Just now' }
                ].map((chat, idx) => (
                  <div key={idx} className={`flex ${chat.sender === 'AI Agent' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] ${chat.sender === 'AI Agent' ? 'bg-gradient-to-br from-[#00D9FF] to-[#4F46E5]' : 'bg-gray-100'} rounded-2xl px-4 py-3`}>
                      <div className={`text-xs ${chat.sender === 'AI Agent' ? 'text-white/70' : 'text-gray-600'} mb-1`}>
                        {chat.sender}
                      </div>
                      <div className={`text-sm ${chat.sender === 'AI Agent' ? 'text-white' : 'text-gray-900'}`}>
                        {chat.message}
                      </div>
                      <div className={`text-xs ${chat.sender === 'AI Agent' ? 'text-white/60' : 'text-gray-500'} mt-1`}>
                        {chat.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Workflow Builder Preview */}
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-lg text-gray-900 mb-6">Workflow Builder</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#00D9FF] to-[#4F46E5] rounded-xl flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-900">Trigger: New Message</div>
                    <div className="text-xs text-gray-500">WhatsApp, SMS, Chat</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-[#00D9FF] to-[#4F46E5]"></div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center border-2 border-[#4F46E5]">
                    <MessageSquare className="w-5 h-5 text-[#4F46E5]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-900">AI Analysis</div>
                    <div className="text-xs text-gray-500">Intent detection &amp; routing</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-[#00D9FF] to-[#4F46E5]"></div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center border-2 border-[#00D9FF]">
                    <Zap className="w-5 h-5 text-[#00D9FF]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-900">Auto Response</div>
                    <div className="text-xs text-gray-500">Personalized reply generation</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-[#00D9FF] to-[#4F46E5]"></div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center border-2 border-[#4F46E5]">
                    <TrendingUp className="w-5 h-5 text-[#4F46E5]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-900">Log & Analyze</div>
                    <div className="text-xs text-gray-500">Track metrics &amp; insights</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}