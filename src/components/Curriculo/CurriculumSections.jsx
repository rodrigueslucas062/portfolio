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

export const contactItems = [
  {
    label: "Website",
    href: "/",
    text: "rodrigueslucas.vercel.app",
  },
  {
    label: "Github",
    href: "https://github.com/rodrigueslucas062",
    text: "rodrigueslucas062",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rodrigueslucasdev/",
    text: "rodrigueslucasdev",
  },
  {
    label: "Email",
    href: "mailto:rodrigueslucas062@gmail.com",
    text: "rodrigueslucas062@gmail.com",
  },
];

export const experienceItems = [
  {
    date: "Jun/2024 - Atualmente",
    company: "CP3 Tecnologia",
    description: "Atuo utilizando React para a construção de aplicações web utilizando a arquitetura de Microfrontend e estilização de interfaces, UX/UI promovendo uma experiência de usuário intuitiva e visualmente atraente.",
  },
  {
    date: "Mai/2023 - Dez/2023",
    company: "RentzApp",
    description: "Atuei utilizando React e Next.js na criação de componentes, páginas estáticas e dinâmicas, integração com APIs GraphQL para a listagem de produtos, e funcionalidades SEO.",
  },
  {
    date: "Abr/2022 - Nov/2022",
    company: "Dunning",
    description: "Desempenhei um papel na manutenção do banco de dados, implementação de melhorias com Java e HTML, e na documentação e teste das APIs internas.",
  },
];

export const projectItems = [
  {
    status: "Em andamento",
    name: "Synapse flow",
    description: "Aplicação web para gerenciamento de tarefas e projetos, estilo Notion e Obsidian, utilizando React, Next.js e Tailwind CSS.",
  },
];

export const educationItems = [
  {
    date: "2021 - 2024",
    institution: "Centro Universitário UNA",
    course: "Graduação em Sistemas de Informação",
  },
  {
    date: "2017 - 2019",
    institution: "Colégio Cotemig",
    course: "Técnico em Informática",
  },
];