import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Intro from "./Intro";
import "./index.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ches4117</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Intro />
    </div>
  );
};

export default Home;
