import Image from "next/image";
import portrait from '../../../public/portrait.jpg'
import mailIcon from '../../../public/Mail Icon.svg'
import githubIcon from '../../../public/Github.svg'
import linkedinIcon from '../../../public/Linkedin Icon.svg'

import React from "react";
import {ClickableIcons} from "@/app/ClickableIcons";
import {NavBar} from "@/app/Core Components/Navigation Bar";

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
            {AboutMeText}
        </div>
    );
}

function RightSideOfHome(): JSX.Element {
    return (
        <div className="w-full sm:w-3/4 place-content-center">
            {AddPortrait}
            <BottomLinks/>
        </div>
    )

}


const AboutMeText: JSX.Element =
    (
        <>
            <div className="pt-8 text-my-white text-xl font-light font-inter">
                <p className=""> Hi! I’m a
                    Computer Science student at Northeastern University.
                    Besides a student, I am also . When I am not working, you can find me at the Huntington Ave <a href="https://locations.dunkindonuts.com/en/ma/boston/360-huntington-ave/341489?utm_source=google&utm_medium=local&utm_campaign=localmaps&utm_content=341489&y_source=1_MTIxMTEzMTItNzE1LWxvY2F0aW9uLndlYnNpdGU%3D" target="_blank"
                                                                                                                     className="text-orange-500 font-bold">Dunkin'</a> or meeting my friends
                    for some late night Mamacitas.</p>
                <p className="pt-6">As a professional, <strong className="font-bold text-my-lighter-teal">I am a results-driven software engineer with a background in successful
                    corporate implementations</strong>. As I progress through my career, I am always looking for new opportunities to
                    up-skill and develop my understanding of the ever-changing field of Computer Science. Although the tools,
                    technologies, and methodologies will differ, I plan to keep one thing constant; a commitment to users.
                    I want to be able to build impactful systems and software to improve the lives of other people. To me, people are what matter most</p>
            </div>
        </>
    );

const AddPortrait : JSX.Element =
    (
        <div className="p-2 grid justify-items-center self-end">
            <Image
                placeholder="blur"
                alt={"A picture of Joshua Torre in front of the Sydney Bridge and the Sydney Opera House"}
                src={portrait}
                className="max-w-[70%] sm:w-[100%] rounded-[20%] border-8 border-my-teal"
            />
        </div>
    );


export default function Home() {
    return (
        <div className="h-full w-full min-h-screen max-h-full bg-my-dark-blue p-6 ">
            <div className="w-full flex flex-col sm:flex-row m-auto">
                <div>
                    <h1 className="text-7xl font-black text-my-white pb-2 text-nowrap">About Me</h1>
                </div>
                <div className="w-full m-auto">
                    {NavBar}
                </div>
            </div>
            <div className="flex flex-col sm:flex-row">
                <LeftSideOfHome/>
                <RightSideOfHome/>
            </div>
        </div>
    )
}
