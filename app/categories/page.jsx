"use client"

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Navigation from "../components/naviagtion";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';


export default function Categories() {

    useEffect(()=>{
            AOS.init({
                duration: 500,
                once: false,
            })
    },[])

    return (
        <>
        <Navigation />
            <div>
                <div className="ftco-section-reservation">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 reservation pt-5 px-5">
                                <div className="block-17">
                                    <form action="/submit" method="post" className="d-block d-lg-flex">
                                        <div className="fields d-block d-lg-flex">
                                            <div className="textfield-name one-third">
                                                <input type="text" className="form-control" placeholder="Name" />
                                            </div>
                                            <div className="textfield-phone one-third">
                                                <input type="text" className="form-control" placeholder="Phone" />
                                            </div>
                                            <div className="book-date one-third">
                                                <input type="text" id="book_date" className="form-control" placeholder="M/D/YYYY" />
                                            </div>
                                            <div className="book-time one-third">
                                                <input type="text" id="book_time" className="form-control" placeholder="Time" />
                                            </div>
                                            <div className="select-wrap one-third">
                                                <div className="icon"><span class="ion-ios-arrow-down"></span></div>
                                                <select name='' id='' className="form-control">
                                                    <option value>Person</option>
                                                    <option value>1</option>
                                                    <option value>2</option>
                                                    <option value>3</option>
                                                    <option value>4+</option>
                                                </select>
                                            </div>
                                        </div>
                                        <input type="submit" className="search-submit btn btn-primary" value="Book a class" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="ftco-section bg-light">
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-5">
                            <div className="col-md-7 text-center heading-section ftco-animate">
                                <span className="subheading">Categories</span>
                                <h2>Our Dance Classes Categories</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 dish-menu">
                                <div className="nav nav-pills justify-content-center " data-aos='fade-up-right' id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <a className="nav-link py-3 px-4 active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"><span class=""></span> Biginner</a>
                                    <a className="nav-link py-3 px-4" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><span class=""></span> Intermidiate</a>
                                    <a className="nav-link py-3 px-4" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><span class=""></span> Pro</a>
                                </div>
                                <div className="tab-content py-5" id="v-pills-tabContent">
                                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="menus d-flex " data-aos='fade-up-right'>
                                                    <div className="menu-img" style={{backgroundImage: "url(images/rumba.jpg)"}}></div>
                                                    <div className="text d-flex">
                                                        <div className="one-half">
                                                            <h3>Rumba</h3>
                                                            <p>Group dance lessons</p>
                                                        </div>
                                                        <div className="one-forth">
                                                            <span className="price">$10</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="menus d-flex " data-aos='fade-up-right'>
                                                    <div className="menu-img" style={{backgroundImage: "url(images/tango.jpg)"}}></div>
                                                    <div className="text d-flex">
                                                        <div className="one-half">
                                                            <h3>Tango</h3>
                                                            <p><span>Group dance lessons</span></p>
                                                        </div>
                                                        <div className="one-forth">
                                                            <span className="price">$10</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="menus d-flex " data-aos='fade-up-right'>
                                                    <div className="menu-img" style={{backgroundImage: "url(images/swing.png)"}}></div>
                                                    <div className="text d-flex">
                                                        <div className="one-half">
                                                            <h3>Swing</h3>
                                                            <p>Group dance lessons</p>
                                                        </div>
                                                        <div className="one-forth">
                                                            <span className="price">$10</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="menus d-flex " data-aos='fade-up-right'>
                                                    <div className="menu-img" style={{backgroundImage: "url(images/salsa.png)"}}></div>
                                                    <div className="text d-flex">
                                                        <div className="one-half">
                                                            <h3>Salsa</h3>
                                                            <p><span>Group dance lessons</span></p>
                                                        </div>
                                                        <div className="one-forth">
                                                            <span className="price">$10</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="menus d-flex " data-aos='fade-up-right'>
                                                    <div className="menu-img" style={{backgroundImage: "url(images/afro.jpg)"}}></div>
                                                    <div className="text d-flex">
                                                        <div className="one-half">
                                                            <h3>Afro dance</h3>
                                                            <p><span>Group dance lessons</span></p>
                                                        </div>
                                                        <div className="one-forth">
                                                            <span className="price">$10</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="menus d-flex " data-aos='fade-up-right'>
                                                    <div className="menu-img" style={{backgroundImage: "url(images/chore.jpeg)"}}></div>
                                                    <div className="text d-flex">
                                                        <div className="one-half">
                                                            <h3>Dance choreography</h3>
                                                            <p>Group dance lessons</p>
                                                        </div>
                                                        <div className="one-forth">
                                                            <span className="price">$10</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="menus d-flex " data-aos='fade-up-right'>
                                                    <div className="menu-img" style={{backgroundImage: "url(images/chore.jpeg)"}}></div>
                                                    <div className="text d-flex">
                                                        <div className="one-half">
                                                            <h3>Dance choreography</h3>
                                                            <p>Group dance lessons</p>
                                                        </div>
                                                        <div className="one-forth">
                                                            <span className="price">$10</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="menus d-flex " data-aos='fade-up-right'>
                                                    <div className="menu-img" style={{backgroundImage: "url(images/afro.jpg)"}}></div>
                                                    <div className="text d-flex">
                                                        <div className="one-half">
                                                            <h3>Afro dance</h3>
                                                            <p>Group dance lessons</p>
                                                        </div>
                                                        <div className="one-forth">
                                                            <span className="price">$10</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="menus d-flex " data-aos='fade-up-right'>
                                                    <div className="menu-img" style={{backgroundImage: "url(images/afro.jpg)"}}></div>
                                                    <div className="text d-flex">
                                                        <div className="one-half">
                                                            <h3>Trending</h3>
                                                            <p>Group Dance lessons</p>
                                                        </div>
                                                        <div className="one-forth">
                                                            <span className="price">$10</span>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                            <div className="col-lg-6">
                                                <div className="menus d-flex ftco-animate">
                                                    <div className="menu-img" style={{backgroundImage: "url(images/stage.png)"}}></div>
                                                    <div className="text d-flex">
                                                        <div className="one-half">
                                                            <h3>Hip Hop</h3>
                                                            <p>Single Dance lessons</p>
                                                        </div>
                                                        <div className="one-forth">
                                                            <span className="price">$10</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="menus d-flex ftco-animate">
                                                    <div className="menu-img" style={{backgroundImage: "url(images/salsa.png)"}}></div>
                                                    <div className="text d-flex">
                                                        <div className="one-half">
                                                            <h3>Salsa</h3>
                                                            <p>Group Dance lessons</p>
                                                        </div>
                                                        <div className="one-forth">
                                                            <span className="price">$10</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="menus d-flex ftco-animate">
                                                    <div className="menu-img" style={{backgroundImage: "url(images/partie.jpg)"}}></div>
                                                    <div className="text d-flex">
                                                        <div className="one-half">
                                                            <h3>House Dance</h3>
                                                            <p>Group dance lessons</p>
                                                        </div>
                                                        <div className="one-forth">
                                                            <span className="price">$10</span>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="menus d-flex ftco-animate">
                                                    <div className="menu-img" style={{backgroundImage: "url(images/stage.png)"}}></div>
                                                    <div className="text d-flex">
                                                        <div className="one-half">
                                                            <h3>Hip Hop</h3>
                                                            <p>Single | Group dance lessons</p>
                                                        </div>
                                                        <div className="one-forth">
                                                            <span className="price">$10</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="menus d-flex ftco-animate">
                                                    <div className="menu-img" style={{backgroundImage: "url(images/stage.png)"}}></div>
                                                    <div className="text d-flex">
                                                        <div className="one-half">
                                                            <h3>Break dancing</h3>
                                                            <p>Single dance lessons</p>
                                                        </div>
                                                        <div className="one-forth">
                                                            <span className="price">$10</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="menus d-flex ftco-animate">
                                                    <div className="menu-img" style={{backgroundImage: "url(images/afro.jpg)"}}></div>
                                                    <div className="text d-flex">
                                                        <div className="one-half">
                                                            <h3>Wacking</h3>
                                                            <p>Single dance lessons</p>
                                                        </div>
                                                        <div className="one-forth">
                                                            <span className="price">$10</span>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                            <div className="col-lg-6">
                                                <div className="menus d-flex ftco-animate">
                                                    <div className="menu-img" style={{backgroundImage: "url(images/partie.jpg)"}}></div>
                                                    <div className="text d-flex">
                                                        <div className="one-half">
                                                            <h3>House Dance</h3>
                                                            <p>Group dance lessons</p>
                                                        </div>
                                                        <div className="one-forth">
                                                            <span className="price">$10</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="menus d-flex ftco-animate">
                                                    <div className="menu-img" style={{backgroundImage: "url(images/stage.png)"}}></div>
                                                    <div className="text d-flex">
                                                        <div className="one-half">
                                                            <h3>Vogue</h3>
                                                            <p>Group dance lessons</p>
                                                        </div>
                                                        <div className="one-forth">
                                                            <span className="price">$10</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="menus d-flex ftco-animate">
                                                    <div className="menu-img" style={{backgroundImage: "url(images/afro.jpg)"}}></div>
                                                    <div className="text d-flex">
                                                        <div className="one-half">
                                                            <h3>Trending</h3>
                                                            <p>Group dance lessons</p>
                                                        </div>
                                                        <div className="one-forth">
                                                            <span className="price">$10</span>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
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