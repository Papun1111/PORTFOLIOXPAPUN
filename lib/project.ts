import { Project } from "@/types";
import { FaPaintBrush, FaYoutube, FaHospitalUser, FaUsers, FaUtensils, FaUserShield, FaChartLine, FaVideo, FaBrain } from "react-icons/fa";
import { MdOutlineSportsCricket } from "react-icons/md";
import { SiGooglemeet, SiReact, SiNextdotjs, SiMongodb, SiTailwindcss, SiTensorflow, SiWebrtc } from "react-icons/si";
import { MdHealthAndSafety } from "react-icons/md";
import { GiBank } from "react-icons/gi";

export const projects: Project[] = [
  {
    id: 1,
    name: "Valhalla Brush",
    description: "A digital whiteboard tool where users can create or join canvas rooms and draw together in real-time. Ideal for brainstorming, education, or remote design sessions.",
    status: "MVP (Modular, extensible)",
    technologies: ["Next.js", "WebSockets", "Collaboration", "Digital Canvas"],
    liveDemo: true,
    icon: FaPaintBrush,
    liveLink: "https://canvas.valhalla-brush.com/",
    github: "https://github.com/Papun1111/Valhalla-brush"
  },
  {
    id: 2,
    name: "Sound-lab",
    description: "A YouTube-powered music player where creators stream tracks and fans vote in real-time to decide what plays next. Tailored for livestreams, group study, or parties.",
    status: "Alpha (Feature-rich, in early stage)",
    technologies: ["YouTube API", "Music App", "Next.js", "Custom Auth", "Live Voting"],
    liveDemo: true,
    icon: FaYoutube,
    liveLink: "https://sound-lab-zeta.vercel.app/",
    github: "https://github.com/Papun1111/Sound-Lab"
  },
  {
    id: 3,
    name: "VitalsOn",
    description: "VitalsOn is an advanced, modular healthcare solution that allows patients to book appointments online, make payments, and interact with healthcare providers while administrators oversee doctor management.",
    status: "Stable (Used in demo deployments)",
    technologies: ["Healthcare", "Admin Dashboard", "JWT", "Stripe", "Razorpay", "MongoDB"],
    liveDemo: true,
    icon: MdHealthAndSafety,
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
    icon: FaUsers,
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
    icon: FaUtensils,
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
    icon: FaUserShield,
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
    icon: GiBank,
    liveLink: "https://grindotts.vercel.app/",
    github: "https://github.com/Papun1111/Grindotts"
  },
  {
    id: 8,
    name: "MEET X",
    description: "A full-stack video conferencing solution built with MERN stack and WebSockets. Users can initiate or join calls securely using JWT. Ideal for remote teams or personal meetups.",
    status: "Completed",
    technologies: ["Socket.IO", "WebSockets", "JWT", "MongoDB", "Framer Motion", "MERN"],
    liveDemo: true,
    icon: FaVideo,
    liveLink: "https://meet-x-lemon.vercel.app/",
    github: "https://github.com/Papun1111/MEET_X"
  },
  {
    id: 9,
    name: "Say My Brain",
    description: "A second-brain productivity tool that lets users save tweets, websites, and tags they come across but can’t process immediately. With AI integration, users can later query their saved content and find insights fast.",
    status: "Completed",
    technologies: ["Next.js", "Gemini AI Integration", "Postgresql", "Bookmark Manager", "AI Assistant","Prisma"],
    liveDemo: true,
    icon: FaBrain,
    liveLink: "https://say-my-brain.vercel.app/",
    github: "https://github.com/Papun1111/Say_My_Brain"
  },
  {
    id: 10,
    name: "Kangaroo Code",
    description: "A community-first cricket organisation platform where users can create teams, schedule and manage matches, update live scorecards, and track toss and results. All-in-one for amateur and local cricket groups.",
    status: "Completed",
    technologies: ["Next.js", "Postgresql", "TailwindCSS", "Cricket Score Management", "Team Coordination"],
    liveDemo: true,
    icon: MdOutlineSportsCricket,
    liveLink: "https://kangaroo-code.vercel.app/",
    github: "https://github.com/Papun1111/Kangaroo_Code"
  }
];
