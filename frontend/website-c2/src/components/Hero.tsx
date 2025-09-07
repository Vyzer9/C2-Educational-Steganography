import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Terminal,
  Shield,
  Eye,
  EyeOff,
  Lock,
  Key,
  Fingerprint,
  Cpu,
  Database,
  Network,
} from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Steganography & C2 Communication';

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToPanel = () => {
    const element = document.getElementById('panel');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-icons-bg"
    >
      {/* Floating Security Icons */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Ícones já existentes */}
        <Shield className="floating-icon w-16 h-16 text-primary top-20 left-20" style={{ animationDelay: '0s' }} />
        <Lock className="floating-icon w-12 h-12 text-secondary top-32 right-32" style={{ animationDelay: '2s' }} />
        <Key className="floating-icon w-10 h-10 text-accent bottom-40 left-40" style={{ animationDelay: '4s' }} />
        <Fingerprint className="floating-icon w-14 h-14 text-cyber-blue bottom-32 right-20" style={{ animationDelay: '6s' }} />
        <Cpu className="floating-icon w-12 h-12 text-cyber-purple top-40 left-1/2" style={{ animationDelay: '8s' }} />
        <Database className="floating-icon w-10 h-10 text-cyber-orange bottom-20 left-1/4" style={{ animationDelay: '10s' }} />
        <Network className="floating-icon w-12 h-12 text-primary top-60 right-1/4" style={{ animationDelay: '12s' }} />

        {/* Ícones ao redor do centro */}
        <Shield className="floating-icon w-10 h-10 text-primary top-1/2 left-[48%]" style={{ animationDelay: '5s' }} />
        <Key className="floating-icon w-8 h-8 text-accent top-[55%] left-[52%]" style={{ animationDelay: '6s' }} />
        <Network className="floating-icon w-9 h-9 text-cyber-orange top-[47%] left-[42%]" style={{ animationDelay: '7s' }} />
        <Lock className="floating-icon w-10 h-10 text-secondary top-[60%] left-[50%]" style={{ animationDelay: '9s' }} />

        {/* NOVOS ícones - lado esquerdo e direito (nível central) */}
        <Cpu className="floating-icon w-10 h-10 text-accent top-[45%] left-[10%]" style={{ animationDelay: '3s' }} />
        <Fingerprint className="floating-icon w-12 h-12 text-primary top-[50%] left-[5%]" style={{ animationDelay: '4s' }} />
        <Database className="floating-icon w-10 h-10 text-cyber-purple top-[55%] left-[14%]" style={{ animationDelay: '5.5s' }} />

        <Shield className="floating-icon w-10 h-10 text-cyber-blue top-[48%] right-[10%]" style={{ animationDelay: '6.5s' }} />
        <Lock className="floating-icon w-12 h-12 text-accent top-[52%] right-[5%]" style={{ animationDelay: '7.5s' }} />
        <Key className="floating-icon w-10 h-10 text-secondary top-[57%] right-[13%]" style={{ animationDelay: '8.5s' }} />
        <Fingerprint className="floating-icon w-12 h-12 text-cyber-blue absolute top-1/4 left-1/4" style={{ animationDelay: '0s' }}/>
        <Cpu className="floating-icon w-12 h-12 text-cyber-purple absolute bottom-1/4 left-1/3" style={{ animationDelay: '2s' }}/>
        <Shield className="floating-icon w-12 h-12 text-cyber-purple absolute bottom-1/4 right-1/3" style={{ animationDelay: '2s' }}/>
        <Database className="floating-icon w-12 h-12 text-cyber-purple absolute top-1/4 right-1/3" style={{ animationDelay: '2s' }}/>


      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">

          {/* Main heading com GRADIENTE */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient block">
              {typedText}
              <span className="animate-pulse inline-flex align-middle">|</span>
            </span>
          </h1>

          {/* Subtitle / description */}
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Advanced techniques of <span className="text-primary font-semibold">steganography</span> and
            <span className="text-secondary font-semibold"> C2</span> communication in a controlled educational environment. 
            Hide messages inside images securely and efficiently.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground cyber-glow group"
              onClick={scrollToPanel}
            >
              <Eye className="h-5 w-5 mr-2 group-hover:hidden" />
              <EyeOff className="h-5 w-5 mr-2 hidden group-hover:block" />
              Start Now
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() =>
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <Shield className="h-5 w-5 mr-2" />
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">42+</div>
              <div className="text-muted-foreground">GitHub Stars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">100%</div>
              <div className="text-muted-foreground">Open Source</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-muted-foreground mb-2">Tool</div>
              <div className="text-muted-foreground">Purpose</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
