import { testimonials } from "@/constant";
import { Star } from "lucide-react";

export const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 md:py-28">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="heading-lg text-foreground mb-4">
                        What <span className="text-primary">Clients</span> Say!
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        See How Our Digital Marketing Agency Helped Clients Achieve Their Goals
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-2xl border border-border card-lift"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center text-white font-bold shadow-md">
                                    {item.avatar}
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">{item.name}</p>
                                    <p className="text-xs text-muted-foreground">{item.role}</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                &ldquo;{item.content}&rdquo;
                            </p>

                            <div className="flex gap-1">
                                {[...Array(5)].map((_, j) => (
                                    <Star
                                        key={j}
                                        className={`h-4 w-4 ${j < item.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}