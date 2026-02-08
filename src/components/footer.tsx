import { links } from "@/constant";
import { GraduationCap } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="py-16 bg-white border-t border-border">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-border">
                    <div className="sm:col-span-2">
                        <a href="#" className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-md">
                                <Image src={"/logo.jpeg"} alt="Gyanpath" width={40} height={40} className="rounded-sm" />
                            </div>
                            <span className="text-xl font-bold text-foreground font-segoe">GyanPath</span>
                        </a>
                        <p className="text-sm text-muted-foreground max-w-xs mb-4">
                            Empowering educational institutions with innovative technology solutions.
                        </p>
                        <div className="space-y-1 mb-6">
                            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider opacity-60">Company Details</p>
                            <p className="text-sm text-foreground font-semibold">Gyanpath</p>
                            <p className="text-xs text-muted-foreground">VAT/PAN: 622468107</p>
                            <p className="text-xs text-muted-foreground">Nepalgunj Banke</p>
                        </div>
                        <div className="flex gap-3">
                            {["f", "t", "in"].map((social, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors text-sm font-bold"
                                >
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    {Object.entries(links).map(([title, items]) => (
                        <div key={title}>
                            <h4 className="font-semibold text-foreground mb-4">{title}</h4>
                            <ul className="space-y-3">
                                {items.map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} GyanPath Pvt. Ltd. All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground">Design & Developed by <a href="https://sakarkhadka.com.np" target="_blank" rel="noopener noreferrer"><span className="text-black font-medium">Sakar Khadka</span></a></p>
                </div>
            </div>
        </footer>
    );
}