import React from "react";
import Master from "../components/Master";
import { motion } from "framer-motion";
import MyPortfolio from "../components/Portfolio";
import LoadingScreen from "../components/LoadingScreen";

const Portfolio = () => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <Master>
      <MyPortfolio />
    </Master>
  );
};

export default Portfolio;
