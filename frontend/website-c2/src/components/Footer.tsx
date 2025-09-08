import { Github, Terminal, Shield, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary cyber-glow" />
              <span className="text-2xl font-bold text-gradient">SteganoC2</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Advanced educational tool for steganography techniques and 
              C2 communication in a controlled environment. Developed for 
              cybersecurity studies.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://github.com/vyzer9/C2-Educational-Steganography', '_blank')}
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-card-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('panel')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Panel
                </button>
              </li>
            </ul>
          </div>

          {/* Technical Info */}
          <div>
            <h3 className="text-lg font-semibold text-card-foreground mb-4">
              Technologies
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <Terminal className="h-4 w-4 mr-2 text-primary" />
                LSB Steganography
              </li>
              <li className="flex items-center">
                <Shield className="h-4 w-4 mr-2 text-secondary" />
                AES Encryption
              </li>
              <li className="flex items-center">
                <Github className="h-4 w-4 mr-2 text-accent" />
                Open Source
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 vyzer9. Built with{' '}
            <Heart className="inline h-4 w-4 text-primary mx-1" />
            for cybersecurity education.
          </div>
          
          <div className="text-muted-foreground text-sm">
            <span className="inline-flex items-center">
              <Terminal className="h-4 w-4 mr-1" />
              For educational purposes only
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
