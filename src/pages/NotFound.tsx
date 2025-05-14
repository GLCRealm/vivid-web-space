
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow container mx-auto px-4 flex items-center justify-center">
          <div className="max-w-md text-center py-20">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
            <p className="text-muted-foreground mb-8">
              The page you are looking for might have been removed, had its name changed,
              or is temporarily unavailable.
            </p>
            <Link to="/" className="inline-flex items-center text-primary hover:underline">
              <ArrowLeft size={16} className="mr-1" /> Back to Home
            </Link>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
