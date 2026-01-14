import Microblog from '@/components/Microblog';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Microblog />
      <Footer />
    </main>
  );
}