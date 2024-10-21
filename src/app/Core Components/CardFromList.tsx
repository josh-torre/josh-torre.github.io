import Image from "next/image";
import React from "react";
import {InfoCard} from "@/app/Core Components/Core Card";

type CardDataWithList = {
    title: string;
    subHeading: string;
    bodyText: string;
    picture: any;
    listedValue: string[];
    animate?: boolean | undefined;
};

export default function CardFromList({title, subHeading, bodyText, picture, listedValue, animate}: CardDataWithList) : JSX.Element {
    const shouldAnimate = animate == undefined ? false : animate;
    const listedBullets = listedValue.map<JSX.Element>((current: string, index: number) =>
    {return <li key={index}>{current}</li>;});
    const optionalImage : JSX.Element = picture == undefined ? <></> : (
        <div className="p-6">
            <Image
                alt={""}
                src={picture}
                className="border-5 border-my-tan rounded-xl aspect-square max-h-[250px] max-w-[350px]"/>
        </div>);

    return (
        <InfoCard
            title={title}
            subHeading={subHeading}
            bodyText={
                (<>
                <p className="text-l">{bodyText}</p>
                <ul className="list-disc text-l p-4">{listedBullets}</ul>
                </> )}
            optionalJSX={(<div className="flex items-center justify-center">{optionalImage}</div>)}
            animate={animate}
        />);
}