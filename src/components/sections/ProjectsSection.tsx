
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online shopping platform with product management, cart functionality, and payment integration.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing work and skills with a modern, clean design.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      technologies: ["HTML", "CSS", "JavaScript", "Figma"],
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity application for managing tasks, projects, and deadlines with team collaboration features.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Firebase", "Material UI", "Redux"],
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather tracking application with forecast data and location-based services.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "OpenWeather API", "Tailwind CSS", "Chart.js"],
    },
  ];

  return (
    <section id="projects" className="bg-secondary section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">My Projects</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Here are some of the projects I've worked on. Each one presented unique challenges and opportunities to grow as a developer.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-md card-hover"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Link to={`/project/${project.id}`} className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                  Read More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
