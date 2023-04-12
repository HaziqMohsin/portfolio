import React from "react";
import Head from "next/head";
// import Header from "./Header";
// import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const Master = ({ children }: Props) => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0.5, x: 0, y: -200 },
  };
  return (
    <div>
      <Head>
        <title>Haziq Mohsin</title>
        <meta name="Haziq Mohsin" content="Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen flex-auto overflow-x-hidden">
        <Sidebar />
        <motion.div
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "linear" }}
          className="lg:ml-40 w-full"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default Master;
