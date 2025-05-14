
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "../data/blogPosts";
import Header from "../components/Header";
import Footer from "../components/Footer";

const POSTS_PER_PAGE = 6;

const BlogIndex = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, endIndex);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Blog</title>
        <meta name="description" content="Read my latest articles about web development, design, and technology." />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow pt-20">
          <div className="bg-secondary py-20 px-4">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Thoughts, tutorials, and insights about web development, design, and technology.
              </p>
            </div>
          </div>
          
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-md card-hover"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Link to={`/blog/${post.id}`} className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                      Read Article <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <ul className="flex space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <li key={page}>
                      <button
                        onClick={() => handlePageChange(page)}
                        className={`px-4 py-2 rounded ${
                          currentPage === page
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        }`}
                      >
                        {page}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogIndex;
