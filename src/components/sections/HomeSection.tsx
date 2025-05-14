
import { ArrowDown } from "lucide-react";

const HomeSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-secondary/30 dark:from-background dark:to-secondary/10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Web Developer & Designer
          </p>
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <button
              onClick={scrollToAbout}
              className="btn-primary"
            >
              View My Work
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} aria-label="Scroll down">
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default HomeSection;
