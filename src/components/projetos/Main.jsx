import Image from "next/image"
import Curtidas from "../../../public/images/curtidas.jpg"
import ProjetosGrid from "./projetos"

const MainContent = () => {
    return (
        <section className="flex-1 space-x-5">
            {/* Seção para telas pequenas (celulares) */}
            <div className="md:hidden gap-2">
                <h2 className="font-bold text-2xl my-10">Projetos</h2>
                <div className="flex flex-col gap-4 mt-4">
                    <div className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                        <Image className="w-auto" src={Curtidas} alt="Capa playlist" width={190} height={190} />
                        <strong className="font-semi-bold">Portifólio</strong>
                        <span className="text-sm text-gray-400">Projeto de portifólio</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                        <Image className="w-auto" src={Curtidas} alt="Capa playlist" width={190} height={190} />
                        <strong className="font-semi-bold">Aderal</strong>
                        <span className="text-sm text-gray-400">Aderal, de Slipknot</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                        <Image className="w-auto" src={Curtidas} alt="Capa playlist" width={190} height={190} />
                        <strong className="font-semi-bold">Aderal</strong>
                        <span className="text-sm text-gray-400">Aderal, de Slipknot</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                        <Image className="w-auto" src={Curtidas} alt="Capa playlist" width={190} height={190} />
                        <strong className="font-semi-bold">Aderal</strong>
                        <span className="text-sm text-gray-400">Aderal, de Slipknot</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                        <Image className="w-auto" src={Curtidas} alt="Capa playlist" width={190} height={190} />
                        <strong className="font-semi-bold">Aderal</strong>
                        <span className="text-sm text-gray-400">Aderal, de Slipknot</span>
                    </div>
                </div>
            </div>

            {/* Seção para telas grandes (desktop) */}
            <div className="hidden md:block gap-4">
                <h2 className="font-bold text-2xl my-10">Projetos</h2>
                <div className="m-4">
                    <div className="grid grid-cols-6 gap-4 mt-4">
                        <ProjetosGrid />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainContent