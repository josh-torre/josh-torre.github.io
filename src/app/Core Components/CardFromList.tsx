import Image from "next/image";
import React from "react";

type CardDataWithList = {
    title: string;
    subHeading: string;
    bodyText: string;
    picture: any;
    listedValue: string[];
};

export default function CardFromList({title, subHeading, bodyText, picture, listedValue}: CardDataWithList) : JSX.Element {
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
        <div className="p-3">
            <div
                className="w-full h-fit bg-black bg-opacity-30 rounded-2xl sm:flex sm:flex-col-2">
                <div className="p-6 justify-start">
                    <p className="font-bold text-2xl pb-2">{title}</p>
                    <p className='text-xl font-bold text-my-teal pb-2'>{subHeading}</p>
                    <p className="text-l">{bodyText}</p>
                    <ul className="list-disc text-l p-4">{listedBullets}</ul>
                </div>
                <div className="flex items-center justify-center">
                    {optionalImage}
                </div>
            </div>
        </div>
    );
}