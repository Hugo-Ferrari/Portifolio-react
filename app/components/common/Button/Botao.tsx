import { Github, Linkedin, MessageCircle } from "lucide-react";

interface TypeBotao {
  tipo: "Linkedin" | "GitHub" | "Projetos" | "Sobre" | "Home" | "Habilidades" | "Contato" | "Whatsapp";
  text: string;
  href: string;
  variant?: "primario" | "secundario";
}

export function Botao({ tipo, text, href, variant = "primario" }: TypeBotao) {
  const icones = {
    Linkedin: <Linkedin className="w-5 h-5" />,
    GitHub: <Github className="w-5 h-5" />,
    Whatsapp: <MessageCircle className="w-5 h-5" />,
  };

  const baseStyle = "inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all duration-300 w-fit whitespace-nowrap";

  const variants = {
    primario: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl hover:translate-y-[-2px]",
    secundario: "bg-transparent border border-blue-500/50 text-blue-300 hover:border-blue-400 hover:text-blue-200 hover:bg-blue-600/10",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyle} ${variants[variant]}`}
    >
      {icones[tipo]}
      {text}
    </a>
  );
}
