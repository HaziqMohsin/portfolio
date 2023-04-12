import React from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className="text-gray-700"> Haziq Mohsin</div>
      <div className={styles.menu}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
