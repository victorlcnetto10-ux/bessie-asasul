import { MessageCircle, Instagram } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5561999898382?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Bessie%20Beauty%20Club";
const INSTAGRAM_URL = "https://www.instagram.com/bessie.asasul?igsh=MWpnc3l1NDZhenpmOQ%3D%3D&utm_source=qr";

const FloatingButtons = () => (
  <div className="fixed z-50 flex flex-col gap-2.5"
       style={{ bottom: "max(1.5rem, env(safe-area-inset-bottom, 1.5rem))", right: "1.25rem" }}>

    {/* WhatsApp — principal, maior destaque */}
    <div className="group flex items-center justify-end gap-2">
      {/* Tooltip — desktop only */}
      <span className="hidden md:block opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0
                       transition-all duration-200 bg-white text-gray-800 text-xs font-semibold
                       px-3 py-1.5 rounded-full shadow-md whitespace-nowrap pointer-events-none">
        Falar no WhatsApp
      </span>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="w-[54px] h-[54px] md:w-[52px] md:h-[52px] rounded-full bg-[#25D366] text-white
                   flex items-center justify-center shadow-lg shadow-[#25D366]/40
                   hover:scale-110 hover:shadow-xl active:scale-95 transition-all duration-300
                   ring-2 ring-white/60"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>

    {/* Instagram */}
    <div className="group flex items-center justify-end gap-2">
      <span className="hidden md:block opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0
                       transition-all duration-200 bg-white text-gray-800 text-xs font-semibold
                       px-3 py-1.5 rounded-full shadow-md whitespace-nowrap pointer-events-none">
        @bessie.asasul
      </span>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Seguir no Instagram"
        className="w-[54px] h-[54px] md:w-[52px] md:h-[52px] rounded-full
                   bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]
                   text-white flex items-center justify-center shadow-lg
                   hover:scale-110 hover:shadow-xl active:scale-95 transition-all duration-300
                   ring-2 ring-white/60"
      >
        <Instagram className="w-5 h-5" />
      </a>
    </div>

  </div>
);

export default FloatingButtons;
