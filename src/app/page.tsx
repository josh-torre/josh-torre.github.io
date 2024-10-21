import Image from "next/image";
import portrait from '../../public/portrait.jpg'

import TypingEffect from './HomeComponents/TitlesAnimation'
import {Button} from './Core Components/ButtonComponent'
import "./globals.css";
import React from "react";
import BottomLinks from "@/app/Core Components/ContactInfoButtons";
import { Inter } from 'next/font/google'
import Portrait from "@/app/Core Components/JoshPortrait";

const inter = Inter({ subsets: ['latin'] })

const TitleCard : JSX.Element =  (
        <>
            <div className="font-inter w-fit">
                <h1 className="text-6xl xl:text-8xl font-black lg:text-nowrap">
                    Joshua Torre
                </h1>
                <div className="text-4xl xl:text-5xl text-my-teal text-nowrap font-light min-h-[48px]">
                <TypingEffect/>
                </div>
            </div>
        </>
    );

export default function Home() {
    return (
        <>
            <div className="h-full w-full min-h-screen max-h-full bg-my-dark-blue p-6 flex flex-col sm:flex-row">
                <div className="w-4/6 sm:w-full pr-8 flex flex-col m-auto">
                    {TitleCard}
                    <div className="w-full flex-col justify-items-center pt-10">
                        <Button text={"Projects"} link={"/projects"} newWindow={false}/>
                        <Button text={"Experience"} link={"/experience"} newWindow={false}/>
                        <Button text={"Testimonials"} link={"/testimonials"} newWindow={false}/>
                        <Button text={"About Me"} link={"/about"} newWindow={false}/>
                    </div>
                </div>
                <div className="w-full sm:w-3/4 place-content-center">
                    <Portrait/>
                    <BottomLinks/>
                </div>
            </div>
        </>
    )
}
