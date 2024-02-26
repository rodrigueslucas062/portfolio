import React from "react";
import Image from "next/image";
import Curtidas from "../../../public/images/curtidas.jpg";
import { ExternalLink, Github, X } from "lucide-react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { DialogContent } from "@radix-ui/themes";

const informacoes = [
  {
    code: "https://github.com/rodrigueslucas062/portfolio",
    demo: "https://lucas-rodrigues.vercel.app/",
    imagemSrc: Curtidas,
    imagemAlt: "Imagem de portifolio",
    titulo: "Portifólio",
    descricao: "Projeto de portifólio",
    descricao_modal: "Criei esse portifólio com o intuito de mostrar outros projetos que criei",
    tecnologias: ["Next.js", "HTML", "JavaScript", "CSS", "Tailwind"],
  },
  {
    code: "https://github.com/rodrigueslucas062/Spotify",
    demo: "https://spotify-interface-nine.vercel.app/",
    imagemSrc: Curtidas,
    imagemAlt: "Imagem do projeto",
    titulo: "Spotify interface",
    descricao: "Construção da home do Spotify",
    descricao_modal: "Descrição do projeto Spotify interface",
    tecnologias: ["React", "Next.js", "CSS", "HTML", "JavaScript"],
  },
  {
    code: "https://github.com/rodrigueslucas062/Rocketseat",
    demo: "https://spotify-interface-nine.vercel.app/",
    imagemSrc: Curtidas,
    imagemAlt: "Imagem do projeto",
    titulo: "Bloco de anotações",
    descricao: "Um projeto de anotações criadas por voz",
    descricao_modal: "Descrição do projeto Bloco de anotações",
    tecnologias: ["Next.js", "CSS", "HTML", "JavaScript", "Tailwind", "SpeechRecognitionAPI"],
  },
  {
    code: "https://github.com/rodrigueslucas062/jva-energia",
    demo: "https://jva-energia.vercel.app/",
    imagemSrc: Curtidas,
    imagemAlt: "Imagem do projeto",
    titulo: "JVA Energia",
    descricao: "Site JVA energia",
    descricao_modal: "Descrição do site JVA Energia",
    tecnologias: ["Next.js", "JavaScript", "Tailwind"],
  },
];

const Projetos = ({ code, demo, imagemSrc, imagemAlt, titulo, descricao, descricao_modal, tecnologias }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div className="bg-white/5 p-3 text-left rounded-md flex flex-col gap-2 hover:bg-white/10">
          <Image
            className="w-auto"
            src={imagemSrc}
            alt={imagemAlt}
            width={190}
            height={190}
          />
          <strong className="font-semi-bold">{titulo}</strong>
          <span className="text-sm text-gray-400">{descricao}</span>
          <div className="flex gap-4 items-center">
            <div className=" bg-zinc-900 rounded-2xl border-2 border-azul-claro">
              <Link href={code} target="_blank" className="flex justify-center items-center py-2 px-3 gap-2 text-white">
                <Github size={16} />
                <span>Code</span>
              </Link>
            </div>
            <div className=" bg-zinc-900 rounded-2xl border-2 border-azul-claro">
              <Link href={demo} target="_blank" className="flex justify-center items-center py-2 px-3 gap-2 text-white">
                <ExternalLink size={16} />
                <span>Demo</span>
              </Link>
            </div>
          </div>
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.DialogOverlay className="inset-0 fixed bg-black/90">
          <DialogContent className="fixed z-50 p-8 inset-0 bg-zinc-800 border-2 border-gray-700 rounded-2xl md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[940px] w-full md:h-[60vh] flex flex-col outline-none overflow-hidden">
            <Dialog.Close className="absolute right-0 top-0 p-1.5 text-gray-400 hover:text-gray-100 rounded-xl">
              <X size={20} />
            </Dialog.Close>
            <div className="flex-1 flex gap-8">
              <div className="space-y-4 lg:w-1/2">
                <p className="text-gray-400">{descricao_modal}</p>
                <div className="border-2 border-gray-700 space-y-3">
                  <h1 className="text-bold text-xl">Tecnologias usadas</h1>
                  <TagsGrid tecnologias={tecnologias} />
                </div>
              </div>
              <div className="space-y-4 lg:w-1/2">
                <p className="text-gray-400">
                  Criei esse portifólio com o intuito de mostrar outros projetos
                  que criei
                </p>
                <h1 className="text-bold text-md">Tecnologias usadas</h1>
              </div>
            </div>
          </DialogContent>
        </Dialog.DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const TagsGrid = ({ tecnologias }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tecnologias.map((tag, index) => (
        <div key={index} className="bg-zinc-900 p-2 rounded-md border-2 border-azul-claro flex items-center justify-center">
          <span className="text-xs text-gray-400 px-2">{tag}</span>
        </div>
      ))}
    </div>
  );
};

const ProjetosGrid = () => {
  return (
    <>
      {informacoes.map((info, index) => (
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
        />
      ))}
    </>
  );
};

export default ProjetosGrid;
