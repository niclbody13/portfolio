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

import InfoCard from "./InfoCard";

export default function HomeSection() {
  return (
    <section id="home" className="font-sans min-h-screen flex items-center justify-center p-8">
      <div className="content w-full max-w-[40rem] mx-auto flex flex-col items-start">
        <div>
          <div
            id="imgWrapper"
            className="flex flex-row-reverse items-center gap-6 justify-between w-full mb-2"
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
              className="rounded-full border border-[#555] w-32 h-32 sm:w-48 sm:h-48"
            />
          </div>
        </div>
        <div className="textBox my-4 w-full flex flex-col gap-4">
          <h3 className="font-bold text-2xl text-left">About Me</h3>
          <p className="text-[#ccc] max-w-full">
            I'm an aspiring professional who is looking for an opportunity to
            grow and learn in the field of web development and IT.
          </p>
        </div>
        <div className="textBox my-4 w-full flex flex-col gap-4">
          <h3 className="font-bold text-2xl text-left">My Experience</h3>
          <InfoCard
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMY7twX2WWr0f8zwB9u7L95SuI3wvogelPWw&s"
            imgAlt="Impact Studio logo"
            title="Impact Studio"
            dates="Jun. 2023 - Jul. 2024"
            subtitle="Web Developer Intern"
          />
          <InfoCard
            imgSrc="https://corporate.target.com/getmedia/890f3192-ce35-496a-a3cf-15fc0a8105d0/Target_Bullseye-Logo_Red.jpg"
            imgAlt="Target logo"
            title="Target"
            dates="Oct. 2018 - Oct. 2019"
            subtitle="Electronics Team Member"
          />
        </div>
        <div className="textBox my-4 w-full flex flex-col gap-4">
          <h3 className="font-bold text-2xl text-left">Education</h3>
          <InfoCard
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR46mLS9GRQNHBrkkCOi7yt_1G5XdXnQxV42Q&s"
            imgAlt="OSU logo"
            title="Oregon State University"
            dates="Sep. 2020 - Jun. 2024"
            subtitle="B.S. - Computer Science - 3.7 GPA"
          />
        </div>
        <div className="textBox my-4 w-full flex flex-col gap-4">
          <h3 className="font-bold text-2xl text-left">Certifications</h3>
          <InfoCard
            imgSrc="https://pbs.twimg.com/profile_images/1677090954350583811/Xy93qVY4_400x400.jpg"
            imgAlt="IBM logo"
            title="Full-Stack JavaScript Developer"
            dates="Issued Jul. 2025"
            subtitle="IBM"
          />
          <InfoCard
            imgSrc="https://rlv.zcache.com/linkedin_logo_social_media_modern_trendy_business_calling_card-r8c39eec016524c88bf1b98bed777f20f_tcvcc_644.webp"
            imgAlt="LinkedIn logo"
            title="Creating a Responsive Web Design"
            dates="Issued Apr. 2024"
            subtitle="LinkedIn"
          />
          <InfoCard
            imgSrc="https://rlv.zcache.com/linkedin_logo_social_media_modern_trendy_business_calling_card-r8c39eec016524c88bf1b98bed777f20f_tcvcc_644.webp"
            imgAlt="LinkedIn logo"
            title="Leading and Working in Teams"
            dates="Issued Jan. 2024"
            subtitle="LinkedIn"
          />
        </div>
        <div className="techStack flex items-center justify-center mt-8 mx-auto">
          <p>Tech stack</p>
          <span className="mx-2">|</span>
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
            className="text-3xl pl-2 pr-1"
            style={{ color: "#689f63" }}
          />
          <FontAwesomeIcon
            icon={faGit}
            className="text-3xl"
            style={{ color: "#f05035" }}
          />
        </div>
      </div>
    </section>
  );
}
