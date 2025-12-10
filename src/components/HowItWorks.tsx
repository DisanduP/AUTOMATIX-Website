import { Upload, Settings, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    number: '01',
    title: 'Upload Knowledgebase',
    description: 'Import your documents, FAQs, and training materials. Our AI learns your business instantly.'
  },
  {
    icon: Settings,
    number: '02',
    title: 'Configure Workflows',
    description: 'Design custom automation flows with our intuitive visual builder. No coding required.'
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Deploy to Customers',
    description: 'Launch your AI agents across all channels and start automating customer interactions immediately.'
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in minutes with our simple three-step process
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-[#00D9FF] via-[#4F46E5] to-[#00D9FF] opacity-30"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                {/* Number badge */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#00D9FF] to-[#4F46E5] rounded-full mb-6 relative z-10 shadow-lg shadow-[#00D9FF]/30">
                  <span className="text-2xl text-white">{step.number}</span>
                </div>
                
                {/* Icon in outline style */}
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 border-4 border-[#00D9FF] rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#00D9FF]/5 to-[#4F46E5]/5">
                    <step.icon className="w-12 h-12 text-[#4F46E5]" />
                  </div>
                </div>
                
                <h3 className="text-2xl text-gray-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}