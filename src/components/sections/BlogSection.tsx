
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "../../data/blogPosts";

const BlogSection = () => {
  // We'll display only the first 3 posts in the home page section
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="bg-background section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Latest Articles</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          I write about web development, design trends, and useful tips I've learned along the way.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
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
        
        <div className="text-center mt-10">
          <Link to="/blog" className="btn-primary">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
