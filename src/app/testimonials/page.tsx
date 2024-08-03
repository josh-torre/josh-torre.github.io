import {NavBar} from "@/app/Core Components/Navigation Bar";
import Image from "next/image";
import Marco_Img from "../../../public/Testimonials-Images/Marco-Spaeth.jpeg"
import Kevin_Img from "../../../public/Testimonials-Images/kevin-gibbs.jpeg"
import Josh_Img from "../../../public/Testimonials-Images/Josh-Learned.jpeg"


export default function Root(){
    const defaultQuoteStying = "text-xl text-white font-light";
    return (
        <div className="bg-my-dark-blue h-full p-6 pb-4 m-auto">
            {TitleCard}
            <div className="flex flex-col m-auto justify-items-center w-fit sm:flex-row">
                <TestimonialCard name={"Kevin Gibbs"}
                                 image={Kevin_Img}
                                 quote={<p className={defaultQuoteStying}>&quot;He possess a rare ability to
                                     <strong className="font-extrabold text-my-lighter-teal"> communicate intricate ideas with
                                         simplicity and precision</strong>, ensuring everyone is on the same page. This
                                     talent ensures alignment
                                     across various stakeholders, from peers to top-tier executives.&quot;</p>}/>

                <TestimonialCard name={"Josh Learned"}
                                 image={Josh_Img}
                                 quote={<p className={defaultQuoteStying}>&quot;Josh has proven he can move seamlessly between
                                     roles that are traditionally split between a business analyst, systems analyst, and
                                     software developer on the team. I cannot emphasize enough Josh&apos;s
                                     <strong className="font-extrabold text-my-lighter-teal"> multi-faceted and
                                         versatile skill set.</strong>&quot;</p>}/>

                <TestimonialCard name={"Marco Spaeth"}
                                 image={Marco_Img}
                                 quote={<p className={defaultQuoteStying}>&quot;He went <strong className="font-extrabold text-my-lighter-teal">
                                     above and beyond </strong>to successfully
                                     develop a more capable tool than
                                     even his supervisor expected to be possible&quot;</p>}/>
            </div>
        </div>
    );
}

const TitleCard: JSX.Element  =
    (
        <div className="w-full flex flex-col sm:flex-row m-auto">
            <div>
                <p className="text-7xl font-black text-my-white pb-2">Testimonials</p>
            </div>
            <div className="w-full m-auto">
                {NavBar}
            </div>
        </div>
    );


type TestimonialFields = {
    name: string;
    quote: JSX.Element;
    image: any;
    jsx?: JSX.Element | undefined;
}

function TestimonialCard({name, quote, image, jsx}: TestimonialFields) : JSX.Element{
    return (
        <div className="p-6 w-[100%] sm:w-[50%]">
            <div className="h-fit m-auto bg-black bg-opacity-20 mx-auto rounded-xl p-3 pt-1/2 flex-col-1 mt-16">
                <div className={"relative -top-16 flex justify-center"}>
                    <Image
                        src={image}
                        alt={name + " Portrait"}
                        className="rounded-full w-[150px] border-4 border-my-lighter-teal max-w-sm shadow-xl"/>
                </div>
                <div className="relative -top-8">
                    <h3 className="font-inter text-my-white font-black text-3xl text-center p-3">{name}</h3>
                    {quote}
                </div>
            </div>
        </div>
    );
}