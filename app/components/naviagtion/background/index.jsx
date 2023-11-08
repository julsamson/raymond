"use client"

import React, { useEffect, useState } from "react";
import './slider.css'
import imageSlider from "./data";
import Link from "next/link";
import Image from "next/image";
// import { useState } from "react";

export default function Slider() {

    const[currentState, setCurrentState] =useState(0)

    // using timer to change the background image

    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(currentState === 2){
                setCurrentState(0)
            }else{
                setCurrentState(currentState + 1)
            }
        },5000)
        return ()=>clearTimeout(timer)
    },[currentState])

    const bgImage = {
        backgroundImage: `url('${imageSlider[currentState].url}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%'
    }

    //calling the other data from the other

    const goToNext = (currentState) => {
        setCurrentState(currentState)
    }

    return (
        <div className="container-style">
            <div style={bgImage}></div>
            <div className="transparent"></div>
            <div className="description top-[20%] md:left-[10%] left-3">
                <div className="text-center leading-[8px] md:leading-none">
                    <h1 className="text-xl pt-2 text-left"><Link href="/reservation" className="text-black md:font-bold font-semibold">{imageSlider[currentState].title}</Link></h1>
                    <p className="text-black md:text-lg text-left">{imageSlider[currentState].body}</p>
                </div>
                {/* <div className="boullt">
                    {
                        imageSlider.map((imageSlider, currentState)=> (
                            <span className="w-[20px] h-[12px] md:w-[45px]" key={currentState} onClick={()=>goToNext(currentState)}></span>
                        ))
                    }
                </div> */}
            </div>
        </div>
    )
}