import {ClickableIcons} from "@/app/HomeComponents/ClickableIcons";
import React from "react";

import mailIcon from '/public/Mail Icon.svg'
import githubIcon from '/public/Github.svg'
import linkedinIcon from '/public/Linkedin Icon.svg'

export default function BottomLinks(): JSX.Element {
    return (
        <div className="w-full flex justify-center">
            <div className="grid grid-cols-3 gap-4">
                <ClickableIcons
                    href={""}
                    altText={"Mail Icon. Click to send me an email!"}
                    newWindow={false}
                    img={mailIcon}
                    shouldAlert={true}/>
                <ClickableIcons
                    href={"https://www.linkedin.com/in/joshua-torre/"}
                    altText={"Linkedin Logo"}
                    newWindow={true}
                    img={linkedinIcon}/>
                <ClickableIcons
                    href={"https://github.com/josh-torre/"}
                    altText={"GitHub Logo"}
                    newWindow={true}
                    img={githubIcon}/>
            </div>
        </div>
    );
}