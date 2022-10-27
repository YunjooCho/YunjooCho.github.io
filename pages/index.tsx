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


// import { Layout } from "../components/Layout";

// import type { NextPage } from "next";
// import { IBreadcrumbLink } from "../components/Breadcrumbs";
// import Link from "next/link";
// const Home: NextPage = () => {
//   const breadCrumbs: Array<IBreadcrumbLink> = [{ name: "Home", link: "#" }];
//   return (
//     <Layout breadCrumbs={breadCrumbs}>
//       <div>
//         <h1 className="text-3xl font-bold underline">Hello world!</h1>
//         <Link href={"/collections"}>
//           <button className="btn btn-accent">My button</button>
//         </Link>
//       </div>
//     </Layout>
//   );
// };

// export default Home;
