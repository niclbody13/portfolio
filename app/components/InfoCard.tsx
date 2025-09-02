import Image from "next/image";

interface InfoCardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  dates: string;
  subtitle: string;
}

export default function InfoCard({ imgSrc, imgAlt, title, dates, subtitle }: InfoCardProps) {
  return (
    <div className="flex gap-4 my-2">
      <Image
        className="rounded-full border border-[#ccc] w-11 h-11 aspect-square shrink-0"
        src={imgSrc}
        alt={imgAlt}
        width={44}
        height={44}
      />
      <div className="flex flex-col justify-center">
        <div className="flex justify-between items-center w-[70vw] max-w-[40rem]">
          <p className="text-white">{title}</p>
          <p className="text-xs">{dates}</p>
        </div>
        <p className="text-[#ccc] text-sm">{subtitle}</p>
      </div>
    </div>
  );
}