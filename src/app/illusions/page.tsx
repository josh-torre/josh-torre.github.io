"use client";
import React, {useEffect, useRef, useState} from "react";
import TitleCard from "@/app/Core Components/PageTitle";

export default function Page() {
    const ballRef = useRef<HTMLCanvasElement | null>(null);
    const illusionCanvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = illusionCanvasRef.current;
        if (canvas) {
            canvas.width = 850 * 0.5;
            canvas.height = 450 * 0.5;
            applyRandomPixel(canvas);
        }

        if (ballRef.current) {
            const size = 50;
            ballRef.current.width = size*0.5;
            ballRef.current.height = size*0.5;
            ballRef.current.style.width = size + 'px';
            ballRef.current.style.height = size + 'px';
            applyRandomPixel(ballRef.current); // Apply the mask to the ball canvas
        }
    }, []);

    return (
        <div className="h-screen w-screen bg-my-dark-blue p-6 flex flex-col">
            <div className="fixed top-0 w-full bg-my-dark-blue cursor-auto">
                <TitleCard title={"Illusion"}/>
            </div>
            <div className="flex-grow flex items-center justify-center pt-[60px] overflow-clip">
                <div className="h-[80%] w-[80%] overflow-hidden cursor-none"
                    id="illusion-container">
                    <canvas
                        ref={illusionCanvasRef}
                        className="h-full w-full"
                    />
                    <FollowCursor ballRef={ballRef} illusionCanvasRef={illusionCanvasRef} />
                </div>
            </div>
        </div>
    );
}

function applyRandomPixel(canvas: HTMLCanvasElement) {
    if (!canvas) {
        throw new Error("Unable to find canvas element to apply mask");
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
        throw new Error("Unable to read context");
    }

    const width = canvas.width;
    const height = canvas.height;

    for (let x = 0; x < width; x += 0.5) {
        for (let y = 0; y < height; y += 0.5) {
            const randomValue = Math.random() * 255;
            // Draw a rectangle (represents a single pixel)
            ctx.fillStyle = `rgba(${randomValue}, ${randomValue}, ${randomValue}, 1)`;
            ctx.fillRect(x, y, 1, 1);
        }
    }
}

function FollowCursor({ballRef, illusionCanvasRef,}: {
    ballRef: React.RefObject<HTMLCanvasElement>;
    illusionCanvasRef: React.RefObject<HTMLCanvasElement>; }) {
    const [position, setPosition] =
        useState<{ x: number; y: number } | null>(null);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const canvas = illusionCanvasRef.current;
            if (!canvas) return;

            const rect = canvas.getBoundingClientRect();
            const x = event.clientX;
            const y = event.clientY;

            if (
                x >= rect.left &&
                x <= rect.right &&
                y >= rect.top &&
                y <= rect.bottom) {
                setPosition({ x, y });
            } else {
                setPosition(null);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [illusionCanvasRef]);

    return (
        <canvas
            ref={ballRef}
            id="ball"
            style={{
                position: "absolute",
                left: position ? `${position.x}px` : "0px",
                top: position ? `${position.y}px` : "0px",
                transform: position ? "translate(-50%, -50%)" : "none",
                display: position ? "block" : "none",
            }}
            width={"10%"}
            height={"10%"}
            className="rounded-full"
        />
    );
}
