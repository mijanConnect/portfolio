export const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    date: "December 8, 2024",
    author: "Mijanur Rahman",
    category: "React",
    excerpt:
      "Learn the fundamentals of React and start building interactive web applications with ease.",
    image: "https://via.placeholder.com/800x400?text=React+Basics",
    content: `
      <h2>Introduction to React</h2>
      <p>React is a powerful JavaScript library for building user interfaces with reusable components. It makes creating interactive UIs painless by allowing you to design simple views for each state in your application.</p>
      
      <h3>Why Choose React?</h3>
      <ul>
        <li>Component-based architecture</li>
        <li>Virtual DOM for optimal performance</li>
        <li>Large ecosystem and community support</li>
        <li>Easy to learn and implement</li>
      </ul>
      
      <h3>Core Concepts</h3>
      <p>Understanding JSX, Components, Props, and State are fundamental to working with React. These concepts form the building blocks of any React application.</p>
      
      <h3>Getting Started</h3>
      <p>To start with React, you need Node.js installed on your machine. Use Create React App to quickly set up a new project with all the necessary configuration.</p>
      
      <p>React's component-based architecture allows you to break down your UI into smaller, reusable pieces. This makes your code more maintainable and easier to understand.</p>
    `,
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    date: "December 5, 2024",
    author: "Mijanur Rahman",
    category: "CSS",
    excerpt:
      "Discover how to use Tailwind CSS to build beautiful and responsive designs faster than ever.",
    image: "https://via.placeholder.com/800x400?text=Tailwind+CSS",
    content: `
      <h2>Tailwind CSS Guide</h2>
      <p>Tailwind CSS is a utility-first CSS framework that helps you build modern designs without leaving your HTML. It provides low-level utility classes that let you build custom designs without writing CSS.</p>
      
      <h3>Utility-First Approach</h3>
      <p>Instead of writing custom CSS, Tailwind provides a set of pre-made utility classes that you can compose to create any design. This approach speeds up development and ensures consistency.</p>
      
      <h3>Responsive Design</h3>
      <p>Tailwind makes it easy to build responsive designs using breakpoint prefixes. You can specify different styles for different screen sizes directly in your HTML.</p>
      
      <h3>Customization</h3>
      <p>Tailwind is highly customizable. You can configure colors, spacing, fonts, and more to match your brand guidelines.</p>
      
      <p>The framework also includes built-in dark mode support, making it easy to implement theme switching in your applications.</p>
    `,
  },
  {
    id: 3,
    title: "Building Scalable Web Applications",
    date: "December 1, 2024",
    author: "Mijanur Rahman",
    category: "Architecture",
    excerpt:
      "Explore best practices and patterns for building scalable and maintainable web applications.",
    image: "https://via.placeholder.com/800x400?text=Scalable+Apps",
    content: `
      <h2>Scalability in Web Development</h2>
      <p>Building scalable web applications requires careful planning and adherence to best practices. This guide covers the essential patterns and strategies for creating applications that can grow with your user base.</p>
      
      <h3>Architectural Patterns</h3>
      <p>Implement proven architectural patterns like MVC, MVVM, or Clean Architecture. These patterns provide structure and make your code more maintainable.</p>
      
      <h3>Database Optimization</h3>
      <p>Use proper indexing, query optimization, and caching strategies to ensure your database performs well as data grows.</p>
      
      <h3>Code Organization</h3>
      <p>Organize your code into logical modules and components. This makes it easier to maintain and scale your application.</p>
      
      <p>Consider using microservices architecture for large-scale applications. This allows different parts of your application to scale independently.</p>
    `,
  },
  {
    id: 4,
    title: "JavaScript ES6 Features You Should Know",
    date: "November 28, 2024",
    author: "Mijanur Rahman",
    category: "JavaScript",
    excerpt:
      "A comprehensive guide to modern JavaScript features that will improve your coding skills.",
    image: "https://via.placeholder.com/800x400?text=ES6+Features",
    content: `
      <h2>Modern JavaScript with ES6</h2>
      <p>ES6 (ECMAScript 2015) introduced many powerful features that have become standard in modern JavaScript development. These features improve code readability and reduce boilerplate code.</p>
      
      <h3>Arrow Functions</h3>
      <p>Arrow functions provide a concise syntax for writing functions and automatically bind the 'this' context, making them perfect for callbacks.</p>
      
      <h3>Destructuring</h3>
      <p>Destructuring allows you to extract values from objects and arrays more concisely, making your code cleaner and more readable.</p>
      
      <h3>Promises and Async/Await</h3>
      <p>Handle asynchronous operations elegantly with Promises and the async/await syntax, making your code easier to read and understand.</p>
      
      <p>Template literals, spread operators, and rest parameters are other ES6 features that significantly improve developer productivity.</p>
    `,
  },
  {
    id: 5,
    title: "Web Performance Optimization Tips",
    date: "November 25, 2024",
    author: "Mijanur Rahman",
    category: "Performance",
    excerpt:
      "Learn strategies to optimize your web applications for better performance and user experience.",
    image: "https://via.placeholder.com/800x400?text=Performance",
    content: `
      <h2>Optimizing Web Performance</h2>
      <p>Web performance is crucial for user experience and SEO. Slow websites lead to higher bounce rates and reduced conversions. Here are key strategies to optimize your site.</p>
      
      <h3>Image Optimization</h3>
      <p>Compress images, use modern formats like WebP, and implement lazy loading to reduce load times.</p>
      
      <h3>Code Splitting</h3>
      <p>Split your code into smaller chunks and load them on demand. This reduces initial load time significantly.</p>
      
      <h3>Caching Strategies</h3>
      <p>Implement proper caching at both the browser and server level to reduce repeated requests.</p>
      
      <p>Use tools like Lighthouse and WebPageTest to measure and track your site's performance over time.</p>
    `,
  },
  {
    id: 6,
    title: "Understanding REST APIs",
    date: "November 20, 2024",
    author: "Mijanur Rahman",
    category: "Backend",
    excerpt:
      "A detailed guide to building and consuming REST APIs for modern web applications.",
    image: "https://via.placeholder.com/800x400?text=REST+APIs",
    content: `
      <h2>REST API Fundamentals</h2>
      <p>REST (Representational State Transfer) is an architectural style for designing networked applications. REST APIs are widely used for building scalable web services.</p>
      
      <h3>HTTP Methods</h3>
      <p>Use GET, POST, PUT, DELETE, and PATCH methods appropriately. Each method has a specific purpose in CRUD operations.</p>
      
      <h3>Status Codes</h3>
      <p>Return appropriate HTTP status codes to indicate the result of an operation. This helps clients understand what happened.</p>
      
      <h3>Best Practices</h3>
      <p>Use versioning, implement proper authentication, validate input, and provide clear documentation for your APIs.</p>
      
      <p>Consider using tools like Swagger or Postman to document and test your API endpoints effectively.</p>
    `,
  },
];
