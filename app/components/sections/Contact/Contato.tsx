'use client'

import { Mail, Linkedin, Github, MessageCircle, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import emailjs from "@emailjs/browser";

export function Contato() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            )
            .then(() => {
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 3000);
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                console.error("Erro ao enviar:", error);
            });
    };

    return (
        <section id="contato" className="py-20 px-6 md:px-10 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-2">Vamos conversar</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Entra em Contato</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Tem uma oportunidade, dúvida ou quer colaborar? Ficarei feliz em conversar com você</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">

                    <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-6">Envie uma Mensagem</h3>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Seu Nome</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                                    placeholder="Seu nome"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Seu Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                                    placeholder="seu@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                                    placeholder="Sua mensagem aqui..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                            >
                                <Send className="w-4 h-4" />
                                Enviar Mensagem
                            </button>

                            {submitted && (
                                <div className="p-4 bg-green-600/20 border border-green-500/50 rounded-lg text-green-300 text-sm">
                                    Obrigado! Responderei em breve.
                                </div>
                            )}
                        </form>
                    </div>


                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white mb-8">Ou me encontre aqui:</h3>

                        <a
                            href="mailto:hugoferrari36@gmail.com"
                            className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/50 transition-all group"
                        >
                            <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/40 transition-colors">
                                <Mail className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">Email</h4>
                                <p className="text-gray-400 text-sm break-all">hugoferrari36@gmail.com</p>
                            </div>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/hugoferraripires/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/50 transition-all group"
                        >
                            <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/40 transition-colors">
                                <Linkedin className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">LinkedIn</h4>
                                <p className="text-gray-400 text-sm">Conecte-se comigo</p>
                            </div>
                        </a>

                        <a
                            href="https://github.com/Hugo-Ferrari"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/50 transition-all group"
                        >
                            <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/40 transition-colors">
                                <Github className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">GitHub</h4>
                                <p className="text-gray-400 text-sm">Veja meus projetos</p>
                            </div>
                        </a>

                        <a
                            href="https://wa.me/5516992809719"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/50 transition-all group"
                        >
                            <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/40 transition-colors">
                                <MessageCircle className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">WhatsApp</h4>
                                <p className="text-gray-400 text-sm">Chat rápido</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
