import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Slider from "../background";



export default function Navbar({ toggle }) {

    const pathname = usePathname()

    return (
        <>

            <nav className="relative flex items-center py-2 px-4 flex-row flex-nowrap bg-[#343a40] w-full ">
                <div className="flex items-center justify-between w-full px-4 mx-auto">
                    <Link href='/'>
                        <p className="inline-block p-[3px] my-2 mr-4 text-xl border-2 border-white text-[#f0f0f0]">RAYMOND</p>
                    </Link>
                    <div className="flex">
                        <button type="button" className="py-1 px-3 text-xl bg-transparent border border-transparent rounded md:hidden uppercase font-light flex items-center text-[#f0f0f0] cursor-pointer" onClick={toggle}>
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