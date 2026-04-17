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
              className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center overflow-hidden p-1
                         hover:scale-110 active:scale-95 hover:shadow-md transition-all duration-200"
            >
              <img src={logoBessie} alt="Bessie Beauty Club" className="w-full h-full object-contain rounded-full" />
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
              <span className="text-sm">Domingo a domingo · Sem hora marcada</span>
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
