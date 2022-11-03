import type { NextPage } from 'next'
import Author from '../../components/_child/Author'
import Format from '../../layout/format'
import Image from 'next/image'

const Page: NextPage = () => {
    return (
        <Format>
            <section className="container mx-auto md:px-2 py-16 w-1/2">
                <div className="flex justify-center">
                    <Author />
                </div>
                <div className="post py-10">
                    <h1 className="font-bold text-4xl text-center pb-5">블로그 만들기</h1>
                    <p className="text-gray-500 text-xl text-center">유튜브 인강으로 배웠습니다. <br/>재미있습니다.</p>
                    <div className="py-10">
                        <Image src={"/images/blog.avif"} width={900} height={600}></Image>
                        <div className="content text-gray-600 text-lg flex flex-col gat-4"></div>
                    </div>
                </div>
            </section>
        </Format>
    );
}

export default Page