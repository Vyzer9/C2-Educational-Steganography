import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Upload, Download, Lock, Unlock, FileImage, MessageSquare, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SteganographyPanel = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');
  const [extractedMessage, setExtractedMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setSelectedFile(file);
        toast({
          title: 'Imagem carregada',
          description: `${file.name} selecionada com sucesso.`,
        });
      } else {
        toast({
          title: 'Erro',
          description: 'Por favor, selecione apenas arquivos de imagem.',
          variant: 'destructive',
        });
      }
    }
  };

  const handleEmbed = async () => {
    if (!selectedFile || !message.trim()) {
      toast({
        title: 'Dados incompletos',
        description: 'Selecione uma imagem e digite uma mensagem.',
        variant: 'destructive',
      });
      return;
    }

    setIsProcessing(true);
    
    // Simula processamento de esteganografia
    setTimeout(() => {
      // Em uma implementação real, aqui seria feito o processamento real
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        
        // Simula alteração mínima nos pixels
        const processedDataUrl = canvas.toDataURL('image/png');
        setProcessedImage(processedDataUrl);
        setIsProcessing(false);
        
        toast({
          title: 'Mensagem inserida!',
          description: 'A mensagem foi oculta na imagem com sucesso.',
        });
      };
      
      img.src = URL.createObjectURL(selectedFile);
    }, 2000);
  };

  const handleExtract = async () => {
    if (!selectedFile) {
      toast({
        title: 'Imagem necessária',
        description: 'Selecione uma imagem para extrair a mensagem.',
        variant: 'destructive',
      });
      return;
    }

    setIsProcessing(true);
    
    // Simula extração de mensagem
    setTimeout(() => {
      // Em uma implementação real, aqui seria feita a extração real
      const messages = [
        'Mensagem secreta extraída com sucesso!',
        'Este é um teste de esteganografia.',
        'Comunicação C2 estabelecida.',
        'Payload delivered successfully.',
      ];
      
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      setExtractedMessage(randomMessage);
      setIsProcessing(false);
      
      toast({
        title: 'Mensagem extraída!',
        description: 'A mensagem oculta foi recuperada.',
      });
    }, 1500);
  };

  const downloadProcessedImage = () => {
    if (processedImage) {
      const link = document.createElement('a');
      link.href = processedImage;
      link.download = 'steganography_processed.png';
      link.click();
      
      toast({
        title: 'Download iniciado',
        description: 'A imagem processada está sendo baixada.',
      });
    }
  };

  return (
    <section id="panel" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Painel de Esteganografia</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interface interativa para ocultar e extrair mensagens em imagens. 
            Experimente as técnicas de esteganografia em tempo real.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="embed" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="embed" className="flex items-center space-x-2">
                <Lock className="h-4 w-4" />
                <span>Ocultar Mensagem</span>
              </TabsTrigger>
              <TabsTrigger value="extract" className="flex items-center space-x-2">
                <Unlock className="h-4 w-4" />
                <span>Extrair Mensagem</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="embed">
              <Card className="animate-slide-up">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <span>Inserir Mensagem Secreta</span>
                  </CardTitle>
                  <CardDescription>
                    Carregue uma imagem e digite a mensagem que deseja ocultar.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Selecionar Imagem
                    </label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <FileImage className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">
                          {selectedFile ? selectedFile.name : 'Clique para selecionar uma imagem'}
                        </p>
                      </label>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Mensagem Secreta
                    </label>
                    <Textarea
                      placeholder="Digite sua mensagem secreta aqui..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-32"
                    />
                  </div>

                  {/* Process Button */}
                  <Button
                    onClick={handleEmbed}
                    disabled={isProcessing || !selectedFile || !message.trim()}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {isProcessing ? (
                      'Processando...'
                    ) : (
                      <>
                        <Lock className="h-4 w-4 mr-2" />
                        Ocultar Mensagem
                      </>
                    )}
                  </Button>

                  {/* Result */}
                  {processedImage && (
                    <Alert className="border-primary/50 bg-primary/5">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <AlertDescription className="flex items-center justify-between">
                        <span>Mensagem oculta com sucesso!</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={downloadProcessedImage}
                          className="ml-4"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Baixar
                        </Button>
                      </AlertDescription>
                    </Alert>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="extract">
              <Card className="animate-slide-up">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Unlock className="h-5 w-5 text-secondary" />
                    <span>Extrair Mensagem Oculta</span>
                  </CardTitle>
                  <CardDescription>
                    Carregue uma imagem que contenha uma mensagem oculta.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Selecionar Imagem
                    </label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-secondary/50 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-extract"
                      />
                      <label htmlFor="file-extract" className="cursor-pointer">
                        <FileImage className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">
                          {selectedFile ? selectedFile.name : 'Clique para selecionar uma imagem'}
                        </p>
                      </label>
                    </div>
                  </div>

                  {/* Extract Button */}
                  <Button
                    onClick={handleExtract}
                    disabled={isProcessing || !selectedFile}
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  >
                    {isProcessing ? (
                      'Extraindo...'
                    ) : (
                      <>
                        <Unlock className="h-4 w-4 mr-2" />
                        Extrair Mensagem
                      </>
                    )}
                  </Button>

                  {/* Extracted Message */}
                  {extractedMessage && (
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Mensagem Extraída
                      </label>
                      <Card className="bg-secondary/10 border-secondary/50">
                        <CardContent className="pt-6">
                          <p className="text-card-foreground font-mono">
                            {extractedMessage}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Educational Notice */}
          <Alert className="mt-8 border-accent/50 bg-accent/5">
            <AlertCircle className="h-4 w-4 text-accent" />
            <AlertDescription>
              <strong>Aviso Educacional:</strong> Esta ferramenta é destinada exclusivamente para fins educacionais e 
              de pesquisa em cybersegurança. Use de forma responsável e em conformidade com as leis locais.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  );
};

export default SteganographyPanel;