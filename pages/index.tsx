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
          Navbar in Tailwind!
        </div>
        <div className="text-4xl  font-extrabold text-gray-700 mb-12">
          Responsive Cards in Tailwind!
        </div>
      </div>

      {/* 카드 전체를 반응형으로 만들기 위한 컨테이너 */}
      <Feature />
    </div>
  );
}

export default Home


{/* <div className="cardList">
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://cdn.britannica.com/82/152982-050-11159CF4/Daniel-Radcliffe-Rupert-Grint-Emma-Watson-Harry.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Harry Potter
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Is Harry Potter a true story?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Book</div>
      <div className="badge badge-outline">BestSeller</div>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://cdn.britannica.com/82/152982-050-11159CF4/Daniel-Radcliffe-Rupert-Grint-Emma-Watson-Harry.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Harry Potter
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Is Harry Potter a true story?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Book</div>
      <div className="badge badge-outline">BestSeller</div>
    </div>
  </div>
</div>
</div> */}