import type { NextPage } from "next";
import Image from "next/image";
import Intro from "./Intro";
import "./index.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Intro />
    </div>
  );
};

export default Home;
