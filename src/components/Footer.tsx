
import { Mail, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold">Your Name</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Building amazing digital experiences
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="mailto:ar1888819@gmail.com" className="text-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="https://x.com/rawat_ansh41070" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/in/anshdeep-rawat-5a9086245/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/glcrealm" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Anshdeep Rawat. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
