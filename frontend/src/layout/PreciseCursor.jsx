import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function PreciseCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const hover = (e) => setHovered(['A', 'BUTTON', 'INPUT', 'TEXTAREA'].includes(e.target.tagName));
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", hover);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", hover);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:flex items-center justify-center bg-white"
      animate={{
        x: pos.x - 10,
        y: pos.y - 10,
        scale: hovered ? 2.5 : 1,
        backgroundColor: hovered ? "#f59e0b" : "#ffffff",
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
    />
  );
}