import { BellIcon } from 'lucide-react';
import Link from 'next/link';


export function Nav() {

    return (
        <nav className="fixed w-full z-20 top-0 left-0 bg-black/50 backdrop-blur-md border-b border-white/10 font-semibold text-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6 md:px-10">
                <Link href="#principal" className="flex items-center group">
                    <div className="relative">
                        <h1 className="text-lg font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Hugo Ferrari</h1>
                    </div>
                </Link>

                <div className="flex items-center gap-1 md:gap-2">
                    <ul className="flex items-center list-none gap-1 md:gap-2">
                        <li>
                            <Link
                                href="#principal"
                                aria-label="Home"
                                className="hidden md:inline-flex items-center justify-center px-3 py-2 rounded-md text-sm transition-colors duration-300 hover:text-blue-400"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="#sobre"
                                aria-label="Sobre"
                                className="hidden md:inline-flex items-center justify-center px-3 py-2 rounded-md text-sm transition-colors duration-300 hover:text-blue-400"
                            >
                                Sobre
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="#habilidades"
                                aria-label="Habilidades"
                                className="hidden md:inline-flex items-center justify-center px-3 py-2 rounded-md text-sm transition-colors duration-300 hover:text-blue-400"
                            >
                                Habilidades
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="#projetos"
                                aria-label="Projetos"
                                className="hidden md:inline-flex items-center justify-center px-3 py-2 rounded-md text-sm transition-colors duration-300 hover:text-blue-400"
                            >
                                Projetos
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#contato"
                                aria-label="Contato"
                                className="px-4 py-2 rounded-md text-sm bg-blue-600 hover:bg-blue-700 transition-colors duration-300 font-medium"
                            >
                                Contato
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>

        </nav>

    )
}