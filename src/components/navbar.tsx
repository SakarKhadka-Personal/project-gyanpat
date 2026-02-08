'use client'
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = ["Home", "About", "Services", "Contact"];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md">
            <nav className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <a href="#" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                            <Image src={"/logo.jpeg"} alt="Gyanpath" width={40} height={40} className="rounded-sm" />
                        </div>
                        <span className="text-xl font-bold text-foreground font-segoe tracking-tight">GyanPath</span>
                    </a>
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item, i) => (
                            <a
                                key={item}
                                href={i === 0 ? "#" : `#${item.toLowerCase()}`}
                                className={`text-sm font-medium transition-colors link-hover ${i === 0 ? "text-primary" : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <a
                            href="#contact"
                            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-primary rounded-full btn-primary"
                        >
                            Sign Up
                        </a>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden py-4 border-t border-border animate-fade-in">
                        {navItems.map((item, i) => (
                            <a
                                key={item}
                                href={i === 0 ? "#" : `#${item.toLowerCase()}`}
                                onClick={() => setIsOpen(false)}
                                className="block py-3 text-sm text-muted-foreground"
                            >
                                {item}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-4 flex items-center justify-center w-full py-3 text-sm font-semibold text-white bg-primary rounded-full"
                        >
                            Sign Up
                        </a>
                    </div>
                )}
            </nav>
        </header>
    )
}