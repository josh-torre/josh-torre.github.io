"use client"
import {motion} from "framer-motion";
import Image from "next/image";
import React from "react";


type ClickableInfo = {
    altText: string;
    href: string;
    img: any;
    newWindow?: boolean;
};

export function ClickableIcons({altText, href, newWindow, img}: ClickableInfo): JSX.Element {
    const targetString: string = newWindow ? "_blank" : "_self";
    return (
        <>
            <motion.div initial={{scale:1}} whileHover={{scale:1.3}}>
                <a href={href} target={targetString}>
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