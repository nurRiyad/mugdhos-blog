import HeroSection from './Landing/HeroSection';
import StorySection from './Landing/StorySection';
import JourneySection from './Landing/JourneySection';
import FutureSection from './Landing/FutureSection';
import { client } from '@/src/sanity/client';

const LANDING_QUERY = `*[_type == "landing-page"][0]{
  heroTitle,
  heroSubtitle,
  heroContent,
  journeySection,
  storyContent1,
  storyContent2,
  storyQuote,
  whatNextSection
}`;

const options = { next: { revalidate: 30 } };

export default async function LandingPage() {
  const landingData = await client.fetch(LANDING_QUERY, {}, options);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection 
        heroTitle={landingData?.heroTitle}
        heroSubtitle={landingData?.heroSubtitle}
        heroContent={landingData?.heroContent}
      />
      <StorySection storyItems={landingData.journeySection}/>
      <JourneySection 
        storyContent1={landingData?.storyContent1}
        storyContent2={landingData?.storyContent2}
        storyQuote={landingData?.storyQuote}
      />
      <FutureSection futureItems={landingData.whatNextSection}/>
    </div>
  );
}