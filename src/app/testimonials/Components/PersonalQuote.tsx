import Image from "next/image";

type TestimonialFields = {
    name: string;
    quote: JSX.Element;
    image: any;
    jsx?: JSX.Element | undefined;
}

export default function TestimonialCard({name, quote, image, jsx}: TestimonialFields) : JSX.Element{
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
                    <h3 className="font-inter font-black text-3xl text-center p-3">{name}</h3>
                    {quote}
                </div>
            </div>
        </div>
    );
}