"use client"

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import Script from "next/script";
import Navigation from "../components/naviagtion";


export default function Contact() {

    const mapRef = useRef()

    return (
        <>
        <Navigation />
            <div>
                <section className="ftco-section contact-section">
                    <div className="container">
                        <div className="row block-9 mb-4">
                            <div className="col-md-6 pr-md-5 flex-column">
                                <div className="row d-block flex-row">
                                    <h2 className="h4 mb-4">Contact Information</h2>
                                    <div className="col mb-3 d-flex py-4 border" style={{ background: "white" }}>
                                        <div className="align-self-center">
                                            <p className="mb-0"><span>Address:</span> Dar es salaam, Tanzania</p>
                                        </div>
                                    </div>
                                    <div className="col mb-3 d-flex py-4 border" style={{ background: "white" }}>
                                        <div className="align-self-center">
                                            <p className="mb-0"><span>Phone:</span> <Link href="tel://1234567920">+255 700 000 000</Link></p>
                                        </div>
                                    </div>
                                    <div className="col mb-3 d-flex py-4 border" style={{ background: "white" }}>
                                        <div className="align-self-center">
                                            <p className="mb-0">
                                                <span>Email:</span>
                                                <Link href="https://preview.colorlib.com/cdn-cgi/l/email-protection#9af3f4fcf5dae3f5efe8e9f3eeffb4f9f5f7">
                                                    <span className="__cf_email__" data-cfemail="442d2a222b043d2b3136372d30216a272b29">rayruff@gmail.com</span>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col mb-3 d-flex py-4 border" style={{ background: "white" }}>
                                        <div className="align-self-center">
                                            <p className="mb-0"><
                                                span>Website</span>
                                                <Link href="#">dancewithraymond.com</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <form action="/submit">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Subject" />
                                    </div>
                                    <div className="form-group">
                                        <textarea name="text" id cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-12 rounded-lg" id="map" ref={mapRef}>

                                <Script
                                    id="google-maps"
                                    src="https://maps.googleapis.com/maps/api/js"
                                    onReady={() => {
                                        new google.maps.Map(mapRef.current, {
                                            center: { lat: -6.807938731364883, lng: 39.31078828135509 },
                                            zoom: 10,
                                        })
                                    }}
                                />
                                {/* <iframe src="https://www.google.com/maps/@-6.8210623,39.2876586,14.49z?entry=ttu" frameborder="1"></iframe> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
} 