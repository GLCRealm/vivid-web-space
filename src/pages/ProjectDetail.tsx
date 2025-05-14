
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  images: string[];
}

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, you would fetch this data from an API
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online shopping platform with product management, cart functionality, and payment integration.",
      fullDescription: `
        This e-commerce platform provides a complete online shopping experience. The application includes user authentication, 
        product browsing with filtering and search, shopping cart functionality, and secure checkout using Stripe integration.
        
        Key features include:
        - User accounts and profiles
        - Product management system
        - Shopping cart with persistent storage
        - Order tracking and history
        - Payment processing with Stripe
        - Responsive design for all devices
        
        The frontend is built with React and uses Redux for state management. The backend is a Node.js Express API connected to 
        a MongoDB database. The project follows a microservices architecture for scalability.
      `,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Redux", "Express", "Stripe API", "JWT Authentication"],
      demoUrl: "https://demo-ecommerce.example.com",
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      images: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing work and skills with a modern, clean design.",
      fullDescription: `
        This portfolio website was designed to showcase my work and skills in a clean, modern interface. The site features smooth
        animations, responsive layout, and optimized performance across all devices.
        
        Key features include:
        - Modern, minimalist design
        - Animated page transitions
        - Project showcase with filterable categories
        - Contact form with validation
        - Blog section for articles
        - Dark/light mode toggle
        
        The website is built with HTML, CSS, and vanilla JavaScript. It uses CSS Grid and Flexbox for layouts and 
        implements the intersection observer API for scroll animations. All designs were created in Figma before implementation.
      `,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      technologies: ["HTML", "CSS", "JavaScript", "Figma", "GSAP", "Responsive Design"],
      demoUrl: "https://portfolio.example.com",
      githubUrl: "https://github.com/yourusername/portfolio-website",
      images: [
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity application for managing tasks, projects, and deadlines with team collaboration features.",
      fullDescription: `
        This task management application helps teams and individuals organize their work efficiently. Users can create tasks, 
        assign them to team members, set deadlines, and track progress in a visual interface.
        
        Key features include:
        - Task creation and assignment
        - Project organization and categorization
        - Deadline tracking with reminders
        - Team collaboration tools
        - Progress visualization with charts
        - Cross-device synchronization
        
        The application is built with React on the frontend and uses Firebase for backend services including authentication, 
        real-time database, and cloud functions. Material UI provides the component library for consistent design.
      `,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Firebase", "Material UI", "Redux", "Cloud Functions"],
      demoUrl: "https://task-app.example.com",
      githubUrl: "https://github.com/yourusername/task-management-app",
      images: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather tracking application with forecast data and location-based services.",
      fullDescription: `
        This weather dashboard provides real-time weather information and forecasts for any location worldwide. Users can 
        search for locations, save favorite places, and view detailed weather data including temperature, precipitation, 
        wind speed, and more.
        
        Key features include:
        - Current weather conditions display
        - 7-day forecast visualization
        - Location search and geolocation support
        - Saved locations functionality
        - Weather alerts and notifications
        - Interactive weather maps
        
        The application is built with React and uses the OpenWeather API for weather data. Charts and visualizations are 
        created with Chart.js, and the UI is built with Tailwind CSS for responsive design.
      `,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "OpenWeather API", "Tailwind CSS", "Chart.js", "Geolocation API"],
      demoUrl: "https://weather-app.example.com",
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      images: [
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      ],
    },
  ];
  
  const project = projects.find((p) => p.id === Number(id));
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/#projects" className="text-primary hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link
            to="/#projects"
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
            
            <div className="aspect-video w-full rounded-lg overflow-hidden mb-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="prose max-w-none mb-10">
              {project.fullDescription.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
            
            {(project.demoUrl || project.githubUrl) && (
              <div className="flex flex-wrap gap-4 mb-10">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    View Live Demo
                  </a>
                )}
                
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow transition-colors"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            )}
            
            {project.images.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.images.map((image, index) => (
                    <div key={index} className="aspect-video rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
