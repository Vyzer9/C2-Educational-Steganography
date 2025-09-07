import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import SteganographyPanel from '../components/SteganographyPanel';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <SteganographyPanel />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
