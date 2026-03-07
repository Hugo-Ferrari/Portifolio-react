
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/app/.data/Projetos";

export function Projetos() {
    return (
        <section id="projetos" className="py-20 px-6 md:px-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-2">Portfólio</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Projetos em Destaque</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Trabalhos que demonstram minha capacidade técnica e criatividade</p>
                </div>

                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative bg-white/5 backdrop-blur border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
                        >
                            <div className="absolute inset-0  from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10 h-full flex flex-col">

                                <div className="w-full h-48  from-gray-700 to-gray-900 flex items-center justify-center overflow-hidden relative">
                                    <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity"></div>

                                   <img src={project.image} className="text-gray-500 text-center "></img>
                                </div>

                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>

                                        <p className="text-gray-300 mb-4">{project.description}</p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tech.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-300 w-fit"
                                    >
                                        Ver Projeto
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-400 mb-6">
                        {projects.length} projeto{projects.length > 1 ? "s" : ""} desenvolvido{projects.length > 1 ? "s" : ""}
                    </p>
                    <Link
                        href="https://github.com/Hugo-Ferrari"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-blue-500/50 text-blue-400 hover:bg-blue-600/10 rounded-lg font-semibold transition-colors duration-300"
                    >
                        <Github className="w-5 h-5" />
                        Ver Mais no GitHub
                    </Link>
                </div>
            </div>
        </section>
    );
}
