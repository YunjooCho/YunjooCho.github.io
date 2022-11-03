import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <Component {...pageProps} />
    </>
  );
}

export default MyApp
