import Image from "next/image";
import { Sidebar } from "../sidebar/Sidebar";
import Perfil from '../../../public/images/perfil.jpeg';
import Link from "next/link";
import { ArrowSquareOut } from "@phosphor-icons/react";
import { ContactItem, contactItems, EducationItem, educationItems, ExperienceItem, experienceItems, projectItems, SectionTitle } from "./CurriculumSections";
import { RevealList } from "next-reveal";

const CurriculumPage = () => {
  return (
    <div className="flex flex-row w-full h-screen bg-zinc-900">
      <div className="hidden">
        <Sidebar />
      </div>
      <div className="flex w-full h-screen flex-col items-center py-12 lg:pt-24 lg:p-48 overflow-y-auto">
        <div className="flex flex-col space-y-12 p-6 lg:w-1/3">
          <RevealList
            origin="bottom"
            distance="5px"
            duration={1000}
            delay={200}
            reset={false}
            interval={600}
          >
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

            <section>
              <SectionTitle title="Sobre" />
              <span className="text-sm text-zinc-400">
                Sou analista de sistemas e UX/UI em formação, com foco no desenvolvimento front-end utilizando tecnologias como React e Next.js. Busco sempre aprimorar minhas habilidades e aplicar novos conhecimentos. Além disso, sou entusiasta em criar novas ferramentas e sempre em busca de novos desafios no universo da tecnologia.
              </span>
            </section>

            <section>
              <SectionTitle title="Contato" />
              <div className="flex flex-col space-y-4 w-full pt-2">
                {contactItems.map((item) => (
                  <ContactItem
                    key={item.label}
                    label={item.label}
                    href={item.href}
                    text={item.text}
                  />
                ))}
              </div>
            </section>

            <section>
              <SectionTitle title="Experiência de trabalho" />
              <div className="flex flex-col space-y-4 w-full pt-2">
                {experienceItems.map((item) => (
                  <ExperienceItem
                    key={item.company}
                    date={item.date}
                    company={item.company}
                    description={item.description}
                  />
                ))}
              </div>
            </section>
          </RevealList>

          <section>
            <SectionTitle title="Projetos" />
            <div className="flex flex-col space-y-4 w-full pt-2">
              {projectItems.map((item) => (
                <div key={item.name} className="flex gap-4 group">
                  <span className="text-zinc-400 text-xs min-w-fit">{item.status}</span>
                  <div className="flex flex-col justify-start space-y-1">
                    <span className="text-white font-semibold">{item.name}</span>
                    <span className="text-sm text-zinc-400">{item.description}</span>
                  </div>
                  <div className="invisible group-hover:visible text-sm text-zinc-400 items-center transition-transform duration-500 transform group-hover:translate-x-2">
                    <Link href={'/'} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ArrowSquareOut size={16} weight="duotone" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle title="Educação" />
            <div className="flex flex-col space-y-4">
              {educationItems.map((item) => (
                <EducationItem
                  key={item.institution}
                  date={item.date}
                  institution={item.institution}
                  course={item.course}
                />
              ))}
            </div>
          </section>

          {/* <section>
            <SectionTitle title="Certificados" />
            <div className="flex flex-col space-y-4">
              {educationItems.map((item) => (
                <EducationItem
                  key={item.institution}
                  date={item.date}
                  institution={item.institution}
                  course={item.course}
                />
              ))}
            </div>
          </section> */}
        </div>
      </div>
    </div>
  );
};

export default CurriculumPage;
