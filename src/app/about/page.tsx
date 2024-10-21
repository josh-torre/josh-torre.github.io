import {ClickableIcons} from "@/app/HomeComponents/ClickableIcons";
import {NavBar} from "@/app/Core Components/Navigation Bar";
import Image from "next/image";

import portrait from '../../../public/portrait.jpg'
import mailIcon from '../../../public/Mail Icon.svg'
import githubIcon from '../../../public/Github.svg'
import linkedinIcon from '../../../public/Linkedin Icon.svg'
import TitleCard from "@/app/Core Components/PageTitle";
import Portrait from "@/app/Core Components/JoshPortrait";
import BottomLinks from "@/app/Core Components/ContactInfoButtons";

export default function AboutMe() {
    return (
        <div className="h-full w-full min-h-screen max-h-full bg-my-dark-blue p-6">
            <header className="w-full flex flex-col sm:flex-row m-auto">
                <TitleCard title={"About Me"}/>
            </header>
            <div className="flex h-full flex-col sm:flex-row align-middle m-auto">
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
            Ambitious &bull; Curious &bull; Dependable
        </p>
    </>
);

const AboutMeText: JSX.Element =
    (
        <>
            <div className="pt-8 2xl:text-3xl md:text-xl sm:text-md font-inter">
                <p className="font-thin">Hi! My name is Josh and I&apos;m a Computer
                    Science student at Northeastern University. In high school, I discovered my passion for computer
                    science, and I&apos;ve been dedicated to learning ever since.
                    I&apos;m eager to bring this drive and enthusiasm to all of my projects,
                    <strong className="text-my-lighter-teal font-bold"> where I can apply my knowledge and exceed predefined expectations. </strong>
                    <br/>
                    <br/>
                    If you have any questions, feel free to reach out to me using the links on this page.
                </p>
            </div>
        </>
    );
