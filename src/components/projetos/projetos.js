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
    descricao: "Home do Spotify",
    descricao_modal: "Descrição do projeto Spotify interface",
    tecnologias: ["React", "Next.js", "CSS", "HTML", "JavaScript"],
  },
  {
    code: "https://github.com/rodrigueslucas062/Rocketseat",
    demo: "https://spotify-interface-nine.vercel.app/",
    imagemSrc: Curtidas,
    imagemAlt: "Imagem do projeto",
    titulo: "Bloco de anotações",
    descricao: "ToDo list com anotações",
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
      <Dialog.Trigger className="flex flex-1">
        <div className="flex bg-zinc-50/20 backdrop-blur-sm p-3 text-left rounded-md gap-2 border-2 border-azul-claro">
          <Image src={imagemSrc} alt={imagemAlt} max-width={100} height={100} className="rounded-md" />
          <div className="flex flex-col space-y-3">
            <strong className="font-semi-bold">{titulo}</strong>
            <span className="text-sm font-semibold text-white">{descricao}</span>
            <div className="flex gap-2 items-center">
              <Link href={code} target="_blank"
                className="flex bg-zinc-900 rounded-md border-2 border-azul-claro justify-center items-center p-2 gap-2 text-white" 
                onClick={(e) => e.stopPropagation()}>
                <Github size={16} />
                <span className="text-sm">Code</span>
              </Link>
              <Link href={demo} target="_blank"
                className="flex bg-zinc-900 rounded-md border-2 border-azul-claro justify-center items-center p-2 gap-2 text-white" 
                onClick={(e) => e.stopPropagation()}>
                <ExternalLink size={16} />
                <span className="text-sm">Demo</span>
              </Link>
            </div>
          </div>
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.DialogOverlay className="inset-0 fixed bg-black/90">
          <DialogContent className="fixed z-50 p-8 inset-0 bg-zinc-800 border-2 border-gray-700 rounded-2xl md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[940px] w-full md:h-[80vh] flex flex-col outline-none overflow-hidden">
            <Dialog.Close className="absolute right-0 top-0 p-1.5 text-gray-400 hover:text-gray-100 rounded-xl">
              <X size={20} />
            </Dialog.Close>
            <div className="flex-1 flex gap-8">
              <h1>oi</h1>
            </div>
          </DialogContent>
        </Dialog.DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

// const TagsGrid = ({ tecnologias }) => {
//   return (
//     <div className="flex flex-wrap gap-2">
//       {tecnologias.map((tag, index) => (
//         <div
//           key={index}
//           className="bg-zinc-900 p-2 rounded-md border-2 border-azul-claro flex items-center justify-center"
//         >
//           <span className="text-xs text-gray-400 px-2">{tag}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

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
