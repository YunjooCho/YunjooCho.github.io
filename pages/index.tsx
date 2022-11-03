import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Format from "../layout/format"

//Components
import Section1 from "../components/Section1"
import Section2 from "../components/Section2"
import Section3 from "../components/Section3"

const Home: NextPage = (props:any) => {
  return (
    <Format>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
    </Format>
  );
}

export default Home
