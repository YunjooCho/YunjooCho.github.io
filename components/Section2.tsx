import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/Author';
import type { NextPage } from 'next';

const Section2: NextPage = () => {
    return (
        <section className="container mx-auto md:px-20 py-10">
            <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

            {/* grid columns */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
            </div>
        </section>
    );
}

export default Section2

function Post() {
    return (
        <div className="item">
            <div className="image">
                <Link href={"/"}><a><Image src={"https://picsum.photos/id/188/720/400/"} width={500} height={350} /></a></Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className='cat'>
                    <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">Business, Trave</a></Link>
                    <Link href={"/"}><a className="text-gray-800 hover:text-gray-600">- November 2, 2022</a></Link>
                </div>
                <div className="title">
                    <Link href={"/"}><a className="text-xl font-bold text-gray-800 hover:text-gray-600">그리스 여행 계획</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                    그리스 여행을 꼭 가고싶다. 2023년 이 맘때 쯤에는 꼭 가고 싶다.
                    <br />한글 폰트가 적용이 안된다. 왜 일까?
                </p>
                <Author />
            </div>
        </div>
    );
}