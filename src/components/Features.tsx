import { MessageSquare, Phone, Workflow, Layers } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Chat Automation',
    description: 'Deploy intelligent chatbots that understand context and deliver personalized responses 24/7.'
  },
  {
    icon: Phone,
    title: 'Voice Agents',
    description: 'Natural voice interactions that handle calls, schedule appointments, and provide support.'
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Build complex automation workflows with our visual drag-and-drop interface.'
  },
  {
    icon: Layers,
    title: 'Multi-Channel Integration',
    description: 'Connect with WhatsApp, SMS, email, social media, and more in one unified platform.'
  }
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Powerful Features for Modern Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to automate customer interactions and streamline operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#00D9FF]/50 hover:bg-gradient-to-br hover:from-[#00D9FF]/5 hover:to-[#4F46E5]/5"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#00D9FF] to-[#4F46E5] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}