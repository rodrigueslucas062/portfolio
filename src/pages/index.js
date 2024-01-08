import Banner from "@/components/banner/Banner";
import MainContent from "@/components/main/Main";

export default function Home() {
  return (
    <main className="h-screen flex flex-col bg-zinc-950">
      <div className="flex flex-1 p-2">
        {/* <Banner /> */}
        <MainContent />
      </div>
    </main>
  );
}
