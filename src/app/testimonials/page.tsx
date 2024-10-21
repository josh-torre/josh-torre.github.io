import Marco_Img from "../../../public/Testimonials-Images/Marco-Spaeth.jpeg"
import Kevin_Img from "../../../public/Testimonials-Images/kevin-gibbs.jpeg"
import Josh_Img from "../../../public/Testimonials-Images/Josh-Learned.jpeg"
import TestimonialCard from "@/app/testimonials/Components/PersonalQuote";
import TitleCard from "@/app/Core Components/PageTitle";


export default function Root(){
    const defaultQuoteStying = "text-xl font-light";
    return (
        <div className="bg-my-dark-blue h-full min-h-screen p-6 pb-4 m-auto">
            <TitleCard title="Testimonials"/>
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

                {<TestimonialCard name={"Marco Spaeth"}
                                 image={Marco_Img}
                                 quote={<p className={defaultQuoteStying}>&quot;He went
                                     <strong className="font-extrabold text-my-lighter-teal"> above and beyond </strong>
                                     to successfully develop a more capable tool than even his supervisor expected to
                                     be possible.&quot;</p>}/>}
            </div>
        </div>
    );
}
