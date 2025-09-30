import { motion } from "framer-motion";
import { Code2, Sparkles, Zap, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const skills = [
    { name: "Frontend", icon: Code2, items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { name: "Backend", icon: Zap, items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
    { name: "Tools", icon: Sparkles, items: ["Git", "Docker", "AWS", "Figma"] },
    { name: "Specialties", icon: Rocket, items: ["UI/UX Design", "Performance", "Animations", "3D Graphics"] },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-64 h-64 mx-auto rounded-full bg-gradient-primary p-1 glow-primary">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <span className="text-8xl">🧙‍♂️</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse-glow" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-display font-semibold text-foreground">
              Turning ideas into digital magic ✨
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer with 5+ years of experience creating web applications 
              that don't just work—they captivate. My approach combines technical excellence with creative 
              design to deliver experiences users love.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or experimenting with creative web animations and 3D graphics.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              {["Creative", "Detail-oriented", "Problem Solver", "Team Player"].map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-card border border-primary/30 rounded-full text-sm glow-primary hover:scale-105 transition-transform"
                >
                  {trait}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="p-6 bg-card border-primary/20 hover:border-primary/50 glow-primary hover-lift group cursor-pointer">
                  <Icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-display font-semibold mb-4 text-foreground">
                    {skill.name}
                  </h3>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
