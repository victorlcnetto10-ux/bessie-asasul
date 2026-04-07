import { Scissors, Sparkles, Eye, Paintbrush, ScissorsLineDashed, Crown } from "lucide-react";

const services = [
  { icon: Sparkles, name: "Escova" },
  { icon: Paintbrush, name: "Manicure e Pedicure" },
  { icon: Eye, name: "Design de Sobrancelha" },
  { icon: Crown, name: "Maquiagem" },
  { icon: Scissors, name: "Corte" },
  { icon: ScissorsLineDashed, name: "Penteado" },
];

const ServicosSection = () => (
  <section className="py-20 md:py-28 bg-secondary/50">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
        Nossos <span className="text-primary">Serviços</span>
      </h2>
      <p className="text-muted-foreground text-center mb-14 max-w-lg mx-auto">
        Tudo o que você precisa em um só lugar
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 max-w-3xl mx-auto">
        {services.map((s) => (
          <div
            key={s.name}
            className="relative flex flex-col items-center justify-center p-8 rounded-2xl bg-card border border-border
                       hover:border-primary hover:shadow-lg transition-all duration-300 group cursor-default"
          >
            <s.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-semibold text-foreground text-center">{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicosSection;
