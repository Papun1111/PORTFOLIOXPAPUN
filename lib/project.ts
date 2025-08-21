import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    name: "Valhalla Brush",
    description: "A digital whiteboard tool where users can create or join canvas rooms and draw together in real-time. Ideal for brainstorming, education, or remote design sessions.",
    status: "MVP (Modular, extensible)",
    technologies: ["Next.js", "WebSockets", "Collaboration", "Digital Canvas"],
    liveDemo: true,
    icon: "",
    liveLink: "https://canvas.valhalla-brush.com/",
    github: "https://github.com/Papun1111/Valhalla-brush"
  },
  {
    id: 2,
    name: "Spottube",
    description: "A YouTube-powered music player where creators stream tracks and fans vote in real-time to decide what plays next. Tailored for livestreams, group study, or parties.",
    status: "Alpha (Feature-rich, in early stage)",
    technologies: ["YouTube API", "Music App", "Next.js", "OAuth", "Live Voting"],
    liveDemo: true,
    icon: "",
    liveLink: "https://spot-tube-lime.vercel.app/",
    github: "https://github.com/Papun1111/SpotTube"
  },
  {
    id: 3,
    name: "VitalsOn",
    description: "VitalsOn is an advanced, modular healthcare solution that allows patients to book appointments online, make payments, and interact with healthcare providers while administrators oversee doctor management.",
    status: "Stable (Used in demo deployments)",
    technologies: ["Healthcare", "Admin Dashboard", "JWT", "Stripe", "Razorpay", "MongoDB"],
    liveDemo: true,
    icon: "",
    liveLink: "https://vitalson.onrender.com/",
    github: "https://github.com/Papun1111/VitalsOn"
  },
  {
    id: 4,
    name: "Blue Court",
    description: "Blue Court is a lightweight social media app allowing users to authenticate via JWT, upload images, and share content in a fast, responsive layout. Built for modern deployment pipelines.",
    status: "Beta (Ready for user testing)",
    technologies: ["React", "Tailwind", "JWT", "MongoDB", "Social App"],
    liveDemo: true,
    icon: "",
    liveLink: "https://bluecourt.onrender.com",
    github: "https://github.com/Papun1111/BLUECOURT"
  },
  {
    id: 5,
    name: "Food Delivery Website",
    description: "A complete food delivery system with a React-powered user site, an admin dashboard, and an Express.js backend. Users can browse, order, and track food while admins manage inventory and orders.",
    status: "Production-ready (Modular and scalable)",
    technologies: ["Full Stack", "React", "Node.js", "JWT", "Stripe", "Cloudinary", "Admin Panel", "MongoDB"],
    liveDemo: true,
    icon: "",
    liveLink: "https://pamotra-delivery.vercel.app/",
    github: "https://github.com/Papun1111/FoodDelivery"
  },
  {
    id: 6,
    name: "VitalsOn Admin Panel",
    description: "The Admin Panel of the VitalsOn platform enables healthcare administrators to manage doctor profiles, view appointments, handle patient queries, and oversee the business operations with ease.",
    status: "Stable (Admin module of larger ecosystem)",
    technologies: ["Admin Panel", "React", "Vite", "JWT", "Stripe", "Cloudinary", "Doctor Management"],
    liveDemo: true,
    icon: "",
    liveLink: "https://vitalspanel.onrender.com/",
    github: "https://github.com/Papun1111/VitalsOn"
  },
  {
    id: 7,
    name: "Gringotts",
    description: "A full-stack fintech simulation platform integrating real-time stock data, TensorFlow.js-powered predictive analytics, and immersive VR trading. Features interactive dashboards, dynamic charts, and a crowd-reactive VR trading pit.",
    status: "Experimental (AI + VR integrated)",
    technologies: ["Fintech", "TensorFlow.js", "WebSockets", "VR", "Trading Simulation", "JWT", "MongoDB", "Framer Motion", "Recharts", "React Three Fiber"],
    liveDemo: true,
    icon: "",
    liveLink: "https://grindotts.vercel.app/",
    github: "https://github.com/Papun1111/Grindotts"
  },  {
    id: 8,
    name: "MEET X",
    description: "A full-stack Video Call Site",
    status: "completed",
    technologies: ["socker.io", "WebSockets", "JWT", "MongoDB", "Framer Motion","MERN"],
    liveDemo: true,
    icon: "",
    liveLink: "https://meet-x-lemon.vercel.app/",
    github: "https://github.com/Papun1111/MEET_X"
  }
];