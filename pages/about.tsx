import type { NextPage } from 'next'
import Head from 'next/head'

const About: NextPage = () => {
    return (
        <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
                Who?
            </div>
            <div className="collapse-content">
                <p>yunjcho</p>
            </div>
        </div>
    );
}

export default About