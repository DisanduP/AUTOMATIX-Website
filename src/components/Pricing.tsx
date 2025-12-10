import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Perfect for trying out AUTOMATIX',
    features: [
      '100 conversations/month',
      '1 AI agent',
      'Basic chat automation',
      'Email support',
      'Community access'
    ],
    cta: 'Start Free',
    highlighted: false
  },
  {
    name: 'Pro',
    price: '$99',
    period: '/month',
    description: 'For growing businesses',
    features: [
      'Unlimited conversations',
      '10 AI agents',
      'Voice + chat automation',
      'Advanced workflows',
      'Multi-channel integration',
      'Priority support',
      'Custom branding',
      'Analytics dashboard'
    ],
    cta: 'Start Pro Trial',
    highlighted: true,
    badge: 'Most Popular'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations',
    features: [
      'Unlimited everything',
      'Unlimited AI agents',
      'White-label solution',
      'Custom integrations',
      'Dedicated account manager',
      'SLA guarantee',
      'Advanced security',
      'Custom training'
    ],
    cta: 'Contact Sales',
    highlighted: false
  }
];

export function Pricing() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business. No hidden fees, cancel anytime.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-3xl p-8 transition-all duration-300 ${
                plan.highlighted 
                  ? 'bg-gradient-to-br from-[#0A0E27] to-[#1a1f4d] text-white shadow-2xl scale-105 border-2 border-[#00D9FF]' 
                  : 'bg-white border-2 border-gray-200 hover:border-[#00D9FF] hover:shadow-xl'
              }`}
            >
              {/* Badge for highlighted plan */}
              {plan.badge && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00D9FF]/20 border border-[#00D9FF]/30 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-[#00D9FF]" />
                  <span className="text-sm text-[#00D9FF]">{plan.badge}</span>
                </div>
              )}
              
              <h3 className={`text-2xl mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              
              <p className={`mb-6 ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                {plan.description}
              </p>
              
              <div className="mb-8">
                <span className={`text-5xl ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </span>
                <span className={`text-lg ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                  {plan.period}
                </span>
              </div>
              
              <button 
                className={`w-full py-4 rounded-2xl transition-all duration-300 mb-8 ${
                  plan.highlighted 
                    ? 'bg-gradient-to-r from-[#00D9FF] to-[#4F46E5] text-white hover:shadow-lg hover:shadow-[#00D9FF]/50' 
                    : 'bg-gradient-to-r from-[#00D9FF] to-[#4F46E5] text-white hover:shadow-lg hover:shadow-[#00D9FF]/30'
                }`}
              >
                {plan.cta}
              </button>
              
              <ul className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? 'text-[#00D9FF]' : 'text-[#00D9FF]'
                    }`} />
                    <span className={plan.highlighted ? 'text-gray-200' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}