/**
 * Logo textual da Bessie — sem fundo, escala em qualquer contexto.
 * Props:
 *  - size: "sm" | "md" | "lg"
 *  - inverted: true = texto branco (para fundo escuro)
 */
interface BessieLogoProps {
  size?: "sm" | "md" | "lg";
  inverted?: boolean;
  className?: string;
}

const sizes = {
  sm: { name: "text-[1.35rem]", sub: "text-[0.52rem] tracking-[0.26em] mt-[3px]" },
  md: { name: "text-[1.8rem]",  sub: "text-[0.58rem] tracking-[0.28em] mt-[4px]" },
  lg: { name: "text-[2.6rem]",  sub: "text-[0.7rem]  tracking-[0.30em] mt-[5px]" },
};

const BessieLogo = ({ size = "md", inverted = false, className = "" }: BessieLogoProps) => {
  const s = sizes[size];
  const subColor = inverted ? "text-white/70" : "text-foreground/55";

  return (
    <div className={`flex flex-col items-start leading-none select-none ${className}`}>
      {/* "bessie" — Playfair Display, cor primary ou branco */}
      <span
        className={`font-heading font-bold ${s.name} ${inverted ? "text-white" : "text-primary"}`}
        style={{ letterSpacing: "-0.01em" }}
      >
        bessie
      </span>
      {/* "BEAUTY CLUB" — Inter spaced */}
      <span
        className={`font-sans font-semibold uppercase ${s.sub} ${subColor}`}
      >
        beauty club
      </span>
    </div>
  );
};

export default BessieLogo;
