import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Lock, Download, MessageSquare, Shield, Eye,Key,Cpu } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: 'Image Upload',
      description: 'Upload an image that will serve as the host for the hidden message.',
      details: 'Supports PNG, JPG, and BMP formats. The original image is visually preserved.',
    },
    {
      icon: MessageSquare,
      title: 'Message Insertion',
      description: 'Type the secret message you want to hide inside the image.',
      details: 'Uses LSB (Least Significant Bit) algorithms for maximum invisibility.',
    },
    {
      icon: Lock,
      title: 'Processing',
      description: 'The message is encrypted and inserted into the image pixels.',
      details: 'A reversible process that maintains the original image’s visual quality.',
    },
    {
      icon: Eye,
      title: 'Extraction',
      description: 'Retrieve hidden messages from processed images.',
      details: 'Automatic decoding reveals the secret content without degradation.',
    },
    {
      icon: Shield,
      title: 'C2 Communication',
      description: 'Establish secure communication channels through images.',
      details: 'Ideal for cybersecurity studies and covert communication techniques.',
    },
    {
      icon: Download,
      title: 'Secure Download',
      description: 'Download processed images while maintaining full privacy.',
      details: 'No server storage – local processing guaranteed.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">How It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understand the complete process of steganography and C2 communication
            through our intuitive and educational interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.details}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

{/* Technical Details */}
<div className="mt-20 bg-card border border-border rounded-lg p-8 animate-fade-in">
  <h3 className="text-2xl font-bold text-primary mb-8 text-center">
    Technical Details
  </h3>
  <div className="mx-auto inline-flex justify-center gap-16 max-w-5xl w-full">
    <div className="flex-1 min-w-[180px]">
      <h4 className="text-lg font-semibold flex items-center mb-4 text-card-foreground">
        <Shield className="h-5 w-5 mr-2 text-green-500" />
        Algorithms Used
      </h4>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
        <li>LSB (Least Significant Bit) Steganography</li>
        <li>AES Encryption for messages</li>
        <li>Distributed payload embedding</li>
        <li>Error correction coding</li>
      </ul>
    </div>
    <div className="flex-1 min-w-[180px]">
      <h4 className="text-lg font-semibold flex items-center mb-4 text-card-foreground">
        <Lock className="h-5 w-5 mr-2 text-blue-500" />
        Security Features
      </h4>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
        <li>Client-side processing</li>
        <li>No data storage</li>
        <li>Visual robustness analysis</li>
        <li>Maximum capacity detection</li>
      </ul>
    </div>
    <div className="flex-1 min-w-[180px]">
  <h4 className="text-lg font-semibold flex items-center mb-4 text-card-foreground">
    <Key className="h-5 w-5 mr-2 text-purple-500" />
    Contribution
  </h4>
  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
    <li>Open source collaboration and contributions</li>
    <li>Community-driven improvements</li>
  </ul>
</div>

<div className="flex-1 min-w-[180px]">
  <h4 className="text-lg font-semibold flex items-center mb-4 text-card-foreground">
    <Cpu className="h-5 w-5 mr-2 text-yellow-500" />
    Documentation
  </h4>
  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
    <li>Comprehensive user guides</li>
    <li>Detailed API references</li>
  </ul>
</div>

  </div>
</div>
      </div>
    </section>
  );
};

export default HowItWorks;
