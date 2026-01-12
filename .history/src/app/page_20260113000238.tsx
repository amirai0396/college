import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import WhyCollegeChaloSection from '@/components/home/WhyCollegeChaloSection';
import TopCollegesSection from '@/components/home/TopCollegesSection';
import ExploreStreamsSection from '@/components/home/ExploreStreamsSection';
import TopExamsSection from '@/components/home/TopExamsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <StatsSection />
      <WhyCollegeChaloSection />
      <TopCollegesSection />
      <ExploreStreamsSection />
      <TopExamsSection />
      <TestimonialsSection />
    </div>
  );
}
