"use client"

import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function Footer() {

    const currentTime = new Date().getFullYear();
    
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])
    return (


        <>
        <section>
            <section className="instagram">
                <div className="container-fluid">
                    <div className="row no-gutters justify-content-center pb-5">
                        <div className="col-md-7 text-center heading-section" data-aos="fade-up-right">
                            <h2><span>Instagram</span></h2>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-sm-12 col-md" data-aos="fade-up-right">
                            <Link href="images/bg_3.jpeg" className="insta-img image-popup" style={{ backgroundImage: "url(images/bg_3.jpeg)" }}>
                                <div className="icon d-flex justify-content-center">
                                    <span className="icon-instagram align-self-center"></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-md " data-aos="fade-up-right">
                            <Link href="images/bg_2.jpeg" className="insta-img image-popup" style={{ backgroundImage: "url(images/bg_2.jpeg)" }}>
                                <div className="icon d-flex justify-content-center">
                                    <span className="icon-instagram align-self-center"></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-md " data-aos="fade-up-right">
                            <Link href="images/achive3.jpeg" className="insta-img image-popup" style={{ backgroundImage: "url(images/achive3.jpeg)" }}>
                                <div className="icon d-flex justify-content-center">
                                    <span className="icon-instagram align-self-center"></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-md " data-aos="fade-up-right">
                            <Link href="images/ray.jpeg" className="insta-img image-popup" style={{ backgroundImage: "url(images/ray.jpeg)" }}>
                                <div className="icon d-flex justify-content-center">
                                    <span className="icon-instagram align-self-center"></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-md " data-aos="fade-up-right">
                            <Link href="images/bg_1.jpeg" className="insta-img image-popup" style={{ backgroundImage: "url(images/bg_1.jpeg)" }}>
                                <div className="icon d-flex justify-content-center">
                                    <span className="icon-instagram align-self-center"></span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="ftco-footer ftco-bg-dark " data-aos="">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Dance with Ray</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias asperiores, voluptates minus incidunt eveniet quibusdam id ut neque non. Et magnam quisquam modi delectus amet. Reprehenderit amet nisi culpa deserunt.</p>
                                <ul className="ftco-footer-social list-unstyled float-md-left float-lft">
                                    <li className="" data-aos="fade-up-right"><Link href="#"><span className="icon-twitter"></span></Link></li>
                                    <li className="" data-aos="fade-up-right"><Link href="#"><span className="icon-facebook"></span></Link></li>
                                    <li className="" data-aos="fade-up-right"><Link href="https://www.instagram.com/raymond__ruff/"><span className="icon-instagram"></span></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Class Timetable</h2>
                                <ul className="list-unstyled">
                                    <li><Link href="#" className="py-2 d-block">Monday: <span>5pm: - 20:00</span></Link></li>
                                    <li><Link href="#" className="py-2 d-block">Tuesday: <span>5pm: - 20:00</span></Link></li>
                                    <li><Link href="#" className="py-2 d-block">Wednesday: <span>5pm: - 20:00</span></Link></li>
                                    <li><Link href="#" className="py-2 d-block">Thursday: <span>5pm: - 20:00</span></Link></li>
                                    <li><Link href="#" className="py-2 d-block">Friday: <span>5pm: - 20:00</span></Link></li>
                                    <li><Link href="#" className="py-2 d-block">Saturday: <span>5pm: - 21:00</span></Link></li>
                                    <li><Link href="#" className="py-2 d-block">Sunday: <span>5pm: - 21:00</span></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Contact Information</h2>
                                <ul className="list-unstyled">
                                    <li><Link href="#" className="py-2 d-block">Dar es salaam</Link></li>
                                    <li><Link href="#" className="py-2 d-block">+255 700 000 000</Link></li>
                                    <li><Link href="#" className="py-2 d-block"><span className="__cf_email__">rayruff@gmail</span></Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>
                                <a> Copyright &copy;{currentTime} All rights reserved | Siima Samson</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

        </section >
        </>
    )
}