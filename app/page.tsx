import Hero from '@/components/Hero';
import TechnicalCompetencies from '@/components/TechnicalCompetencies';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <TechnicalCompetencies />
      <Contact />
    </main>
  );
}