import wordseek from "./images/wordseek.png";
import dukaan from "./images/dukaan.png"
import Attendence from "./images/Attendence.png"
import movieee from "./images/movieee.png"

const projects = [
    {
        id: 1,
        title: "Dukaan — Online Store Platform",
        featured: true,
        description:
            "A full-stack e-commerce platform where users can manage products, images, and orders.",
        problem:
            "Small sellers needed a simple way to list products and manage their online store without complex tooling.",
        solution:
            "Built a MERN-based application with authentication, product CRUD, image uploads, and role-based access.",
        challenge:
            "Handling secure image uploads, form validation, and keeping frontend and backend in sync.",
        tech: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "JWT",
            "Cloudinary"
        ],
        github: "https://github.com/Bineet08/dukaan",
        live: "https://dukaan-liard.vercel.app/",
        image:
            dukaan,
        category: "Full Stack",
        duration: "2 months",
        status: "Completed",
    },

    {
        id: 2,
        title: "Real-Time Chat Application",
        description:
            "A real-time messaging application with persistent chat history and live updates.",
        problem:
            "Traditional polling-based chat systems caused delays and poor user experience.",
        solution:
            "Used Socket.IO to enable real-time bi-directional communication with MongoDB persistence.",
        challenge:
            "Managing multiple concurrent users and syncing message state across clients.",
        tech: ["React", "Node.js", "Socket.IO", "MongoDB"],
        github: "https://github.com/Bineet08",
        live: "https://real-time-chat-app-teal-nine.vercel.app/",
        image:
            "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=800&q=80",
        category: "Web App",
        duration: "1.5 months",
        status: "Live",
    },

    {
        id: 3,
        title: "Chunked File Upload System",
        description:
            "A robust file upload system supporting large files with retries and resumable uploads.",
        problem:
            "Large file uploads failed frequently due to network instability.",
        solution:
            "Implemented chunk-based uploads with retry logic and out-of-order chunk handling.",
        challenge:
            "Ensuring file integrity across retries and server restarts.",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        github: "https://github.com/Bineet08",
        live: "#",
        image:
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
        category: "System",
        duration: "1 month",
        status: "Completed",
    },

    {
        id: 4,
        title: "WordSeek Helper",
        description:
            "A full-stack word constraint solver for Telegram and Wordle-style puzzles, built with React and Node.js.",
        problem:
            "Solving word puzzles with multiple letter constraints manually is slow and inefficient.",
        solution:
            "Developed a REST-based filtering engine with a responsive, keyboard-first frontend for fast constraint-based word matching.",
        challenge:
            "Implementing accurate pattern + include/exclude filtering while maintaining fast response time and clean frontend-backend separation.",
        tech: ["React", "Tailwind CSS", "Node.js", "Express", "Vercel", "Render"],
        github: "https://github.com/Bineet08/WordSeekHelper",
        live: "https://word-seek-helper-tg.vercel.app/",
        image: wordseek,
        category: "Full Stack",
        duration: "2 Weeks",
        status: "Completed",
    },



    {
        id: 5,
        title: "Student Attendance Manager",
        description:
            "A local-first attendance tracker designed for flexible academic schedules.",
        problem:
            "Students struggled to calculate attendance accurately due to holidays and timetable changes.",
        solution:
            "Built a schedule-based attendance calculator with subject-wise tracking.",
        challenge:
            "Handling edge cases like partial weeks and subject-specific holidays.",
        tech: ["React", "JavaScript", "Local Storage"],
        github: "https://github.com/Bineet08",
        live: "https://attendence-manager-taupe.vercel.app/",
        image:
            Attendence,
        category: "Tool",
        duration: "1 month",
        status: "Completed",
    },

    {
        id: 6,
        title: "Personal Portfolio Website",
        description:
            "A multi-page animated portfolio showcasing projects, skills, and engineering approach.",
        problem:
            "Needed a professional, scalable way to present real projects and experience.",
        solution:
            "Built a React + Tailwind + Framer Motion portfolio with scroll-based animations.",
        challenge:
            "Balancing visual creativity with performance and accessibility.",
        tech: ["React", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/Bineet08/portfolio",
        live: "#",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
        category: "Web App",
        duration: "Ongoing",
        status: "Live",
    },
    {
        id: 7,
        title: "Movieee",
        description:
            "A streaming web app where wanderers of cinema roam — browse, search, and enjoy tales told frame by frame.",
        problem:
            "With so much content scattered across platforms, users crave a unified, responsive interface to explore movies, shows, and documentaries effortlessly.",
        solution:
            "A modern React + Vite-powered frontend that lets users glide through collections, search with intent, and stream with minimal friction — tuning every experience to device and desire.",
        challenge:
            "Balancing rich media browsing with performance and responsiveness, while scaffolding an environment-based setup for flexible API integration.",
        tech: ["React", "Vite", "JavaScript", "CSS", "HTML"],
        github: "https://github.com/Bineet08/movieee",
        live: "https://movieee-two.vercel.app",
        image:
            movieee,
        category: "Web App / Streaming UI",
        duration: "2–3 weeks",
        status: "Active / Prototype",
    },
];

export default projects;
