
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    excerpt: "Learn how to use React Hooks to simplify your components and manage state effectively.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    date: "May 10, 2025",
    category: "React",
    content: `
# Getting Started with React Hooks

React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class component. They allow you to "hook into" React state and lifecycle features from function components.

## Why Hooks?

Before Hooks, you had to use class components if you needed state or lifecycle methods. This often led to complex components that were hard to understand and reuse. Hooks solve this by:

- Making stateful logic reusable between components
- Separating concerns that were previously tangled in lifecycle methods
- Enabling the use of React features without classes

## Basic Hooks

### useState

The useState Hook lets you add React state to function components:

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

### useEffect

The useEffect Hook lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes:

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
    
    // Clean up function (equivalent to componentWillUnmount)
    return () => {
      document.title = 'React App';
    };
  }, [count]); // Only re-run if count changes
  
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

## Advanced Hooks

React also provides several advanced Hooks like useContext, useReducer, useCallback, and useMemo for specific use cases.

## Custom Hooks

One of the most powerful features of Hooks is the ability to create your own custom Hooks. This allows you to extract component logic into reusable functions:

\`\`\`jsx
import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return width;
}

// Using the custom Hook in a component
function ResponsiveComponent() {
  const width = useWindowWidth();
  return <p>Window width: {width}px</p>;
}
\`\`\`

React Hooks represent a significant improvement in how we write and organize React components. By embracing Hooks, you can write more concise, readable, and reusable code.
`
  },
  {
    id: 2,
    title: "Responsive Design Principles",
    excerpt: "Discover the key principles behind creating websites that work beautifully across all devices.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    date: "April 28, 2025",
    category: "CSS",
    content: `
# Responsive Design Principles

In today's multi-device world, responsive web design is no longer optional—it's essential. Here are the key principles that will help you create websites that look and work great on any device.

## Fluid Grids

Instead of using fixed-width layouts, responsive design uses relative units like percentages for layout elements. This allows the layout to adapt to the screen size:

\`\`\`css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.column {
  float: left;
  width: 33.33%; /* Three equal columns */
  padding: 0 15px;
}

@media (max-width: 768px) {
  .column {
    width: 50%; /* Two columns on tablets */
  }
}

@media (max-width: 480px) {
  .column {
    width: 100%; /* Single column on phones */
  }
}
\`\`\`

## Flexible Images

Images need to scale with their containers to avoid overflow issues:

\`\`\`css
img {
  max-width: 100%;
  height: auto;
}
\`\`\`

## Media Queries

Media queries allow you to apply different styles based on the device characteristics:

\`\`\`css
/* Base styles for all devices */
body {
  font-size: 16px;
}

/* Styles for tablets and larger */
@media (min-width: 768px) {
  body {
    font-size: 18px;
  }
}

/* Styles for desktops */
@media (min-width: 1024px) {
  body {
    font-size: 20px;
  }
}
\`\`\`

## Mobile-First Approach

Start designing for the smallest screen size first, then progressively enhance the layout for larger screens. This forces you to focus on content and core functionality:

\`\`\`css
/* Base styles for mobile */
.nav {
  display: none; /* Hide navigation by default */
}

.mobile-nav-toggle {
  display: block; /* Show mobile menu button */
}

/* Styles for larger screens */
@media (min-width: 768px) {
  .nav {
    display: block; /* Show full navigation on larger screens */
  }
  
  .mobile-nav-toggle {
    display: none; /* Hide mobile menu button */
  }
}
\`\`\`

## Responsive Typography

Text should be readable on all devices without requiring zoom:

\`\`\`css
body {
  font-size: 16px;
}

h1 {
  font-size: 1.8rem; /* Relative to root font size */
}

@media (min-width: 768px) {
  h1 {
    font-size: 2.5rem; /* Larger headings on bigger screens */
  }
}
\`\`\`

## Touch-Friendly Interfaces

For mobile devices, ensure interactive elements are large enough for touch interaction:

\`\`\`css
button, .nav-link {
  min-height: 44px;
  min-width: 44px;
}
\`\`\`

## Performance Considerations

Responsive sites need to be performance-optimized for mobile networks:

- Compress and optimize images
- Use responsive image techniques like srcset
- Minimize HTTP requests
- Implement lazy loading for images and non-critical content

By following these principles, you'll create websites that provide an optimal viewing and interaction experience across a wide range of devices.
`
  },
  {
    id: 3,
    title: "Optimizing Website Performance",
    excerpt: "Techniques to improve your website's loading speed and overall performance.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    date: "April 15, 2025",
    category: "Performance",
    content: `
# Optimizing Website Performance

Website performance directly impacts user experience, SEO rankings, and conversion rates. Here are key techniques to speed up your site.

## Minimize HTTP Requests

Each file your page loads requires an HTTP request. Reducing these requests can significantly improve load times:

- Combine CSS files
- Merge JavaScript files
- Use CSS sprites for small images
- Implement icon fonts or SVG instead of image files

## Optimize Images

Images often account for most of a webpage's size:

\`\`\`html
<!-- Use WebP with fallbacks -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Description" width="800" height="600" loading="lazy">
</picture>
\`\`\`

- Choose the right format (JPEG for photos, PNG for transparency, SVG for icons)
- Compress images without quality loss
- Resize images to the display size
- Implement lazy loading for images below the fold

## Enable Compression

Use Gzip or Brotli compression for text-based resources:

\`\`\`apache
# Apache (.htaccess)
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/css application/javascript text/javascript
</IfModule>
\`\`\`

## Leverage Browser Caching

Tell browsers to store assets locally to avoid unnecessary downloads:

\`\`\`apache
# Apache (.htaccess)
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

## Minify CSS, JavaScript, and HTML

Remove unnecessary characters from code:

\`\`\`javascript
// Before minification
function calculateTotal(price, quantity) {
  return price * quantity;
}

// After minification
function calculateTotal(e,t){return e*t}
\`\`\`

## Use a Content Delivery Network (CDN)

CDNs distribute your content across multiple locations worldwide, reducing latency:

\`\`\`html
<!-- Using a CDN for library -->
<script src="https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js"></script>
\`\`\`

## Optimize CSS Delivery

CSS blocks rendering, so optimize how it's delivered:

- Put critical CSS inline
- Load non-critical CSS asynchronously
- Remove unused CSS

\`\`\`html
<head>
  <!-- Critical CSS inline -->
  <style>
    /* Critical styles needed for above-the-fold content */
    header { ... }
    .hero { ... }
  </style>
  
  <!-- Non-critical CSS loaded asynchronously -->
  <link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="styles.css"></noscript>
</head>
\`\`\`

## Reduce JavaScript Execution Time

JavaScript can block the main thread:

- Use async/defer attributes
- Split code into smaller chunks
- Remove unused JavaScript
- Consider using Web Workers for heavy tasks

\`\`\`html
<!-- Defer non-critical JavaScript -->
<script src="app.js" defer></script>
\`\`\`

## Implement Resource Hints

Tell the browser about resources it will need:

\`\`\`html
<!-- Preconnect to required origins -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://analytics.example.com" crossorigin>

<!-- Prefetch resources for the next page -->
<link rel="prefetch" href="next-page.html">
\`\`\`

## Monitor Performance

Regularly test your site's performance:

- Use Lighthouse in Chrome DevTools
- Test with WebPageTest.org
- Monitor Core Web Vitals in Google Search Console

By implementing these techniques, you'll create a faster, more enjoyable experience for your users while improving your site's SEO ranking.
`
  },
];
