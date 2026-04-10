import { Component, ReactNode } from "react";
import { MessageCircle } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    // Em produção: substitua por um serviço como Sentry
    console.error("[Bessie] Erro capturado:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center bg-background">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary text-3xl font-heading font-bold">B</span>
          </div>
          <div className="flex flex-col gap-2 max-w-xs">
            <h1 className="text-xl font-heading font-bold text-foreground">
              Algo não correu bem
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tivemos um problema técnico. Tente recarregar a página — se persistir, fale com a gente pelo WhatsApp.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center gap-2 bg-primary text-white
                         px-6 py-3 rounded-full text-sm font-semibold
                         hover:bg-primary/90 active:scale-95 transition-all duration-200"
            >
              Recarregar página
            </button>
            <a
              href="https://wa.me/5561999898382?text=Ol%C3%A1!%20Tive%20um%20problema%20no%20site%20da%20Bessie."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white
                         px-6 py-3 rounded-full text-sm font-semibold
                         hover:bg-[#20c05c] active:scale-95 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
