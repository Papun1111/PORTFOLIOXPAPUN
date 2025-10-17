import { Project } from "@/types";
import { FaPaintBrush, FaUserShield, FaVideo, FaBrain, FaPhoenixFramework } from "react-icons/fa";
import { MdOutlineSportsCricket, MdHealthAndSafety } from "react-icons/md";
import { LuBookHeadphones } from "react-icons/lu";
import { GiStarfighter } from "react-icons/gi";
export const projects: Project[] = [
  {
    id: 1,
    name: "PageSmith",
    description: "PageSmith is a real-time, collaborative canvas for modern productivity where developers, writers, and teams can bring their ideas to life.",
    status: "MVP (Modular, extensible)",
    technologies: ["Next.js", "WebSockets", "Collaboration", "NoteMaking", "Turborepo"],
    liveDemo: true,
    icon: FaPhoenixFramework,
    liveLink: "https://pagesmith.valhalla-brush.com/",
    github: "https://github.com/Papun1111/Pagesmith"
  },
  {
    id: 2,
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
    id: 3,
    name: "Sound-lab",
    description: "A YouTube-powered music player where creators stream tracks and fans vote in real-time to decide what plays next. Tailored for livestreams, group study, or parties.",
    status: "Alpha (Feature-rich, in early stage)",
    technologies: ["YouTube API", "Music App", "Next.js", "Custom Auth", "Live Voting"],
    liveDemo: true,
    icon: LuBookHeadphones,
    liveLink: "https://sound-lab-zeta.vercel.app/",
    github: "https://github.com/Papun1111/Sound-Lab"
  },
  {
    id: 4,
    name: "VitalsOn",
    description: "VitalsOn is an advanced, modular healthcare solution that allows patients to book appointments online, make payments, and interact with healthcare providers while administrators oversee doctor management.",
    status: "Stable (Used in demo deployments)",
    technologies: ["Healthcare", "Admin Dashboard", "JWT", "Stripe", "Razorpay", "MongoDB"],
    liveDemo: true,
    icon: MdHealthAndSafety,
    liveLink: "https://vitals-on.vercel.app",
    github: "https://github.com/Papun1111/VitalsOn"
  },
  {
    id: 5,
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
    id: 6,
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
    id: 7,
    name: "Say My Brain",
    description: "A second-brain productivity tool that lets users save tweets, websites, and tags they come across but can’t process immediately. With AI integration, users can later query their saved content and find insights fast.",
    status: "Completed",
    technologies: ["Next.js", "Gemini AI Integration", "Postgresql", "Bookmark Manager", "AI Assistant", "Prisma"],
    liveDemo: true,
    icon: FaBrain,
    liveLink: "https://say-my-brain.vercel.app/",
    github: "https://github.com/Papun1111/Say_My_Brain"
  },
  {
    id: 8,
    name: "Kangaroo Code",
    description: "A community-first cricket organisation platform where users can create teams, schedule and manage matches, update live scorecards, and track toss and results. All-in-one for amateur and local cricket groups.",
    status: "Completed",
    technologies: ["Next.js", "Postgresql", "TailwindCSS", "Cricket Score Management", "Team Coordination"],
    liveDemo: true,
    icon: MdOutlineSportsCricket,
    liveLink: "https://kangaroo-code.vercel.app/",
    github: "https://github.com/Papun1111/Kangaroo_Code"
  },  {
    id: 9,
    name: "Fight Club",
    description: "Digital Fight Club is a web application inspired by the psychological themes of its namesake, where users engage in battles of wit instead of fists. ",
    status: "Completed",
    technologies: ["React.js", "MongoDb", "Framer", "Rooms", "Tasks","Quizs & Dares"],
    liveDemo: true,
    icon: GiStarfighter,
    liveLink: "http://fight-club-online.vercel.app/",
    github: "https://github.com/Papun1111/YOU_DONOT_TALK_ABOUT_IT"
  }
];
