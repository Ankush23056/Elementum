import Hero from '../sections/Hero';
import About from '../sections/About';
import Features from '../sections/Features';
import Testimonials from '../sections/Testimonials';
import Newsletter from '../sections/Newsletter';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
