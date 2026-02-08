import { ArrowRight } from "lucide-react";

export const CTA = () => {
    return (
        <section className="py-12 bg-primary">
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <h2 className="text-xl md:text-2xl font-bold text-white text-center md:text-left">
                        Ready to get started?
                    </h2>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-primary bg-white rounded-full hover:bg-white/90 transition-colors"
                    >
                        Contact Us
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}