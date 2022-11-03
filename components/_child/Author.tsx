import Image from 'next/image'
import Link from 'next/link';
import type { NextPage } from 'next'

const Author: NextPage = () => {
    return (
        <div className="author flex py-5">
            <Image src={"/images/author/shizu.jpg"} width={60} height={60} className="rounded-full"></Image>
            <div className="flex flex-col justify-center px-4">
                <Link href={"/"}><a className="text-md fond-bold text-gary-800 hover:text-gray-600">yunjcho</a></Link>
                <span className="text-sm text-gray-500">Developer</span>
            </div>
        </div>
    );
}

export default Author