import React from "react";
import Image from "next/image";
import Curtidas from "../../../public/images/curtidas.jpg";

const informacoes = [
  {
    href: "link-para-o-projeto-1",
    imagemSrc: { Curtidas },
    imagemAlt: "Descrição da imagem 1",
    titulo: "Portifólio",
    descricao: "Projeto de portifólio",
  },
];

const Projetos = ({ imagemSrc, imagemAlt, titulo, descricao }) => {
  return (
    <div className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
      <Image className="w-auto" src={imagemSrc} alt={imagemAlt} width={190} height={190} />
      <strong className="font-semi-bold">{titulo}</strong>
      <span className="text-sm text-gray-400">{descricao}</span>
    </div>
  );
};

const ProjetosGrid = () => {
  return (
    <>
      {informacoes.map((info, index) => (
        <Projetos
          key={index}
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
