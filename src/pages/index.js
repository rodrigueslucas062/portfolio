import Banner from "@/components/banner/Banner";
import Contato from "@/components/contato/Contato";
import MainContent from "@/components/projetos/Main";
import Navbar from "@/components/navbar/Navbar";
import Sobre from "@/components/sobre/Sobre";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <Banner />
      <div className="flex flex-col flex-1 bg-zinc-800 p-4 md:p-8">
        <Sobre />
      </div>
      <div>
        <MainContent />
        <Contato />
      </div>
    </div>
  );
}
