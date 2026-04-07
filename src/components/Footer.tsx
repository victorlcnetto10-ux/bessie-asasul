import logo from "@/assets/logo-bessie.png";

const Footer = () => (
  <footer className="py-8 bg-background border-t border-border">
    <div className="container flex flex-col items-center gap-4">
      <img src={logo} alt="Bessie Beauty Club" className="h-10" />
      <p className="text-sm text-muted-foreground text-center">
        © {new Date().getFullYear()} Bessie Beauty Club – Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
