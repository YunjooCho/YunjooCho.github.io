import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/Author';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
import 'swiper/css';

export default function Section1() {

    SwiperCore.use([Autoplay])

    // 추후 수정
    const bg = {
        background: "url('/images/santorini_bg.jpg') no-repeat",
        backgroundPosition: "right",
    }

    return (
        <section className="py-16">
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay= {{
                        delay: 2000
                    }}
                >
                    <SwiperSlide> {Slide()} </SwiperSlide>
                    <SwiperSlide> {Slide()} </SwiperSlide>
                    <SwiperSlide> {Slide()} </SwiperSlide>
                    <SwiperSlide> {Slide()} </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

function Slide() {
    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link href={"/"}><a><Image src={"/images/santo.jpg"} width={400} height={400} /></a></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className='cat'>
                    <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">Business, Trave</a></Link>
                    <Link href={"/"}><a className="text-gray-800 hover:text-gray-600">- November 2, 2022</a></Link>
                </div>
                <div className="title">
                    <Link href={"/"}><a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">그리스 여행 계획</a></Link>
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