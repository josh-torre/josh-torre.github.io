"use client"
import TitleCard from "@/app/Core Components/PageTitle";
import Portrait from "@/app/Core Components/JoshPortrait";
import BottomLinks from "@/app/Core Components/ContactInfoButtons";
import {motion} from "framer-motion";


export default function AboutMe() {
    return (
        <div className="h-full w-full min-h-screen max-h-full bg-my-dark-blue p-6">
            <header className="w-full flex flex-col sm:flex-row m-auto">
                <TitleCard title={"About Me"}/>
            </header>
            <div className="flex h-full flex-col sm:flex-row">
                <div className="w-4/6 sm:w-full pr-8 pl-8 flex flex-col m-auto">
                    <div className="flex justify-center items-center text-center">
                        {ThreeWords}
                    </div>
                    {AboutMeText}
                </div>
                <div className="w-full sm:w-3/4 place-content-center">
                    <Portrait/>
                    <BottomLinks/>
                </div>
            </div>

        </div>
    )
}

const ThreeWords: JSX.Element = (
    <>
        <p className="pt-8 text-my-lighter-teal font-extrabold 2xl:text-5xl md:text-3xl sm:text-xl">
            <motion.span
                whileHover={{ scale: 1.1, color: '#ffffff' }} style={{ display: 'inline-block' }}>
                &nbsp;Ambitious &nbsp;</motion.span> &bull;
            <motion.span whileHover={{ scale: 1.1, color: '#ffffff' }} style={{ display: 'inline-block' }}>
                &nbsp; Curious&nbsp;</motion.span> &bull;
            <motion.span whileHover={{ scale: 1.1, color: '#ffffff' }} style={{ display: 'inline-block' }}>
                &nbsp; Dependable&nbsp;</motion.span>
        </p>
    </>
);


const AboutMeText: JSX.Element =
    (
        <>
            <div className="pt-8 2xl:text-4xl md:text-2xl sm:text-lg font-inter">
                <p className="text-light">Hi! My name is Josh and I&apos;m a Computer
                    Science student at Northeastern University. In high school, I discovered my passion for computer
                    science, and I&apos;ve been dedicated to learning ever since.
                    I&apos;m eager to bring this drive and enthusiasm to all of my projects,
                    <strong className="text-my-lighter-teal font-bold"> where I can apply my knowledge and exceed predefined expectations. </strong>
                    If you have any questions, feel free to reach out to me using the links on this page.
                </p>
            </div>
        </>
    );
