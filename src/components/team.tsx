import { Users, User, Briefcase } from "lucide-react";
import Image from "next/image";

export const Team = () => {
  const teamMembers = [
    {
      name: "Sunil Bhandari",
      role: "Chief Executive Officer (CEO)",
      bio: "Leads the company's strategic vision and business growth initiatives.",
      image: "/sunil_bhandari.jpeg",
    },
    {
      name: "Sanjay Bhatta",
      role: "Chief Technology Officer (CTO)",
      bio: "Drives innovation and oversees the technical development of our solutions.",
      image: "/sanjay_bhatta.jpeg",
    },
    {
      name: "Sushil Bhandari",
      role: "Project Manager",
      bio: "Manages project delivery and ensures successful implementation of solutions.",
      image: "/susil_bhandari.jpeg",
    },
  ];

  return (
    <section id="team" className="py-20 md:py-28 gradient-orange-soft">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-sm font-semibold text-primary mb-3">
            Our Leadership
          </p>
          <h2 className="heading-lg text-foreground mb-6">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A dedicated group of professionals committed to delivering
            exceptional solutions for educational institutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`animate-fade-up delay-${
                index * 100
              } bg-white rounded-2xl p-6 shadow-lg card-lift hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex items-center gap-5 mb-5">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
