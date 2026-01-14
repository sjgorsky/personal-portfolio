import Microblog from '@/components/Microblog';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CurrentlyReading from '@/components/CurrentlyReading';

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Microblog />
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <CurrentlyReading />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}