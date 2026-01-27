"use client";

import {
  GraduationCap,
  Users,
  BookOpen,
  BarChart3,
  Shield,
  Check,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  School,
  Building2,
  Laptop,
  FileText,
  MessageSquare,
  Zap,
  Headphones,
  Menu,
  X,
  Star,
  Play,
  ChevronRight,
  Clock,
  Award,
  Target,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

// Header
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold text-foreground">GyanPat</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <a
                key={item}
                href={i === 0 ? "#" : `#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors link-hover ${
                  i === 0 ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-primary rounded-full btn-primary"
            >
              Sign Up
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            {navItems.map((item, i) => (
              <a
                key={item}
                href={i === 0 ? "#" : `#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-sm text-muted-foreground"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex items-center justify-center w-full py-3 text-sm font-semibold text-white bg-primary rounded-full"
            >
              Sign Up
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

// Hero Section
function Hero() {
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
                  <path d="M2 10C50 2 150 2 198 10" stroke="#f97316" strokeWidth="3" strokeLinecap="round"/>
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
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-200 to-orange-400 border-2 border-white flex items-center justify-center text-xs font-bold text-white"
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

              <div className="absolute bottom-20 right-0 bg-white rounded-2xl p-3 shadow-lg animate-float delay-300 hidden lg:block">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Star className="h-4 w-4 text-primary fill-primary" />
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

// Services Section
function Services() {
  const services = [
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Track performance metrics and make data-driven decisions with our comprehensive analytics.",
      color: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      icon: BookOpen,
      title: "Learning",
      description: "Digital classroom solutions with live classes, recorded lectures, and interactive assessments.",
      color: "bg-orange-50",
      iconColor: "text-primary",
    },
    {
      icon: MessageSquare,
      title: "Communication",
      description: "Keep everyone connected with unified messaging, notifications, and announcements.",
      color: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      icon: Users,
      title: "Administration",
      description: "Streamline all administrative tasks from admissions to fee management.",
      color: "bg-purple-50",
      iconColor: "text-purple-500",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-4">
            We Provide The Best{" "}
            <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Let us unleash the full potential of your institution with our data-driven strategies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-white p-6 rounded-2xl border border-border card-lift text-center"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-5 icon-box`}>
                <service.icon className={`h-6 w-6 ${service.iconColor}`} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Solutions Section (Process Steps)
function Solutions() {
  const steps = [
    {
      num: "1",
      title: "Contact us",
      description: "Connect with us to boost your institution visibility.",
    },
    {
      num: "2",
      title: "Consult",
      description: "Our specialists analyze and answer your questions.",
    },
    {
      num: "3",
      title: "Setup",
      description: "Get started with our system today to proceed.",
    },
    {
      num: "4",
      title: "Success",
      description: "We ensure seamless in all types of operations.",
    },
  ];

  return (
    <section className="py-20 md:py-28 gradient-warm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Illustration */}
          <div className="relative order-2 lg:order-1 animate-slide-right">
            <div className="relative">
              <Image
                src="https://illustrations.popsy.co/amber/remote-work.svg"
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
    </section>
  );
}

// About Section
function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <p className="text-sm font-semibold text-primary mb-3">Our Company</p>
            <h2 className="heading-lg text-foreground mb-6">
              Our <span className="text-primary">Agency</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              We believe in the power of data. Our analytics-driven approach allows us to make informed 
              decisions and optimize your institution&apos;s operations for maximum ROI.
            </p>
            <p className="text-muted-foreground mb-8">
              Let&apos;s turn your data into actionable insights. Tailored solutions for your institution!
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
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
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
              src="https://illustrations.popsy.co/amber/business-analysis.svg"
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
}

// Clients Section
function Clients() {
  const clients = [
    { icon: School, title: "Schools", count: "300+", desc: "K-12 institutions" },
    { icon: Building2, title: "Colleges", count: "150+", desc: "Higher education" },
    { icon: GraduationCap, title: "Institutes", count: "50+", desc: "Coaching centers" },
  ];

  return (
    <section className="py-16 bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {clients.map((client, i) => (
            <div key={i} className="text-center text-white">
              <client.icon className="h-10 w-10 mx-auto mb-4 opacity-80" />
              <p className="text-4xl font-bold mb-1">{client.count}</p>
              <p className="font-semibold mb-1">{client.title}</p>
              <p className="text-sm opacity-70">{client.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "School Principal",
      content: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
      rating: 5,
      avatar: "RK",
    },
    {
      name: "Priya Sharma",
      role: "Director",
      content: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
      rating: 5,
      avatar: "PS",
    },
    {
      name: "Amit Singh",
      role: "College Dean",
      content: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
      rating: 4,
      avatar: "AS",
    },
  ];

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
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center text-white font-bold">
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
                    className={`h-4 w-4 ${
                      j < item.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"
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

// CTA Section
function CTA() {
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

// Contact Section
function Contact() {
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
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 text-sm rounded-xl border border-border bg-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="+91 98765 43210"
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
                { icon: Phone, label: "Phone", value: "+91 123 456 7890" },
                { icon: Mail, label: "Email", value: "info@gyanpat.com" },
                { icon: MapPin, label: "Office", value: "123 Tech Park, New Delhi, India" },
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

// Footer
function Footer() {
  const links = {
    Company: ["About", "Careers", "Contact", "Team"],
    Designs: ["Design systems", "UI/UX Projects", "Find a designer", "Discover inspiration"],
    Resources: ["Become a designer", "Blog", "Design without borders", "Affiliates"],
  };

  return (
    <footer className="py-16 bg-white border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-border">
          <div className="sm:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-foreground">GyanPat</span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs mb-6">
              Empowering educational institutions with innovative technology solutions.
            </p>
            <div className="flex gap-3">
              {["f", "t", "in"].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors text-sm font-bold"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} GyanPat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Solutions />
        <About />
        <Clients />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
