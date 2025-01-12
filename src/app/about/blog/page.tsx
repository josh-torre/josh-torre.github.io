import TitleCard from "@/app/Core Components/PageTitle"
import Link from 'next/link'
import { InfoCard } from "@/app/Core Components/Core Card"

export default function AboutMe() {
  return (
      <div className="h-full w-full min-h-screen max-h-full bg-my-dark-blue p-12">
          <header className="w-full flex flex-col sm:flex-row m-auto">
              <TitleCard title={"My Blog"}/>
          </header>

          <Link href="blog/llms-in-cs" className="pt-4 font-bold ">
            <InfoCard title="The Path to Mediocrity:
               Use of Large Language Models and Generative AI in Introductory Computer Science Classes"
               subHeading=""
               bodyText={<p className=" font-normal">
                    Like it or not, generative AI has infested the academic world and there are no signs that 
                    major developments in its use or detection will change the current student usage. Change is 
                    uncomfortable yet necessary across the industry to move with... 
               </p>} />
          </Link>
        </div>
 )
}
 
