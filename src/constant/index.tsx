import {
  Bell,
  Building2,
  GraduationCap,
  Laptop,
  Megaphone,
  Printer,
  School,
} from "lucide-react";

export const services = [
  {
    icon: GraduationCap,
    title: "School Management Software",
    description:
      "Complete and smart school management solutions to simplify administration, communication, attendance, exams, and fee management.",
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: Laptop,
    title: "Web & Mobile App Development",
    description:
      "Custom website and mobile application development tailored to your business needs. Modern, responsive, secure, and user-friendly solutions.",
    color: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    icon: Bell,
    title: "SS Bell & Annual Maintenance",
    description:
      "Upgrade your school communication with a smart bell and announcement system—app-controlled scheduling, instant live announcements, and seamless audio distribution anytime, anywhere.",
    color: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Grow your business with our expert digital marketing services including social media marketing, SEO, online advertising, and branding strategies.",
    color: "bg-blue-50",
    iconColor: "text-primary",
  },
  {
    icon: Printer,
    title: "Digital Printing Solutions",
    description:
      "High-quality and professional digital printing services for banners, brochures, business cards, posters, and more.",
    color: "bg-blue-50",
    iconColor: "text-primary",
  },
];

// Solutions Pages Details
export const steps = [
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

// Team Members Section Details
export const TeamMembers = [
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
  {
    name: "Sakar Khadka",
    role: "Full Stack Developer",
    bio: "Brings ideas to life through elegant code and thoughtful system design.",
    image: "/icon.webp",
  },
];

// Clients Page Details
export const clients = [
  { icon: School, title: "Schools", count: "300+", desc: "K-12 institutions" },
  {
    icon: Building2,
    title: "Colleges",
    count: "150+",
    desc: "Higher education",
  },
  {
    icon: GraduationCap,
    title: "Institutes",
    count: "50+",
    desc: "Coaching centers",
  },
];

// Testimonials Page Details
export const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "School Principal",
    content:
      "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 5,
    avatar: "RK",
  },
  {
    name: "Priya Sharma",
    role: "Director",
    content:
      "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Amit Singh",
    role: "College Dean",
    content:
      "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 4,
    avatar: "AS",
  },
];

// Footer Page Section
export const links = {
  Company: ["About", "Careers", "Contact", "Team"],
  Designs: [
    "Design systems",
    "UI/UX Projects",
    "Find a designer",
    "Discover inspiration",
  ],
  Resources: [
    "Become a designer",
    "Blog",
    "Design without borders",
    "Affiliates",
  ],
};
