import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PortfolioHome = () => {
  const projectDetails = [
    {
      name: "t4bplus",
      path: "../project-image.jpg",
    },
    {
      name: "t4bplus",
      path: "../project-image.jpg",
    },
    {
      name: "t4bplus",
      path: "../project-image.jpg",
    },
    {
      name: "t4bplus",
      path: "../project-image.jpg",
    },
    {
      name: "t4bplus",
      path: "../project-image.jpg",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="relative text-lg font-bold text-white flex-1 h-screen flex flex-col justify-center p-4 pl-12"
    >
      <p className="text-8xl mb-4">My Work</p>
      <div className="flex flex-wrap overflow-x-auto">
        {projectDetails.map((v, i) => {
          return (
            <div className="relative" key={i}>
              <div className="absolute bottom-10 w-full text-center">
                {v.name}
              </div>
              <img
                alt={`Project ${i + 1}`}
                src={v.path}
                className="object-cover w-[30vmin] h-[40vmin] object-center grayscale-1 cursor-pointer"
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default PortfolioHome;
