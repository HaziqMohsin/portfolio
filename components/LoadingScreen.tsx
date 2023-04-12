import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <motion.div className="text-lg font-bold text-slate-700 h-screen flex flex-col justify-center items-center bg-black">
      <div>
        <div>Loading screen</div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
