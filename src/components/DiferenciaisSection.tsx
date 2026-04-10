import { MessageCircle, Send, CheckCheck, Phone, Video, MoreVertical } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5561999898382?text=Oi%2C%20quero%20ir%20hoje!%20Como%20funciona%20o%20atendimento%3F";
const INSTAGRAM_URL = "https://www.instagram.com/bessie.asasul?igsh=MWpnc3l1NDZhenpmOQ%3D%3D&utm_source=qr";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const benefits = [
  {
    badge: "Sem fila",
    title: "Chegue e seja atendida",
    desc: "Sem marcar horário. Qualquer dia, qualquer hora.",
  },
  {
    badge: "Todo dia",
    title: "Aberta de domingo a domingo",
    desc: "Inclusive feriados. A Bessie não fecha quando você precisa.",
  },
  {
    badge: "Mais tempo",
    title: "Serviços ao mesmo tempo",
    desc: "Faça manicure e escova juntos. Resolva tudo em uma visita.",
  },
  {
    badge: "Padrão Bessie",
    title: "Qualidade que você vê e sente",
    desc: "Profissionais treinadas, marcas premium e resultado real.",
  },
];

const WhatsAppMockup = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="block group select-none"
    aria-label="Abrir conversa no WhatsApp"
  >
    {/* Outer glow */}
    <div className="relative max-w-[360px] mx-auto lg:ml-auto lg:mr-0">
      <div className="absolute -inset-3 rounded-[2rem] bg-[#25D366]/15 blur-xl
                      group-hover:bg-[#25D366]/25 transition-colors duration-500" />

      <div className="relative rounded-[1.75rem] overflow-hidden
                      shadow-[0_24px_48px_-8px_rgba(0,0,0,0.22)]
                      group-hover:shadow-[0_32px_64px_-8px_rgba(0,0,0,0.28)]
                      group-hover:-translate-y-1.5 transition-all duration-400
                      border border-white/60">

        {/* Status bar */}
        <div className="bg-[#054740] px-5 pt-3 pb-1 flex items-center justify-between">
          <span className="text-white/80 text-[10px] font-medium">9:41</span>
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5 items-end h-3">
              <div className="w-0.5 h-1 bg-white/70 rounded-sm" />
              <div className="w-0.5 h-1.5 bg-white/70 rounded-sm" />
              <div className="w-0.5 h-2 bg-white/70 rounded-sm" />
              <div className="w-0.5 h-3 bg-white/70 rounded-sm" />
            </div>
            <svg className="w-3 h-3 text-white/70" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1.5 8.5a13 13 0 0 1 21 0M5 12a10 10 0 0 1 14 0M8.5 15.5a6 6 0 0 1 7 0M12 19h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
            </svg>
            <svg className="w-5 h-3 text-white/70" viewBox="0 0 20 12" fill="none">
              <rect x="0.5" y="0.5" width="16" height="11" rx="2.5" stroke="currentColor" strokeOpacity="0.7"/>
              <rect x="2" y="2" width="12" height="8" rx="1.5" fill="currentColor" fillOpacity="0.7"/>
              <path d="M17.5 4v4a2 2 0 0 0 0-4z" fill="currentColor" fillOpacity="0.7"/>
            </svg>
          </div>
        </div>

        {/* Chat header */}
        <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center
                          bg-gradient-to-br from-primary to-primary/70 shadow-inner
                          ring-2 ring-white/25">
            <span className="text-white font-bold text-base leading-none font-heading">B</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-[14px] leading-tight">Bessie Beauty Club</p>
            <div className="flex items-center gap-1.5 mt-[2px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] shadow-sm shadow-[#25D366]/50" />
              <p className="text-[#a8d5cf] text-[11px] font-medium">Online agora</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Video className="w-[18px] h-[18px] text-white/70" />
            <Phone className="w-[18px] h-[18px] text-white/70" />
            <MoreVertical className="w-[18px] h-[18px] text-white/70" />
          </div>
        </div>

        {/* Chat area */}
        <div
          className="px-4 pt-4 pb-3 flex flex-col gap-3"
          style={{
            background: "url(\"data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%23e5ddd5'/%3E%3C/svg%3E\")",
            backgroundColor: "#e5ddd5",
          }}
        >
          {/* Date badge */}
          <div className="flex justify-center">
            <span className="bg-[#e1f2fb]/90 text-[#5a8a9a] text-[10px] font-medium px-3 py-1 rounded-full shadow-sm">
              Hoje
            </span>
          </div>

          {/* Received bubble */}
          <div className="flex items-end gap-2 max-w-[86%]">
            <div className="relative bg-white rounded-[16px] rounded-tl-[4px] px-4 py-2.5
                            shadow-[0_1px_2px_rgba(0,0,0,0.13)]">
              {/* Tail */}
              <div className="absolute -left-[6px] top-0 w-3 h-3 overflow-hidden">
                <div className="absolute top-0 right-0 w-4 h-4 bg-white rounded-br-full" />
              </div>
              <p className="text-[13.5px] text-gray-800 leading-[1.45]">
                Olá! 👋 Pode vir quando quiser, sem marcar horário. Abertas de domingo a domingo! 🌸
              </p>
              <p className="text-[10px] text-[#9ba8a0] text-right mt-1">10:32</p>
            </div>
          </div>

          {/* Sent bubble */}
          <div className="flex justify-end">
            <div className="relative rounded-[16px] rounded-tr-[4px] px-4 py-2.5 max-w-[86%]
                            shadow-[0_1px_2px_rgba(0,0,0,0.13)]"
                 style={{ background: "#d9fdd3" }}>
              {/* Tail */}
              <div className="absolute -right-[6px] top-0 w-3 h-3 overflow-hidden">
                <div className="absolute top-0 left-0 w-4 h-4 rounded-bl-full" style={{ background: "#d9fdd3" }} />
              </div>
              <p className="text-[13.5px] text-gray-800 leading-[1.45]">
                Oi, quero ir hoje! Como funciona? 😊
              </p>
              <div className="flex items-center justify-end gap-1 mt-1">
                <p className="text-[10px] text-[#9ba8a0]">10:33</p>
                <CheckCheck className="w-[14px] h-[14px] text-[#53bdeb]" />
              </div>
            </div>
          </div>

          {/* Typing bubble */}
          <div className="max-w-[72px]">
            <div className="bg-white rounded-[16px] rounded-tl-[4px] px-4 py-3
                            shadow-[0_1px_2px_rgba(0,0,0,0.13)]">
              <div className="flex items-center gap-[5px]">
                {[0, 150, 300].map((delay) => (
                  <span
                    key={delay}
                    className="w-[7px] h-[7px] rounded-full bg-[#8696a0] animate-bounce"
                    style={{ animationDelay: `${delay}ms`, animationDuration: "1.2s" }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Input bar */}
        <div className="bg-[#f0f2f0] px-3 py-2.5 flex items-center gap-2.5">
          <div className="flex-1 bg-white rounded-full px-4 py-2.5
                          text-[12.5px] text-gray-500 truncate
                          shadow-sm border border-black/[0.06]
                          ring-1 ring-inset ring-black/[0.04]">
            Oi, quero ir hoje! Como funciona? 😊
          </div>
          <div className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center shrink-0
                          shadow-[0_2px_8px_rgba(37,211,102,0.45)]
                          group-hover:scale-110 group-hover:shadow-[0_4px_16px_rgba(37,211,102,0.55)]
                          transition-all duration-300">
            <Send className="w-[18px] h-[18px] text-white ml-0.5" />
          </div>
        </div>

      </div>
    </div>

    {/* Tap label */}
    <p className="text-center text-[12px] text-muted-foreground/70 mt-4
                  group-hover:text-primary transition-colors duration-200 font-medium">
      Toque para abrir no WhatsApp →
    </p>
  </a>
);

const DiferenciaisSection = () => (
  <section className="py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
    <div className="container px-4 sm:px-6">

      {/* ── Hero Row ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14 md:mb-20 lg:mb-28">

        {/* Left — Copy + CTAs */}
        <div className="flex flex-col gap-5 md:gap-6">

          <span className="inline-block text-primary text-xs font-semibold tracking-[0.25em] uppercase">
            Por que escolher a Bessie?
          </span>

          <h2 className="text-[1.9rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-bold text-foreground leading-[1.1] tracking-tight">
            Chegue quando quiser<br />
            <span className="text-primary">e saia pronta.</span>
          </h2>

          <div className="h-px w-14 bg-primary/40 rounded-full" />

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
            Atendimento todos os dias, sem agendamento, com rapidez e qualidade. Resolva sua beleza em um só lugar.
          </p>

          <p className="text-sm text-foreground/70 font-medium">
            Fale agora com a equipe e veja como é fácil ser atendida hoje.
          </p>

          {/* CTAs — full width no mobile */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 pt-1">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white
                         px-8 py-4 rounded-2xl font-bold text-base
                         hover:bg-[#20c05c] hover:scale-105 hover:shadow-xl hover:shadow-[#25D366]/30
                         active:scale-95 transition-all duration-300 shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle className="w-5 h-5" />
              Quero atendimento agora
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-muted-foreground text-sm font-medium
                         px-4 py-4 hover:text-foreground transition-colors duration-200"
            >
              <InstagramIcon className="w-4 h-4" />
              Ver Instagram
            </a>
          </div>

        </div>

        {/* Right — WhatsApp Mockup (visível em todos os tamanhos) */}
        <div className="w-full lg:block">
          <WhatsAppMockup />
        </div>

      </div>

      {/* ── Benefits ── */}
      <div>
        <p className="text-center text-[11px] font-semibold tracking-[0.28em] uppercase text-primary/70 mb-8 md:mb-10">
          O que faz a Bessie diferente
        </p>

        {/* Mobile: 2×2 cards / Desktop: 4 em linha */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4">
          {benefits.map(({ badge, title, desc }, i) => (
            <div
              key={title}
              className="flex flex-col gap-2.5 md:gap-3
                         bg-secondary/50 rounded-2xl
                         p-4 sm:p-5 xl:p-6
                         animate-fade-in-up"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <span className="self-start text-[9px] md:text-[9.5px] font-bold tracking-[0.18em] uppercase
                               text-primary border border-primary/25 bg-white/70
                               px-2.5 py-[5px] rounded-full leading-none">
                {badge}
              </span>
              <h3 className="font-heading font-bold text-foreground text-[13.5px] md:text-[15px] leading-snug">
                {title}
              </h3>
              <p className="text-foreground/50 text-[11.5px] md:text-[12.5px] leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default DiferenciaisSection;
