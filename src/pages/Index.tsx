
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import HomeSection from '../components/sections/HomeSection';
import AboutSection from '../components/sections/AboutSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import BlogSection from '../components/sections/BlogSection';
import GallerySection from '../components/sections/GallerySection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my professional portfolio showcasing my skills, projects, and blog articles." />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <HomeSection />
          <AboutSection />
          <ProjectsSection />
          <BlogSection />
          <GallerySection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
