"use client"
import {motion} from "framer-motion";

type CardData = {
    title: string;
    subHeading: string;
    bodyText: JSX.Element;
    optionalJSX?: JSX.Element | undefined;
    animate?: boolean | undefined;
};

export function InfoCard({title, subHeading, bodyText, optionalJSX, animate}: CardData) : JSX.Element {
    const sideContentSize: string = optionalJSX == undefined ? "" : "w-[50%]";
    const shouldAnimate: boolean = animate == undefined ? false : animate;
    const standardAnimation = {
        hidden: {opacity: 0, y: 30},
        animate: { opacity: 1, y: 0, transition: {duration: 0.4 } },
    };
    optionalJSX = optionalJSX == undefined ? <></> : optionalJSX;
    return (
        <motion.div
            className="pb-3 pt-3"
            variants={shouldAnimate ? standardAnimation : undefined}>
            <div className="w-full h-fit bg-black bg-opacity-30 rounded-2xl justify-between sm:flex sm:flex-col-2">
                <div className="p-6">
                    <p className="font-bold text-2xl pb-2">{title}</p>
                    <p className='text-xl font-bold text-my-teal pb-2'>{subHeading}</p>
                    {bodyText}
                </div>
                {optionalJSX}
            </div>
        </motion.div>
    );
}