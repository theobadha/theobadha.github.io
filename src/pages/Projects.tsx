
import PageTransition from "@/components/PageTransition";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
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

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My Projects
            </h1>
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
      </div>
    </PageTransition>
  );
};

export default Projects;
