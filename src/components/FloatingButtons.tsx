import { MessageCircle, Instagram } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5561999898382?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Bessie%20Beauty%20Club";
const INSTAGRAM_URL = "https://www.instagram.com/bessie.asasul?igsh=MWpnc3l1NDZhenpmOQ%3D%3D&utm_source=qr";

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center
                 shadow-lg hover:scale-110 transition-transform duration-300"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Seguir no Instagram"
      className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white
                 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
    >
      <Instagram className="w-7 h-7" />
    </a>
  </div>
);

export default FloatingButtons;
