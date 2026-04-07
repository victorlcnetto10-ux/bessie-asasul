import salon1 from "@/assets/salon-1.jpg";
import salon2 from "@/assets/salon-2.jpg";
import salon3 from "@/assets/salon-3.jpg";

const images = [
  { src: salon1, alt: "Interior do salão Bessie Beauty Club" },
  { src: salon2, alt: "Esmaltes e produtos Bessie Beauty Club" },
  { src: salon3, alt: "Estações de atendimento Bessie Beauty Club" },
];

const SobreSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-3 gap-4 mb-12 rounded-2xl overflow-hidden">
          {images.map((img) => (
            <div key={img.alt} className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-56 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={640}
                height={480}
              />
            </div>
          ))}
        </div>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Sobre a <span className="text-primary">Bessie</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Um clube de beleza pensado no cuidado que você merece, no tempo que você precisa!
            A Bessie é uma franquia de salão de beleza express com qualidade de produtos e
            atendimento, onde você pode fazer os serviços que quiser de forma simultânea
            otimizando seu tempo.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default SobreSection;
