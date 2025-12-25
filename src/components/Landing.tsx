import HeroSection from './Landing/HeroSection';
import StorySection from './Landing/StorySection';
import JourneySection from './Landing/JourneySection';
import FutureSection from './Landing/FutureSection';

export default function LandingPage() {

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <StorySection />
      <JourneySection />
      <FutureSection />
    </div>
  );
}