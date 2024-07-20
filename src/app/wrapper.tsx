import Image from "next/image";

export default function Home() {
  return (
      <>

          <div className="w-[1440px] h-[1024px] relative bg-dark-blue">
              <div className="w-[1440px] h-[1024px] left-0 top-0 absolute bg-teal-950"/>
              <div className="w-[817px] h-[193px] left-[50px] top-[65px] absolute">
                  <div
                      className="w-[817px] h-[121px] left-0 top-0 absolute text-white text-[120px] font-extrabold font-['Inter']">Joshua
                      Torre
                  </div>
                  <div
                      className="w-[718px] h-[50px] left-[9px] top-[143px] absolute text-white text-6xl font-light font-['Inter']">Software
                      Engineer|
                  </div>
              </div>
              <img
                  className="w-[470px] h-[490px] left-[925px] top-[65px] absolute rounded-[149px] border-8 border-orange-200"
                  src="/public/portrait.jpg"/>
              <div className="w-[470px] h-[106px] left-[925px] top-[614px] absolute">
                  <div className="w-[470px] h-[106px] left-0 top-0 absolute bg-black/opacity-30 rounded-[97px]"/>
                  <div
                      className="w-[404.08px] h-[106px] left-[27.47px] top-0 absolute text-center text-orange-200 text-6xl font-bold font-['Inter']">Projects
                  </div>
              </div>
              <div className="w-[470px] h-[106px] left-[925px] top-[742px] absolute">
                  <div className="w-[470px] h-[106px] left-0 top-0 absolute bg-black/opacity-30 rounded-[97px]"/>
                  <div
                      className="w-[404.08px] h-[106px] left-[27.47px] top-0 absolute text-center text-orange-200 text-6xl font-bold font-['Inter']">Experience
                  </div>
              </div>
              <div className="w-[470px] h-[106px] left-[925px] top-[870px] absolute">
                  <div className="w-[470px] h-[106px] left-0 top-0 absolute bg-black/opacity-30 rounded-[97px]"/>
                  <div
                      className="w-[404.08px] h-[106px] left-[27.47px] top-0 absolute text-center text-orange-200 text-6xl font-bold font-['Inter']">About
                      Me
                  </div>
              </div>
              <div className="w-[770px] h-[462px] left-[59px] top-[333px] absolute">
                  <span className="text-white text-[40px] font-light font-inter"> Hi! I’m a </span>
                  <span className="text-white text-[40px] font-black font-['Inter']">Computer Science student at Northeastern University</span>
                  <span className="text-white text-[40px] font-light font-['Inter']">. I am a people person and value the conversations I have and the people I meet.<br/><br/>To learn more about me including my and personal technical journeys </span>
                  <span className="text-teal-200 text-[40px] font-black font-['Inter']">click here</span></div>
              <div className="w-[553.55px] h-[133px] left-[141px] top-[843px] absolute">
                  <div className="w-[130px] h-[133px] left-[214.60px] top-0 absolute">
                  </div>
                  <div className="w-[127.94px] h-[127.94px] left-[425.60px] top-0 absolute">
                      <div className="w-[98px] h-[100px] left-[17px] top-[17px] absolute bg-zinc-300"/>
                  </div>
                  <div className="w-[133.60px] h-[123px] left-0 top-[7px] absolute">
                      <div className="w-[133.60px] h-[123px] left-0 top-0 absolute bg-slate-500 rounded-[18px]"/>
                  </div>
              </div>
          </div>
      </>
  );
}
