
import { HeroSection } from '@/components/landing/hero';
import { ProblemSection } from '@/components/landing/problem';
import { SolutionSection } from '@/components/landing/solution';
import { PackContentsSection } from '@/components/landing/pack-contents';
import { BonusesSection } from '@/components/landing/bonuses';
import { OffersSection } from '@/components/landing/offers';
import { GuaranteeSection } from '@/components/landing/guarantee';
import { TestimonialsSection } from '@/components/landing/testimonials';
import { ScarcitySection } from '@/components/landing/scarcity';
import { FaqSection } from '@/components/landing/faq';
import { FinalCtaSection } from '@/components/landing/final-cta';
import { Footer } from '@/components/landing/footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <PackContentsSection />
        <BonusesSection />
        <OffersSection />
        <GuaranteeSection />
        <TestimonialsSection />
        <ScarcitySection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
