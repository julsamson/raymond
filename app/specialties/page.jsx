"use client"

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Navigation from "../components/naviagtion";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { SpecialtiesData } from "../data";
import { title } from "process";


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
                                <h2>{SpecialtiesData.title}</h2>
                            </div>
                        </div>
                        <div className="row d-flex no-gutters">
                            <div className="col-lg-6">
                                <div className="block-3 d-md-flex" data-aos='fade-up-right'>
                                    <div className="image order-last" style={{backgroundImage: "url(images/private.jpeg)"}}></div>
                                    <div className="text text-center order-first">
                                        <h2 className="heading">{SpecialtiesData.privateLesson[0].title}</h2>
                                        <p>{SpecialtiesData.privateLesson[0].description}</p>
                                        <span className="price">{SpecialtiesData.privateLesson[0].price}</span>
                                    </div>
                                </div>
                                <div className="block-3 d-md-flex" data-aos='fade-up-right'>
                                    <div className="image order-first" style={{backgroundImage: "url(images/wedding.png)"}}></div>
                                    <div className="text text-center order-first">
                                        <h2 className="heading">{SpecialtiesData.WeddingLesson[0].title}</h2>
                                        <p>{SpecialtiesData.WeddingLesson[0].description}</p>
                                        <span className="price">{SpecialtiesData.WeddingLesson[0].price}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="block-3 d-md-flex " data-aos='fade-up-right'>
                                    <div className="image order-last" style={{backgroundImage: "url(images/partie.jpg)"}}></div>
                                    <div className="text text-center order-first">
                                        <h2 className="heading">{SpecialtiesData.danceLesson[0].title}</h2>
                                        <p>{SpecialtiesData.danceLesson[0].description}</p>
                                        <span className="price">{SpecialtiesData.danceLesson[0].price}</span>
                                    </div>
                                </div>
                                <div className="block-3 d-md-flex " data-aos='fade-up-right'>
                                    <div className="image order-first" style={{backgroundImage: "url(images/chore.jpeg)"}}></div>
                                    <div className="text text-center order-first">
                                        <h2 className="heading">{SpecialtiesData.musicLesson[0].title}</h2>
                                        <p>{SpecialtiesData.musicLesson[0].description}</p>
                                        <span className="price">{SpecialtiesData.musicLesson[0].price}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="block-3 d-md-flex " data-aos='fade-up-right'>
                                    <div className="image order-last" style={{backgroundImage: "url(images/stage.png)"}}></div>
                                    <div className="text text-center order-first">
                                        <h2 className="heading">{SpecialtiesData.stageLesson[0].title}</h2>
                                        <p>{SpecialtiesData.stageLesson[0].description}</p>
                                        <span className="price">{SpecialtiesData.stageLesson[0].price}</span>
                                    </div>
                                </div>
                                <div className="block-3 d-md-flex " data-aos='fade-up-right'>
                                    <div className="image order-first" style={{backgroundImage: "url(images/workout.jpeg)"}}></div>
                                    <div className="text text-center order-first">
                                        <h2 className="heading">{SpecialtiesData.workoutLesson[0].title}</h2>
                                        <p>{SpecialtiesData.workoutLesson[0].description}</p>
                                        <span className="price">{SpecialtiesData.workoutLesson[0].price}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="block-3 d-md-flex " data-aos='fade-up-right'>
                                    <div className="image order-last" style={{backgroundImage: "url(images/wedding.png)"}}></div>
                                    <div className="text text-center order-first">
                                        <h2 className="heading">{SpecialtiesData.WeddingLesson[0].title}</h2>
                                        <p>{SpecialtiesData.WeddingLesson[0].title}</p>
                                        <span className="price">{SpecialtiesData.WeddingLesson[0].price}</span>
                                    </div>
                                </div>
                                <div className="block-3 d-md-flex " data-aos='fade-up-right'>
                                    <div className="image order-first" style={{backgroundImage: "url(images/partie.jpg)"}}></div>
                                    <div className="text text-center order-first">
                                        <h2 className="heading">{SpecialtiesData.danceLesson[0].title}</h2>
                                        <p>{SpecialtiesData.danceLesson[0].description}</p>
                                        <span className="price">{SpecialtiesData.danceLesson[0].price}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="block-3 d-md-flex " data-aos='fade-up-right'>
                                    <div className="image order-last" style={{backgroundImage: "url(images/stage.png)"}}></div>
                                    <div className="text text-center order-first">
                                        <h2 className="heading">{SpecialtiesData.stageLesson[0].title}</h2>
                                        <p>{SpecialtiesData.stageLesson[0].description}</p>
                                        <span className="price">{SpecialtiesData.stageLesson[0].price}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="block-3 d-md-flex " data-aos='fade-up-right'>
                                    <div className="image order-last" style={{backgroundImage: "url(images/workout.jpeg)"}}></div>
                                    <div className="text text-center order-first">
                                        <h2 className="heading">{SpecialtiesData.workoutLesson[0].title}</h2>
                                        <p>{SpecialtiesData.workoutLesson[0].description}</p>
                                        <span className="price">{SpecialtiesData.workoutLesson[0].price}</span>
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