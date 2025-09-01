import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faDrupal,
  faAws,
  faNode,
  faGit,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex items-center justify-center p-8 pb-20 sm:p-20">
      <main className="content w-full max-w-[40rem] mx-auto flex flex-col items-start">
        <div>
          <div
            id="imgWrapper"
            className="flex flex-row-reverse items-center gap-6 justify-between w-full"
          >
            <h1 className="text-4xl font-bold text-left w-full">
              Hi, <br />
              I'm Nico Haralambidis
            </h1>
            <Image
              id="profilePic"
              src="/nico.jpg"
              alt="A picture of myself"
              width={192}
              height={192}
              className="rounded-full border border-[#555]"
            />
          </div>
        </div>
        <div className="textBox my-6 w-full flex flex-col gap-4">
          <h3 className="font-bold text-2xl text-left">About Me</h3>
          <p className="text-[#ccc] max-w-full">
            I'm an aspiring professional who is looking for an opportunity to
            grow and learn in the field of web development and IT.
          </p>
        </div>
        <div className="textBox my-6 w-full flex flex-col gap-4">
          <h3 className="font-bold text-2xl text-left">My Experience</h3>
          <div className="jobText experienceBox flex gap-4">
            <Image
              className="jobPic rounded-full border border-[#ccc]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMY7twX2WWr0f8zwB9u7L95SuI3wvogelPWw&s"
              alt="Impact Studio logo"
              width={44}
              height={44}
            />
            <div className="innerWrapper">
              <div>
                <div className="sectionInfo flex justify-between items-center w-[70vw] max-w-[40rem]">
                  <p className="text-white">Impact Studio</p>
                  <p className="text-xs">Jun. 2023 - Jul. 2024</p>
                </div>
                <p className="sectionSubTitle text-[#ccc] text-sm">
                  Web Developer Intern
                </p>
              </div>
            </div>
          </div>
          <div className="jobText experienceBox flex gap-4">
            <Image
              className="jobPic rounded-full border border-[#ccc]"
              src="https://corporate.target.com/getmedia/890f3192-ce35-496a-a3cf-15fc0a8105d0/Target_Bullseye-Logo_Red.jpg"
              alt="Target logo"
              width={44}
              height={44}
            />
            <div className="innerWrapper">
              <div>
                <div className="sectionInfo flex justify-between items-center w-[70vw] max-w-[40rem]">
                  <p className="text-white">Target</p>
                  <p className="text-xs">Oct. 2018 - Oct. 2019</p>
                </div>
                <p className="sectionSubTitle text-[#ccc] text-sm">
                  Electronics Team Member
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="textBox my-6 w-full flex flex-col gap-4">
          <h3 className="font-bold text-2xl text-left">Education</h3>
          <div className="jobText flex gap-4">
            <Image
              className="jobPic rounded-full border border-[#ccc]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR46mLS9GRQNHBrkkCOi7yt_1G5XdXnQxV42Q&s"
              alt="OSU logo"
              width={44}
              height={44}
            />
            <div className="innerWrapper">
              <div>
                <div className="sectionInfo flex justify-between items-center w-[70vw] max-w-[40rem]">
                  <p className="text-white">Oregon State University</p>
                  <p className="text-xs">Sep. 2020 - Jun. 2024</p>
                </div>
                <p className="sectionSubTitle text-[#ccc] text-sm">
                  B.S. - Computer Science - 3.7 GPA
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="textBox my-6 w-full flex flex-col gap-4">
          <h3 className="font-bold text-2xl text-left">Certifications</h3>
          <div className="jobText flex gap-4">
            <Image
              className="jobPic rounded-full border border-[#ccc]"
              src="https://pbs.twimg.com/profile_images/1677090954350583811/Xy93qVY4_400x400.jpg"
              alt="IBM logo"
              width={44}
              height={44}
            />
            <div className="innerWrapper">
              <div>
                <div className="sectionInfo flex justify-between items-center w-[70vw] max-w-[40rem]">
                  <p className="text-white">Full-Stack JavaScript Developer</p>
                  <p className="text-xs">Issued Jul. 2025</p>
                </div>
                <p className="sectionSubTitle text-[#ccc] text-sm">IBM</p>
              </div>
            </div>
          </div>
          <div className="jobText flex gap-4">
            <Image
              className="jobPic rounded-full border border-[#ccc]"
              src="https://rlv.zcache.com/linkedin_logo_social_media_modern_trendy_business_calling_card-r8c39eec016524c88bf1b98bed777f20f_tcvcc_644.webp"
              alt="LinkedIn logo"
              width={44}
              height={44}
            />
            <div className="innerWrapper">
              <div>
                <div className="sectionInfo flex justify-between items-center w-[70vw] max-w-[40rem]">
                  <p className="text-white">Creating a Responsive Web Design</p>
                  <p className="text-xs">Issued Apr. 2024</p>
                </div>
                <p className="sectionSubTitle text-[#ccc] text-sm">LinkedIn</p>
              </div>
            </div>
          </div>
          <div className="jobText flex gap-4">
            <Image
              className="jobPic rounded-full border border-[#ccc]"
              src="https://rlv.zcache.com/linkedin_logo_social_media_modern_trendy_business_calling_card-r8c39eec016524c88bf1b98bed777f20f_tcvcc_644.webp"
              alt="LinkedIn logo"
              width={44}
              height={44}
            />
            <div className="innerWrapper">
              <div>
                <div className="sectionInfo flex justify-between items-center w-[70vw] max-w-[40rem]">
                  <p className="text-white">Leading and Working in Teams</p>
                  <p className="text-xs">Issued Jan. 2024</p>
                </div>
                <p className="sectionSubTitle text-[#ccc] text-sm">LinkedIn</p>
              </div>
            </div>
          </div>
        </div>
        <div className="techStack flex items-center justify-center gap-1 mt-8 mx-auto">
          <p>Tech stack</p>
          <span>|</span>
          <FontAwesomeIcon
            icon={faHtml5}
            className="text-3xl"
            style={{ color: "#e44d26" }}
          />
          <FontAwesomeIcon
            icon={faCss3Alt}
            className="text-3xl"
            style={{ color: "#264de4" }}
          />
          <FontAwesomeIcon
            icon={faJs}
            className="text-3xl"
            style={{ color: "#f7e018" }}
          />
          <FontAwesomeIcon
            icon={faReact}
            className="animate-spin text-3xl"
            style={{ color: "#58c4dc", animationDuration: "20s" }}
          />
          <FontAwesomeIcon
            icon={faDrupal}
            className="text-3xl"
            style={{ color: "#009cde" }}
          />
          <FontAwesomeIcon
            icon={faAws}
            className="text-3xl"
            style={{ color: "#f90" }}
          />
          <FontAwesomeIcon
            icon={faNode}
            className="text-3xl px-2"
            style={{ color: "#689f63" }}
          />
          <FontAwesomeIcon
            icon={faGit}
            className="text-3xl"
            style={{ color: "#f05035" }}
          />
        </div>
      </main>
    </div>
  );
}
