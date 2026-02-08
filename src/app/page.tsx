import { AboutUs } from "@/components/about";
import { Clients } from "@/components/clients";
import { ContactUs } from "@/components/contact";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Solutions } from "@/components/solutions";
import { Testimonials } from "@/components/testimonials";



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
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
