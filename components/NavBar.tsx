import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {

    const router = useRouter();

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link> 
                        </li>
                        <li>
                            <Link href="/about">
                                <a>About</a>
                            </Link> 
                        </li>
                        {/* <li>
                            <a href="/language">Language</a>
                        </li>
                        <li>
                            <a href="/algorythm">Algorythm</a>
                        </li>
                        <li>
                            <a href="/etc">etc</a>
                        </li> */}
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link href={"/"}><a className="btn btn-ghost normal-case text-xl">Cholog</a></Link>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
