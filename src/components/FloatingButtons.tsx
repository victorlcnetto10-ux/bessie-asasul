import { Instagram } from "lucide-react";

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
        {/* WhatsApp official logo */}
        <svg viewBox="0 0 24 24" className="w-[26px] h-[26px]" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
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
