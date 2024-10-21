import Image from "next/image";
import portrait from "public/portrait.jpg";
import React from "react";

export default function Portrait() {
    return (
        <div className="p-2 grid justify-items-center self-end">
        <Image
            placeholder="blur"
    alt={"A picture of Joshua Torre in front of the Sydney Bridge and the Sydney Opera House"}
    src={portrait}
    className="max-w-[70%] sm:w-[100%] rounded-[20%] border-8 border-my-teal"
        />
        </div>);
}