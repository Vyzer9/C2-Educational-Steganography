import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Lock, Unlock, FileImage, MessageSquare, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SteganographyPanel = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');
  const [extractedMessage, setExtractedMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setSelectedFile(file);
        toast({
          title: 'Image uploaded',
          description: `${file.name} selected successfully.`,
        });
      } else {
        toast({
          title: 'Error',
          description: 'Please select only image files.',
          variant: 'destructive',
        });
      }
    }
  };

  const handleEmbed = async () => {
    if (!selectedFile || !message.trim()) {
      toast({
        title: 'Incomplete data',
        description: 'Select an image and enter a message.',
        variant: 'destructive',
      });
      return;
    }

    setIsProcessing(true);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('message', message);

      const response = await fetch('http://127.0.0.1:8000/embed/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to embed message');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'stego_image.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast({
        title: 'Success',
        description: 'The image with the hidden message has been downloaded.',
      });

    } catch (error) {
      toast({
        title: 'Error',
        description: (error as Error).message,
        variant: 'destructive',
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleExtract = async () => {
    if (!selectedFile) {
      toast({
        title: 'Image required',
        description: 'Select an image to extract the message.',
        variant: 'destructive',
      });
      return;
    }

    setIsProcessing(true);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await fetch('http://127.0.0.1:8000/extract/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to extract message');
      }

      const data = await response.json();
      setExtractedMessage(data.message.data || 'No message found');

      toast({
        title: 'Message extracted!',
        description: 'The hidden message was retrieved.',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: (error as Error).message,
        variant: 'destructive',
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section id="panel" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Steganography Panel</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive interface for hiding and extracting messages in images.
            Try steganography techniques in real time.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="embed" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="embed" className="flex items-center space-x-2">
                <Lock className="h-4 w-4" />
                <span>Hide Message</span>
              </TabsTrigger>
              <TabsTrigger value="extract" className="flex items-center space-x-2">
                <Unlock className="h-4 w-4" />
                <span>Extract Message</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="embed">
              <Card className="animate-slide-up">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <span>Insert Secret Message</span>
                  </CardTitle>
                  <CardDescription>
                    Upload an image and type the message you want to hide.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Select Image
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
                          {selectedFile ? selectedFile.name : 'Click to select an image'}
                        </p>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Secret Message
                    </label>
                    <Textarea
                      placeholder="Type your secret message here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-32"
                    />
                  </div>

                  <Button
                    onClick={handleEmbed}
                    disabled={isProcessing || !selectedFile || !message.trim()}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {isProcessing ? (
                      'Processing...'
                    ) : (
                      <>
                        <Lock className="h-4 w-4 mr-2" />
                        Hide Message
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="extract">
              <Card className="animate-slide-up">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Unlock className="h-5 w-5 text-secondary" />
                    <span>Extract Hidden Message</span>
                  </CardTitle>
                  <CardDescription>
                    Upload an image that contains a hidden message.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Select Image
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
                          {selectedFile ? selectedFile.name : 'Click to select an image'}
                        </p>
                      </label>
                    </div>
                  </div>

                  <Button
                    onClick={handleExtract}
                    disabled={isProcessing || !selectedFile}
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  >
                    {isProcessing ? (
                      'Extracting...'
                    ) : (
                      <>
                        <Unlock className="h-4 w-4 mr-2" />
                        Extract Message
                      </>
                    )}
                  </Button>

                  {extractedMessage && (
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Extracted Message
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

          <Alert className="mt-8 border-accent/50 bg-accent/5">
            <AlertCircle className="h-4 w-4 text-accent" />
            <AlertDescription>
              <strong>Educational Notice:</strong> This tool is intended exclusively for educational and
              cybersecurity research purposes. Use responsibly and in accordance with local laws.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  );
};

export default SteganographyPanel;
