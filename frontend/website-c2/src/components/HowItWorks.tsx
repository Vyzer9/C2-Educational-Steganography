import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Lock, Download, MessageSquare, Shield, Eye } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: 'Upload da Imagem',
      description: 'Faça upload de uma imagem que servirá como host para a mensagem oculta.',
      details: 'Suporta formatos PNG, JPG e BMP. A imagem original é preservada visualmente.',
    },
    {
      icon: MessageSquare,
      title: 'Inserção da Mensagem',
      description: 'Digite a mensagem secreta que deseja ocultar na imagem.',
      details: 'Utiliza algoritmos LSB (Least Significant Bit) para máxima invisibilidade.',
    },
    {
      icon: Lock,
      title: 'Processamento',
      description: 'A mensagem é criptografada e inserida nos pixels da imagem.',
      details: 'Processo reversível que mantém a qualidade visual da imagem original.',
    },
    {
      icon: Eye,
      title: 'Extração',
      description: 'Recupere mensagens ocultas de imagens processadas.',
      details: 'Decodificação automática revela o conteúdo secreto sem degradação.',
    },
    {
      icon: Shield,
      title: 'Comunicação C2',
      description: 'Estabeleça canais de comunicação seguros através de imagens.',
      details: 'Ideal para estudos de cybersegurança e técnicas de comunicação discreta.',
    },
    {
      icon: Download,
      title: 'Download Seguro',
      description: 'Baixe as imagens processadas mantendo total privacidade.',
      details: 'Sem armazenamento no servidor - processamento local garantido.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Como Funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entenda o processo completo de esteganografia e comunicação C2 
            através de nossa interface intuitiva e educacional.
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
          <h3 className="text-2xl font-bold text-gradient mb-6 text-center">
            Detalhes Técnicos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-card-foreground mb-3 flex items-center">
                <Shield className="h-5 w-5 mr-2 text-primary" />
                Algoritmos Utilizados
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• LSB (Least Significant Bit) Steganography</li>
                <li>• AES Encryption para mensagens</li>
                <li>• Distributed payload embedding</li>
                <li>• Error correction coding</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-card-foreground mb-3 flex items-center">
                <Lock className="h-5 w-5 mr-2 text-secondary" />
                Recursos de Segurança
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Processamento client-side</li>
                <li>• Sem armazenamento de dados</li>
                <li>• Análise de robustez visual</li>
                <li>• Detecção de capacidade máxima</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;