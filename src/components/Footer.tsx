import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 border-t border-primary/20">
      {/* Sparkle effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-4xl"
        >
          ✨
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <motion.p
            className="text-muted-foreground text-sm flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Made with <Heart className="w-4 h-4 text-primary animate-pulse" fill="currentColor" /> 
            by Alex {currentYear}
          </motion.p>
          <p className="text-muted-foreground/60 text-xs">
            Crafted with React, TypeScript, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
