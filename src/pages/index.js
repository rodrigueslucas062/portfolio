import Banner from "@/components/banner/Banner";
import Contato from "@/components/contato/Contato";
import MainContent from "@/components/projetos/Main";
import Navbar from "@/components/navbar/Navbar";
import Sobre from "@/components/sobre/Sobre";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <section id="home">
      <Banner />
      </section>
      <section id="sobre" className="flex flex-col flex-1 bg-zinc-800 px-4 md:px-8 py-20">
        <Sobre />
      </section>
      <section id="projetos" className="flex flex-col flex-1 px-4 md:px-8 py-16 bg-center-top bg-cover bg-no-repeat galaxy">
        <MainContent />
      </section>
      <section id="contato">
        <Contato />
      </section>
    </div>
  );
}
