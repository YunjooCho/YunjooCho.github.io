import type { NextPage } from 'next'
import Image from 'next/image'
import Link from "next/link";
import { ImFacebook, ImInstagram, ImGithub,ImMail2 } from "react-icons/im";

const Header: NextPage = () => {
    return (
        <header className="bg-gray-60">
            <div className="xl:container xl:mx-auto flex flex-col Items-center sm:flex-row sm:justify-between text-center py-3">
                <div className="shirink w-80 sm:order-1">
                    <Link href={"/"}>
                        <a className="font-bold uppercase text-3xl">Cho! Blog</a>
                    </Link>
                </div>
                <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                    <input type="text" className="input-text" placeholder="Search..."/>
                </div>
                {/* <div className="w-96 order-3 flex justify-center">
                    <div className="flex gap-6 h-10">
                        <Link href={"https://www.facebook.com/yunjoo.cho.169/"}>
                            <a><ImFacebook color="#888888"/></a>
                        </Link>
                        <Link href={"https://www.instagram.com/yunmm0/"}>
                            <a><ImInstagram color="#888888"/></a>
                        </Link>
                        <Link href={"https://github.com/YunjooCho"}>
                            <a><ImGithub color="#888888"/></a>
                        </Link>
                        <Link href={"mailto:mm_it317@naver.com"}>
                            <a><ImMail2 color="#888888"/></a>
                        </Link>
                    </div>
                </div> */}
            </div>
        </header>
    );
}

export default Header