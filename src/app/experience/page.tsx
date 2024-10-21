import React from "react";
import SPIROL_IMAGE from "../../../public/SPIROL-LOGO.jpeg";
import Robotics_Image from "../../../public/WorldChampEngDesign.jpg";
import KHOURY_Image from "../../../public/CSandYou.png";
import TitleCard from "@/app/Core Components/PageTitle";
import CardFromList from "@/app/Core Components/CardFromList";

export default function Root() {
    return (
        <>
            <div className="h-full w-full min-h-screen max-h-full bg-my-dark-blue p-6 flex flex-col">
                <TitleCard title="Experience"/>
                <div>
                    <CardFromList
                        title={"Software Engineering Intern"}
                        subHeading={"SPIROL International | Summers 2021 - 2024 "}
                        bodyText={""}
                        listedValue={["Implemented SPIROL’s first business process automations (UiPath, C#) to save an estimated 3,500 hours on manual tasks previously transacted in a dated ERP system, validating improvements with five beta testers",
                            "Automated the soft collections process for 30K customers using UiPath, HTML, and the Robotic Enterprise Framework, resulting in faster response times and an enhanced user experience to improve customer perception",
                            "Initiated Agile best practices via Azure DevOps to improve deliverable quality and version control",
                            "Strategically refactored existing codebase for improved process uptime, integrity of data, and ease of use",
                            "Collaborated with global stakeholders to improve existing automations and measure impact on the organization"]}
                        picture={SPIROL_IMAGE}/>
                    <CardFromList
                        title={"Teaching Assistant (TA)"}
                        subHeading={"Northeastern University | January 2024 - Present "}
                        bodyText={""}
                        listedValue={["Led a team of 15 TAs to provide additional tutoring for students in need and measured student progress",
                            "Directed a lab of 38 students and conducted lecture-style sessions to reinforce course learning goals",
                            "Taught core functional programming (FP) concepts and software development best practices",
                            "Conducted the grading of exams, homework and labs in a timely manner with actionable and productive feedback"]}
                        picture={KHOURY_Image}/>
                    <CardFromList
                        title={"Lead Developer"}
                        subHeading={"Killingly High School Robotics | Aug 2021 - May 2023 "}
                        bodyText={""}
                        listedValue={["Led a team of 3 developers and built accurate systems of movement of the robot for the autonomous portions of World, National and International Competitions",
                            "Worked with engineering and design teams to refine mechanical and software systems",
                            "Crowned World Champions in Engineering Design at the Vex Robotics World Championship, 2022",
                            "Awarded the Engineering Design award at the Japanese Regionals event 2023"]}
                        picture={Robotics_Image}/>
                    <CardFromList
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