import { projects } from "@/app/.data/Projetos";
export function Sobre() {

  const totalProjects = projects.length
  return (
    <section id="sobre" className="py-20 px-6 md:px-10 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="hidden md:block">
            <div className="relative w-120 h-150">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-30"></div>
              <div className="relative  from-gray-800 to-gray-900 rounded-2xl p-1 overflow-hidden h-full">
                <div className="bg-black w-full full rounded-xl flex items-center justify-center">
                  <img src='/eu8.jpeg'></img>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-2">Sobre mim</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Um pouco mais sobre quem sou</h2>
            </div>

            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Sou Hugo Ferrari, estudante de Engenharia de Software apaixonado por transformar ideias em soluções web inovadoras. Minha jornada na tecnologia começou com curiosidade e evoluiu para uma paixão genuína por resolver problemas.
              </p>

              <p>
                Especializei-me em tecnologias modernas como React, Next.js, TypeScript e TailwindCSS. Cada projeto que desenvolvo é uma oportunidade de aprender algo novo e aprimorar minhas habilidades.
              </p>

              <p>
                Sou proativo e sempre busco soluções criativas e escaláveis. Acredito que o melhor aprendizado vem da prática, por isso meu portfólio é um reflexo real do meu crescimento como desenvolvedor.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="bg-white/5 backdrop-blur rounded-lg p-4 border border-white/10 hover:border-blue-500/50 transition-colors">
                <div className="text-2xl font-bold text-blue-400">{totalProjects}</div>
                <div className="text-gray-400 text-sm">Projetos</div>
              </div>
              <div className="bg-white/5 backdrop-blur rounded-lg p-4 border border-white/10 hover:border-blue-500/50 transition-colors">
                <div className="text-2xl font-bold text-blue-400">2+</div>
                <div className="text-gray-400 text-sm">Anos Exp.</div>
              </div>
              <div className="bg-white/5 backdrop-blur rounded-lg p-4 border border-white/10 hover:border-blue-500/50 transition-colors">
                <div className="text-2xl font-bold text-blue-400">100%</div>
                <div className="text-gray-400 text-sm">Dedicação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
