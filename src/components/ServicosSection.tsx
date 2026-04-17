import { useState } from "react";
import { Clock, MessageCircle, ArrowRight } from "lucide-react";
import manicureImg    from "@/assets/Manicure.jpeg";
import escovaImg      from "@/assets/Escova.jpeg";
import penteadoImg    from "@/assets/Penteado.jpeg";
import corteImg       from "@/assets/Corte.jpeg";
import maquiagemImg   from "@/assets/Maquiagem.jpeg";
import sobrancelhaImg from "@/assets/Sobrancelha.2.jpeg";
import hidratacaoImg  from "@/assets/Hidratações.jpeg";
import spaDosPesImg   from "@/assets/Spa-dos-pés.jpeg";

const BASE_WA = "https://wa.me/5561999898382?text=";

const services = [
  { img: manicureImg,    objectPos: "center 30%", name: "Manicure e Pedicure", tagline: "Unhas sempre impecáveis",     desc: "Esmaltação em gel, spa dos pés, hidratação e acabamento duradouro para qualquer ocasião.", price: "A partir de R$ 46",  duration: "45–90 min",  waMsg: "Olá! Gostaria de saber mais sobre Manicure e Pedicure na Bessie Beauty Club." },
  { img: escovaImg,      objectPos: "center 20%", name: "Escova",               tagline: "Fios lisos e sedosos",        desc: "Progressiva, relaxamento e hidratação profunda. Tratamento personalizado para o seu tipo de cabelo.", price: "A partir de R$ 99",  duration: "60–120 min", waMsg: "Olá! Gostaria de saber mais sobre Escova na Bessie Beauty Club." },
  { img: penteadoImg,    objectPos: "center 15%", name: "Penteado",             tagline: "Para momentos que marcam",    desc: "Penteados para festas, casamentos e formaturas. Do clássico ao moderno, sempre impecável.", price: "A partir de R$ 238", duration: "60–90 min",  waMsg: "Olá! Gostaria de saber mais sobre Penteado na Bessie Beauty Club." },
  { img: corteImg,       objectPos: "center 25%", name: "Corte",                tagline: "Estilo que combina com você", desc: "Cortes modernos, degradê e acabamentos precisos. Consultoria inclusa para o melhor resultado.", price: "A partir de R$ 150", duration: "30–60 min",  waMsg: "Olá! Gostaria de saber mais sobre Corte na Bessie Beauty Club." },
  { img: maquiagemImg,   objectPos: "center 20%", name: "Maquiagem",            tagline: "Realce sua beleza natural",   desc: "Make social, noiva e artística. Técnicas profissionais para um look impecável e duradouro.", price: "R$ 110–R$ 260",     duration: "45–90 min",  waMsg: "Olá! Gostaria de saber mais sobre Maquiagem na Bessie Beauty Club." },
  { img: sobrancelhaImg, objectPos: "center 30%", name: "Sobrancelha",          tagline: "O olhar que transforma",      desc: "Design personalizado, henna e brow lamination. Moldamos para realçar a estrutura do seu rosto.", price: "A partir de R$ 70",  duration: "30–45 min",  waMsg: "Olá! Gostaria de saber mais sobre Design de Sobrancelha na Bessie Beauty Club." },
  { img: hidratacaoImg,  objectPos: "center 50%", name: "Tratamento Capilar",   tagline: "Cabelos que brilham de saúde",desc: "Tratamentos com Truss, Davines, L'Anza, Braé e Bessie. Nutrição, reconstrução e brilho duradouro.", price: "R$ 180–R$ 280",     duration: "60–120 min", waMsg: "Olá! Gostaria de saber mais sobre Tratamento Capilar na Bessie Beauty Club." },
  { img: spaDosPesImg,   objectPos: "center 40%", name: "Spa dos Pés",          tagline: "Relaxamento que você merece", desc: "Relaxamento profundo, cuidado especial e a sensação de leveza que seu corpo inteiro merece.", price: "A partir de R$ 59",  duration: "45–60 min",  waMsg: "Olá! Gostaria de saber mais sobre Spa dos Pés na Bessie Beauty Club." },
];

/* ─────────────────────────────────────────────────────────────
   MOBILE CARD — coluna única, largura total

   Altura: 58vh
   → Card 1 ocupa 58vh da tela
   → Card 2 já aparece nos próximos ~42vh (peek natural)
   → Usuário vê 2 serviços ao mesmo tempo, com espaço real

   FECHADO
   → Imagem full, gradiente fino apenas no rodapé
   → Tagline pequena + Nome grande + linha "ver mais"

   ABERTO (toque)
   → Imagem escala levemente (zoom sutil)
   → Painel glass sobe do rodapé, cobre 50% do card
   → Glass: backdropFilter blur + rgba baixo → imagem visível atrás
   → Conteúdo: tagline · nome · divisor · descrição · preço + tempo
   → Sem botão no card (CTA único abaixo de tudo)
─────────────────────────────────────────────────────────────── */

