import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card from "../components/Card";
import Feature from "../pages/Feature";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tailwind CSS Tutorial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="py-32 text-center">
        <div className="text-4xl  font-extrabold text-gray-700 mb-12">
          My Blog~!!
        </div>
      </div>
      <Feature />
    </div>
  );
}

export default Home