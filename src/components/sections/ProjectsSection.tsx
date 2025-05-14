
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

const ProjectsSection = () => {
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
