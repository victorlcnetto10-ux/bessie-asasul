import { MessageCircle, MapPin, Clock, Star } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const WHATSAPP_URL = "https://wa.me/5561999898382?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Bessie%20Beauty%20Club";
const INSTAGRAM_URL = "https://www.instagram.com/bessie.asasul?igsh=MWpnc3l1NDZhenpmOQ%3D%3D&utm_source=qr";
const MAPS_LINK = "https://maps.app.goo.gl/H1kNV6Vny2qxkpsd7";
const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.574!2d-47.8973065!3d-15.8076204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b692c16587d%3A0xc8152acf448fea4a!2sBessie%20Beauty%20Club%20-%20Asa%20Sul!5e0!3m2!1spt-BR!2sbr!4v1712600000000";

const CTASection = () => (
  <section className="relative bg-primary overflow-hidden">

    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,rgba(255,255,255,0.08),transparent)]" />

    <div className="container relative z-10 px-4 sm:px-6 py-14 md:py-20 lg:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

        {/* Info + CTA */}
        <div className="flex flex-col gap-5 md:gap-6 text-primary-foreground">

          {/* Rating badge */}
          <div className="inline-flex items-center gap-2.5 md:gap-3 bg-white/15 backdrop-blur-sm border border-white/20
                          rounded-2xl px-3.5 py-2.5 md:px-4 md:py-3 w-fit">
            <div className="flex items-center gap-0.5 md:gap-1">
              {[1,2,3,4,5].map((i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 md:w-4 md:h-4 ${i <= 4 ? "fill-yellow-300 text-yellow-300" : "fill-yellow-300/40 text-yellow-300/40"}`}
                />
              ))}
            </div>
            <div className="h-3.5 w-px bg-white/30" />
            <div className="text-xs md:text-sm leading-tight">
              <span className="font-bold text-white">4.8</span>
              <span className="text-white/80 ml-1">· 148 avaliações</span>
            </div>
            <div className="hidden sm:block h-3.5 w-px bg-white/30" />
            <span className="hidden sm:block text-[10px] md:text-[11px] font-semibold text-white/80 tracking-wide uppercase">Google</span>
          </div>

          {/* Heading */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold leading-tight mb-2 md:mb-3">
              Venha ficar linda<br />
              <span className="text-white/80">que só a Bessie!</span>
            </h2>
            <p className="text-sm md:text-lg text-white/80 max-w-sm">
              Sem hora marcada. Seg–Sáb das 8h às 20h, dom e feriados das 9h às 16h.
            </p>
          </div>

          {/* Address + Hours */}
          <div className="flex flex-col gap-2.5 md:gap-3">
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-2 md:gap-2.5 text-white/90 hover:text-white transition-colors group"
            >
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span className="text-xs md:text-sm leading-relaxed underline underline-offset-2 decoration-white/30">
                Comercial Sul 305, Bloco C, Loja 15 – Brasília, DF
              </span>
            </a>
            <div className="flex items-center gap-2 md:gap-2.5 text-white/80">
              <Clock className="w-4 h-4 shrink-0" />
              <span className="text-xs md:text-sm">Seg–Sáb: 8h–20h · Dom e feriados: 9h–16h</span>
            </div>
          </div>

          {/* CTAs — full width no mobile */}
          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white
                         w-full sm:w-auto
                         px-6 py-3.5 rounded-full font-semibold text-sm
                         hover:bg-[#20c05c] hover:scale-105 hover:shadow-xl
                         active:scale-95 transition-all duration-300 shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5
                         bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]
                         text-white w-full sm:w-auto
                         px-6 py-3.5 rounded-full font-semibold text-sm
                         hover:opacity-90 hover:scale-105 hover:shadow-xl
                         active:scale-95 transition-all duration-300 shadow-md"
            >
              <InstagramIcon className="w-5 h-5" />
              @bessie.asasul
            </a>
          </div>
        </div>

        {/* Mapa — abaixo do texto no mobile, ao lado no desktop */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20
                        h-56 sm:h-64 lg:h-[400px]">
          <iframe
            title="Localização Bessie Beauty Club"
            src={MAPS_EMBED}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-3 inline-flex items-center gap-1.5
                       bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full
                       shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            <MapPin className="w-3.5 h-3.5 text-primary" />
            Ver no Google Maps
          </a>
        </div>

      </div>
    </div>
  </section>
);

export default CTASection;
