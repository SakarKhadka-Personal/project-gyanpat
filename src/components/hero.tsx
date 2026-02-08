import { ArrowRight, Check, Star, Play } from "lucide-react";
import Image from "next/image";

export const Hero = () => {

    return (
        <section className="pt-24 md:pt-28 pb-16 md:pb-24 gradient-hero overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Content */}
                    <div className="animate-fade-up">
                        <h1 className="heading-xl text-foreground mb-6">
                            We create{" "}
                            <span className="text-primary">solutions</span> for your{" "}
                            <span className="relative">
                                business
                                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                                    <path d="M2 10C50 2 150 2 198 10" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>

                        <p className="body-lg text-muted-foreground mb-8 max-w-md">
                            Our team keeps a keen eye on emerging trends and technologies to ensure your
                            educational institution remains cutting-edge.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-primary rounded-full btn-primary"
                            >
                                Get Started
                            </a>
                            <a
                                href="#services"
                                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                            >
                                <Play className="h-4 w-4" />
                                Explore more
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex items-center gap-6">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                                    >
                                        {String.fromCharCode(64 + i)}
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-foreground">500+ Schools</p>
                                <p className="text-xs text-muted-foreground">Trust our platform</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Illustration */}
                    <div className="relative animate-fade-up delay-200">
                        <div className="relative">
                            {/* Background blob */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full blur-3xl opacity-60" />

                            {/* Main illustration */}
                            <div className="relative">
                                <Image
                                    src="https://i.pinimg.com/736x/ba/71/c5/ba71c5c079e864f781505bcc67da8a32.jpg"
                                    alt="Student learning"
                                    width={500}
                                    height={500}
                                    className="w-full h-auto animate-float-slow"
                                    priority
                                />
                            </div>

                            {/* Floating elements */}
                            <div className="absolute top-10 left-0 bg-white rounded-2xl p-3 shadow-lg animate-float hidden lg:block">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                                        <Check className="h-4 w-4 text-green-600" />
                                    </div>
                                    <span className="text-xs font-medium">Easy Setup</span>
                                </div>
                            </div>

                            <div className="absolute bottom-20 right-0 bg-white rounded-2xl p-3 shadow-lg animate-float delay-300 hidden lg:block border border-yellow-100">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center">
                                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                    </div>
                                    <span className="text-xs font-medium">4.9 Rating</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}