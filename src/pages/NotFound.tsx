import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { MessageCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("[Bessie] Rota não encontrada:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center bg-background">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
        <span className="text-primary text-3xl font-heading font-bold">B</span>
      </div>
      <div className="flex flex-col gap-2 max-w-xs">
        <h1 className="text-xl font-heading font-bold text-foreground">
          Página não encontrada
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          O link que você acessou não existe. Volte para a página inicial ou fale com a gente.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-primary text-white
                     px-6 py-3 rounded-full text-sm font-semibold
                     hover:bg-primary/90 active:scale-95 transition-all duration-200"
        >
          Voltar ao início
        </a>
        <a
          href="https://wa.me/5561999898382"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white
                     px-6 py-3 rounded-full text-sm font-semibold
                     hover:bg-[#20c05c] active:scale-95 transition-all duration-200"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default NotFound;
