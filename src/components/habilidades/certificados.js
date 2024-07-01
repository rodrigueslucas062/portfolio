import { useState, useEffect } from "react";
import Link from "next/link";

const informacoes = [
  {
    link: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-LucasRodrigues-922080.pdf",
    titulo: "Certificado em Scrum",
    descricao: "SCRUMstudy - Accreditation Body for Scrum and Agile",
  },
  {
    link: "https://app.rocketseat.com.br/certificates/5999773a-6058-4671-b2f1-9c8dfc2aa11c",
    titulo: "NLW Expert trilha de React",
    descricao: "Rocketseat",
  },
  {
    link: "https://app.rocketseat.com.br/certificates/b083423a-d2e9-4f33-98dc-eddf3cfa7a8e",
    titulo: "NLW Unite - React Native",
    descricao: "Rocketseat",
  },
  {
    link: "https://app.rocketseat.com.br/certificates/ef0ffad9-2995-49ef-bf93-4c514b053856",
    titulo: "NLW Unite - Reactjs",
    descricao: "Rocketseat",
  },
  {
    link: "#",
    titulo: "Análise de dados e big data",
    descricao: "Centro Universitário Una",
  },
  {
    link: "#",
    titulo: "Design Thinking e Inovação",
    descricao: "Centro Universitário Una",
  },
  {
    link: "#",
    titulo: "Introdução ao UX Design",
    descricao: "Centro Universitário Una",
  },
];

const Certificados = ({ link, titulo, descricao }) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="bg-zinc-800 py-2 px-6 rounded-2xl border-2 border-azul-claro flex items-center hover:bg-white/5"
    >
      <div className="flex flex-col space">
        <strong className="font-semi-bold">{titulo}</strong>
        <span className="text-sm text-gray-400">{descricao}</span>
      </div>
    </Link>
  );
};

export function CertificadosGrid() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % informacoes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Certificados
      link={informacoes[currentIndex].link}
      titulo={informacoes[currentIndex].titulo}
      descricao={informacoes[currentIndex].descricao}
    />
  );
}

export function CertificadosGridModal() {
  return (
    <>
      {informacoes.map((info, index) => (
        <Certificados
          key={index}
          link={info.link}
          titulo={info.titulo}
          descricao={info.descricao}
        />
      ))}
    </>
  );
}
