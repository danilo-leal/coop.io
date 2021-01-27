import Features from '../components/Features';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="bg-gray-50 dark:bg-blackish2">
        <div className="large-container sm:px-6 px-4 sm:py-32 py-16">
          <Features />
        </div>
      </div>
      <Footer />
    </div>
  );
}
