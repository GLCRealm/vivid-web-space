
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  author: string;
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, you would fetch this data from an API
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt: "Learn how to use React Hooks to simplify your components and manage state effectively.",
      content: `
        React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class component. 
        This was a game-changer for many developers as it simplified code and made it easier to reuse stateful logic between components.

        ## Why Hooks?

        Before Hooks, React developers had to use class components to manage state and lifecycle methods. This led to complex components 
        that were difficult to understand and reuse. Hooks solve these problems by allowing you to "hook into" React state and lifecycle 
        features from functional components.

        ## The Basic Hooks

        ### 1. useState

        The \`useState\` hook allows you to add state to functional components. It returns a pair: the current state value and a function to update it.

        \`\`\`jsx
        import React, { useState } from 'react';

        function Counter() {
          const [count, setCount] = useState(0);

          return (
            <div>
              <p>You clicked {count} times</p>
              <button onClick={() => setCount(count + 1)}>
                Click me
              </button>
            </div>
          );
        }
        \`\`\`

        ### 2. useEffect

        The \`useEffect\` hook lets you perform side effects in functional components. It serves the same purpose as 
        \`componentDidMount\`, \`componentDidUpdate\`, and \`componentWillUnmount\` in React classes.

        \`\`\`jsx
        import React, { useState, useEffect } from 'react';

        function Example() {
          const [count, setCount] = useState(0);

          // Similar to componentDidMount and componentDidUpdate
          useEffect(() => {
            document.title = \`You clicked \${count} times\`;
            
            // Optional cleanup function (similar to componentWillUnmount)
            return () => {
              document.title = 'React App';
            };
          }, [count]); // Only re-run the effect if count changes

          return (
            <div>
              <p>You clicked {count} times</p>
              <button onClick={() => setCount(count + 1)}>
                Click me
              </button>
            </div>
          );
        }
        \`\`\`

        ### 3. useContext

        The \`useContext\` hook accepts a context object and returns the current context value for that context.

        \`\`\`jsx
        import React, { useContext } from 'react';
        const ThemeContext = React.createContext('light');

        function ThemedButton() {
          const theme = useContext(ThemeContext);
          return <button className={theme}>Themed Button</button>;
        }
        \`\`\`

        ## Custom Hooks

        One of the most powerful features of Hooks is the ability to create your own custom hooks. 
        This allows you to extract component logic into reusable functions.

        \`\`\`jsx
        import { useState, useEffect } from 'react';

        function useWindowSize() {
          const [windowSize, setWindowSize] = useState({
            width: window.innerWidth,
            height: window.innerHeight,
          });

          useEffect(() => {
            const handleResize = () => {
              setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
              });
            };

            window.addEventListener('resize', handleResize);
            
            // Clean up
            return () => {
              window.removeEventListener('resize', handleResize);
            };
          }, []); // Empty array means this effect runs once on mount

          return windowSize;
        }

        // Usage in a component
        function MyComponent() {
          const windowSize = useWindowSize();
          return (
            <div>
              Window width: {windowSize.width}px
              Window height: {windowSize.height}px
            </div>
          );
        }
        \`\`\`

        ## Rules of Hooks

        There are two important rules that you must follow when using Hooks:

        1. Only call Hooks at the top level of your function component. Don't call them inside loops, conditions, or nested functions.
        2. Only call Hooks from React function components or custom Hooks. Don't call them from regular JavaScript functions.

        By following these rules, you ensure that Hooks are called in the same order each time a component renders, 
        which is important for React to correctly preserve the state of Hooks between multiple calls.

        ## Conclusion

        React Hooks have revolutionized the way we write React components. They allow us to use state and other React features 
        without classes, make code more readable and testable, and enable the reuse of stateful logic. If you're new to React 
        or have been using class components, I highly recommend giving Hooks a try on your next project.
      `,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80",
      date: "May 10, 2025",
      category: "React",
      author: "Your Name"
    },
    {
      id: 2,
      title: "Responsive Design Principles",
      excerpt: "Discover the key principles behind creating websites that work beautifully across all devices.",
      content: `
        Responsive web design has become the standard approach for building websites that provide an optimal viewing experience across a wide range of devices. As the variety of devices used to access the web continues to grow, understanding responsive design principles is more important than ever for web developers and designers.

        ## What is Responsive Design?

        Responsive web design is an approach that makes web pages render well on a variety of devices and window or screen sizes. It's about creating websites that automatically adjust to look good on all devices, from desktop computers to mobile phones.

        ## Key Principles of Responsive Design

        ### 1. Fluid Grids

        Instead of designing a layout based on rigid pixels or arbitrary percentage values, a fluid grid is based on proportions. This allows the layout to resize based on the size of the screen it's being displayed on.

        \`\`\`css
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .column {
          width: 50%;
          float: left;
          padding: 0 15px;
        }

        @media (max-width: 768px) {
          .column {
            width: 100%;
          }
        }
        \`\`\`

        ### 2. Flexible Images

        Images should be able to scale up or down depending on the size of the screen. This can be achieved using CSS.

        \`\`\`css
        img {
          max-width: 100%;
          height: auto;
        }
        \`\`\`

        ### 3. Media Queries

        Media queries allow you to apply different CSS rules based on the characteristics of the device, such as its width, height, orientation, resolution, etc.

        \`\`\`css
        /* Base styles for all devices */
        body {
          font-size: 16px;
        }

        /* Styles for tablets */
        @media (max-width: 1024px) {
          body {
            font-size: 14px;
          }
        }

        /* Styles for mobile phones */
        @media (max-width: 768px) {
          body {
            font-size: 12px;
          }
        }
        \`\`\`

        ### 4. Viewport Meta Tag

        The viewport meta tag gives the browser instructions on how to control the page's dimensions and scaling.

        \`\`\`html
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        \`\`\`

        This tag tells the browser to set the width of the page to follow the screen-width of the device, and sets the initial zoom level to 1.

        ## Mobile-First Approach

        One popular strategy in responsive design is the mobile-first approach. This means designing for mobile devices first and then scaling up to larger screens. This approach has several advantages:

        - It forces you to prioritize content and features based on what's most important
        - It generally leads to cleaner, more efficient code
        - Mobile-first media queries are more intuitive to write and maintain

        \`\`\`css
        /* Base styles for mobile */
        .element {
          width: 100%;
        }

        /* Styles for larger screens */
        @media (min-width: 768px) {
          .element {
            width: 50%;
            float: left;
          }
        }
        \`\`\`

        ## Testing Responsive Designs

        It's essential to test your responsive design across a variety of devices and browsers. Here are some ways to do that:

        1. Use the device mode in browser developer tools
        2. Test on actual physical devices
        3. Use online responsive testing tools
        4. Set up a device testing lab

        ## Best Practices

        1. **Keep it simple:** A simpler layout will be easier to make responsive
        2. **Use relative units:** Use % or rem instead of fixed pixel values
        3. **Consider touch:** Remember that mobile devices use touch, not mouse pointers
        4. **Optimize performance:** Mobile devices often have slower connections and less processing power
        5. **Progressive enhancement:** Start with a basic experience that works everywhere and enhance for more capable devices

        ## Conclusion

        Responsive design is not just about making a website look good on different screen sizes; it's about providing an optimal user experience regardless of the device being used. By following these principles and best practices, you can create websites that are accessible, user-friendly, and visually appealing across all devices.

        As the digital landscape continues to evolve with new devices and screen sizes, the principles of responsive design remain a crucial skill for web developers and designers to master.
      `,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
      date: "April 28, 2025",
      category: "CSS",
      author: "Your Name"
    },
    {
      id: 3,
      title: "Optimizing Website Performance",
      excerpt: "Techniques to improve your website's loading speed and overall performance.",
      content: `
        Website performance has a direct impact on user experience, conversion rates, and even search engine rankings. A slow website can frustrate users and cause them to leave before they've even seen what you have to offer. In this article, we'll explore various techniques to optimize your website's performance.

        ## Why Website Performance Matters

        - **User Experience:** Users expect websites to load quickly. Studies show that 40% of visitors abandon a website that takes more than 3 seconds to load.
        - **Conversion Rates:** A 1-second delay in page load time can result in a 7% reduction in conversions.
        - **SEO:** Google uses page speed as a ranking factor for both desktop and mobile searches.
        - **Accessibility:** Faster websites are more accessible to users with slower internet connections or older devices.

        ## Key Performance Metrics

        Before we dive into optimization techniques, it's important to understand what we're measuring:

        - **Time to First Byte (TTFB):** How long it takes for the browser to receive the first byte of data from the server.
        - **First Contentful Paint (FCP):** When the first content (text, image, etc.) is painted on the screen.
        - **Largest Contentful Paint (LCP):** When the largest content element becomes visible.
        - **First Input Delay (FID):** The time from when a user first interacts with your page to when the browser is able to respond to that interaction.
        - **Cumulative Layout Shift (CLS):** Measures visual stability and unexpected layout shifts.

        ## Server Optimization

        ### 1. Use a Content Delivery Network (CDN)

        A CDN stores copies of your website on multiple servers around the world, delivering content from the nearest location to each user.

        ### 2. Implement Proper Caching

        Configure server caching to store commonly requested files. This reduces server load and decreases load times for repeat visitors.

        \`\`\`apache
        # Example Apache caching configuration
        <IfModule mod_expires.c>
          ExpiresActive On
          ExpiresByType image/jpg "access plus 1 year"
          ExpiresByType image/jpeg "access plus 1 year"
          ExpiresByType image/gif "access plus 1 year"
          ExpiresByType image/png "access plus 1 year"
          ExpiresByType text/css "access plus 1 month"
          ExpiresByType application/javascript "access plus 1 month"
        </IfModule>
        \`\`\`

        ### 3. Enable Compression

        Use GZIP or Brotli compression to reduce the size of your HTML, CSS, and JavaScript files.

        \`\`\`apache
        # Enable GZIP compression
        <IfModule mod_deflate.c>
          AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript application/json
        </IfModule>
        \`\`\`

        ## Frontend Optimization

        ### 1. Minimize HTTP Requests

        Each element on your page requires an HTTP request. Reduce these by:
        - Combining CSS and JavaScript files
        - Using CSS sprites for multiple images
        - Implementing lazy loading for images and videos

        ### 2. Optimize Images

        Images often account for most of the downloaded bytes on a webpage.
        - Use appropriate formats (JPEG for photographs, PNG for images with transparency, SVG for icons)
        - Compress images without sacrificing quality
        - Consider next-gen formats like WebP
        - Implement responsive images with srcset

        \`\`\`html
        <img 
          srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w"
          sizes="(max-width: 600px) 500px, (max-width: 1200px) 1000px, 1500px"
          src="medium.jpg" 
          alt="Responsive image example"
        />
        \`\`\`

        ### 3. Optimize CSS and JavaScript

        - Minify files to remove unnecessary characters
        - Defer non-critical JavaScript
        - Use async loading for non-essential scripts
        - Remove unused CSS with tools like PurgeCSS

        \`\`\`html
        <!-- Defer non-critical JavaScript -->
        <script src="non-critical.js" defer></script>

        <!-- Async loading for independent scripts -->
        <script src="analytics.js" async></script>
        \`\`\`

        ### 4. Implement Critical CSS

        Inline critical CSS in the \`<head>\` of your HTML to render above-the-fold content quickly.

        \`\`\`html
        <head>
          <style>
            /* Critical CSS here */
            header { background-color: #fff; }
            .hero { padding: 20px; }
          </style>
          <link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
        </head>
        \`\`\`

        ### 5. Use Browser Hints

        Implement preload, prefetch, and preconnect to inform the browser about resources it will need.

        \`\`\`html
        <!-- Preload critical resources -->
        <link rel="preload" href="critical-font.woff2" as="font" type="font/woff2" crossorigin>
        
        <!-- Preconnect to required origins -->
        <link rel="preconnect" href="https://analytics.example.com">
        
        <!-- Prefetch resources for next page -->
        <link rel="prefetch" href="next-page.html">
        \`\`\`

        ## Database Optimization

        For dynamic websites, database queries can significantly impact performance:

        1. **Index important columns** in your database tables
        2. **Cache database queries** to reduce repeated requests
        3. **Optimize SQL queries** to retrieve only necessary data
        4. **Use pagination** for large datasets

        ## Testing and Monitoring

        Regular testing and monitoring are crucial for maintaining good performance:

        1. Use tools like Google PageSpeed Insights, Lighthouse, and WebPageTest
        2. Implement Real User Monitoring (RUM) to track actual user experiences
        3. Set up performance budgets and alerts
        4. A/B test performance improvements

        ## Conclusion

        Website performance optimization is an ongoing process rather than a one-time task. Start by identifying the most significant bottlenecks and addressing them first. Remember that even small improvements can have a meaningful impact on user experience, conversions, and SEO.

        By implementing the techniques outlined in this article, you'll be well on your way to creating a faster, more efficient website that delights users and achieves your business goals.
      `,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200&q=80",
      date: "April 15, 2025",
      category: "Performance",
      author: "Your Name"
    },
  ];
  
  const post = blogPosts.find((p) => p.id === Number(id));
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Link to="/#blog" className="text-primary hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Function to render markdown-like content
  const renderContent = (content: string) => {
    // Split content by paragraphs
    const paragraphs = content.split('\n\n').map((p, index) => {
      if (p.startsWith('## ')) {
        // Heading 2
        return (
          <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
            {p.substring(3)}
          </h2>
        );
      } else if (p.startsWith('### ')) {
        // Heading 3
        return (
          <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
            {p.substring(4)}
          </h3>
        );
      } else if (p.startsWith('```')) {
        // Code block
        const codeContent = p.split('\n').slice(1, -1).join('\n');
        return (
          <pre key={index} className="bg-secondary p-4 rounded-md my-4 overflow-x-auto">
            <code className="text-sm">{codeContent}</code>
          </pre>
        );
      } else if (p.startsWith('- ')) {
        // Unordered list
        const items = p.split('\n').map(item => item.substring(2));
        return (
          <ul key={index} className="list-disc pl-6 my-4 space-y-2">
            {items.map((item, i) => (
              <li key={i} className="text-muted-foreground">{item}</li>
            ))}
          </ul>
        );
      } else if (p.trim() === '') {
        // Empty paragraph
        return null;
      } else {
        // Regular paragraph
        return (
          <p key={index} className="my-4 text-muted-foreground">
            {p}
          </p>
        );
      }
    });

    return paragraphs;
  };
  
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link
            to="/#blog"
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Link>
          
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-muted-foreground">
                {post.date}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>
            
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-secondary rounded-full mr-3 flex items-center justify-center">
                <span className="font-semibold">{post.author.charAt(0)}</span>
              </div>
              <div>
                <div className="font-medium">{post.author}</div>
                <div className="text-sm text-muted-foreground">Author</div>
              </div>
            </div>
            
            <div className="aspect-video w-full rounded-lg overflow-hidden mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <article className="prose max-w-none">
              {renderContent(post.content)}
            </article>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
