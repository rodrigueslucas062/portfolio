import Image from "next/image"
import Curtidas from "../../../public/images/curtidas.jpg"

const MainContent = () => {
    return (
        <section className="flex-1 space-x-5">
            <div className="gap-4">
                <h2 className="font-bold text-2xl my-10">Projetos</h2>
                <div className="m-4">
                    <div className="grid grid-cols-6 gap-4 mt-4">
                        <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                            <Image className="w-auto" src={Curtidas} alt="Capa playlist" width={190} height={190} />
                            <strong className="font-semi-bold">Portifólio</strong>
                            <span className="text-sm text-gray-400">Elaboração de site portifólio</span>
                        </a>
                        <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                            <Image className="w-auto" src={Curtidas} alt="Capa playlist" width={190} height={190} />
                            <strong className="font-semi-bold">Aderal</strong>
                            <span className="text-sm text-gray-400">Aderal, de Slipknot</span>
                        </a>
                        <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                            <Image className="w-auto" src={Curtidas} alt="Capa playlist" width={190} height={190} />
                            <strong className="font-semi-bold">Aderal</strong>
                            <span className="text-sm text-gray-400">Aderal, de Slipknot</span>
                        </a>
                        <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                            <Image className="w-auto" src={Curtidas} alt="Capa playlist" width={190} height={190} />
                            <strong className="font-semi-bold">Aderal</strong>
                            <span className="text-sm text-gray-400">Aderal, de Slipknot</span>
                        </a>
                        <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                            <Image className="w-auto" src={Curtidas} alt="Capa playlist" width={190} height={190} />
                            <strong className="font-semi-bold">Aderal</strong>
                            <span className="text-sm text-gray-400">Aderal, de Slipknot</span>
                        </a>
                        <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                            <Image className="w-auto" src={Curtidas} alt="Capa playlist" width={190} height={190} />
                            <strong className="font-semi-bold">Aderal</strong>
                            <span className="text-sm text-gray-400">Aderal, de Slipknot</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainContent