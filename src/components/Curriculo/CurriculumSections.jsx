import { ArrowSquareOut } from "@phosphor-icons/react";
import Link from "next/link";

export const SectionTitle = ({ title }) => (
  <h2 className="text-white font-semibold mt-8">{title}</h2>
);


export const ContactItem = ({ label, href, text }) => (
  <div className="flex justify-between items-center group">
    <span className="text-zinc-400">{label}</span>
    <Link href={href} className="flex items-center gap-2 group-hover:decoration-2 group-hover:underline text-zinc-400">
      <span className="text-white">{text}</span>
      <ArrowSquareOut size={16} weight="duotone" />
    </Link>
  </div>
);

export const ExperienceItem = ({ date, company, description }) => (
  <div className="flex gap-4 group">
    <span className="text-zinc-400 text-xs w-full max-w-[130px]">{date}</span>
    <div className="flex flex-col justify-start space-y-1">
      <span className="text-white font-semibold">{company}</span>
      <span className="text-sm text-zinc-400">{description}</span>
    </div>
  </div>
)

export const EducationItem = ({ date, institution, course }) => (
  <div className="flex gap-4 group">
    <span className="text-zinc-400 text-xs w-full max-w-[130px]">{date}</span>
    <div className="flex flex-col justify-start space-y-1">
      <span className="text-white font-semibold">{institution}</span>
      <span className="text-sm text-zinc-400">{course}</span>
    </div>
  </div>
);