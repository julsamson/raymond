"use client"

import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import Link from "next/link"
import { dancers } from "./data"



export default function Dancers() {

    const [currentState, setCurrentState] = useState(0)

    const handlePrev = () => {
        if(currentState > 0){
            setCurrentState(currentState -1);
        }
        else if(currentState === 0){
            setCurrentState(4)
        }
    }
    const handleNext = () => {
        if(currentState < dancers.length -1){
            setCurrentState(currentState + 1)
        }
        else if(currentState === 4){
            setCurrentState(0)
        }
    }


    const bgImages = {
        backgroundImage: `url('${dancers[currentState].url}')`,
        border: '1px solid red'
    }

    return (
        <div className="flex items-center justify-center min-h-screen space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer" onClick={handlePrev}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
            </svg>
            <div className="item text-center">
                <div className="testimony-wrap p-4 pb-5 flex-grow">
                    <div className="user-img mb-4" style={bgImages}></div>
                    <div className="text">

                        <p className="mb-5">{dancers[currentState].description}</p>
                        <p className="name">{dancers[currentState].name}</p>
                        <span className="position">{dancers[currentState].position}</span>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer" onClick={handleNext}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
            </svg>
        </div>
    )
}