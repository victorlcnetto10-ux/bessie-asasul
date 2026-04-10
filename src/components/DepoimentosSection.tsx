import { useState, useEffect, useRef } from "react";
import imgHelena  from "@/assets/cliente-helena.jpg";
import imgRebeca  from "@/assets/cliente-rebeca.jpg";
import imgLeticia from "@/assets/cliente-leticia.jpg";

const INTERVAL = 7000;

const depoimentos = [
  {
    img: imgRebeca,
    // Rebeca: rosto centralizado, não cortar o cabelo
    objectPosMobile: "center 15%",
    objectPosDesktop: "center 20%",
    nome: "Rebeca Lima",
    servico: "Escova & Penteado",
    texto:
      "Fui sem expectativa e saí apaixonada. O ambiente é super agradável, as meninas são atenciosas e o resultado ficou melhor do que eu esperava. Com certeza vou voltar.",
  },
  {
    img: imgHelena,
    objectPosMobile: "center center",
    objectPosDesktop: "center center",
    nome: "Helena Marjorie",
    servico: "Manicure & Pedicure",
    texto:
      "Ótimo atendimento, espaço limpo e organizado. O que mais gostei foi não precisar marcar horário. Cheguei, fui atendida e saí super satisfeita. Vale muito a pena.",
  },
  {
    img: imgLeticia,
    // Letícia: rosto levemente para baixo para não cortar o topo da cabeça
    objectPosMobile: "center 20%",
    objectPosDesktop: "center 10%",
    nome: "Letícia Monteiro",
    servico: "Design de Sobrancelha",
    texto:
      "Já testei vários lugares e esse foi o que mais curou minha sobrancelha de verdade. Profissional muito cuidadosa, resultado natural e duradouro. Recomendo para todo mundo.",
  },
];

const DepoimentosSection = () => {
  const [active, setActive]     = useState(0);
  const [fading, setFading]     = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef    = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = depoimentos.length;

  const goTo = (idx: number) => {
    if (idx === active) return;
    setFading(true);
    setTimeout(() => {
      setActive((idx + total) % total);
      setFading(false);
      setProgress(0);
    }, 380);
  };

  useEffect(() => {
    setProgress(0);
    if (progressRef.current) clearInterval(progressRef.current);
    progressRef.current = setInterval(() => {
      setProgress(p => Math.min(p + (100 / (INTERVAL / 50)), 100));
    }, 50);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        setActive(a => (a + 1) % total);
        setFading(false);
        setProgress(0);
      }, 380);
    }, INTERVAL);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [active, total]);

  const current = depoimentos[active];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container px-4 sm:px-6 max-w-6xl">

        {/* Header */}
        <div className="mb-8 md:mb-12 lg:mb-16 animate-fade-in-up">
          <span className="inline-block text-primary text-[11px] font-semibold tracking-[0.3em] uppercase mb-3 md:mb-4">
            Avaliações
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
            O que nossas clientes{" "}
            <span className="text-primary">dizem</span>
          </h2>
        </div>

        {/* ── MOBILE: foto quadrada + texto abaixo ── */}
        <div className="md:hidden">
          {/* Foto — crop 1:1 no mobile, mais compacto */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-md mb-6"
               style={{ aspectRatio: "4/3" }}>
            {depoimentos.map((d, i) => (
              <img
                key={i}
                src={d.img}
                alt={d.nome}
                className={`absolute inset-0 w-full h-full object-cover
                            transition-opacity duration-500 ease-in-out
                            ${i === active && !fading ? "opacity-100" : "opacity-0"}`}
                style={{ objectPosition: d.objectPosMobile }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            {/* Nome sobre a foto no mobile */}
            <div className="absolute bottom-0 inset-x-0 px-4 pb-4">
              <p className="text-white font-semibold text-sm">{current.nome}</p>
              <p className="text-white/60 text-[10px] tracking-[0.18em] uppercase">{current.servico}</p>
            </div>
          </div>

          {/* Texto */}
          <div className={`transition-all duration-380 ease-in-out
                           ${fading ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"}`}>
            <div className="text-primary text-4xl font-heading leading-none select-none mb-3">"</div>
            <p className="font-heading text-foreground text-[17px] font-semibold leading-relaxed -mt-2 mb-6">
              {current.texto}
            </p>
          </div>

          {/* Dots no mobile */}
          <div className="flex items-center gap-2.5">
            {depoimentos.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Depoimento ${i + 1}`}
                className="relative h-[3px] rounded-full overflow-hidden bg-border transition-all duration-300"
                style={{ width: i === active ? 44 : 14 }}
              >
                {i === active && (
                  <span
                    className="absolute inset-y-0 left-0 bg-primary rounded-full"
                    style={{ width: `${progress}%`, transition: "width 50ms linear" }}
                  />
                )}
                {i !== active && (
                  <span className="absolute inset-0 bg-border rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── DESKTOP: layout lado a lado ── */}
        <div className="hidden md:grid grid-cols-[420px_1fr] gap-8 lg:gap-14 items-center">

          {/* Foto */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
            {depoimentos.map((d, i) => (
              <img
                key={i}
                src={d.img}
                alt={d.nome}
                className={`absolute inset-0 w-full h-full object-cover
                            transition-opacity duration-500 ease-in-out
                            ${i === active && !fading ? "opacity-100" : "opacity-0"}`}
                style={{ objectPosition: d.objectPosDesktop }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Conteúdo */}
          <div
            className={`flex flex-col justify-center gap-6
                        transition-all duration-380 ease-in-out
                        ${fading ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}
          >
            <div className="text-primary text-6xl font-heading leading-none select-none">"</div>
            <p className="font-heading text-foreground text-xl md:text-2xl font-semibold leading-relaxed -mt-4">
              {current.texto}
            </p>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-7 h-px bg-primary" />
                <span className="font-semibold text-foreground text-sm tracking-wide">
                  {current.nome}
                </span>
              </div>
              <p className="text-primary/70 text-xs font-medium tracking-[0.18em] uppercase ml-10">
                {current.servico}
              </p>
            </div>
            {/* Dots */}
            <div className="flex items-center gap-3 mt-2">
              {depoimentos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Depoimento ${i + 1}`}
                  className="relative h-[3px] rounded-full overflow-hidden bg-border transition-all duration-300"
                  style={{ width: i === active ? 52 : 18 }}
                >
                  {i === active && (
                    <span
                      className="absolute inset-y-0 left-0 bg-primary rounded-full"
                      style={{ width: `${progress}%`, transition: "width 50ms linear" }}
                    />
                  )}
                  {i !== active && (
                    <span className="absolute inset-0 bg-border rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DepoimentosSection;
