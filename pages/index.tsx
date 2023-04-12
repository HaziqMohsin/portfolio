import Image from "next/image";
import styles from "../styles/Home.module.css";
import Master from "../components/Master";
import HomeProfile from "../components/Home";
import PortfolioHome from "../components/PortfolioHome";

export default function Home() {
  return (
    <Master>
      <HomeProfile />
      <PortfolioHome />
      {/* <Portfolio /> */}
    </Master>
  );
}
