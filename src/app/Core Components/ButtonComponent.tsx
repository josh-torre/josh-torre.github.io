"use client"

import { motion } from "framer-motion";

type ButtonInfo = {
    text: string;
    link: string;
    newWindow?: boolean;
};
export function Button({text, link, newWindow}: ButtonInfo): JSX.Element {
    const targetString : string = newWindow ? "_blank" : "_self";
    return (
        <a href={link} target={targetString}>
            <div className="w-full sm:w-auto p-1.5 select-none">
                <motion.div
                    initial={{fontWeight:"bold"}}
                    whileHover={{backgroundColor: "#4C837A", scale: 1.05}}
                    whileTap={{scale: 0.95}}
                    className="min-w-fit min-h-fit bg-black left-0 top-0 bg-opacity-20 rounded-full">
                    <p className="text-center text-3xl font-Inter p-3 pl-8 pr-8">
                        {text}
                    </p>
                </motion.div>
            </div>
        </a>
    );
}