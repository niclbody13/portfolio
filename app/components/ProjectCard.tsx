import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: React.ReactNode;
}

export default function ProjectCard({ title, description, techStack }: ProjectCardProps) {
  return (
    <div className="project max-w-[32rem] h-[18em] p-6 rounded-xl border shadow-md bg-[#222] overflow-y-auto">
      <div className="textContainer">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mb-3 text-[#ccc]">{description}</p>
        <div className="techStack flex flex-wrap gap-2 items-center">{techStack}</div>
      </div>
    </div>
  );
}
