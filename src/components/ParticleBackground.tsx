import { useEffect, useRef } from "react";

/**
 * Renders a canvas element with an animated particle background.
 *
 * This component creates a full-screen canvas with particles that move around
 * and connect to each other when they are close. It's designed to be a
 * decorative background element. The animation is self-contained and runs
 * within a `useEffect` hook.
 *
 * @component
 * @returns {JSX.Element} A canvas element that fills the screen and displays the particle animation.
 *
 * @example
 * // To use this component, simply include it in your layout.
 * // It will automatically position itself as a background.
 * import ParticleBackground from './ParticleBackground';
 *
 * function App() {
 *   return (
 *     <div>
 *       <ParticleBackground />
 *       <main>
 *         // Your other content here
 *       </main>
 *     </div>
 *   );
 * }
 *
 * @remarks
 * - The component takes no props.
 * - It uses `window.innerWidth` and `window.innerHeight` and resizes with the window.
 * - The canvas has `pointer-events-none` so it won't interfere with other UI elements.
 * - The particle colors, count (100), and connection distance (120px) are hardcoded.
 * - The component cleans up the resize event listener on unmount.
 * - It will not render the animation if the canvas or its 2D context cannot be initialized, failing silently.
 */
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        
        // Random colors from our theme
        const colors = [
          "rgba(183, 107, 229, 0.5)", // primary
          "rgba(45, 212, 191, 0.5)",  // secondary
          "rgba(56, 189, 248, 0.5)",  // accent
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around screen
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = `rgba(183, 107, 229, ${0.2 - distance / 600})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.3 }}
    />
  );
};

export default ParticleBackground;
