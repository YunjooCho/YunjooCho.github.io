import Link from "next/link"
import Image from "next/image"
import Author from "./_child/Author"
import fetcher from '../lib/fetcher'
import { title } from "process"

export default function Section2() {

    const { data, isLoading, isError } = fetcher('api/posts')



    return (
        <section className="container mx-auto md:px-20 py-10">
            <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

            {/* grid columns */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
                {
                    data && data.map((value, index) => (
                        <Post data={value} key={index}></Post>
                    ))
                }
            </div>
        </section>
    );
}

function Post({ data }) {
    const {id, category, img, published, author} = data;

    console.log(data);

    return (
        <div className="item">
            <div className="image">
                <Link href={"/"}><a><Image src={img || "/"} width={500} height={350} /></a></Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className='cat'>
                    <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</a></Link>
                    <Link href={"/"}><a className="text-gray-800 hover:text-gray-600">- {published || "Unknown"}</a></Link>
                </div>
                <div className="title">
                    <Link href={"/"}><a className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "Title"}</a></Link>
                </div>
                <p className="text-gray-500 py-3">

                </p>
                {author ? <Author></Author>:<></>}
            </div>
        </div>
    );
}