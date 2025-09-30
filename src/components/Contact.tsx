import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent! ✨",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com", color: "hover:text-primary" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", color: "hover:text-secondary" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com", color: "hover:text-accent" },
    { name: "Email", icon: Mail, href: "mailto:hello@example.com", color: "hover:text-primary" },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
            Let's Create Magic Together
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-card border-primary/20 glow-primary">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border-primary/30 focus:border-primary glow-primary transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-primary/30 focus:border-primary glow-primary transition-all"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background border-primary/30 focus:border-primary glow-primary transition-all min-h-[150px]"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                <Button type="submit" variant="hero" className="w-full" size="lg">
                  <Send className="mr-2" size={18} />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be 
                part of your vision. Feel free to reach out through any of these channels.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-display font-semibold text-foreground">
                Connect with me
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className={`flex items-center gap-3 p-4 bg-card border border-primary/20 rounded-lg ${social.color} hover:border-primary/50 transition-all hover-lift glow-primary group`}
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{social.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Fun Stats */}
            <Card className="p-6 bg-card border-primary/20 glow-primary">
              <h4 className="text-lg font-display font-semibold mb-4 text-foreground">
                Quick Stats
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-gradient">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-gradient">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-gradient">30+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-gradient">∞</div>
                  <div className="text-sm text-muted-foreground">Lines of Code</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
