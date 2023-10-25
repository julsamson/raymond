import React from "react";
import Image from "next/image";
import Link from "next/link";
import 'animate.css'


export default function Sidebar( { toggle, isOpen} ) {
    return (
        <>
            <nav>
                <div className={`${isOpen ? 'animate__animated animate__fadeInDown': 'animate__animated animate__fadeOutUp'}`} style={{
                    opacity : `${isOpen ? "1" : "0"}`,
                    backgroundColor : '#343a40',
                    position : 'fixed',
                    width : '100%',
                    top : `${isOpen ? "10%" : "-100%"}`,
                    zIndex: '5'
                }}>
                    <ul className="container mx-auto p-2">
                        <li>
                            <Link href="/" onClick={toggle}>
                                <p className="text-base py-[30px] px-[20px] text-[#f0f0f0] opacity-100 hover:text-white max-[991.98px]:py-[10px] max-[991.98px]:px-0 inline-block">Home</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/categories" onClick={toggle}>
                                <p className="text-base py-[30px] px-[20px] text-[#f0f0f0] opacity-100 hover:text-white max-[991.98px]:py-[10px] max-[991.98px]:px-0 inline-block">Categories</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/specialties" onClick={toggle}>
                                <p className="text-base py-[30px] px-[20px] text-[#f0f0f0] opacity-100 hover:text-white max-[991.98px]:py-[10px] max-[991.98px]:px-0 inline-block">Specialties</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/reservation" onClick={toggle}>
                                <p className="text-base py-[30px] px-[20px] text-[#f0f0f0] opacity-100 hover:text-white max-[991.98px]:py-[10px] max-[991.98px]:px-0 inline-block">Reservation</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" onClick={toggle}>
                                <p className="text-base py-[30px] px-[20px] text-[#f0f0f0] opacity-100 hover:text-white max-[991.98px]:py-[10px] max-[991.98px]:px-0 inline-block">About</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" onClick={toggle}>
                                <p className="text-base py-[30px] px-[20px] text-[#f0f0f0] opacity-100 hover:text-white max-[991.98px]:py-[10px] max-[991.98px]:px-0 inline-block">Contact</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}