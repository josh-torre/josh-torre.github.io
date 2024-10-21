import {InfoCard} from "@/app/Core Components/Core Card"
import TitleCard from "@/app/Core Components/PageTitle";

import "../globals.css";
import React from "react";
import {Button} from "@/app/Core Components/ButtonComponent";

export default function Root() {
    return (
        <>
            <div className="h-full w-full min-h-screen max-h-full bg-my-dark-blue p-6 flex flex-col">
                <TitleCard title="Projects"/>
                <div>
                    <InfoCard
                        title={"YCSB+T: Database Performance Benchmarking*"}
                        subHeading={"MongoDB, FoundationDB, Amazon Web Services, Object Oriented Design"}
                        bodyText={<p>YCSB+T is a database benchmarking tool that can give statistics about the latency
                            for read write and commits for database transactions. This allows for an objective way for
                            developers to compare what database they choose and make educated decisions based on their use case.
                            <br/><br/>I was a part of a 4 person agile team that contributed to the existing YCSB+T code base.
                            Together we added additional drivers for MongoDB, FoundationDB and CasandraDB.
                            We implemented additional reporting on the commit time difference between read and write.
                            I also contributed to new methods of testing databases by creating a new workload. This workload
                            primarily tests the performance write commits.
                            At the end of the project, a stress-test was preformed using an EC2 instance on AWS to measure
                            the latency for the completed drivers.</p>}
                        />
                    <InfoCard
                        title={"Maze Generator and Solver"}
                        subHeading={"TypeScript, P5JS, GitHub, List Heap, BFS/DFS, A*"}
                        bodyText={<p>Developed a program capable of developing a maze with a single path using Kruskal&apos;s algorithm.
                            The maze can then be solved using Breath First Search (BFS), Depth First Search (DFS), and the A*
                            algorithm using the Manhattan distance heuristic. The program also supports both hexagonal and
                            square mazes, allowing for an extra layer of complexity for users who want a challenge.</p>}
                    />
                    <InfoCard
                        title={"Soft Collections Automation"}
                        subHeading={"Robotic Process Automation, HTML, CSS, Azure Devops"}
                        bodyText={<p>Developed customer facing soft collections report for SPIROL International.
                             This project was rolled out to 14 branches across the globe and served SPIROL’s more than
                             30,000 customers. This has an estimated time savings of over 875 hours per year as well as
                             faster customer response time and customer perception.</p>}
                    />
                    <InfoCard
                        title={"Automated Identity and Access Management (IAM)"}
                        subHeading={"Active Directory, PowerShell, Robotic Process Automation"}
                        bodyText={<p>Developed a pipeline for SPIROL International between Human Resources and IT to streamline
                            the new hire process by automating the creation of accounts in Active Directory, Lotus Notes
                            Profiles, Logon Scripts, and Networked Drives with relevant permissions.</p>}
                    />
                    <InfoCard
                        title={"Image Compression - Seam Removal*"}
                        subHeading={"Java, Object Oriented Design"}
                        bodyText={<p>Developed a program that will take seams of an image and remove them to reduce the size of an
                             image. It will remove the “least interesting” seams which is by calculating the average brightness
                             of the adjacent horizontal and vertical pixels. The project was developed with the SOLID object
                             oriented design principles in mind.</p>}
                    />
                </div>
                <p className="text-my-tan font-bold text-xl p-4 place-content-center float-right">
                    All code available upon request. All projects marked with a (*) are class projects</p>
            </div>
        </>
    )
}
