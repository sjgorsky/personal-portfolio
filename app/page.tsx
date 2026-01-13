import Hero from '@/components/Hero';
import TechnicalCompetencies from '@/components/TechnicalCompetencies';
import Microblog from '@/components/Microblog';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <TechnicalCompetencies />
      <Microblog />
      <Contact />
    </main>
  );
}