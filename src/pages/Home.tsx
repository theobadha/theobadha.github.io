
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
      title: "Ushahidi Platform Test Automation",
      description: "Implemented comprehensive test automation framework from scratch using Cypress, achieving 40% automation coverage and reducing release times by 55%. Integrated automated tests into CI pipeline using GitHub Actions.",
      technologies: ["Cypress", "JavaScript", "GitHub Actions", "CI/CD", "Test Automation"],
      github: "#",
      demo: "#",
      image: "bg-gradient-to-br from-green-400 to-blue-500"
    },
    {
      title: "QA Sprint Management System", 
      description: "Designed and managed comprehensive QA sprint workflows, creating structured task boards and tracking systems that improved team coordination and delivery timelines across development cycles.",
      technologies: ["Jira", "Zephyr", "Agile", "Project Management", "Team Leadership"],
      github: "#",
      demo: "#",
      image: "bg-gradient-to-br from-purple-400 to-pink-500"
    },
    {
      title: "API Test Automation Framework",
      description: "Developed robust API testing solutions for web and mobile applications, ensuring comprehensive test coverage and quality assurance across multiple product releases.",
      technologies: ["Node.js", "API Testing", "Test Case Design", "Documentation"],
      github: "#",
      demo: "#",
      image: "bg-gradient-to-br from-blue-400 to-cyan-500"
    },
    {
      title: "Cross-Platform Testing Solutions",
      description: "Led manual and automated testing efforts for web and mobile platforms, implementing quality gates and testing methodologies that enhanced overall product reliability.",
      technologies: ["Manual Testing", "Mobile Testing", "Web Testing", "Quality Assurance"],
      github: "#",
      demo: "#",
      image: "bg-gradient-to-br from-orange-400 to-red-500"
    }
  ];

  const posts = [
    {
      title: "Implementing Test Automation: From Zero to 40% Coverage",
      excerpt: "A comprehensive guide on building test automation frameworks from scratch, sharing lessons learned from implementing Cypress testing at scale and achieving significant coverage milestones.",
      date: "October 15, 2024",
      readTime: "10 min read",
      category: "Test Automation"
    },
    {
      title: "Managing QA in Agile: Best Practices for Remote Teams",
      excerpt: "Insights into effectively managing QA sprints, coordinating remote testing teams, and implementing agile methodologies that improve development cycles and product quality.",
      date: "September 20, 2024",
      readTime: "8 min read",
      category: "Agile & QA"
    },
    {
      title: "The Art of Bug Triage: Creating Comprehensive Reports",
      excerpt: "Deep dive into effective bug triage processes, creating detailed defect reports, and establishing workflows that streamline the bug-fixing cycle for development teams.",
      date: "August 25, 2024",
      readTime: "6 min read",
      category: "Quality Assurance"
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
                    Walter Obadha
                  </span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Seasoned Quality Assurance Engineer with over 6 years of experience in both manual and automated testing. 
                  I specialize in implementing robust test automation frameworks and have a proven track record of reducing 
                  release times by up to 55% while enhancing product quality.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  I'm passionate about agile methodologies, continuous improvement, and delivering high-quality software 
                  solutions through meticulous testing and collaborative teamwork. I believe in releasing often and 
                  advocate for quality-first development practices.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Cypress", "Test Automation", "Node.js", "Jira", "CI/CD", "Quality Assurance"].map((skill) => (
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
                  WO
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
                Here are some key projects and initiatives I've led in quality assurance and test automation. 
                Each represents significant improvements in testing efficiency and product quality.
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
                          View Details
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.demo} className="flex-1">
                          Case Study
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
                Sharing insights about quality assurance, test automation, agile methodologies, 
                and best practices from my experience in the software testing field.
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
                I'm always interested in discussing quality assurance opportunities, test automation projects, 
                or sharing insights about QA best practices. Feel free to reach out!
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
                        <span className="ml-2 text-blue-600 dark:text-blue-400">wobadha@gmail.com</span>
                      </div>
                      <div>
                        <span className="text-gray-600 dark:text-gray-300">Phone:</span>
                        <span className="ml-2 text-gray-900 dark:text-white">+254-726-805-557</span>
                      </div>
                      <div>
                        <span className="text-gray-600 dark:text-gray-300">Response Time:</span>
                        <span className="ml-2 text-gray-900 dark:text-white">Within 24 hours</span>
                      </div>
                      <div>
                        <span className="text-gray-600 dark:text-gray-300">Education:</span>
                        <span className="ml-2 text-gray-900 dark:text-white">BSc Computer Science & Technology</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Professional Network
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
                          Resume
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="#" className="flex items-center justify-center">
                          Portfolio
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
