export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      date: "December 8, 2024",
      author: "Mijanur Rahman",
      category: "React",
      excerpt:
        "Learn the fundamentals of React and start building interactive web applications with ease.",
      image: "https://via.placeholder.com/400x200?text=React+Basics",
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS",
      date: "December 5, 2024",
      author: "Mijanur Rahman",
      category: "CSS",
      excerpt:
        "Discover how to use Tailwind CSS to build beautiful and responsive designs faster than ever.",
      image: "https://via.placeholder.com/400x200?text=Tailwind+CSS",
    },
    {
      id: 3,
      title: "Building Scalable Web Applications",
      date: "December 1, 2024",
      author: "Mijanur Rahman",
      category: "Architecture",
      excerpt:
        "Explore best practices and patterns for building scalable and maintainable web applications.",
      image: "https://via.placeholder.com/400x200?text=Scalable+Apps",
    },
    {
      id: 4,
      title: "JavaScript ES6 Features You Should Know",
      date: "November 28, 2024",
      author: "Mijanur Rahman",
      category: "JavaScript",
      excerpt:
        "A comprehensive guide to modern JavaScript features that will improve your coding skills.",
      image: "https://via.placeholder.com/400x200?text=ES6+Features",
    },
  ];

  return (
    <>
      <div className="w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-gray-500 mb-12">
          Insights and tutorials on web development, JavaScript, React, and
          more.
        </p>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gray-800 hover:bg-gray-750"
            >
              {/* Blog Image */}
              <div className="overflow-hidden h-48 md:h-56">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs md:text-sm px-3 py-1 bg-yellow-400 text-gray-900 rounded-full font-semibold">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-400">{post.date}</span>
                </div>

                {/* Title */}
                <h2 className="text-xl md:text-2xl font-bold mb-3 hover:text-yellow-400 transition-colors cursor-pointer">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <span className="text-sm text-gray-500">{post.author}</span>
                  <button className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors flex items-center gap-2">
                    Read More
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 flex justify-center">
          <button className="px-8 py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors duration-300 flex items-center gap-2">
            Load More Articles
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>
      </div>
    </>
  );
}
