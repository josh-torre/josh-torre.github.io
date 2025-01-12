"use client"
import { InfoCard } from "@/app/Core Components/Core Card"
import TitleCard from "@/app/Core Components/PageTitle";
import { motion } from "framer-motion";
import Image from 'next/image'
import Link from 'next/link'

import "../globals.css";
import React from "react";

export default function Root() {
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
            <motion.div
                className="h-full w-full min-h-screen max-h-full bg-my-dark-blue p-12 flex flex-col"
                variants={containerRules}
                initial="hidden"
                animate="animate">
                <TitleCard title="Projects"/>
                <div>

                    <InfoCard
                        title={"Passwordle: Gamified Cyber Security Education"}
                        subHeading={"Go, React, Next.JS, MongoDB, Figma, Typescript"}
                        bodyText={
                        <div className="w-full h-full items-center justify-center">
                            <ul className="list-disc p-4">
                                <li>
                                Established a gamified platform where users can learn about password security by trying to guess the world’s most common password list, rockyou.txt in a familiar form factor 
                                </li>
                                <li>
                                Created custom authentication layer including authentication middleware, persistent sessions and secure password storage
                                </li>
                                <li>
                                Implemented a suite of backend endpoints for the creation and authentication of users, the creation of new “password puzzles”, the submission of guesses and more while hiding the sensitive user and puzzle information 
                                </li>
                                <li>
                                Optimizied the search of new password puzzles from a pool of over 14 million possible passwords  
                                </li>
                            </ul>
                        </div>}
                        animate={true}
                        />
                    <Link href="https://github.com/GenerateNU/snapper">
                        <InfoCard
                        title={"Snapper: A Social Platform to Connect Marine-Enthusiasts Around the World"}
                        subHeading={"Typesript, React Native, Tailwind, MongoDB, Figma, Supabase, Docker"}
                        bodyText={
                        <div className="w-full h-full items-center justify-center">
                            <ul className="list-disc p-4">
                                <li>
                                Contributed to the front-end component library by developing extensible react native components which enabled user friendly, functionality across the platform 
                                </li>
                                <li>
                                Leveraged an s3 bucket alongside a backend pipeline to associate user submitted images with a public facing link to effectively utilize database storage and simplify image retrieval 
                                </li>
                                <li>
                                Developed CRUD endpoints for users’ dive posts to enable users to share relevant information about their dives 
                                </li>
                                <li>
                                Implemented and optimized fuzzy search on thousands of marine species availabile in our database  
                                </li>
                                <li>
                                  Designed and implemented user flows for the creation of dive posts for user profiles
                                </li>
                            </ul>
                        </div>}
                        optionalJSX={<Image src='/snapper designs.svg' alt='An image of the designs for the project, Snapper' width={400} height={400} />}
                        animate={true}
                        />
                    </Link>
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
                        animate={true}
                        />
                    <InfoCard
                        title={"Maze Generator and Solver"}
                        subHeading={"TypeScript, P5JS, GitHub, List Heap, BFS/DFS, A*"}
                        bodyText={<p>Developed a program capable of developing a maze with a single path using Kruskal&apos;s algorithm.
                            The maze can then be solved using Breath First Search (BFS), Depth First Search (DFS), and the A*
                            algorithm using the Manhattan distance heuristic. The program also supports both hexagonal and
                            square mazes, allowing for an extra layer of complexity for users who want a challenge.</p>}
                        animate={true}
                    />
                    <InfoCard
                        title={"Soft Collections Automation"}
                        subHeading={"Robotic Process Automation, HTML, CSS, Azure Devops"}
                        bodyText={<p>Developed customer facing soft collections report for SPIROL International.
                             This project was rolled out to 14 branches across the globe and served SPIROL’s more than
                             30,000 customers. This has an estimated time savings of over 875 hours per year as well as
                             faster customer response time and customer perception.</p>}
                        animate={true}
                    />
                    <InfoCard
                        title={"Automated Identity and Access Management (IAM)"}
                        subHeading={"Active Directory, PowerShell, Robotic Process Automation"}
                        bodyText={<p>Developed a pipeline for SPIROL International between Human Resources and IT to streamline
                            the new hire process by automating the creation of accounts in Active Directory, Lotus Notes
                            Profiles, Logon Scripts, and Networked Drives with relevant permissions.</p>}
                        animate={true}
                    />
                    <InfoCard
                        title={"Image Compression - Seam Removal*"}
                        subHeading={"Java, Object Oriented Design"}
                        bodyText={<p>Developed a program that will take seams of an image and remove them to reduce the size of an
                             image. It will remove the “least interesting” seams which is by calculating the average brightness
                             of the adjacent horizontal and vertical pixels. The project was developed with the SOLID object
                             oriented design principles in mind.</p>}
                        animate={true}
                    />
                </div>
                <p className="text-my-tan font-bold text-xl p-4 place-content-center float-right">
                    All code available upon request. All projects marked with a (*) are class projects</p>
            </motion.div>
        </>
    )
}
