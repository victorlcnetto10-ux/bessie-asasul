import { CalendarOff, CalendarDays, Zap, Award } from "lucide-react";

const items = [
  { icon: CalendarOff, title: "Sem Agendamento", desc: "Venha quando quiser, sem hora marcada" },
  { icon: CalendarDays, title: "Todos os Dias", desc: "Atendimento de domingo a domingo" },
  { icon: Zap, title: "Rapidez", desc: "Serviços simultâneos, otimize seu tempo" },
  { icon: Award, title: "Qualidade", desc: "Profissionais qualificados e produtos premium" },
];

const DiferenciaisSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
        Por que escolher a <span className="text-primary">Bessie</span>?
      </h2>
      <p className="text-muted-foreground text-center mb-14 max-w-lg mx-auto">
        Um jeito diferente de cuidar da sua beleza
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border
                       hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4
                            group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DiferenciaisSection;
