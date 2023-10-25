"use client"

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Navigation from "../components/naviagtion";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';


export default function Reservation() {

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
                <section className="ftco-section">
                    <div className="container">
                        <div className="row no-gutters justify-content-center mb-5 pb-5">
                            <div className="col-md-7 text-center heading-section" data-aos='fade-up-right'>
                                <h2>Make a Reservation</h2>
                            </div>
                        </div>
                        <div className="row d-flex">
                            <div><video controls src="videos/one.mp4"></video></div>
                            <div className="col-md-8 makereservation p-5 bg-light" data-aos='fade-up-right'>
                                <form action="/submit">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for>Name</label>
                                                <input type="text" className="form-control" placeholder="Your Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for='email'>Email</label>
                                                <input type="email" className="form-control" placeholder="Your Email" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for='phone'>Phone</label>
                                                <input type="text" className="form-control" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="">Phone</label>
                                                <input type="tel" class="form-control" id="book_date" placeholder="Date" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for=''>Time</label>
                                                <input type="text" className="form-control" id="book_time" placeholder="Time" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for=''>Person</label>
                                                <div className="select-wrap one-third">
                                                    <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                                    <select name id className="form-control">
                                                        <option value>Speciality</option>
                                                        <option value>Private Lessons</option>
                                                        <option value>Wedding Dance Lessons</option>
                                                        <option value>Music choreography</option>
                                                        <option value>Stage Dancing</option>
                                                        <option value>Dance Workout</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-3">
                                            <div className="form-group">
                                                <input type="submit" value="Make a Reservation" className="btn btn-primary py-3 px-5" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
} 