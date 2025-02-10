import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

const Counter = ({ from = 0, to = 100 }) => {
  // Create a motion value for smooth animation
  const count = useMotionValue(from);
  const spring = useSpring(count, { stiffness: 100, damping: 10 });
  const [displayCount, setDisplayCount] = useState(from);

  useEffect(() => {
    count.set(to); // Smoothly animate count to new value
  }, [to, count]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplayCount(Math.round(latest)); // Update state with animated value
    });

    return () => unsubscribe(); // Cleanup
  }, [spring]);

  return (
    <motion.div
      className="text-4xl font-bold text-blue-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayCount}
    </motion.div>
  );
};

export default Counter;
