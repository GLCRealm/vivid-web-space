
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "../data/blogPosts";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Badge } from "../components/ui/badge";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  const { id } = useParams();
  const postId = parseInt(id || "0");
  const post = blogPosts.find((post) => post.id === postId);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-6">Post Not Found</h1>
            <p className="mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="btn-primary">
              Back to Blog
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
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          {/* Hero section */}
          <div className="w-full h-[40vh] relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10" />
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="container mx-auto px-4 text-center">
                <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
                  {post.category}
                </Badge>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                  {post.title}
                </h1>
                <p className="text-white/80 mb-2">{post.date}</p>
              </div>
            </div>
          </div>
          
          {/* Content section */}
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto">
              <Link to="/blog" className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-8">
                <ArrowLeft size={16} className="mr-1" /> Back to Blog
              </Link>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <ReactMarkdown>
                  {post.content || post.excerpt}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
