"use client"

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Navigation from "../components/naviagtion";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';


export default function Specialties() {

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
                <section className="ftco-section bg-light">
                    <div className="container">
                        <div className="row no-gutters justify-content-center mb-5 pb-5">
                            <div className="col-md-7 text-center heading-section " data-aos='fade-up-right'>
                                <h2>My Specialties</h2>
                            </div>
                        </div>
                        <div className="row d-flex no-gutters">
                            <div className="col-lg-6">
                                <div className="block-3 d-md-flex" data-aos='fade-up-right'>
                                    <div className="image order-last" style={{backgroundImage: "url(images/private.jpeg)"}}></div>
                                    <div className="text text-center order-first">
                                        <h2 className="heading">Private Lessons</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates perspiciatis. Illo ratione, doloribus, dolore ipsa doloremque possimus ut laboriosam libero rem repellendus est magnam voluptates sunt deleniti? Eaque, vero.</p>
                                        <span className="price">from $10.00</span>
                                    </div>
                                </div>
                                <div className="block-3 d-md-flex" data-aos='fade-up-right'>
                                    <div className="image order-first" style={{backgroundImage: "url(images/wedding.png)"}}></div>
                                    <div className="text text-center order-first">
                                        <h2 className="heading">Wedding Dance Lessons</h2>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla asperiores voluptatum sed odit aperiam voluptates, excepturi voluptate cum ipsum tempora atque possimus, similique, blanditiis ad inventore deleniti porro totam minima!</p>
                                        <span className="price">from $10.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="block-3 d-md-flex " data-aos='fade-up-right'>
                                    <div className="image order-last" style={{backgroundImage: "url(images/partie.jpg)"}}></div>
                                    <div className="text text-center order-first">
                                        <h2 className="heading">Dance Parties</h2>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, autem commodi deserunt eum vero consequuntur recusandae earum, tenetur voluptatem ad saepe ab ducimus dolores nam repellendus quos voluptatibus rem consectetur?</p>
                                        <span className="price">from $10.00</span>
                                    </div>
                                </div>
                                <div className="block-3 d-md-flex " data-aos='fade-up-right'>
                                    <div className="image order-first" style={{backgroundImage: "url(images/chore.jpeg)"}}></div>
                                    <div className="text text-center order-first">
                                        <h2 className="heading">Music choreography</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, omnis enim cupiditate perspiciatis cum asperiores reprehenderit dolores suscipit nam quisquam nihil fuga dolorem ipsam officiis ad! Architecto excepturi ipsum corporis!</p>
                                        <span className="price">from $10.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="block-3 d-md-flex " data-aos='fade-up-right'>
                                    <div className="image order-last" style={{backgroundImage: "url(images/stage.png)"}}></div>
                                    <div className="text text-center order-first">
                                        <h2 className="heading">Stage Dancer</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ab odio? Omnis quidem incidunt, culpa alias ex dolorem fugit molestiae laudantium aliquam provident, fugiat veritatis libero atque perferendis qui accusantium?</p>
                                        <span className="price">from $10.00</span>
                                    </div>
                                </div>
                                <div className="block-3 d-md-flex " data-aos='fade-up-right'>
                                    <div className="image order-first" style={{backgroundImage: "url(images/workout.jpeg)"}}></div>
                                    <div className="text text-center order-first">
                                        <h2 className="heading">Dance Workout</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, corporis pariatur aspernatur aliquam recusandae repudiandae quae praesentium consequuntur autem sunt! Esse, doloribus magnam vel dignissimos cum deserunt voluptatum sed quae.</p>
                                        <span className="price">from $10.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="block-3 d-md-flex " data-aos='fade-up-right'>
                                    <div className="image order-last" style={{backgroundImage: "url(images/wedding.png)"}}></div>
                                    <div className="text text-center order-first">
                                        <h2 className="heading">Wedding Dance Lessons</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur expedita totam enim voluptatum ad, perferendis odit nihil, iure nisi velit temporibus illo numquam architecto maiores sunt nostrum, deserunt possimus? Numquam?</p>
                                        <span className="price">from $10.00</span>
                                    </div>
                                </div>
                                <div className="block-3 d-md-flex " data-aos='fade-up-right'>
                                    <div className="image order-first" style={{backgroundImage: "url(images/partie.jpg)"}}></div>
                                    <div className="text text-center order-first">
                                        <h2 className="heading">Dance Parties</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eos distinctio aliquid sapiente illo provident at tenetur ex mollitia maiores quidem placeat animi, aperiam minima cupiditate possimus explicabo labore doloribus?</p>
                                        <span className="price">from $10.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="block-3 d-md-flex " data-aos='fade-up-right'>
                                    <div className="image order-last" style={{backgroundImage: "url(images/stage.png)"}}></div>
                                    <div className="text text-center order-first">
                                        <h2 className="heading">Stage Dancer</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat consequuntur unde ipsa placeat, libero, saepe illo, earum sequi eligendi rerum quo dolorum dolor exercitationem nemo molestias dolore doloribus alias dolores.</p>
                                        <span className="price">from $10.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="block-3 d-md-flex " data-aos='fade-up-right'>
                                    <div className="image order-last" style={{backgroundImage: "url(images/workout.jpeg)"}}></div>
                                    <div className="text text-center order-first">
                                        <h2 className="heading">Dance Workout</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto temporibus, eum dolorem doloremque vel repellat vitae laborum facere accusantium iure totam quidem dolores quaerat voluptate! Porro rerum numquam repellendus assumenda.</p>
                                        <span className="price">from $10.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
} 