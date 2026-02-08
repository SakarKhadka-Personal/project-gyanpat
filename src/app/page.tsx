import { AboutUs } from "@/components/about";
import { Clients } from "@/components/clients";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Solutions } from "@/components/solutions";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "lucide-react";



// Main Page
export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Solutions />
        <AboutUs />
        <Clients />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
