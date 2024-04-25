import Link from "next/link";
import ProjetosGrid from "./projetos"
import { ExternalLink } from "lucide-react";

const MainContent = () => {
    return (
        <div className="flex-1 mt-3">
            {/* <button className="flex text-sm font-semibold hover:bg-zinc-900/50 hover:backdrop-blur-sm px-3 py-2 rounded-xl">
                <Link href={''} className="flex items-center gap-2" >
                    Ver todos
                    <ExternalLink size={12} />
                </Link>
            </button> */}
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 mt-4">
                <ProjetosGrid />
            </div>
        </div>
    )
}

export default MainContent