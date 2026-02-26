import { services } from "@/constant";

export const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-4">
            We Provide The Best <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Let us unleash the full potential of your institution with our
            data-driven strategies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-white p-6 rounded-2xl border border-border card-lift text-center"
            >
              <div
                className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-5 icon-box`}
              >
                <service.icon className={`h-6 w-6 ${service.iconColor}`} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-center text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
