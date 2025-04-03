import Image from "next/image";
import { Sidebar } from "../sidebar/Sidebar";
import Perfil from '../../public/images/perfil.jpeg';
import Link from "next/link";
import { ArrowSquareOut } from "@phosphor-icons/react";
import { ContactItem, EducationItem, ExperienceItem, SectionTitle } from "./CurriculumSections";


const CurriculumPage = () => {
  return (
    <div className="flex flex-row w-full h-screen bg-zinc-900">
      <Sidebar />
      <div className="flex w-full h-screen flex-col items-center py-12 lg:py-24 overflow-y-auto">
        <div className="flex flex-col space-y-10 p-6 lg:w-1/3">
          <section className="flex gap-4">
            <Image className="mb-3 rounded-full" src={Perfil} alt="Lucas Rodrigues" width={125} height={125} />
            <div className="flex flex-col justify-start space-y-3">
              <span className="text-2xl text-white font-semibold">
                Lucas Rodrigues
              </span>
              <span className="text-sm text-zinc-400">
                Analista de Sistemas em Belo Horizonte - MG
              </span>
              <Link href={"/"} className="bg-zinc-800 py-2 px-3 text-xs rounded-lg w-fit">rodrigueslucas.vercel.app</Link>
            </div>
          </section>

          <SectionTitle title="Sobre" />
          <span className="text-sm text-zinc-400">
            Sou analista de sistemas e UX/UI em formação, com foco no desenvolvimento front-end utilizando tecnologias como React e Next.js. Busco sempre aprimorar minhas habilidades e aplicar novos conhecimentos. Além disso, sou entusiasta em criar novas ferramentas e sempre em busca de novos desafios no universo da tecnologia.
          </span>

          <SectionTitle title="Contato" />
          <div className="flex flex-col space-y-4 w-full">
            <ContactItem
              label="Website"
              href={"/"}
              text="rodrigueslucas.vercel.app"
            />
            <ContactItem
              label="Github"
              href="https://github.com/rodrigueslucas062"
              text="rodrigueslucas062"
            />
            <ContactItem
              label="LinkedIn"
              href="https://www.linkedin.com/in/rodrigueslucasdev/"
              text="rodrigueslucasdev"
            />
            <ContactItem
              label="Email"
              href="mailto:rodrigueslucas062@gmail.com"
              text="rodrigueslucas062@gmail.com"
            />
          </div>

          <SectionTitle title="Trabalhos" />
          <div className="flex flex-col space-y-4">
            <ExperienceItem
              date="Jun/2024 - Atualmente"
              company="CP3 Tecnologia"
              description="Atuo utilizando React para a construção de aplicações web utilizando a arquitetura de Microfrontend e estilização de interfaces, UX/UI promovendo uma experiência de usuário intuitiva e visualmente atraente."
            />
            <ExperienceItem
              date="Mai/2023 - Dez/2023"
              company="RentzApp"
              description="Atuei utilizando React e Next.js na criação de componentes, páginas estáticas e dinâmicas, integração com APIs GraphQL para a listagem de produtos, e funcionalidades SEO."
            />
            <ExperienceItem
              date="Abr/2022 - Nov/2022"
              company="Dunning"
              description="Desempenhei um papel na manutenção do banco de dados, implementação de melhorias com Java e HTML, e na documentação e teste das APIs internas."
            />
          </div>

          <SectionTitle title="Projetos" />
          <div className="flex flex-col space-y-4">
            <div className="flex gap-4 group">
              <span className="text-zinc-400 text-xs w-full max-w-[130px]">Em andamento</span>
              <div className="flex flex-col justify-start space-y-1">
                <span className="text-white font-semibold">Synapse flow</span>
                <span className="text-sm text-zinc-400">
                  Aplicação web para gerenciamento de tarefas e projetos, estilo Notion e Obsidian, utilizando React, Next.js e Tailwind CSS.
                </span>
              </div>
              <div className="invisible group-hover:visible text-sm text-zinc-400 items-center transition-transform duration-500 transform group-hover:translate-x-2">
                <ArrowSquareOut size={16} weight="duotone" />
              </div>
            </div>
          </div>

          <SectionTitle title="Educação" />
          <div className="flex flex-col space-y-4">
            <EducationItem
              date="2021 - 2024"
              institution="Centro Universitário UNA"
              course="Graduação em Sistemas de Informação"
            />
            <EducationItem
              date="2017 - 2019"
              institution="Colégio Cotemig"
              course="Técnico em Informática"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumPage;
