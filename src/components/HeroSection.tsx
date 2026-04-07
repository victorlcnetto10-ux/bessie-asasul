import logo from "@/assets/46bcd5ca-e989-4ec3-8bbe-f736a9d5ae5c.png";
import heroImg from "@/assets/hero-beauty.jpg";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5561999898382?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Bessie%20Beauty%20Club";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-secondary">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Bessie Beauty Club"
        className="w-full h-full object-cover opacity-20"
        width={1280}
        height={720}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-background" />
    </div>

    <div className="container relative z-10 py-20 md:py-32">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <img
          src={logo}
          alt="Bessie Beauty Club"
          className="h-16 md:h-24 mb-8 animate-fade-in-up my-0 py-[80px] px-[20px]"
          width={300}
          height={100}
        />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}>
          Beleza sem complicação,{" "}
          <span className="text-primary">do seu jeito</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 animate-fade-in-up"
           style={{ animationDelay: "0.2s" }}>
          Atendimento sem hora marcada, de domingo a domingo
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold
                     hover:scale-105 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <MessageCircle className="w-6 h-6" />
          Falar no WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
