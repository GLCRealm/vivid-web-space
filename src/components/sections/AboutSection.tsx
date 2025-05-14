
const AboutSection = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js", 
    "Node.js",
    "Tailwind CSS",
    "UI/UX Design",
    "Git",
    "Responsive Design",
    "RESTful APIs",
  ];

  return (
    <section id="about" className="bg-background section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square w-full max-w-md mx-auto md:mx-0 bg-muted rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Your Name</h3>
              <p className="text-muted-foreground mb-6">
                I'm a passionate web developer and designer with over 5 years of experience 
                creating modern, responsive websites and applications. My focus is on building 
                user-friendly interfaces that deliver exceptional digital experiences.
              </p>
              <p className="text-muted-foreground mb-6">
                When I'm not coding, you can find me exploring the outdoors, 
                reading about new technologies, or working on personal projects.
              </p>
              
              <div>
                <h4 className="text-lg font-medium mb-3">My Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
