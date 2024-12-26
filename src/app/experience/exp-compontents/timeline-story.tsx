"use client"
import React, { useEffect, useState } from "react";
import {motion} from "framer-motion";
import { StaticImageData } from "next/image";

type TimelineInfo = {
  title: string,
  subtitle: string,
  text: String,
  image?: StaticImageData,
}

export default function TimelineStory({title, subtitle, text, image}: TimelineInfo) {
  const [isColapsed, setColapsed] = useState(false);
  
  return (
    <>
    <div className="flex justify-center items-center"> 
    <div className="h-[20px] w-[20px] rounded-full border-2 bg-inherit border-my-teal ml-10" />

      <div className="w-[80%] h-full border-2 border-my-teal bg-my-dark-blue rounded-lg">
        <p className="text-2xl p-2">{title}</p>
      </div>
      </div>
    </>
  );
}