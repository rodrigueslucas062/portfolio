import Banner from "@/components/banner/Banner";
import Contato from "@/components/contato/Contato";
import Habilidades from "@/components/habilidades/Habilidades";
import MainContent from "@/components/projetos/Main";
import Navbar from "@/components/navbar/Navbar";
import Sobre from "@/components/sobre/Sobre";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col flex-1">
        <main className="bg-zinc-800 rounded-lg h-full p-8 mb-4">
          <Banner />
          <Sobre />
          <Habilidades />
          <MainContent />
        </main>
        <Contato />
      </div>
    </div>
  );
}
