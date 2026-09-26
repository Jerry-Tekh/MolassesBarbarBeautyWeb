import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import TrustBar from './components/TrustBar/TrustBar.jsx';
import Services from './components/Services/Services.jsx';
import BarberBeauty from './components/BarberBeauty/BarberBeauty.jsx';
import FeaturedWork from './components/FeaturedWork/FeaturedWork.jsx';
import WhyMolasses from './components/WhyMolasses/WhyMolasses.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Experience from './components/Experience/Experience.jsx';
import Location from './components/Location/Location.jsx';
import FAQ from './components/FAQ/FAQ.jsx';
import FinalCTA from './components/FinalCTA/FinalCTA.jsx';
import Footer from './components/Footer/Footer.jsx';
import MobileActionBar from './components/MobileActionBar/MobileActionBar.jsx';
import { useLenis } from './hooks/useLenis';

export default function App() {
  useLenis();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <BarberBeauty />
        <FeaturedWork />
        <WhyMolasses />
        <Testimonials />
        <Experience />
        <Location />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
