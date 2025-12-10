import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, TechStart Inc',
    image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjUzMTMxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    text: 'AUTOMATIX transformed our customer support. We\'re handling 5x more queries with the same team size. The AI agents are incredibly accurate and our customers love the instant responses.',
    rating: 5
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Operations Manager, RetailHub',
    image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjUzMTMxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    text: 'The workflow automation is a game-changer. We automated our entire booking process and reduced no-shows by 60%. Setup was surprisingly easy, and the ROI was immediate.',
    rating: 5
  },
  {
    name: 'Emily Watson',
    role: 'Director of CX, CloudServe',
    image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjUzMTMxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    text: 'Best investment we\'ve made this year. The multi-channel integration means we manage everything from one place. Customer satisfaction scores went up 40% in just two months.',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our customers are saying about AUTOMATIX.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#00D9FF]/10 hover:border-[#00D9FF]/30"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#00D9FF] text-[#00D9FF]" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-8">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#00D9FF]/20"
                />
                <div>
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}