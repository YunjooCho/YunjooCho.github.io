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
                        <div className="content text-gray-600 text-lg flex flex-col gat-4">
                            <p>
                                연습용 글입니다.배포하려고 Github에 업로드를 하면 반영시간이 10~20분 걸린다고 합니다. 빨리 화면이 잘 나오는지 보고 싶습니다. 작업을 마저 하면서 기다려보겠습니다.
                            </p>
                            <p>
                                할 게 많습니다. 나중에는 작성한 파일이나 노션글을 뿌려주고 싶습니다. 손이 느려서 슬픕니다. 한글폰트는 왜 적용이 안되는지 의문입니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Format>
    );
}

export default Page