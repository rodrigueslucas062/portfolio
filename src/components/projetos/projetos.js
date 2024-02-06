import React from "react";
import Image from "next/image";
import Curtidas from "../../../public/images/curtidas.jpg";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const informacoes = [
  {
    code: "https://github.com/rodrigueslucas062/portfolio",
    demo:"https://lucas-rodrigues-portfolio.vercel.app/",
    imagemSrc: Curtidas,
    imagemAlt: "Imagem de portifolio",
    titulo: "Portifólio",
    descricao: "Projeto de portifólio",
  },
  {
    code: "https://github.com/rodrigueslucas062/Spotify",
    demo:"https://spotify-interface-nine.vercel.app/",
    imagemSrc: Curtidas,
    imagemAlt: "Imagem do projeto",
    titulo: "Spotify interface",
    descricao: "Construção da home do Spotify",
  },
];

const Projetos = ({ code, demo, imagemSrc, imagemAlt, titulo, descricao }) => {
  return (
    <div className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
      <Image className="w-auto" src={imagemSrc} alt={imagemAlt} width={190} height={190} />
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
        />
      ))}
    </>
  );
};

export default ProjetosGrid;
