import React from "react";
import Image from "next/image";
import Spotify from "../../../public/images/Spotify.png";
import Todo from "../../../public/images/Todo.png";
import Jva from "../../../public/images/Jva.png";
import { ExternalLink, Github, X } from "lucide-react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";

const informacoes = [
  {
    code: "https://github.com/rodrigueslucas062/Spotify",
    demo: "https://spotify-interface-nine.vercel.app/",
    imagemSrc: Spotify,
    imagemAlt: "Imagem do projeto",
    titulo: "Spotify",
    descricao:
      "Esse projeto foi meu primeiro contato com Tailwind, consiste na recriação da interface do Spotify utilizando Next.js e Tailwind CSS. O uso das classes utilitárias do Tailwind permitiu uma estilização concisa e legível, resultando em uma interface visualmente impressionante.",
    descricao_modal:
      "No momento, não estou mais envolvido nesse projeto. Procurei ser o mais fiel possível à interface utilizada, dentro dos limites dos meus conhecimentos na época. Não é nada responsivo, está aqui para ver minha evolução ao longo do tempo",
    tecnologias: ["React", "Next.js", "CSS", "HTML", "JavaScript"],
    libs: ["Nenhuma lib foi utilizada nesse projeto"],
  },
  {
    code: "https://github.com/rodrigueslucas062/jva-energia",
    demo: "https://jva-energia.vercel.app/",
    imagemSrc: Jva,
    imagemAlt: "Imagem do projeto",
    titulo: "JVA Energia",
    descricao:
      "Nesse projeto, criei uma landing page para um site de energia solar. Além de apresentar todas as vantagens e benefícios da energia solar de forma clara e direta, também incluí uma seção onde os visitantes podem deixar suas dúvidas e solicitar orçamentos. Utilizando Next.js e Tailwind.",
    descricao_modal:
      "Desenvolvi a landing page para o site da Jva. Já estava estudando a estilização com Tailwind há algum tempo e isso me permitiu realizar um trabalho significativamente mais competente em comparação com projetos anteriores, como o do Spotify.",
    tecnologias: ["Next.js", "JavaScript", "Tailwind"],
    libs: ["Nenhuma lib foi utilizada nesse projeto"],
  },
  {
    code: "https://github.com/rodrigueslucas062/task-manager",
    demo: "https://task-tree.vercel.app/",
    imagemSrc: Todo,
    imagemAlt: "Imagem do projeto",
    titulo: "Bloco de anotações",
    descricao:
      "Esse projeto é um daqueles ToDo lists, mas com uma funcionalidade extra, você pode adicionar blocos de notas como se fossem post-its! Feito com Next.js, as tarefas e notas ficam salvas no localstorage do navegador, então não precisa se preocupar em perder nada. É possivel adicionar notas usando a API de reconhecimento de fala do navegador.",
    descricao_modal:
      "Desenvolvi este ToDo list depois de me inspirar em alguns exemplos no LinkedIn e Youtube. Há algum tempo, desejava organizar minhas tarefas de forma mais eficiente, então surgiu essa ideia. Durante o desenvolvimento, ocorreu-me a possibilidade de integrar outro projeto em andamento, então adicionei os Post-Its. Continuo trabalhando neste projeto.",
    tecnologias: [
      "Next.js",
      "JavaScript",
      "Tailwind",
      "SpeechRecognitionAPI",
      "Localstorage",
      "Custom Hooks",
    ],
    libs: ["Radix-ui", "Sonner", "Lucid-react"],
  },
];

const Projetos = ({ code, demo, imagemSrc, imagemAlt, titulo, descricao, descricao_modal, tecnologias, libs }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div className="flex flex-col bg-zinc-900/40 h-full items-center backdrop-blur-md p-4 rounded-md gap-2 ring-2 ring-gray-700">
          <Image
            src={imagemSrc}
            alt={imagemAlt}
            max-width={250}
            height={250}
            className="rounded-md ring-1 ring-azul-claro"
          />
          <div className="flex flex-col space-y-3">
            <strong className="font-semi-bold">{titulo}</strong>
            <span className="text-sm font-semibold text-left text-white">
              {descricao}
            </span>
          </div>
          <div className="flex gap-4 mt-auto">
            <Link
              href={code}
              target="_blank"
              className="flex bg-zinc-900 rounded-md ring-2 ring-azul-claro justify-center items-center px-3 py-2 gap-2 text-white hover:bg-white/5"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} />
              <span className="text-sm">Code</span>
            </Link>
            <Link
              href={demo}
              target="_blank"
              className="flex bg-zinc-900 rounded-md ring-2 ring-azul-claro justify-center items-center px-3 py-2 gap-2 text-white hover:bg-white/5"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} />
              <span className="text-sm">Demo</span>
            </Link>
          </div>
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.DialogOverlay className="inset-0 fixed bg-black/20">
          <Dialog.DialogContent className="fixed z-10 inset-0 md:inset-auto max-md:top-[35%] lg:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[60vh] bg-zinc-800 max-md:rounded-t-3xl lg:rounded-3xl flex flex-col outline-none overflow-hidden">
            <Dialog.Close className="hover:bg-gray-300 p-2 rounded-full absolute top-2 right-2 hover:text-zinc-900 text-gray-200">
              <X className="size-5" />
            </Dialog.Close>
            <div className="flex justify-center p-3 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              <div className="mt-4 inline-block w-5/6 space-y-4">
                <h2 className="font-semibold text-center text-lg my-2">
                  Sobre o projeto
                </h2>
                <span>{descricao_modal}</span>
                <h2 className="font-semibold text-center text-lg my-2">
                  Tech Stack
                </h2>
                <TagsGrid tecnologias={tecnologias} />
                <h2 className="font-semibold text-center text-lg my-2">
                  Libs utilizadas
                </h2>
                <LibsGrid libs={libs} />
              </div>
            </div>
          </Dialog.DialogContent>
        </Dialog.DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const TagsGrid = ({ tecnologias }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {tecnologias.map((tag, index) => (
        <div
          key={index}
          className="bg-zinc-900 p-2 rounded-md ring-2 ring-azul-claro flex items-center justify-center"
        >
          <span className="text-xs text-gray-400 px-2">{tag}</span>
        </div>
      ))}
    </div>
  );
};

const LibsGrid = ({ libs }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {libs.map((libs, index) => (
        <div
          key={index}
          className="bg-zinc-900 p-2 rounded-md ring-2 ring-azul-claro flex items-center justify-center"
        >
          <span className="text-xs text-gray-400 px-2">{libs}</span>
        </div>
      ))}
    </div>
  );
};

const ProjetosGrid = () => {
  return (
    <>
      {informacoes.map((info, index) => (
        <div className="flex flex-1">
          <Projetos
            key={index}
            code={info.code}
            demo={info.demo}
            imagemSrc={info.imagemSrc}
            imagemAlt={info.imagemAlt}
            titulo={info.titulo}
            descricao={info.descricao}
            descricao_modal={info.descricao_modal}
            tecnologias={info.tecnologias}
            libs={info.libs}
          />
        </div>
      ))}
    </>
  );
};

export default ProjetosGrid;
