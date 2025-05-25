
import PageTransition from "@/components/PageTransition";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      github: "#",
      demo: "#",
      image: "bg-gradient-to-br from-green-400 to-blue-500"
    },
    {
      title: "Task Management App", 
      description: "A collaborative task management application with real-time updates, team collaboration features, and advanced filtering capabilities.",
      technologies: ["TypeScript", "React", "Firebase", "Material-UI"],
      github: "#",
      demo: "#",
      image: "bg-gradient-to-br from-purple-400 to-pink-500"
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather dashboard that provides detailed forecasts, weather maps, and historical data visualization.",
      technologies: ["React", "D3.js", "OpenWeather API", "Tailwind CSS"],
      github: "#",
      demo: "#",
      image: "bg-gradient-to-br from-blue-400 to-cyan-500"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website with smooth animations, dark mode toggle, and optimized performance.",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Vercel"],
      github: "#",
      demo: "#",
      image: "bg-gradient-to-br from-orange-400 to-red-500"
    }
  ];

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
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 bg-white dark:bg-gray-900 transition-colors">
        {/* About Section */}
        <section id="about" className="py-16 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Alex Johnson
                  </span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  A passionate full-stack developer with over 5 years of experience creating 
                  beautiful, functional, and user-centered digital experiences. I specialize 
                  in React, Node.js, and modern web technologies.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  When I'm not coding, you can find me exploring new coffee shops, 
                  hiking in the mountains, or experimenting with photography. I believe 
                  in continuous learning and love sharing knowledge with the developer community.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["React", "TypeScript", "Node.js", "Python", "AWS", "PostgreSQL"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                  AJ
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                My Projects
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Here are some of the projects I've worked on. Each one represents a unique challenge 
                and learning opportunity in my development journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                  <CardHeader>
                    <div className={`w-full h-48 rounded-lg ${project.image} mb-4`}></div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} className="flex-1">
                          View Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.demo} className="flex-1">
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Blog
              </h2>
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
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                I'm always interested in new opportunities and interesting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Contact Information
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <span className="text-gray-600 dark:text-gray-300">Email:</span>
                        <span className="ml-2 text-blue-600 dark:text-blue-400">alex@example.com</span>
                      </div>
                      <div>
                        <span className="text-gray-600 dark:text-gray-300">Location:</span>
                        <span className="ml-2 text-gray-900 dark:text-white">San Francisco, CA</span>
                      </div>
                      <div>
                        <span className="text-gray-600 dark:text-gray-300">Response Time:</span>
                        <span className="ml-2 text-gray-900 dark:text-white">Within 24 hours</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Follow Me
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href="#" className="flex items-center justify-center">
                          GitHub
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="#" className="flex items-center justify-center">
                          LinkedIn
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="#" className="flex items-center justify-center">
                          Twitter
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="#" className="flex items-center justify-center">
                          Medium
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
