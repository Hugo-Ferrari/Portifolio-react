'use client'

import { Code, Layout, Zap, Database, GitBranch, Palette } from 'lucide-react';

const skills = [
    {
    icon: Code,
    title: "Frontend",
    description: "Interfaces modernas com React",
    items: ["React", "Next.js", "TypeScript" , ]
},
{
    icon: Database,
    title: "Backend",
    description: "APIs e lógica de servidor",
    items: ["Node.js","Express.js","API Integration","REST APIs"]
},
{
    icon: GitBranch,
    title: "Versionamento",
    description: "Controle de código",
    items: ["Git", "GitHub"]
},
{
    icon: Palette,
    title: "UI & Styling",
    description: "Estilização e experiência visual",
    items: ["TailwindCSS", "CSS", "Responsive Design"]
},
{
    icon: Zap,
    title: "Boas práticas",
    description: "Qualidade de código",
    items: ["Clean Code", "Componentização", "ESLint", "Prettier"]
},
{
    icon: Palette,
    title: "Ferramentas",
    description: "Ferramentas de desenvolvimento",
    items: ["VS Code", "Figma", "Postman"]
}
];

export function Habilidades(){
    return(
        <section id="habilidades" className="py-20 px-6 md:px-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-2">Minhas competências</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Habilidades & Tecnologias</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Stack técnico que domino e utilizo para criar soluções inovadoras</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <div 
                                key={index}
                                className="group relative bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
                            >
                                <div className="absolute inset-0  from-blue-600/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600/40 transition-colors">
                                        <Icon className="w-6 h-6 text-blue-400" />
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
                                    
                                    <div className="flex flex-wrap gap-2">
                                        {skill.items.map((item, i) => (
                                            <span 
                                                key={i}
                                                className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30 group-hover:border-blue-500/60 transition-colors"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}