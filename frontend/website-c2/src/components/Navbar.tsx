import { useState } from 'react';
import { Menu, X, Shield, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Left - Logo */}
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary cyber-glow" />
            <span className="text-xl font-bold text-gradient">SteganoC2</span>
          </div>

          {/* Center - Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'how-it-works', label: 'About' },
              { id: 'panel', label: 'Panel' },
              { id: 'start', label: 'Start' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-foreground transition-all duration-200 hover:text-primary group"
              >
                <span className="group-hover:border-b-2 group-hover:border-primary pb-1 transition-all duration-200">
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          {/* Right - Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              onClick={() => window.open('https://github.com/vyzer9/C2-Educational-Steganography', '_blank')}
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              onClick={() => window.open('https://www.linkedin.com/in/sam-richard-a96503352/', '_blank')}
            >
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </Button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {[
                { id: 'home', label: 'Home' },
                { id: 'how-it-works', label: 'About' },
                { id: 'panel', label: 'Panel' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}

              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-fit"
                onClick={() => window.open('https://github.com/vyzer9/C2-Educational-Steganography', '_blank')}
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-fit"
                onClick={() => window.open('https://www.linkedin.com/in/seu-usuario', '_blank')}
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
