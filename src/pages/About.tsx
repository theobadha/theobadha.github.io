
import PageTransition from "@/components/PageTransition";

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors">
        <div className="max-w-4xl mx-auto px-6 py-16">
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
      </div>
    </PageTransition>
  );
};

export default About;
