import { projects } from "@/app/.data/Projetos";
export function Sobre() {

  const totalProjects = projects.length
  return (
    <section id="sobre" className="py-20 px-6 md:px-10 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
      <div className="max-w-7xl mx-auto ">
        <div className="grid lg:grid-cols-2 gap-12 items-center md:min-h-screen">
          
          <div className="hidden md:block ">
            <div className="relative w-full max-w-md mx-auto  ">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-30"></div>
              <div className="relative  from-gray-800 to-gray-900 rounded-2xl p-1 overflow-hidden h-full">
                <div className="bg-black w-full  h-full rounded-xl flex items-center justify-center ">
                  <img src='/eu8.jpeg' className="w-full h-auto rounded-xl object-cover"></img>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 ">
            <div>
              <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-2">Sobre mim</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Um pouco mais sobre quem sou</h2>
            </div>

            <div className="space-y-4 text-gray-300 text-lg leading-relaxed max-w-xl lg:max-w-xl">
              <p>
                Sou estudante de Engenharia de Software no Uni-FACEF, atualmente mergulhado no ecossistema do desenvolvimento web. Minha jornada na tecnologia é movida pela curiosidade e pelo desejo de construir soluções que facilitem a vida das pessoas.
              </p>

              <p>
              Embora meu foco atual esteja no Front-end (React e TypeScript), encaro cada projeto como um laboratório de aprendizado, explorando desde a lógica de programação pura até a criação de interfaces modernas com Tailwind CSS.
              </p>

              <p>
               Acredito que a tecnologia está em constante evolução, e meu objetivo agora é consolidar uma base sólida em engenharia para me tornar um desenvolvedor versátil e pronto para resolver problemas reais, independente da stack."
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
              <div className="bg-white/5 backdrop-blur rounded-lg p-4 border border-white/10 hover:border-blue-500/50 transition-colors">
                <div className="text-2xl font-bold text-blue-400">{totalProjects}</div>
                <div className="text-gray-400 text-sm">Projetos</div>
              </div>
              <div className="bg-white/5 backdrop-blur rounded-lg p-4 border border-white/10 hover:border-blue-500/50 transition-colors">
                <div className="text-2xl font-bold text-blue-400">1+</div>
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
