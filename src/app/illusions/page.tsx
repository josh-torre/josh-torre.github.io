"use client";

import { useState, useEffect } from 'react';


export default function Page() {
    useEffect(() => {
        applyRandomPixel("illusion-canvas");
    }, []);

    return (
        <>
            <div className="h-screen w-full flex justify-center items-center bg-my-dark-blue">
                <div className="w-[75%] h-[75%] bg-white bg-blend-color overflow-hidden" id="illusion-container">
                    <canvas className="h-full w-full" id="illusion-canvas"/>
                    <FollowCursor />
                </div>
            </div>
        </>
    )
}

const canvas = document.getElementById("illusion-canvas");
function applyRandomPixel(id: string) {
    let canvas : HTMLCanvasElement = document.getElementById("illusion-canvas") as HTMLCanvasElement;
    if(!canvas){
        throw new Error("Unable to find canvas element to apply mask");
    }
    if(!canvas.getContext("2d")){
        throw new Error("Unable to read context");
    }

    let mutableMask = canvas.getContext("2d")!.createImageData(canvas.width, canvas.height);
    for(let index = 0; index < mutableMask.data.length; index+=4) {
        const colorScalar = Math.random();

        //Apply color to mask
        mutableMask.data[index] = colorScalar * 255;  // red   color
        mutableMask.data[index + 1] = colorScalar * 255;  // green color
        mutableMask.data[index + 2] = colorScalar * 255;  // blue  color
        mutableMask.data[index + 3] =255*(1-colorScalar); //Either 1 or 0 for alpha
    }
    //Add the image to the canvas
    canvas.getContext("2d")!.putImageData(mutableMask, 0, 0);
}

function FollowCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const canvas = document.getElementById("illusion-canvas");
            if (canvas) {
                const rect = canvas.getBoundingClientRect(); // Get canvas position in the viewport
                const x = event.clientX // Mouse X relative to canvas
                const y = event.clientY // Mouse Y relative to canvas

                // Check if the cursor is inside the canvas boundaries
                if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                    setPosition({ x, y });
                }
            }
        };

        // Add event listener for mousemove
        window.addEventListener('mousemove', handleMouseMove);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const canvas = document.getElementById("illusion-canvas");
    if(canvas) {
        return (
            <>
                (
                <div
                    style={{
                        left:`${position.x}px`,
                        top:`${position.y}px`,
                        position: 'absolute', // Use absolute positioning
                        transform: 'translate(-50%, -50%)', // Center the circle around the cursor
                    }}
                    className="w-[60px] h-[60px] bg-blue-500 opacity-50 rounded-full pointer-events-none">
                    <canvas className="w-full h-full" id="ball"/>
                </div>
                )
            </>
        );
    }
    return <></>
}

// applyRandomPixel("illusion-canvas");

