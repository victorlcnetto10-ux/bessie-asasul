import { MessageCircle, Instagram } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5561999898382?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Bessie%20Beauty%20Club";
const INSTAGRAM_URL = "https://www.instagram.com/bessie.asasul?igsh=MWpnc3l1NDZhenpmOQ%3D%3D&utm_source=qr";

const CTASection = () => (
  <section className="py-20 md:py-28 bg-primary text-primary-foreground">
    <div className="container text-center">
      <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
        Venha ficar ainda mais linda!
      </h2>
      <p className="text-lg md:text-xl opacity-90 mb-4 max-w-xl mx-auto">
        Atendimento sem hora marcada, de domingo a domingo.
      </p>
      <p className="text-base opacity-80 mb-10">
        📍 Comercial Sul 305, Bloco C, Loja 15 – Brasília, DF
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-card text-foreground px-8 py-4 rounded-full text-lg font-semibold
                     hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          <MessageCircle className="w-6 h-6" />
          Falar no WhatsApp
        </a>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary-foreground/10 border-2 border-primary-foreground/30 text-primary-foreground
                     px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-foreground/20
                     hover:scale-105 transition-all duration-300"
        >
          <Instagram className="w-6 h-6" />
          @bessie.asasul
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
