import { Mail, MapPin, Phone, Sparkles, Users } from "lucide-react";

export const ContactUs = () => {
    return (
        <section id="contact" className="py-20 md:py-28 gradient-warm">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Form */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl animate-fade-up">
                        <h3 className="text-xl font-bold text-foreground mb-6">Request a Demo</h3>

                        <form className="space-y-5">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 text-sm rounded-xl border border-border bg-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="Sakar K."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 text-sm rounded-xl border border-border bg-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="9865657440"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 text-sm rounded-xl border border-border bg-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="john@school.edu"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">Institution</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 text-sm rounded-xl border border-border bg-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="ABC Public School"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 text-sm rounded-xl border border-border bg-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                    placeholder="Tell us about your requirements..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3.5 text-sm font-semibold text-white bg-primary rounded-xl btn-primary"
                            >
                                Submit Request
                            </button>
                        </form>
                    </div>

                    {/* Info */}
                    <div className="animate-fade-up delay-200">
                        <h2 className="heading-lg text-foreground mb-6">
                            Let&apos;s <span className="text-primary">Talk</span>
                        </h2>
                        <p className="text-muted-foreground mb-10">
                            Schedule a demo or reach out to discuss how we can help transform your institution.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: Phone, label: "Phone", value: "9828635445" },
                                { icon: Mail, label: "Email", value: "gyanpathpvtltd@gmail.com" },
                                { icon: MapPin, label: "Office", value: "Nepalgunj Banke, Nepal" },
                                { icon: Users, label: "Contact Person", value: "Sunil Bhandari" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <item.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground text-sm">{item.label}</p>
                                        <p className="text-muted-foreground">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social */}
                        <div className="mt-10">
                            <p className="text-sm font-medium text-foreground mb-4">Follow Us</p>
                            <div className="flex gap-3">
                                {["facebook", "twitter", "instagram"].map((social) => (
                                    <a
                                        key={social}
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                                    >
                                        <Sparkles className="h-4 w-4" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}