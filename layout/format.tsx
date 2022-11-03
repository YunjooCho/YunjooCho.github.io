import type { NextPage } from 'next'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Head from "next/head"

import NavBar from '../components/NavBar'

const Format: NextPage = ({ children }) => { //{ children }
    return (
        <>
            <Head>
                <title>Cho! Blog</title>
            </Head>
            {/* <Header /> */}
            <NavBar />
            <main>{ children }</main>
            <Footer />
        </>
    );
}

export default Format