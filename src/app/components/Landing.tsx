import Navigation from './Landing/Navigation';
import HeroSection from './Landing/HeroSection';
import StorySection from './Landing/StorySection';
import JourneySection from './Landing/JourneySection';
import FutureSection from './Landing/FutureSection';
import FooterSection from './Landing/FooterSection';

export default function LandingPage() {

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <StorySection />
      <JourneySection />
      <FutureSection />
      <FooterSection />
    </div>
  );
}