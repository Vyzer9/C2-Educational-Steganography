import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../components/ui/button";
import { Shield, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center animate-fade-in">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-destructive/10 rounded-full mb-8">
          <Shield className="h-12 w-12 text-destructive" />
        </div>
        <h1 className="mb-4 text-6xl font-bold text-gradient">404</h1>
        <p className="mb-8 text-xl text-muted-foreground max-w-md mx-auto">
          Esta rota não foi encontrada no sistema. Acesso negado.
        </p>
        <Button
          onClick={() => window.location.href = '/'}
          className="bg-primary hover:bg-primary/90 text-primary-foreground cyber-glow"
        >
          <Home className="h-4 w-4 mr-2" />
          Voltar ao Início
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
