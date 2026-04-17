import logo from "@/assets/logo-bessie-asasul.png";
import heroImg from "@/assets/hero-beauty.jpg";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5561999898382?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Bessie%20Beauty%20Club";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">

    {/* ── Imagem de fundo ── */}
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Bessie Beauty Club"
        className="w-full h-full object-cover object-center scale-[1.03]"
        style={{ filter: "brightness(0.72) saturate(1.12) blur(3px)" }}
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_100%_at_50%_60%,transparent_50%,rgba(0,0,0,0.38)_100%)]" />
      <div className="absolute inset-0 bg-primary/8 mix-blend-multiply" />
    </div>

    {/* ── Conteúdo ── */}
    <div className="container relative z-10
                    px-5 sm:px-6
                    pt-24 pb-20
                    md:pb-32 md:pt-36">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">

        {/* Logo — menor no mobile */}
        <img
          src={logo}
          alt="Bessie Beauty Club"
          className="w-52 sm:w-72 md:w-96 lg:w-[420px] mb-8 md:mb-10 animate-fade-in-up drop-shadow-2xl"
          style={{ filter: "brightness(0) invert(1)" }}
          width={450}
          height={150}
        />

        {/* Eyebrow */}
        <span
          className="inline-block text-white/60 text-[10px] md:text-[11px] font-semibold tracking-[0.32em] uppercase mb-5 md:mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.08s" }}
        >
          Asa Sul · Brasília
        </span>

        {/* H1 — quebra de linha pensada para mobile */}
        <h1
          className="font-heading font-bold text-white
                     text-[2.1rem] leading-[1.1] sm:text-4xl md:text-6xl lg:text-[4.25rem]
                     tracking-tight mb-6 md:mb-7 animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          O cuidado que você merece,{" "}
          <span className="text-primary drop-shadow-md">quando quiser.</span>
        </h1>

        {/* Subtítulo — bullets em coluna no mobile, inline no desktop */}
        <div
          className="mb-9 md:mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.22s" }}
        >
          {/* Mobile: vertical com bullets */}
          <div className="flex flex-col items-center gap-3 md:hidden">
            {["Sem agendamento", "Todos os dias", "Serviços simultâneos"].map((item) => (
              <span key={item} className="text-white/80 text-[16px] font-semibold flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block shrink-0" />
                {item}
              </span>
            ))}
          </div>
          {/* Desktop: inline */}
          <p className="hidden md:block text-white/65 text-lg leading-relaxed">
            Sem agendamento · Todos os dias · Serviços simultâneos
          </p>
        </div>

        {/* CTA — full width no mobile */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 bg-primary text-white
                     w-full sm:w-auto
                     px-8 py-4 rounded-full text-[15px] font-bold tracking-wide
                     hover:bg-primary/90 hover:scale-[1.03]
                     hover:shadow-[0_16px_40px_-8px_hsl(var(--primary)/0.55)]
                     active:scale-[0.98]
                     transition-all duration-300 shadow-lg shadow-primary/30
                     animate-fade-in-up"
          style={{ animationDelay: "0.30s" }}
        >
          <MessageCircle className="w-5 h-5" />
          Quero ir hoje
        </a>

        {/* Prova social */}
        <p
          className="text-white/35 text-[11px] font-medium tracking-wide mt-5 animate-fade-in-up"
          style={{ animationDelay: "0.38s" }}
        >
          Mais de 5.000 clientes atendidas
        </p>

      </div>
    </div>

    {/* Gradiente de transição */}
    <div className="absolute inset-x-0 bottom-0 h-24 md:h-32
                    bg-gradient-to-t from-background to-transparent pointer-events-none" />

  </section>
);

export default HeroSection;
