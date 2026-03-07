import { Nav } from "../components/common/Navegation/Nav";
import { Hugo } from "../components/sections/About/Perfil";
import { Contato } from "../components/sections/Contact/Contato";
import { Sobre } from "../components/sections/Hero/Sobre";
import { Projetos } from "../components/sections/Projects/Projetos";
import { Habilidades } from "../components/sections/Skills/Habilidades";


export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Nav />   
      <Hugo />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Contato />
      
      
      <footer className="border-t border-white/10 py-12 px-6 md:px-10 bg-black/50">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2025 Hugo Ferrari. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">Desenvolvido com React • Next.js • TypeScript • TailwindCSS</p>
        </div>
      </footer>
    </div>
  );
}
