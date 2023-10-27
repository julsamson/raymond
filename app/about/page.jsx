"use client"

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Navigation from "../components/naviagtion";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { aboutData } from "../data";


export default function About() {

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])

    return (
        <>
            <Navigation />
            <div>
                <section className="ftco-section-2">
                    <div className="container d-flex">
                        <div className="section-2-blocks-wrapper row">
                            <div className="img col-sm-12 col-lg-6" style={{ backgroundImage: "url('images/ray.jpeg')" }}>
                            </div>
                            <div className="text col-lg-6 " data-aos="fade-up-right">
                                <div className="text-inner align-self-start">
                                    <span className="subheading">{aboutData.title}</span>
                                    <h3 className="heading">{aboutData.subTitle}</h3>
                                    <p>{aboutData.description}</p>
                                    <p>{aboutData.subdescription}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="ftco-section">
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-5">
                            <div className="col-md-7 text-center heading-section" data-aos="fade-up-right">
                                <span className="subheading">ACHIEVEMENTS</span>
                                <h2>My Achievements</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 " data-aos="fade-up-right">
                                <div className="block-10">
                                    <div className="person-info">
                                        <span className="name">Featured Video</span>
                                        <span className="position">2021</span>
                                    </div>
                                    <div className="chef-img" style={{ backgroundImage: "url(images/bg_1.jpeg)" }}></div>
                                </div>
                            </div>
                            <div className="col-md-4 " data-aos="fade-up-right">
                                <div className="block-10">
                                    <div className="person-info">
                                        <span className="name">Dance Classes</span>
                                        <span className="position">Mlimani, every day</span>
                                    </div>
                                    <div className="chef-img" style={{ backgroundImage: "url(images/achive2.jpeg)" }}></div>
                                </div>
                            </div>
                            <div className="col-md-4 " data-aos="fade-up-right">
                                <div className="block-10">
                                    <div className="person-info">
                                        <span className="name">Stage dancer</span>
                                        <span className="position">2022</span>
                                    </div>
                                    <div className="chef-img" style={{ backgroundImage: "url(images/achive3.jpeg)" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 