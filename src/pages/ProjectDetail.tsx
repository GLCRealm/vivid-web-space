
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { projects } from "../data/projects";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = parseInt(id || "0");
  const project = projects.find((project) => project.id === projectId);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-6">Project Not Found</h1>
            <p className="mb-8">The project you're looking for doesn't exist.</p>
            <Link to="/#projects" className="btn-primary">
              Back to Projects
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title}</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow pt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <Link to="/#projects" className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-8">
                <ArrowLeft size={16} className="mr-1" /> Back to Projects
              </Link>
              
              <div className="mb-10 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto"
                />
              </div>
              
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h1>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>{project.fullDescription || project.description}</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ProjectDetail;
