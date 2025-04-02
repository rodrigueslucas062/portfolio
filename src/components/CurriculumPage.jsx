import Image from "next/image";
import { Sidebar } from "./sidebar/Sidebar";
import Perfil from '../../public/images/perfil.jpeg'
import Link from "next/link";
import { ArrowSquareOut } from "@phosphor-icons/react";


const CurriculumPage = () => {
  return (
    <div className="flex flex-row w-full h-screen bg-zinc-900">
      <Sidebar />
      <div className="flex w-full h-screen flex-col items-center py-12 lg:py-24 overflow-y-auto">
        <div className="flex flex-col space-y-10 p-6 lg:w-1/3">
          <section className="flex gap-4 ">
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
          <section className="flex flex-col">
            <h2 className="text-white font-semibold mt-8">Sobre</h2>
            <span className="text-sm text-zinc-400">
              Sou analista de sistemas e UX/UI em formação, com foco no desenvolvimento front-end utilizando tecnologias como React e Next.js. Busco sempre aprimorar minhas habilidades e aplicar novos conhecimentos. Além disso, sou entusiasta em criar novas ferramentas e sempre em busca de novos desafios no universo da tecnologia.
            </span>
          </section>
          <section className="flex flex-col justify-start lg:w-2/3">
            <h2 className="text-white font-semibold mt-8">Contato</h2>
            <div className="flex flex-col space-y-4 w-full">
              <div className="flex justify-between items-center group">
                <span className="text-zinc-400">
                  Website
                </span>
                <Link href={"/"} className="flex items-center gap-2 group-hover:decoration-2 group-hover:underline text-zinc-400">
                  <span className="text-white">rodrigueslucas.vercel.app</span>
                  <ArrowSquareOut size={16} weight="duotone" />
                </Link>
              </div>
              <div className="flex justify-between items-center group">
                <span className="text-zinc-400">
                  Github
                </span>
                <Link href={"https://github.com/rodrigueslucas062"} className="flex items-center gap-2 group-hover:decoration-2 group-hover:underline text-zinc-400">
                  <span className="text-white">rodrigueslucas062</span>
                  <ArrowSquareOut size={16} weight="duotone" />
                </Link>
              </div>
              <div className="flex justify-between items-center group">
                <span className="text-zinc-400">
                  LinkedIn
                </span>
                <Link href={"https://www.linkedin.com/in/rodrigueslucasdev/"} className="flex items-center gap-2 group-hover:decoration-2 group-hover:underline text-zinc-400">
                  <span className="text-white">rodrigueslucasdev</span>
                  <ArrowSquareOut size={16} weight="duotone" />
                </Link>
              </div>
              <div className="flex justify-between items-center group">
                <span className="text-zinc-400">
                  Email
                </span>
                <Link href={"mailto:rodrigueslucas062@gmail.com"} className="flex items-center gap-2 group-hover:decoration-2 group-hover:underline text-zinc-400">
                  <span className="text-white">rodrigueslucas062@gmail.com</span>
                  <ArrowSquareOut size={16} weight="duotone" />
                </Link>
              </div>
            </div>
          </section>
          <section className="flex flex-col">
            <h2 className="text-white font-semibold mt-8">Trabalhos</h2>
            <div className="flex flex-col space-y-4">
              <div className="flex gap-4 group">
                <span className="text-zinc-400 text-xs w-full max-w-[130px]">
                  Jun/2024 - Atualmente
                </span>
                <div className="flex flex-col justify-start space-y-1">
                  <span className="text-white font-semibold">
                    CP3 Tecnologia
                  </span>
                  <span className="text-sm text-zinc-400">
                    Atuo utilizando React para a construção de aplicações web utilizando a arquitetura de Microfrontend e estilização de interfaces, UX/UI promovendo uma experiência de usuário intuitiva e visualmente atraente.
                  </span>
                </div>
              </div>
              <div className="flex gap-4 group">
                <span className="text-zinc-400 text-xs w-full max-w-[130px]">
                  Mai/2023 - Dez/2023
                </span>
                <div className="flex flex-col justify-start space-y-1">
                  <span className="text-white font-semibold">
                    RentzApp
                  </span>
                  <span className="text-sm text-zinc-400">
                    Atuei utilizando React e Next.js na criação de componentes, páginas estáticas e dinâmicas, integração com APIs GraphQL para a listagem de produtos, e funcionalidades SEO.
                  </span>
                </div>
              </div>
              <div className="flex gap-4 group">
                <span className="text-zinc-400 text-xs w-full max-w-[130px]">
                  Abr/2022 - Nov/2022
                </span>
                <div className="flex flex-col justify-start space-y-1">
                  <span className="text-white font-semibold">
                    Dunning
                  </span>
                  <span className="text-sm text-zinc-400">
                    Desempenhei um papel na manutenção do banco de dados, implementação de melhorias com Java e HTML, e na documentação e teste das APIs internas.
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col">
            <h2 className="text-white font-semibold mt-8">Projetos</h2>
            <div className="flex flex-col space-y-4">
              <div className="flex gap-4 group">
                <span className="text-zinc-400 text-xs w-full max-w-[130px]">
                  Em andamento
                </span>
                <div className="flex flex-col justify-start space-y-1">
                  <span className="text-white font-semibold">
                    Synapse flow
                  </span>
                  <span className="text-sm text-zinc-400">
                    Aplicação web para gerenciamento de tarefas e projetos, estilo Notion e Obsidian, utilizando React, Next.js e Tailwind CSS.
                  </span>
                </div>
                <div className="invisible group-hover:visible text-sm text-zinc-400 items-center transition-transform duration-500 transform group-hover:translate-x-2">
                  <ArrowSquareOut size={16} weight="duotone" />
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col">
            <h2 className="text-white font-semibold mt-8">Educação</h2>
            <div className="flex flex-col space-y-4">
              <div className="flex gap-4 group">
                <span className="text-zinc-400 text-xs w-full max-w-[130px]">
                  2021 - 2024
                </span>
                <div className="flex flex-col justify-start space-y-1">
                  <span className="text-white font-semibold w-full">
                    Centro Universitário UNA
                  </span>
                  <span className="text-sm text-zinc-400">
                    Graduação em Sistemas de Informação
                  </span>
                </div>
              </div>
              <div className="flex gap-4 group">
                <span className="text-zinc-400 text-xs w-full max-w-[130px]">
                  2017 - 2019
                </span>
                <div className="flex flex-col justify-start space-y-1">
                  <span className="text-white font-semibold w-full">
                    Colégio Cotemig
                  </span>
                  <span className="text-sm text-zinc-400">
                    Técnico em Informática
                  </span>
                </div>
                <div className="invisible group-hover:visible text-sm text-zinc-400 items-center transition-transform duration-500 transform group-hover:translate-x-2">
                  <ArrowSquareOut size={16} weight="duotone" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CurriculumPage;