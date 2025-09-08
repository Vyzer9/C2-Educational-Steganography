import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github } from 'lucide-react';

const Start = () => {
  return (
    <section id="start" className="py-20 bg-background relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Start Here</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            To use the steganography panel, you need to fork the project, activate the <code>venv</code> environment, and run the backend server locally.
          </p>
        </div>

        <Card className="bg-card border-border">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-card-foreground">Getting Started</CardTitle>
            <CardDescription className="text-muted-foreground text-base">
              Follow these steps to run the project locally and use the panel:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground text-sm leading-relaxed">
              <li>Fork the project repository on GitHub.</li>
              <li>Clone the forked repo to your local machine.</li>
              <li>Activate the Python virtual environment (<code>venv</code>).</li>
              <li>Run the backend server from the root folder:</li>
                <pre className="bg-white text-black rounded-md p-3 mt-2 mb-4 text-xs font-mono text-center shadow">
                uvicorn api.main:app --reload
                </pre>
              <li>Open the panel in your browser and start using the steganography features.</li>
            </ol>
            <div className="flex justify-center mt-6">
              <a
                href="https://github.com/Vyzer9/C2-Educational-Steganography?tab=readme-ov-file" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-green-500 text-green-500 rounded-md hover:bg-green-600 hover:text-white transition"
              >
                <Github className="w-5 h-5" />
                Fork on GitHub
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Start;
