"use client"
import {motion} from "framer-motion";

import TypingEffect from '@/app/Home Components/TitlesAnimation'
import {Button} from './Core Components/ButtonComponent'
import React, {useState} from "react";
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
    const elementAnimation = {
        hidden: {opacity: 0, y: 30, x: -30},
        animate: { opacity: 1, y: 0, x: 0, transition: {duration: 0.3 } },
    };
    const containerRules = {
        hidden: {},
        animate: {
            transition: {
                staggerChildren: 0.4,
            },
        },
    };

    return (
        <>
            <div className="h-full w-full min-h-screen max-h-full bg-my-dark-blue p-12 flex flex-col sm:flex-row">
                <div className="w-4/6 sm:w-full pr-8 flex flex-col m-auto">
                    {TitleCard}
                    <motion.div
                        id="top lvl"
                        className="w-full flex-col justify-items-center pt-10"
                        variants={containerRules}
                        initial="hidden"
                        animate="animate">
                        <motion.div className="w-[75%] w-min-fit" variants={elementAnimation}>
                            <Button text={"Projects"} link={"/projects"} newWindow={false}/>
                        </motion.div>
                        <motion.div className="w-[75%] w-min-fit" variants={elementAnimation}>
                            <Button text={"Experience"} link={"/experience"} newWindow={false}/>
                        </motion.div>
                        <motion.div className="w-[75%] w-min-fit" variants={elementAnimation}>
                            <Button text={"Testimonials"} link={"/testimonials"} newWindow={false}/>
                        </motion.div>
                        <motion.div className="w-[75%] w-min-fit" variants={elementAnimation}>
                            <Button text={"About Me"} link={"/about"} newWindow={false}/>
                        </motion.div>
                    </motion.div>
                </div>
                <motion.div
                    className="w-full sm:w-3/4 place-content-center"
                    variants={containerRules}
                    initial="hidden"
                    animate="animate">
                    <motion.div variants={elementAnimation}>
                        <Portrait/>
                        <BottomLinks/>
                    </motion.div>
                </motion.div>
            </div>
        </>
)
}
