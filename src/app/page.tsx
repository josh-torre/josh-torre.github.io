import Image from "next/image";
import portrait from '../../public/portrait.jpg'
import mailIcon from '../../public/Mail Icon.svg'
import githubIcon from '../../public/Github.svg'
import linkedinIcon from '../../public/Linkedin Icon.svg'
import TypingEffect from './TitlesAnimation'
import {MyButton} from './Core Components/ButtonComponent'

import "./globals.css";
import React from "react";
import {ClickableIcons} from "@/app/ClickableIcons";

 function TitleCard() : JSX.Element {
    return (
        <>
            <div className="text-my-white font-inter">
                <h1 className="text-8xl font-black">
                    Joshua Torre
                </h1>
                <div className="text-5xl text-my-teal text-nowrap font-light min-h-[48px]">
                <TypingEffect/>
                </div>
            </div>
        </>
    )
 }

function BottomLinks(): JSX.Element {
    return (
        <div className="w-full flex justify-center">
                <div className="grid grid-cols-3 gap-4">
                    <ClickableIcons
                        href={"mailto:torre.jo@northeastern.edu"}
                        altText={"Mail Icon. Click to send me an email!"}
                        newWindow={true}
                        img={mailIcon}/>
                    <ClickableIcons
                        href={"https://www.linkedin.com/in/joshua-torre/"}
                        altText={"Linkedin Logo"}
                        newWindow={true}
                        img={linkedinIcon}/>
                    <ClickableIcons
                    href={"https://github.com/josh-torre/"}
                    altText={"GitHub Logo"}
                    newWindow={true}
                    img={githubIcon}/>
                </div>
            </div>
);
}


function LeftSideOfHome(): JSX.Element {
     return (
         <div className="w-4/6 sm:w-full pr-8 flex flex-col m-auto">
             <TitleCard/>
             <div className="w-full flex-col justify-items-center pt-10">
                 <MyButton text={"Projects"} link={"/projects"} newWindow={false}/>
                 <MyButton text={"Experience"} link={"/experience"} newWindow={false}/>
                 <MyButton text={"Testimonials"} link={"/testimonials"} newWindow={false}/>
                 <MyButton text={"About Me"} link={"/about"} newWindow={false}/>
             </div>
         </div>
     );
}

function RightSideOfHome(): JSX.Element {
    return (
        <div className="w-full sm:w-3/4 place-content-center">
            <AddPortrait/>
            <BottomLinks/>
        </div>
    )

}

function AddPortrait() {
    return (
        <div className="p-2 grid justify-items-center self-end">
            <Image
                placeholder="blur"
                alt={"A picture of Joshua Torre in front of the Sydney Bridge and the Sydney Opera House"}
                src={portrait}
                className="max-w-[70%] sm:w-[100%] rounded-[20%] border-8 border-my-teal"
                />
        </div>
    );
}

export default function Home() {
    return (
        <>
            <div className="h-full w-full min-h-screen max-h-full bg-my-dark-blue p-6 flex flex-col sm:flex-row">
                <LeftSideOfHome/>
                <RightSideOfHome/>
            </div>
        </>
    )
}
