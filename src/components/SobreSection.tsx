import salon1 from "@/assets/salon-1.jpg";
import salon2 from "@/assets/salon-2.jpg";
import salon3 from "@/assets/salon-3.jpg";

const images = [
  { src: salon1, alt: "Interior do salão Bessie Beauty Club", pos: "center 40%" },
  { src: salon2, alt: "Esmaltes e produtos Bessie Beauty Club", pos: "center 30%" },
  { src: salon3, alt: "Estações de atendimento Bessie Beauty Club", pos: "center 50%" },
];

const SobreSection = () => (
  <section className="py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
    <div className="container px-4 sm:px-6">

      {/* ── MOBILE: scroll horizontal com snap ── */}
      <div className="md:hidden -mx-4 px-4 mb-10">
        <div
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((img) => (
            <div
              key={img.alt}
              className="flex-none snap-center rounded-2xl overflow-hidden shadow-lg"
              style={{ width: "72vw", aspectRatio: "3/4" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                style={{ objectPosition: img.pos }}
                loading="lazy"
                width={540}
                height={720}
              />
            </div>
          ))}
          {/* espaço final para o snap não cortar */}
          <div className="flex-none w-4" />
        </div>
        {/* indicador de scroll */}
        <p className="text-center text-[10px] text-muted-foreground/50 font-medium tracking-wide mt-1">
          deslize para ver mais →
        </p>
      </div>

      {/* ── DESKTOP: 3 colunas com alturas diferentes (mosaico) ── */}
      <div className="hidden md:grid grid-cols-3 gap-4 mb-14 max-w-5xl mx-auto">
        {images.map((img, i) => (
          <div
            key={img.alt}
            className="overflow-hidden rounded-2xl shadow-lg"
            style={{ aspectRatio: i === 1 ? "3/4" : "2/3" }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-700 ease-out"
              style={{ objectPosition: img.pos }}
              loading="lazy"
              width={640}
              height={853}
            />
          </div>
        ))}
      </div>

      {/* Texto */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-block text-primary text-[11px] font-semibold tracking-[0.3em] uppercase mb-3">
          Nossa história
        </span>
        <h2 className="text-2xl md:text-4xl font-heading font-bold mb-5">
          Sobre a <span className="text-primary">Bessie</span>
        </h2>
        <div className="flex justify-center mb-5">
          <div className="h-px w-10 bg-primary/40 rounded-full" />
        </div>
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          Um clube de beleza pensado no cuidado que você merece, no tempo que você precisa.
          A Bessie é uma franquia de salão de beleza express com qualidade de produtos e
          atendimento — aqui você pode fazer vários serviços ao mesmo tempo, otimizando seu dia.
        </p>
      </div>

    </div>
  </section>
);

export default SobreSection;
