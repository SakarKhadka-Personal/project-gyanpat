import {
  BarChart3,
  BookOpen,
  Building2,
  GraduationCap,
  MessageSquare,
  School,
  Users,
} from "lucide-react";

export const services = [
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Track performance metrics and make data-driven decisions with our comprehensive analytics.",
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: BookOpen,
    title: "Learning",
    description:
      "Digital classroom solutions with live classes, recorded lectures, and interactive assessments.",
    color: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    icon: MessageSquare,
    title: "Communication",
    description:
      "Keep everyone connected with unified messaging, notifications, and announcements.",
    color: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
  {
    icon: Users,
    title: "Administration",
    description:
      "Streamline all administrative tasks from admissions to fee management.",
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
