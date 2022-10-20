import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import NavBar from "../components/NavBar";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <NavBar />
        <Component {...pageProps} />
        <style jsx global>{`
            a {
            color: white;
            }
        `}</style>
    </>
  );
}

export default MyApp
