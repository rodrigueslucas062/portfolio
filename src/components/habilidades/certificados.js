import Link from "next/link";

const informacoes = [
  {
    link: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-LucasRodrigues-922080.pdf",
    titulo: " Certificado em Scrum",
    descricao: "SCRUMstudy - Accreditation Body for Scrum and Agile",
  },
  {
    link: "https://app.rocketseat.com.br/certificates/5999773a-6058-4671-b2f1-9c8dfc2aa11c",
    titulo: "NLW Expert trilha de React",
    descricao: "Rocketseat",
  },
];

const Certificados = ({ link, titulo, descricao }) => {
  return (
    <Link href={link}
      className="bg-zinc-800 py-2 px-6 rounded-2xl border-2 border-azul-claro flex items-center" target="_blank">
      <div className="flex flex-col">
        <strong className="font-semi-bold">
          {titulo}
        </strong>
        <span className="text-sm text-gray-400">
          {descricao}
        </span>
      </div>
    </Link>
  );
};

const CertificadosGrid = () => {
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
};

export default CertificadosGrid;
