
import Image from "next/image";


import { Botao } from "../../common/Button/Botao";
import TextType from "../../TextType";

export function Hugo() {
    return (
        <section id="principal" className="pb-20 px-6 md:px-10">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center md:min-h-screen ">
                
                <div className="flex flex-col gap-6 md:gap-8">
                    <div className="space-y-3">
                        <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Bem-vindo ao meu portfólio</p>
                        
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
                            Olá, eu sou Hugo Ferrari
                        </h1>
                    </div>

                    <TextType
                        text={["Desenvolvedor Full-Stack", "Apaixonado por Web", "Focado em Inovação"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        className="text-2xl md:text-3xl font-bold text-blue-400"
                    />

                    <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                        Estudante de Engenharia de Software com paixão por criar interfaces modernas e funcais. Especializado em React, Next.js e TypeScript.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Botao tipo="GitHub" text="Meu GitHub" href="https://github.com/Hugo-Ferrari" variant="primario" />
                        <Botao tipo="Linkedin" text="Meu LinkedIn" href="https://www.linkedin.com/in/hugoferraripires/" variant="secundario" />
                    </div>
                </div>

                <div className="hidden md:flex justify-center items-center">
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur-3xl opacity-30"></div>
                        <div className="relative  from-gray-800 to-gray-900 rounded-2xl p-1 overflow-hidden h-full flex items-center justify-center">
                            <div className="bg-black w-full h-full rounded-xl flex items-center justify-center">
                                <img src = "" ></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
