import { MapPin, Clock, Instagram } from "lucide-react";
import logoBessie from "@/assets/logo-bessie.png";

const WHATSAPP_URL = "https://wa.me/5561999898382?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Bessie%20Beauty%20Club";
const INSTAGRAM_URL = "https://www.instagram.com/bessie.asasul?igsh=MWpnc3l1NDZhenpmOQ%3D%3D&utm_source=qr";
const MAPS_LINK = "https://maps.app.goo.gl/ZrfYNPE6u7cVDa5j9";

const Footer = () => (
  <footer className="bg-background border-t border-border">

    <div className="container px-4 sm:px-6 py-10 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <img
            src={logoBessie}
            alt="Bessie Beauty Club"
            className="w-36 md:w-40 object-contain"
          />
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Seu espaço de beleza completo em Brasília. Qualidade premium, sem complicação.
          </p>
          <div className="flex items-center gap-3 mt-1">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center
                         hover:scale-110 active:scale-95 hover:shadow-md transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]
                         text-white flex items-center justify-center
                         hover:scale-110 active:scale-95 hover:shadow-md transition-all duration-200"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Serviços — oculto no mobile para aliviar densidade */}
        <div className="hidden md:flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-foreground tracking-wide uppercase">Serviços</h4>
          <ul className="flex flex-col gap-2">
            {["Manicure e Pedicure", "Escova", "Penteado", "Corte", "Maquiagem", "Design de Sobrancelha", "Tratamento Capilar", "Spa dos Pés"].map((s) => (
              <li key={s}>
                <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-default">
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Localização */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-foreground tracking-wide uppercase">Onde estamos</h4>
          <div className="flex flex-col gap-3">
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 text-muted-foreground hover:text-primary transition-colors"
            >
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
              <span className="text-sm leading-relaxed">
                Comercial Sul 305, Bloco C,<br />Loja 15 – Brasília, DF
              </span>
            </a>
            <div className="flex items-center gap-2.5 text-muted-foreground">
              <Clock className="w-4 h-4 shrink-0 text-primary" />
              <span className="text-sm">Seg–Sáb: 8h–20h · Dom e feriados: 9h–16h</span>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 bg-secondary rounded-xl px-3 py-2 w-fit mt-1">
            <span className="text-yellow-500 text-sm">★★★★★</span>
            <span className="text-sm font-semibold text-foreground">4.8</span>
            <span className="text-xs text-muted-foreground">· 148 avaliações</span>
          </div>
        </div>

      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-border">
      <div className="container px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-1.5 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Bessie Beauty Club – Todos os direitos reservados.</span>
        <span className="text-muted-foreground/50">Brasília, DF</span>
      </div>
    </div>

  </footer>
);

export default Footer;
