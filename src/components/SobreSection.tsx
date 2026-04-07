import salonImg from "@/assets/salon-interior.jpg";

const SobreSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src={salonImg}
            alt="Interior do salão Bessie Beauty Club"
            className="w-full h-72 md:h-96 object-cover"
            loading="lazy"
            width={1280}
            height={720}
          />
        </div>
        <div>
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
