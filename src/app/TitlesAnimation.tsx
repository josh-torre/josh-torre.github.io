"use client";
import React from "react";
import { motion } from "framer-motion";


export default function TypingEffect(): React.JSX.Element {
    const [text, setText] = React.useState('');
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [loopNum, setLoopNum] = React.useState(0);
    const [typingSpeed, setTypingSpeed] = React.useState(200);

    const words = ["Software Engineer", "Teammate", "Dunkin' Enthusiast", "People Person"];

    React.useEffect(() => {
        const handleTyping = () => {
            const currentIndex = loopNum % words.length;
            const fullText = words[currentIndex];

            setText(
                isDeleting
                    ? fullText.substring(0, text.length - 1)
                    : fullText.substring(0, text.length + 1)
            );

            if(text.length == 0){
                setText(' ');
            }

            setTypingSpeed(isDeleting ? 100 : 120);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === ' ') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, words]);

    return (
        <h2 className="animate-blinking border-r-2 w-fit">{text}</h2>
    );
}
