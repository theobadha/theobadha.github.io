
import PageTransition from "@/components/PageTransition";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  const posts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for structuring large React applications, managing state effectively, and optimizing performance.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "React"
    },
    {
      title: "The Future of Web Development",
      excerpt: "Exploring emerging technologies and trends that will shape the future of web development, from WebAssembly to edge computing.",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Technology"
    },
    {
      title: "Mastering TypeScript: Advanced Patterns",
      excerpt: "Dive deep into advanced TypeScript patterns, generic constraints, and utility types that will improve your code quality.",
      date: "March 5, 2024",
      readTime: "12 min read",
      category: "TypeScript"
    },
    {
      title: "Modern CSS Techniques for 2024",
      excerpt: "Discover the latest CSS features and techniques including container queries, cascade layers, and modern layout methods.",
      date: "February 28, 2024",
      readTime: "10 min read",
      category: "CSS"
    },
    {
      title: "API Design Best Practices",
      excerpt: "Guidelines for designing RESTful APIs that are intuitive, scalable, and maintainable for long-term success.",
      date: "February 20, 2024",
      readTime: "7 min read",
      category: "API"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Blog
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about web development, technology, 
              and the ever-evolving world of software engineering.
            </p>
          </div>

          <div className="space-y-8">
            {posts.map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {post.date} • {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4">
                    <span className="text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:underline">
                      Read more →
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Blog;
