import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Dashboard",
      description: "Real-time analytics platform with ML-powered insights and beautiful data visualizations.",
      tags: ["React", "TypeScript", "Python", "TensorFlow"],
      image: "🤖",
      gradient: "from-primary to-secondary",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack shopping experience with seamless checkout and inventory management.",
      tags: ["Next.js", "Node.js", "Stripe", "PostgreSQL"],
      image: "🛍️",
      gradient: "from-secondary to-accent",
    },
    {
      title: "3D Portfolio Showcase",
      description: "Interactive 3D web experience using Three.js with stunning visual effects.",
      tags: ["React", "Three.js", "WebGL", "GSAP"],
      image: "🎨",
      gradient: "from-accent to-primary",
    },
    {
      title: "Social Media App",
      description: "Modern social platform with real-time messaging and content sharing features.",
      tags: ["React Native", "Firebase", "Redux", "Node.js"],
      image: "💬",
      gradient: "from-primary to-accent",
    },
    {
      title: "Task Management Tool",
      description: "Collaborative project management app with kanban boards and team features.",
      tags: ["Vue.js", "Express", "MongoDB", "Socket.io"],
      image: "✅",
      gradient: "from-secondary to-primary",
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather application with location-based forecasts and animations.",
      tags: ["React", "API Integration", "Framer Motion", "Tailwind"],
      image: "🌤️",
      gradient: "from-accent to-secondary",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work - from AI-powered applications to stunning web experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="group relative overflow-hidden bg-card border-primary/20 hover:border-primary/50 h-full hover-lift">
                {/* Project Image/Icon */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-7xl relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <span className="relative z-10 group-hover:scale-110 transition-transform duration-500">
                    {project.image}
                  </span>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-muted border border-primary/20 rounded-full text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href="#" className="flex items-center gap-2">
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                    <Button variant="default" size="sm" className="flex-1" asChild>
                      <a href="#" className="flex items-center gap-2">
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute inset-0 glow-primary" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
