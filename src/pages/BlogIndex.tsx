
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

const BlogIndex = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt: "Learn how to use React Hooks to simplify your components and manage state effectively.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      date: "May 10, 2025",
      category: "React",
    },
    {
      id: 2,
      title: "Responsive Design Principles",
      excerpt: "Discover the key principles behind creating websites that work beautifully across all devices.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      date: "April 28, 2025",
      category: "CSS",
    },
    {
      id: 3,
      title: "Optimizing Website Performance",
      excerpt: "Techniques to improve your website's loading speed and overall performance.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      date: "April 15, 2025",
      category: "Performance",
    },
    {
      id: 4,
      title: "Introduction to TypeScript",
      excerpt: "Learn the basics of TypeScript and how it can improve your JavaScript development workflow.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      date: "April 5, 2025",
      category: "TypeScript",
    },
    {
      id: 5,
      title: "Modern CSS Techniques",
      excerpt: "Explore advanced CSS features like Grid, Custom Properties, and more.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      date: "March 22, 2025",
      category: "CSS",
    },
    {
      id: 6,
      title: "State Management in React",
      excerpt: "Compare different approaches to managing state in React applications.",
      image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&w=800&q=80",
      date: "March 10, 2025",
      category: "React",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Blog</h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Articles and tutorials about web development, design, and technology.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
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
          <div className="flex justify-center mt-12">
            <nav className="inline-flex items-center">
              <span className="px-3 py-2 rounded-md bg-primary text-primary-foreground font-medium">
                1
              </span>
              <a href="#" className="px-3 py-2 hover:text-primary">
                2
              </a>
              <a href="#" className="px-3 py-2 hover:text-primary">
                3
              </a>
              <span className="px-3 py-2">...</span>
              <a href="#" className="px-3 py-2 hover:text-primary">
                5
              </a>
            </nav>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogIndex;
