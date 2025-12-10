import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { UseCases } from './components/UseCases';
import { DashboardPreview } from './components/DashboardPreview';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <UseCases />
      <DashboardPreview />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}