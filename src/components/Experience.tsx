import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const Experience = () => {
  const timeline = [
    {
      type: "work",
      icon: Briefcase,
      title: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Leading development of enterprise applications and mentoring junior developers.",
      color: "primary",
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Frontend Developer",
      company: "Digital Solutions Co.",
      period: "2020 - 2022",
      description: "Built responsive web applications using React and modern web technologies.",
      color: "secondary",
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "Bachelor of Computer Science",
      company: "University of Technology",
      period: "2016 - 2020",
      description: "Graduated with honors, specializing in software engineering and web development.",
      color: "accent",
    },
    {
      type: "achievement",
      icon: Award,
      title: "Open Source Contributor",
      company: "Various Projects",
      period: "2019 - Present",
      description: "Active contributor to popular open-source projects with 1000+ stars combined.",
      color: "primary",
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey through technology and continuous learning
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative pl-24"
                >
                  {/* Icon */}
                  <div className={`absolute left-0 w-16 h-16 rounded-full bg-${item.color}/20 border-2 border-${item.color} flex items-center justify-center glow-${item.color} animate-pulse-glow`}>
                    <Icon className={`w-8 h-8 text-${item.color}`} />
                  </div>

                  {/* Content */}
                  <div className="bg-card border border-primary/20 rounded-lg p-6 hover:border-primary/50 hover-lift glow-primary group">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground font-medium">{item.company}</p>
                      </div>
                      <span className="px-4 py-1 bg-muted border border-primary/30 rounded-full text-sm text-foreground">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>

                  {/* Connecting line glow */}
                  <div className={`absolute left-8 top-8 w-8 h-0.5 bg-gradient-to-r from-${item.color} to-transparent`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
