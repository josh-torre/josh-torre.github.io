import TitleCard from "@/app/Core Components/PageTitle"
import Image from 'next/image'
import pieChart from 'public/fundies1-llm-usage.png';

const standardParaStyle: string = "p-2 font-normal"

export default function llmsInCS() {
  return (
      <div className="h-full w-full min-h-screen max-h-full bg-my-dark-blue p-6">
          <header className="w-full flex flex-col sm:flex-row m-auto">
              <TitleCard title={""}/>
          </header>
          <div className="flex flex-col items-center justify-center"> 
            <h1 className="text-3xl text-center p-2 pt-6 pb-6">
              <strong className="font-bold text-my-lighter-teal">The Path to Mediocrity</strong>:
               Use of Large Language Models and Generative AI in Introductory Computer Science Classes
            </h1>
            <div className="w-[80%]">
              {/*preface*/}
              <div className="border-2 rounded-lg border-my-teal p-2">
              <h2 className="font-bold text-2xl pl-2">Preface</h2>
                <p className={standardParaStyle}>
                These are the thoughts, ideas, interpretations, and perceptions that I have about this topic at the time of writing (December 2024). I have noticed that every 3-5 years I have major shifts in what I believe to be true. For example, just 3 years ago I had the opinion that Java was the best programming language. I have since matured and no longer share this sentiment with my past self
                <a className="text-my-lighter-teal" target="_blank" href="https://www.amazon.com/Effective-Java-2nd-Joshua-Bloch/dp/0321356683?ie=UTF8&s=books&qid=1223917599&sr=1-1"> (see Joshua Block&apos;s apology for Java&apos;s APIs)</a>
                . All this to say: this is what I believe now and is not necessarily what I will always think. Over the coming years, I will hopefully mature as a teacher, software developer, and human being, so my beliefs are not static, but an extensible model to be iterated upon.  
                </p>
              </div>



              {/*Intro*/}
            <h2 className="font-bold text-2xl p-2 pt-3">Introduction</h2>
              <p className={standardParaStyle}>
                I am a second-year computer science (CS) student at Northeastern University. I have been a TA for CS 2500, affectionately referred to as “Fundies 1” for two semesters. I am also an avid follower of tech news. Even in the early years of my CS education, I was following the latest developments. For example, in 2021 when I gave a presentation to my English class about this artificial intelligence (AI) model called Dalle-1 that just came out of this new company called OpenAI. So, when in 2022 that same company published that they had a new landmark model, I was excited to try it. I was amazed by the versatility and the speed at which the model was able to produce interesting results; albeit at times incorrect it felt like I was using a tool from the future. This sentiment is similar to what I have heard across the board from those who first used the tool. From technical experts to everyday novices, everyone seemed to be wowed by the capabilities of this new tool.   
                </p>
                <p className={standardParaStyle}>
                Two years later, however, the sentiment behind them is very different. Virtually everyone has heard of these AI tools by now and many have used them themselves. With how pervasive these models have become; they have been able to cause havoc in academia. There is now not only a question of “Did you get this work from another student?” but also “Did a person write this work at all”? While I was taking Fundies 1, I struggled as many did with the intricacies of recursion, abstractions, and generative recursion but I was able to preserver through the course without the assistance of generative AI. Around me, however, were many students writing all or portions of their assignments in seconds because they were using these tools.   
                </p>
                <p className={standardParaStyle}>
                As I started as a TA for Fundies 1 the next semester, I was able to see just how common it was to see AI generated code. It felt like a weekly exchange with the professor about the submission of blatant abuse of AI tools. I understand and empathize with these students, as I too am a student and need to juggle difficult coursework, clubs, personal health, and social life. This does not change the frustration and disappointment of seeing these submissions. I am deeply committed to my peers that I help teach and I care about the learning and personal development of each of them. When I see these submissions, however, I feel that my devotion was in vain. These submissions have only become more frequent in the last few years. In the final homework of this semester, almost 10% of the class was deducted points for “suspicious looking” code. “Suspicious” is defined as code that uses functions outside of the scope of the class (and students should not be using) like the use of banned functions or code that has excessive comments at the end of the line. Both characteristics are hallmarks of AI generated code, and are relatively trivial to remove for students, meaning that the number of students using AI on the last homework was likely much higher than 10%. These figures are not surprising, however. In the fall of 2023, Fundies 1 students were surveyed and out of the 302 responses, almost two thirds of students admitted to using ChatGPT on their assignments, and a quarter admitted to using it many times (3 or more) over the course of the semester. The unfortunate reality of modern-day computer science education is that cheating and plagiarism are rampant across the board. While some see no issue with giving students full reign over the AI tools and their capabilities, there is widespread concern from instructors and administrators about the impact that these tools will have on the education of students.
                </p>
                <div className="flex flex-col items-center justify-center pt-6 pb-6">
                  <Image 
                  className="w-[70%] border-4 border-my-teal rounded-md"
                  src={pieChart} 
                  alt="a pie chart showing that 39.4% of respondents never use Chat-GPT for their homework, 36.1% uset it some times (one or two) and 24.5% used it frequently"/>
                </div>
                               
              {/*The Purpose of a Computer Science Education*/}
              <h2 className="font-bold text-2xl p-2">The Purpose of a Computer Science Education</h2>
                <p className={standardParaStyle}>
                I believe that a large majority of the problem of AI in education stems from the answer to one question. That being, “What is the purpose of an education?” or more specifically, “What is the purpose of a computer science education”? For some, it is a means to an end, whether it be “I want a high paying job”, “I want to be able to work remotely”, or “My parents/mentor wants me to do it”. For others, it is a passion, and they want to learn as much as they can in the time that they have. For the latter group of committed students, the problem of AI is largely nonexistent from what I see in class, office hours, and lab. The former group is the one I see this new form of plagiarism from the most. There are many who want a CS degree for the status, money, or career flexibility it provides. However, I believe that when students realize that CS is difficult, they decide to take shortcuts, one of these being generative AI.   
                </p>
                <p className={standardParaStyle}>
                We now know that these shortcuts can fulfill the desired results, as AI models can now complete a computer science courseload of 6 classes with an 80% average according to Tim Krüger and Michael Gref in their paper, “Performance of Large Language Models in a Computer Science Degree Program”. While the GPT-4.0 would not pass all classes due to limitations in its ability to do arithmetic, it still comes strikingly close to completing the degree. So, from the standpoint of a student whose goal is to complete a CS degree with the minimum amount of effort possible, it is an easy choice to use AI to supplement your work and accelerate the completion of assignments. My biggest concern with those who use these tools early in their journey to become computer scientists is that they generally don’t know how to use the tool. Whether it be the vocabulary they use or the details that they include, students new to programming largely do not know how to effectively use these tools to produce the desired results and understand the code it generates.   
                </p>
                <p className={standardParaStyle}>
                Additionally, simply reading code and thinking about it for a few seconds does not mean that you fully understand how you might make it yourself. This is a phenomenon that some have described as the “Science Channel Effect”. For instance, you can observe or read how you might create a scuba diving tank, but if you were given a piece of sheet metal and a tig welder and told that you were going diving with it the next day, you would likely be apprehensive about the idea. In the same vein, if you simply skim the code and think, you have a “good enough” understanding, it is not the same as fully understanding the process of creating that piece of code from scratch.  
                </p>
                <p className={standardParaStyle}>
                Another, third group of students are those who are characterized by the need to receive an excellent grade. Many students are hyper obsessed with their GPA and keeping a 4.0. They will go to many lengths to keep this perception of perfection, whether to further fuel their ego or to provide some level of confidence. This was something I personally struggled with in my first year and continue to battle with. However, I believe in the importance of letting go of the grade as an indicator of success in a class. When you think of your classes in terms of grades, you begin to lose sight of the purpose of the degree in the first place, and that is to learn. When all you focus on is grades, your degree becomes nothing more than a piece of paper, because it is not representative of what you learned, but the numbers that you were assigned. Understanding the purpose of the degree you are pursuing is paramount to succeeding in the degree. Purpose keeps you grounded in what is important and holistically evaluates your degree rather than focusing on grades in individual courses.  
                </p>


                {/*The “Interesting Part” of Computer Science*/}
                <h2 className="font-bold text-2xl p-2">The “Interesting Part” of Computer Science</h2>
                <p className={standardParaStyle}>
                Despite what many Python warriors want you to believe, design, whether it be in terms of the system architecture, algorithmically, or data representation, is the most interesting and important part of Computer Science and is where LLMs fall short while in a learning environment. Given the non-trivial nature of designing data and systems in the real world, LLMs do a poor job of representing extensible and representative definitions. These tools excel at producing small snippets of code, but there are often few if any assurances that these snippets work with the larger code base as it may violate the invariants of the larger program. Conversely, there is also the risk of developers violating the invariants of the program that the AI tool writes. Violation of invariants is one of the nastiest bugs to fix as they often lead to undefined behavior, subtle errors, or cascading failures that are difficult to trace back to their root cause.  
                </p>
                <p className={standardParaStyle}>
                Where there is room for AI and developers to coexist is in the space between design and programming. If you can write a quality specification with well-defined data representations, constraints, invariants, and functionality with test cases and examples, then you are able to effectively use LLMs to assist in the generation of code. However, this is a skill that is often delegated to upper-level engineers and systems architects who have years of experience because, in general, students do not yet understand the nuances of their design decisions and the subtle implications they bake into their designs. Due to students’ lack of ability to effectively define a project with enough foresight and clarity that an LLM can understand, AI generated code from students is typically a poorly designed hodgepodge of incomplete data representations and algorithm definitions. Even more harmful to me is that students also do not leave the project with the learning outcomes that were intended and instead learned how to do the bare minimum to attain completion.  
                </p>




                {/*The “Interesting Part” of Computer Science*/}
                <h2 className="font-bold text-2xl p-2">Conclusion</h2>
                <p className={standardParaStyle}>
                Like it or not, generative AI has infested the academic world and there are no signs that major developments in its use or detection will change the current student usage. Change is uncomfortable yet necessary across the industry to move with a changing skill and tool set.  
                </p>
                <p className={standardParaStyle}>
                <strong className="font-bold text-my-lighter-teal">Impacts on institutions</strong>
                : More pressure is now on institutions and educators to develop curricula that are resistant to the use of these models. This means that we need to be expecting more of students so that they can develop an understanding of these topics past a Chat-GPT level of understanding. This will also better prepare them for a professional world so they can outperform the AI models. 
                </p>
                <p className={standardParaStyle}>
                <strong className="font-bold text-my-lighter-teal">Impacts for students</strong>
                : Students will need to resist the urge to take shortcuts. As I laid out earlier in this piece, understanding the why behind the degree is even more important than the degree itself. If your why is some means to an end, then maybe taking these shortcuts is ok, but for the students who want to excel and innovate within their respective concentrations, there must be concerted time and effort afforded to learning, mistakes, and reflection.  
                </p>
                <p className={standardParaStyle}>
                <strong className="font-bold text-my-lighter-teal">Impacts for employers</strong>
                  : Employers will need to look less at GPA and more at the accomplishments of the developer. By using GPA as a metric for the potential success of employees, you incentivize these shortcuts within degrees. GPAs are also highly variable and mean different things when comparing different majors, universities, and colleges. A better, yet more nuanced evaluation of an applicant’s success can be seen in their portfolio of projects as you can see both the quality of the code and their areas of interest and expertise. It is also trivial at the interview stage to test if the applicant worked on the project, as their explanations of the project should be second nature. 
                </p>
                <p className={standardParaStyle}>
                To end on a possibly more optimistic note about the future of the computer science industry, I do not believe that generative AI and LLMs will have significant impacts on the need for quality software engineers. Instead, what I think is more likely is that there will continue to be a divide between excellent and mediocre software engineers as there is currently. There is a question though of if there will be more mediocre developers because of the availability of LLMs for the everyday consumer and if there will likely need to be changes to the hiring process to reflect the changing needs of a developer. 
                </p>
              </div>
            </div>
      </div>
 )
}