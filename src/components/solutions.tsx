import { steps } from "@/constant";
import Image from "next/image";

export const Solutions = () => {


    return (
        <section className="py-20 md:py-28 gradient-warm" >
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Illustration */}
                    <div className="relative order-2 lg:order-1 animate-slide-right">
                        <div className="relative">
                            <Image
                                src="https://illustrations.popsy.co/blue/remote-work.svg"
                                alt="Working together"
                                width={500}
                                height={400}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="order-1 lg:order-2 animate-slide-left">
                        <h2 className="heading-lg text-foreground mb-4">
                            Simple{" "}
                            <span className="text-primary">Solutions!</span>
                        </h2>
                        <p className="text-muted-foreground mb-10">
                            We understand that no two institutions are alike. That&apos;s why we take the time to understand your needs.
                        </p>

                        <div className="space-y-6">
                            {steps.map((step, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                                        {step.num}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                                        <p className="text-sm text-muted-foreground">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4 mt-10">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-primary rounded-full btn-primary"
                            >
                                Get Started
                            </a>
                            <a
                                href="#about"
                                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-foreground border-2 border-border rounded-full btn-outline"
                            >
                                Read more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}