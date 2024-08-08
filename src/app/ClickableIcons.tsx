"use client"
import {motion} from "framer-motion";
import Image from "next/image";
import React from "react";


type ClickableInfo = {
    altText: string;
    href: string;
    img: any;
    newWindow?: boolean;
    shouldAlert?: boolean;
};

const emailAlert = () => {
    alert('torre [dot] jo [at] northeastern.edu\n\nI am trying to prevent getting the email scraped by bots and get spammed' +
        '. Sorry its a bit of a pain!!');
};

export function ClickableIcons({altText, href, newWindow, img, shouldAlert}: ClickableInfo): JSX.Element {
    const targetString: string = newWindow ? "_blank" : "_self";
    const onClickFun = shouldAlert ? emailAlert : undefined;
    return (
        <>
            <motion.div initial={{scale:1}} whileHover={{scale:1.3}}>
                <a href={href} target={targetString} onClick={onClickFun}>
                    <Image
                        alt={altText}
                        src={img}
                        className="p-6"
                    />
                </a>
            </motion.div>
        </>
    );
}