import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroImage from "../public/hero-image.jpg";

const Home = () => {
  const textHello: string = "Hello,";
  const helloArray = [...textHello];
  const hello: any = [];
  //   helloArray.forEach((char: any) =>
  //     hello.push(
  //       <motion.div
  //         whileHover={{
  //           scale: 1.2,
  //           color: "#1CF8A8",
  //         }}
  //         transition={{
  //           type: "Spring",
  //           stiffness: 1000,
  //         }}
  //         className="mx-0.5"
  //       >
  //         {char}
  //       </motion.div>
  //     )
  //   );

  for (const char of helloArray) {
    hello.push(
      <motion.div
        whileHover={{
          scale: 1.2,
          color: "#1CF8A8",
          transition: {
            duration: 3,
            type: "spring",
            damping: 10,
            stiffness: 1000,
            restDelta: 0.00001,
          },
        }}
        className="mx-0.5"
      >
        {char}
      </motion.div>
    );
  }

  const haziqArray = ["I", "'", "m", ",", "", "H", "a", "z", "i", "q"];
  const haziqTest: any = [];
  haziqArray.forEach((char: any) =>
    haziqTest.push(
      <motion.div
        whileHover={{
          scale: 1.2,
          color: "#1CF8A8",
          transition: {
            duration: 0.1,
            type: "spring",
            damping: 10,
            stiffness: 1000,
            restDelta: 0.00001,
          },
        }}
        className="mx-0.5"
      >
        {char}
      </motion.div>
    )
  );

  const textWeb: string = "Web Developer";
  const webArray: any = [...textWeb];
  const webChar: any = [];
  webArray.forEach((char: any) =>
    webChar.push(
      <motion.div
        whileHover={{
          scale: 1.2,
          color: "#1CF8A8",
          transition: {
            duration: 0.1,
            type: "spring",
            damping: 10,
            stiffness: 1000,
            restDelta: 0.00001,
          },
        }}
        className="mx-0.5"
      >
        {char}
      </motion.div>
    )
  );

  return (
    <div
      className={`relative text-lg font-bold text-white flex-1 h-screen flex flex-col justify-center p-4 pl-12`}
    >
      <Image
        alt="Mountains"
        src={HeroImage}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div>
        <motion.div
          initial={{ y: -1000 }}
          animate={{ y: -110 }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="text-[103px] relative z-10 flex"
        >
          {hello}
        </motion.div>
        <motion.div
          initial={{ y: -1000 }}
          animate={{ y: -50 }}
          transition={{
            type: "spring",
            duration: 2.5,
          }}
          className="text-[103px] relative z-10 flex"
        >
          {haziqTest}
        </motion.div>
        <motion.div
          initial={{ y: -1000 }}
          animate={{ y: 20 }}
          transition={{ ease: "easeOut", duration: 1, delay: 2 }}
          className="text-[103px] relative z-10 flex"
        >
          {webChar}
        </motion.div>
      </div>

      <motion.div initial={{ y: 70 }} className=" relative z-10">
        <code className="text-gray-600">Front End Developer</code>
      </motion.div>

      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 100, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1, delay: 2 }}
      >
        <motion.button
          whileHover={{
            backgroundColor: "#1CF8A8",
            color: "#2b2b2b",
            transition: {
              type: "tween",
              duration: 0.5,
            },
          }}
          className="py-2 px-6 border border-solid border-[#1CF8A8] font-normal text-[#1CF8A8] rounded-sm shadow-lg relative z-10 flex-none animate-pulse"
        >
          Contact me
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;
