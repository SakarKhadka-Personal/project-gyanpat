import { Award, ChevronRight, Clock, Shield, Target } from "lucide-react";
import Image from "next/image";

export const AboutUs = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <p className="text-sm font-semibold text-primary mb-3">
              Our Company
            </p>
            <h2 className="heading-lg text-foreground mb-6">
              Our <span className="text-primary">Agency</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              We believe in the power of data. Our analytics-driven approach
              allows us to make informed decisions and optimize your
              institution&apos;s operations for maximum ROI.
            </p>
            <p className="text-muted-foreground mb-8">
              Let&apos;s turn your data into actionable insights. Tailored
              solutions for your institution!
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { icon: Target, label: "Goal Oriented" },
                { icon: Award, label: "Award Winning" },
                { icon: Clock, label: "24/7 Support" },
                { icon: Shield, label: "Secure Platform" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-foreground border-2 border-border rounded-full btn-outline"
            >
              Read more
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          {/* Illustration */}
          <div className="relative animate-fade-up delay-200">
            <Image
              src="https://illustrations.popsy.co/green/business-analysis.svg"
              alt="Business analysis"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
