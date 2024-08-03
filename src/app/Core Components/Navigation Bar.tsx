"use client"
import {motion} from "framer-motion";
import {usePathname} from "next/navigation";


export const NavBar : JSX.Element =
    (
        <div className="p-3 pt-1">
            <div className="bg-black bg-opacity-50 h-fit w-fit rounded-2xl flex float-right">
                <nav>
                    <ul className="flex m-auto text-white select-none flex-wrap">
                        <NavBarLocation name={"Home"} href={"/"}/>
                        <NavBarLocation name={"Projects"} href={"/projects"}/>
                        <NavBarLocation name={"Experience"} href={"/experience"} />
                        <NavBarLocation name={"Testimonials"} href={"/testimonials"}/>
                        <NavBarLocation name={"About"} href={"/about"}/>
                    </ul>
                </nav>
            </div>
        </div>
    );


type BarLocationInfo ={
    name: string;
    href: string;
}

function NavBarLocation({name, href}: BarLocationInfo) : JSX.Element {
    let defaultTextStyle: string = "p-5 text-xl";
    const currentPath = usePathname();
    return (
        <>
            <motion.a href={href} className="f-full"
                      whileHover={{scale: 1.1, color:'#6ac5b6', fontWeight:"bolder"}}
                      whileTap={{scale: 0.95}}>
                <li className={currentPath === href ? "text-my-teal underline " + defaultTextStyle : defaultTextStyle}>
                    {name}
                </li>
            </motion.a>
        </>
    );
}