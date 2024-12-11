import TitleCard from "@/app/Core Components/PageTitle"
import Link from 'next/link'

export default function AboutMe() {
  return (
      <div className="h-full w-full min-h-screen max-h-full bg-my-dark-blue p-6">
          <header className="w-full flex flex-col sm:flex-row m-auto">
              <TitleCard title={"My Blog"}/>
          </header>
          <Link href="blog/llms-in-cs">The Path to Mediocrity:
          Use of Large Language Models and Generative AI in Introductory Computer Science Classes</Link>
        </div>
 )
}
 
