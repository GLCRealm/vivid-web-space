
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  fullDescription?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured online shopping platform with product management, cart functionality, and payment integration.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    fullDescription: "This e-commerce platform provides businesses with a complete solution for selling products online. Features include product catalog management, shopping cart functionality, secure checkout with Stripe integration, and a comprehensive admin dashboard for monitoring sales and inventory."
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing work and skills with a modern, clean design.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    technologies: ["HTML", "CSS", "JavaScript", "Figma"],
    fullDescription: "This portfolio template was designed with modern web standards in mind. It features a clean, minimalist aesthetic with smooth scroll animations, responsive design for all device sizes, and easy customization options for personal branding."
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity application for managing tasks, projects, and deadlines with team collaboration features.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Firebase", "Material UI", "Redux"],
    fullDescription: "This task management application helps teams stay organized and productive. It includes features for creating and assigning tasks, setting deadlines, tracking progress, and collaborating on projects in real-time. The app uses Firebase for backend services, enabling real-time updates and secure authentication."
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Real-time weather tracking application with forecast data and location-based services.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "OpenWeather API", "Tailwind CSS", "Chart.js"],
    fullDescription: "This weather dashboard provides users with detailed weather information for any location. It integrates with the OpenWeather API to deliver current conditions, hourly forecasts, and 7-day predictions. Visual charts make it easy to understand temperature trends, precipitation chances, and wind patterns at a glance."
  }
];
