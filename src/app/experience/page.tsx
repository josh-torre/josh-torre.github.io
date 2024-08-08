import {MakeCard} from "@/app/Core Components/Core Card";
import linkedinIcon from "public/Linkedin Icon.svg";
import React from "react";
import {NavBar} from "@/app/Core Components/Navigation Bar";
import Image from "next/image";
import SPIROL_IMAGE from "../../../public/SPIROL-LOGO.jpeg";
import Robotics_Image from "../../../public/WorldChampEngDesign.jpg";
import KHOURY_Image from "../../../public/CSandYou.png";

const TitleCard : JSX.Element =
    (
        <div className="w-full flex flex-col sm:flex-row m-auto p-3">
            <div>
                <p className="text-7xl font-black pb-2">Experience</p>
            </div>
            <div className="w-full m-auto">
                {NavBar}
            </div>
        </div>
    );


type CardDataWithList = {
    title: string;
    subHeading: string;
    bodyText: string;
    picture: any;
    listedValue: string[];
};

function MakeCardWithList({title, subHeading, bodyText, picture, listedValue}: CardDataWithList) : JSX.Element {
    const listedBullets = listedValue.map<JSX.Element>((current: string, index: number) =>
    {return <li key={index}>{current}</li>;});
    const optionalImage : JSX.Element = picture == undefined ? <></> : (
        <div className="p-6">
            <Image
            alt={"altText"}
            src={picture}
            className="border-5 border-my-tan rounded-xl aspect-square max-h-[250px] max-w-[350px]"/>
        </div>);

    return (
        <div className="p-3">
            <div
                className="w-full h-fit bg-black bg-opacity-30 rounded-2xl sm:flex sm:flex-col-2">
                <div className="p-6 justify-start">
                    <p className="font-bold text-2xl pb-2">{title}</p>
                    <p className='text-xl font-bold text-my-teal pb-2'>{subHeading}</p>
                    <p className="text-l">{bodyText}</p>
                    <ul className="list-disc text-l p-4">{listedBullets}</ul>
                </div>
                <div className="flex flex-col items-center w-fit">
                    {optionalImage}
                </div>
            </div>
        </div>
    );
}

export default function Root() {
    return (
        <>
            <div className="h-full w-full min-h-screen max-h-full bg-my-dark-blue p-6 flex flex-col">
                {TitleCard}
                <div>
                    <MakeCardWithList
                        title={"Software Engineering Intern"}
                        subHeading={"SPIROL International | Summers 2021 - 2024 "}
                        bodyText={""}
                        listedValue={["Saved over 1500 hours annually by implementing business process automations with UIPath",
                            "Leveraged Agile methodologies and GIT to improve deliverable quality and version control",
                            "Lead weekly meetings with 5 beta testers to action feedback and measure impact",
                            "Strategically refactored the existing codebase for improved runtime and consistency",
                            "Created user guides and technical documentation for worldwide stakeholders",
                            "Established the company's first-ever process automations using UIPath, an RPA tool",
                            "Collaborated with other technical staff to roll out unattended automations across the global organization"]}
                        picture={SPIROL_IMAGE}/>
                    <MakeCardWithList
                        title={"Teaching Assistant (TA)"}
                        subHeading={"Northeastern University | January 2024 - Present "}
                        bodyText={""}
                        listedValue={["\n" +
                            "Led a lab of 38 students and conducted lecture-style sessions to reinforce course learning goals",
                            "Explained technical concepts using nontechnical parallelisms and analogies to facilitate learning",
                            "Conducted the grading of exams, homework and labs in a timely manner with actionable and productive feedback"]}
                        picture={KHOURY_Image}/>
                    <MakeCardWithList
                        title={"Lead Developer"}
                        subHeading={"Killingly High School Robotics | Aug 2021 - May 2023 "}
                        bodyText={""}
                        listedValue={["Led a team of 3 developers and built accurate systems of movement of the robot for the autonomous portions of World, National and International Competitions",
                            "Worked with engineering and design teams to refine mechanical and software systems",
                            "Crowned World Champions in Engineering Design at the Vex Robotics World Championship, 2022",
                            "Awarded the Engineering Design award at the Japanese Regionals event 2023"]}
                        picture={Robotics_Image}/>
                    <MakeCardWithList
                        title={"Technician's Assistant"}
                        subHeading={"Killingly Public Schools | June 2020 - May 2023 "}
                        bodyText={""}
                        listedValue={["\n" +
                        "Cleaned and reset devices for students across the district for IPads, Chromebooks and MacBooks",
                            "Preformed installation of computers, monitors, printers and other devices across the district",
                        "Aided in the completion of tickets alongside a technician of printers, computers, and other devices"]}
                        picture={undefined}/>
                </div>
            </div>
        </>
    )
}