const MobileCard = ({
  service,
  isOpen,
  onToggle,
}: {
  service: typeof services[0];
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const { img, objectPos, name, tagline, desc, price, duration } = service;

  return (
    <div
      onClick={onToggle}
      className="relative overflow-hidden rounded-3xl cursor-pointer select-none"
      style={{
        height: "58vh",
        boxShadow: isOpen
          ? "0 24px 48px -8px rgba(0,0,0,0.18)"
          : "0 4px 20px -4px rgba(0,0,0,0.10)",
        transition: "box-shadow 0.4s ease",
      }}
    >
      {/* ── FOTO ── */}
      <img
        src={img}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          objectPosition: objectPos,
          transform: isOpen ? "scale(1.04)" : "scale(1.01)",
          transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)",
          willChange: "transform",
        }}
        loading="lazy"
        width={800}
        height={1000}
      />

      {/* ── FECHADO: vignette leve + label ── */}
      <div
        className="absolute inset-0 pointer-events-none flex flex-col justify-end px-5 pb-6"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.08) 40%, transparent 65%)",
          opacity: isOpen ? 0 : 1,
          transition: "opacity 0.28s ease",
        }}
      >
        <p className="text-white/55 text-[9px] font-semibold tracking-[0.28em] uppercase mb-2 leading-none">
          {tagline}
        </p>
        <h3 className="font-heading font-bold text-white text-[24px] leading-tight">
          {name}
        </h3>
        <div className="flex items-center gap-2 mt-3">
          <span className="block h-px w-5 bg-primary/70 rounded-full" />
          <span className="text-white/40 text-[9px] font-semibold tracking-[0.22em] uppercase">
            ver detalhes
          </span>
        </div>
      </div>

      {/* ── ABERTO: painel glass ──
           Cobre 50% inferior. Imagem fica visível nos 50% superiores.
           Glass leve: apenas blur + tint mínimo — sem escurecer.
      ─────────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: "50%",
          transform: isOpen ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.45s cubic-bezier(0.33,1,0.68,1)",
          willChange: "transform",
        }}
      >
        {/* Camada glass — transparente, sem fundo escuro */}
        <div
          className="absolute inset-0 rounded-b-3xl"
          style={{
            backdropFilter: "blur(28px) saturate(1.6)",
            WebkitBackdropFilter: "blur(28px) saturate(1.6)",
            backgroundColor: "rgba(255,248,245,0.14)",
            borderTop: "1px solid rgba(255,255,255,0.18)",
          }}
        />

        {/* Conteúdo sobre o glass */}
        <div className="relative h-full flex flex-col justify-between px-5 pt-5 pb-6">

          {/* Topo: tagline + nome */}
          <div>
            <p className="text-white/55 text-[8.5px] font-semibold tracking-[0.26em] uppercase leading-none mb-2">
              {tagline}
            </p>
            <h3 className="font-heading font-bold text-white text-[22px] leading-tight drop-shadow-sm">
              {name}
            </h3>
          </div>

          {/* Divisor */}
          <div
            className="shrink-0"
            style={{ height: "1px", background: "rgba(255,255,255,0.18)" }}
          />

          {/* Descrição */}
          <p
            className="text-white/80 text-[13px] leading-relaxed"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {desc}
          </p>

          {/* Preço + duração */}
          <div className="flex items-center gap-3">
            <span className="text-primary font-bold text-[17px] leading-none drop-shadow-sm">
              {price}
            </span>
            <div
              className="flex items-center gap-1.5"
              style={{ color: "rgba(255,255,255,0.45)", fontSize: "10.5px" }}
            >
              <Clock className="w-3 h-3 flex-shrink-0" />
              <span>{duration}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   DESKTOP CARD — hover panel (inalterado, funciona bem)
