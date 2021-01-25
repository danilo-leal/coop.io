import Features from '../components/Features';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="flex flex-col sm:space-y-16 space-y-8">
      <div className="max-w-3xl m-auto sm:p-6 p-4">
        <Hero />
      </div>
      <div className="bg-gray-100 dark:bg-blackish2">
        <div className="max-w-3xl m-auto sm:px-6 px-4 sm:py-32 py-16">
          <Features />
        </div>
      </div>
    </div>
  );
}
