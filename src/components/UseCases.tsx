import { Headset, Calendar, ShoppingCart, TicketCheck } from 'lucide-react';

const useCases = [
  {
    icon: Headset,
    title: 'Customer Support Automation',
    description: 'Handle unlimited customer queries simultaneously with AI-powered support agents that never sleep.',
    benefits: ['Reduce response time by 90%', 'Handle 10x more tickets', '24/7 availability']
  },
  {
    icon: Calendar,
    title: 'Booking & Reservations',
    description: 'Automate appointment scheduling, confirmations, and reminders across all communication channels.',
    benefits: ['Zero double bookings', 'Automatic reminders', 'Multi-timezone support']
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Order Handling',
    description: 'Process orders, track shipments, and handle returns with intelligent automation workflows.',
    benefits: ['Instant order updates', 'Automated tracking', 'Smart upselling']
  },
  {
    icon: TicketCheck,
    title: 'Ticketing & Complaints',
    description: 'Categorize, route, and resolve customer issues with AI-driven ticket management system.',
    benefits: ['Smart categorization', 'Priority routing', 'Faster resolution']
  }
];

export function UseCases() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0A0E27] to-[#1a1f4d] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D9FF] rounded-full blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4F46E5] rounded-full blur-3xl opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Built for Every Use Case
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From customer support to sales, AUTOMATIX adapts to your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="p-8 bg-white/5 backdrop-blur-sm border border-[#00D9FF]/20 rounded-3xl hover:bg-white/10 hover:border-[#00D9FF]/40 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00D9FF] to-[#4F46E5] rounded-2xl flex items-center justify-center">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl text-white mb-3">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {useCase.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-[#00D9FF] rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}