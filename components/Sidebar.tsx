import React from "react";
import Link from "next/link";
import Logo from "../public/icon-h.png";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="hidden bg-black w-40 lg:flex flex-col fixed top-0 bottom-0 items-center justify-center">
      <div className="bg-black w-full p-5">
        <Image src={Logo} alt="Logo" className="w-16 mx-auto my-4" />
        <div className="text-xl text-center text-white">Haziq Mohsin</div>
        <div className="text-sm text-center text-white">Web Developer</div>
      </div>
      <div className="flex flex-col text-cente mt-8 text-white">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/portfolio">Work</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Sidebar;
