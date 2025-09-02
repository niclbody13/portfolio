"use client";
import ProjectCard from "./ProjectCard";
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

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-[80rem] mx-auto p-8 flex flex-col font-sans min-h-screen items-start justify-center">
      <h1 className="text-3xl font-bold ml-16 mb-8 text-left">What I've been working on</h1>
      <div className="flex flex-wrap gap-8 w-full justify-center items-center">
        <ProjectCard
          title="Star Wars Database"
          description="Multi-page web app using dynamic routing and locally stored JSON data derived from the Star Wars API."
          techStack={
            <>
              <span>React</span>
              <span>API communication</span>
              <span>CSS</span>
              <span>JSON</span>
            </>
          }
        />
        <ProjectCard
          title="Redux Shopping App"
          description="Candy Shopping app that leverages Redux to manage state, allowing users to browse a selection of candies, add products to their shopping cart, and complete purchases."
          techStack={
            <>
              <span>React</span>
              <span>API communication</span>
              <span>CSS</span>
              <span>JSON</span>
            </>
          }
        />
        <ProjectCard
          title="TV Review Application"
          description="Developed an application that allows users to rate and track their favorite TV shows. Technologies used include React, AWS Cognito, DynamoDB, API communication, and Emotion for styling."
          techStack={
            <>
              <span>React</span>
              <span>API communication</span>
              <span>CSS</span>
              <span>JSON</span>
            </>
          }
        />
        <ProjectCard
          title="Minecraft Server Automation"
          description="Developed infrastructure provisioning scripts to automate the creation and deployment of a Minecraft server on AWS using Terraform, Ansible, and Bash."
          techStack={
            <>
              <span>React</span>
              <span>API communication</span>
              <span>CSS</span>
              <span>JSON</span>
            </>
          }
        />
        <ProjectCard
          title="EDIR Webpage"
          description="Developed a functional, responsive website. After thorough testing and feedback, successfully deployed the website to Drupal, making it accessible on the internet."
          techStack={
            <>
              <FontAwesomeIcon icon={faHtml5} className="text-xl" />
              <FontAwesomeIcon icon={faCss3Alt} className="text-xl" />
              <FontAwesomeIcon icon={faJs} className="text-xl" />
              <FontAwesomeIcon icon={faDrupal} className="text-xl" />
              <FontAwesomeIcon icon={faAws} className="text-xl" />
              <FontAwesomeIcon icon={faNode} className="text-xl" />
              <FontAwesomeIcon icon={faGit} className="text-xl" />
              <FontAwesomeIcon icon={faReact} className="text-xl" />
              <span>C++</span>
            </>
          }
        />
        <ProjectCard
          title="Hunt the Wumpus"
          description="Developed an implementation of the classic 'Hunt the Wumpus' game in C++. Utilized object-oriented programming principles to structure the game for an interactive user experience."
          techStack={
            <>
              <span>C++</span>
              <span>Makefile</span>
              <span>OOP</span>
            </>
          }
        />
      </div>
    </section>
  );
}
