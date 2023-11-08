import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Slider from "../background";



export default function Navbar({ toggle }) {

    const pathname = usePathname()

    return (
        <>

            <nav className="sticky top-0 flex items-center px-4 flex-row flex-nowrap bg-[#343a40] w-full drop-shadow-xl shadow-slate-500 z-50">
                <div className="flex items-center justify-between w-full md:px-4 mx-auto">
                    <Link href='/'>
                        <p className="md:mr-4 pt-2 text-xl text-[#f0f0f0] flex items-center">
                            <img 
                            src="images/Image.png"
                            alt="" 
                            className="md:h-20 h-16 w-auto z-10"
                            />
                        </p>
                    </Link>
                    <div className="flex">
                        <button type="button" className="py-1 px-3 text-xl bg-transparent border border-transparent rounded md:hidden uppercase font-light flex items-center text-[#f0f0f0] cursor-pointer z-10" onClick={toggle}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <span className="px-1">
                                Menu
                            </span>
                        </button>
                        <div className="md:block hidden">
                            <ul className="ml-auto flex p-0 mb-0 list-none">
                                <li className="text-base py-[30px] px-[20px] text-[#f0f0f0] opacity-100 hover:text-white max-[991.98px]:py-[10px] max-[991.98px]:px-0 inline-block">
                                    <Link href="/" className={`link ${pathname === '/' ? 'text-[#ffb400]' : 'text-white'}`}>
                                        <p>Home</p>
                                    </Link>
                                </li>
                                <li className="text-base py-[30px] px-[20px] text-[#f0f0f0] opacity-100 hover:text-white max-[991.98px]:py-[10px] max-[991.98px]:px-0 inline-block">
                                    <Link href="/categories" className={`link ${pathname === '/categories' ? 'text-[#ffb400]' : 'text-white'}`}>
                                        <p>Categories</p>
                                    </Link>
                                </li>
                                <li className="text-base py-[30px] px-[20px] text-[#f0f0f0] opacity-100 hover:text-white max-[991.98px]:py-[10px] max-[991.98px]:px-0 inline-block">
                                    <Link href="/specialties" className={`link ${pathname === '/specialties' ? 'text-[#ffb400]' : 'text-white'}`}>
                                        <p>Specialties</p>
                                    </Link>
                                </li>
                                <li className="text-base py-[30px] px-[20px] text-[#f0f0f0] opacity-100 hover:text-white max-[991.98px]:py-[10px] max-[991.98px]:px-0 inline-block">
                                    <Link href="/reservation" className={`link ${pathname === '/reservation' ? 'text-[#ffb400]' : 'text-white'}`}>
                                        <p>Reservation</p>
                                    </Link>
                                </li>
                                <li className="text-base py-[30px] px-[20px] text-[#f0f0f0] opacity-100 hover:text-white max-[991.98px]:py-[10px] max-[991.98px]:px-0 inline-block">
                                    <Link href="/about" className={`link ${pathname === '/about' ? 'text-[#ffb400]' : 'text-white'}`}>
                                        <p>About</p>
                                    </Link>
                                </li>
                                <li className="text-base py-[30px] px-[20px] text-[#f0f0f0] opacity-100 hover:text-white max-[991.98px]:py-[10px] max-[991.98px]:px-0 inline-block">
                                    <Link href="/contact" className={`link ${pathname === '/contact' ? 'text-[#ffb400]' : 'text-white'}`}>
                                        <p>Contact</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="text-center h-[90vh] bg-[#333]">
            <Slider />
            </div>
        </>
    )
}