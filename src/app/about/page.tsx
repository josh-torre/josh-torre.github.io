import {ClickableIcons} from "@/app/ClickableIcons";
import {NavBar} from "@/app/Core Components/Navigation Bar";
import Image from "next/image";

import portrait from '../../../public/portrait.jpg'
import mailIcon from '../../../public/Mail Icon.svg'
import githubIcon from '../../../public/Github.svg'
import linkedinIcon from '../../../public/Linkedin Icon.svg'

function BottomLinks(): JSX.Element {
    return (
        <div className="w-full flex justify-center">
            <div className="grid grid-cols-3 gap-4">
                <ClickableIcons
                    href={""}
                    altText={"Mail Icon. Click to send me an email!"}
                    newWindow={true}
                    img={mailIcon}
                    shouldAlert={true}/>
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
        <div className="w-4/6 sm:w-full pr-8 pl-8 flex flex-col m-auto">
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
            <div className="pt-8 2xl:text-3xl md:text-xl sm:text-md font-light font-inter">
                <p className=""> Hi! I’m a Computer Science student at Northeastern University.
                    Besides a student, I am also an avid music enjoyer and I had almost 99,699 minutes of listening in 2023.
                     When I am not working, you can find me at the Huntington Ave <a href="https://locations.dunkindonuts.com/en/ma/boston/360-huntington-ave/341489?utm_source=google&utm_medium=local&utm_campaign=localmaps&utm_content=341489&y_source=1_MTIxMTEzMTItNzE1LWxvY2F0aW9uLndlYnNpdGU%3D" target="_blank" className="text-orange-500 font-bold">
                    Dunkin&apos;</a> or meeting my friends for some late night Mamacitas.</p>
                <p className="pt-6"><strong className="font-bold text-my-lighter-teal">I am also results-driven software engineer with a background in successful
                    corporate implementations</strong>. As I progress through my career, I am always looking for new opportunities to
                    up-skill and develop my understanding of the ever-changing field of Computer Science. Although the tools,
                    technologies, and methodologies will differ, I plan to keep one thing constant; a commitment to users.
                    I want to be able to build impactful systems and software to improve the lives of other people. To me, people are what matter most.
                    For any inquires, feel free to reach out to me via my email or LinkedIn profile which are both linked on this page.</p>
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
                className="max-w-[60%] sm:w-[90%] rounded-[20%] border-8 border-my-teal"
            />
        </div>
    );


export default function Home() {
    return (
        <div className="h-full w-full min-h-screen max-h-full bg-my-dark-blue p-6">
            <header className="w-full flex flex-col sm:flex-row m-auto">
                <div>
                    <h1 className="text-7xl font-black pb-2 text-nowrap">About Me</h1>
                </div>
                <div className="w-full m-auto">
                    {NavBar}
                </div>
            </header>
            <div className="flex h-full flex-col sm:flex-row align-middle m-auto">
                <LeftSideOfHome/>
                <RightSideOfHome/>
            </div>
        </div>
    )
}
