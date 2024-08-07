import Home from "./page";
import "./globals.css";

export default function Wrapper() {
    return (
        <>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
                      rel="stylesheet"/>
            </head>
            <Home></Home>
        </>
    )
}