import type { NextPage } from 'next'
import Head from 'next/head'


const About: NextPage = () => {
    return (
        <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
                Who?
            </div>
            {/* <div className="collapse-content">
                <p>yunjcho</p>
            </div> */}
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title"></h2>
                    <div>42seoul intrID : yunjcho</div>
                    <div>E-mail : cooriyun@gmail.com</div>
                </div>
            </div>
            <style jsx>
                {`
                .card {
                    alignItems: center;
                }
                body {
                    height: 100%
                }
                .wrap {
                    position: relative;
                    min-height: 100%;
                    padding-bottom: 114px;
                }
                .footer {
                    position: absolute;
                    bottom: 0;
                }  
            `}
            </style>
        </div>
    );
}

export default About