─────────────────────────────────────────────────────────────── */
const DesktopCard = ({
  img, objectPos, name, tagline, desc, price, duration, waMsg, delay,
}: typeof services[0] & { delay: string }) => (
  <div
    className="group relative rounded-2xl overflow-hidden shadow-md
               hover:shadow-[0_20px_56px_-8px_hsl(var(--primary)/0.25)]
               hover:-translate-y-1 transition-all duration-500 ease-out animate-fade-in-up"
    style={{ animationDelay: delay, aspectRatio: "3/4" }}
  >
    <img
      src={img} alt={name}
      className="absolute inset-0 w-full h-full object-cover
                 group-hover:scale-[1.04] transition-transform duration-700"
      style={{ objectPosition: objectPos }}
    />
    <div className="absolute inset-x-0 bottom-0 h-[40%]
                    bg-gradient-to-t from-black/70 via-black/35 to-transparent" />
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35
                    transition-[background-color] duration-700" />

    <div className="absolute inset-x-0 bottom-0 px-4 pb-4 z-10
                    transition-all duration-300
                    group-hover:opacity-0 group-hover:translate-y-1">
      <p className="text-white/60 text-[9.5px] font-semibold tracking-[0.22em] uppercase mb-1">{tagline}</p>
      <h3 className="font-heading font-bold text-white text-[15px] leading-snug drop-shadow-md">{name}</h3>
    </div>

    <div className="absolute inset-x-0 bottom-0 z-20
                    translate-y-full group-hover:translate-y-0
                    transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]
                    bg-black/88 px-4 pt-4 pb-5 flex flex-col gap-3">
      <div>
        <p className="text-white/60 text-[9px] font-semibold tracking-[0.22em] uppercase mb-1">{tagline}</p>
        <h3 className="font-heading font-bold text-white text-[15px] leading-snug">{name}</h3>
      </div>
      <p className="text-white text-[12px] leading-relaxed opacity-90">{desc}</p>
      <div className="h-px bg-white/20" />
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-primary font-bold text-[15px] leading-none">{price}</span>
          <div className="flex items-center gap-1 text-white text-[10.5px] opacity-70">
            <Clock className="w-2.5 h-2.5 flex-shrink-0" />
            <span>{duration}</span>
          </div>
        </div>
        <a
          href={`${BASE_WA}${encodeURIComponent(waMsg)}`}
          target="_blank" rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex-shrink-0 inline-flex items-center gap-1.5
                     bg-primary hover:bg-primary/90 active:scale-95
                     text-white text-[11px] font-semibold
                     px-3.5 py-2.5 rounded-xl
                     transition-all duration-200 shadow-md whitespace-nowrap"
        >
          <MessageCircle className="w-3 h-3" />
          Saiba mais
        </a>
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────────────────────
   SEÇÃO
─────────────────────────────────────────────────────────────── */
const ServicosSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIdx((p) => (p === i ? null : i));

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-secondary/40 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, hsl(359 100% 66% / 0.07), transparent)",
        }}
      />

      <div className="container relative z-10 px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10 md:mb-16 animate-fade-in-up">
          <span className="inline-block text-primary text-[11px] font-semibold tracking-[0.3em] uppercase mb-3">
            O que oferecemos
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold text-foreground mb-3">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <div className="flex justify-center mb-4">
            <div className="h-px w-12 bg-primary/40 rounded-full" />
          </div>
          <p className="text-muted-foreground text-sm md:text-base max-w-xs mx-auto leading-relaxed">
            Tudo o que você precisa em um só lugar
          </p>
        </div>

        {/* ── MOBILE: coluna única, cards 58vh ─────────────────
             Card 1 = 58vh visível completamente
             Card 2 = já aparece ~42vh abaixo → "2 por tela"
             Scroll natural, sem força, layout sempre correto
        ───────────────────────────────────────────────────── */}
        <div className="md:hidden flex flex-col gap-3">
          {services.map((s, i) => (
            <MobileCard
              key={s.name}
              service={s}
              isOpen={openIdx === i}
              onToggle={() => toggle(i)}
            />
          ))}

          {/* CTA único após todos os serviços */}
          <div className="pt-4 flex flex-col items-center gap-2">
            <a
              href={`${BASE_WA}${encodeURIComponent("Olá! Gostaria de agendar um serviço na Bessie Beauty Club.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5
                         bg-primary text-white font-bold text-[15px]
                         px-6 py-4 rounded-full
                         active:scale-95 transition-all duration-200
                         shadow-lg shadow-primary/25"
            >
              <MessageCircle className="w-5 h-5" />
              Quero agendar pelo WhatsApp
            </a>
            <p className="text-muted-foreground/50 text-[10px] font-medium tracking-wide">
              Sem marcar horário · Resposta imediata
            </p>
          </div>
        </div>

        {/* ── DESKTOP: grid 4 colunas ── */}
        <div className="hidden md:grid grid-cols-4 gap-3 md:gap-4 max-w-[1280px] mx-auto">
          {services.map((s, i) => (
            <DesktopCard key={s.name} {...s} delay={`${i * 0.07}s`} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicosSection;
