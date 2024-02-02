import Link from "next/link";
import TagsGrid from "./tags";

const Habilidades = () => {
    return (
        <div className="flex flex-col md:flex-row my-10 gap-4">
            {/* Seção para telas pequenas (celulares) */}
            <div className="md:hidden flex flex-col gap-4 flex-1">
                <div className="flex flex-col w-full max-w-xl bg-white/5 rounded-xl shadow border-2 border-gray-700 hover:bg-white/10 p-4">
                    <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Tecnologias</h1>
                    <TagsGrid />
                </div>
                <div className="flex flex-1 group w-full bg-white/5 rounded-xl shadow border-2 border-gray-700 hover:bg-white/10 p-4">
                    <div className="w-full">
                        <h1 className="mb-4 text-xl font-bold text-white">Idiomas</h1>
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-base font-medium text-white">Português</span>
                                <span className="text-base font-medium text-white">Nativo</span>
                            </div>
                            <div className="flex flex-col border-2 border-azul-claro group-hover:border-gray-500 rounded-full justify-between mb-1 p-1">
                                <div className="w-full rounded-full h-2.5 bg-azul-petroleo">
                                    <div className="bg-azul-claro h-2.5 rounded-full w-full"></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-base font-medium text-white">Inglês</span>
                                <span className="text-base font-medium text-white">Intermediario</span>
                            </div>
                            <div className="flex flex-col border-2 border-azul-claro group-hover:border-gray-500 rounded-full justify-between mb-1 p-1">
                                <div className="w-full rounded-full h-2.5 bg-azul-petroleo">
                                    <div className="bg-azul-claro h-2.5 rounded-full w-1/2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1">
                    <div className="flex flex-col flex-1 group w-full max-w-xl bg-white/5 rounded-xl shadow border-2 border-gray-700 hover:bg-white/10 p-4">
                        <h1 className="mb-4 text-xl font-bold text-white">Certificados</h1>
                        <div className="bg-zinc-800 py-2 px-6 rounded-2xl border-2 border-azul-claro flex flex-col items-center space-y-2">
                            <div className="flex flex-col space-y-3">
                                <strong className="font-semi-bold">Certificado em Fundamentos do Scrum</strong>
                                <span className="text-sm text-gray-400">SCRUMstudy - Accreditation Body for Scrum and Agile</span>
                            </div>
                            <button className="border-2 bg-zinc-900 py-1 px-4 rounded-full">
                                <p className="text-sm bold text-gray-400">Certificado</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Seção para telas grandes (desktop) */}
            <div className="hidden md:flex flex-1 gap-4">
                <div className="flex flex-col w-1/3 bg-white/5 rounded-xl shadow border-2 border-gray-700 hover:bg-white/10 p-4">
                    <h1 className="mb-4 text-xl font-bold text-white">Tecnologias</h1>
                    <TagsGrid />
                </div>
                <div className="flex flex-1 group w-full max-w-xl bg-white/5 rounded-xl shadow border-2 border-gray-700 hover:bg-white/10 p-4">
                    <div className="w-full">
                        <h1 className="mb-4 text-xl font-bold text-white">Idiomas</h1>
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-base font-medium text-white">Português</span>
                                <span className="text-base font-medium text-white">Nativo</span>
                            </div>
                            <div className="flex flex-col border-2 border-azul-claro rounded-full justify-between mb-1 p-1">
                                <div className="w-full rounded-full h-2.5 bg-azul-petroleo">
                                    <div className="bg-azul-claro h-2.5 rounded-full w-full"></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-base font-medium text-white">Inglês</span>
                                <span className="text-base font-medium text-white">Intermediario</span>
                            </div>
                            <div className="flex flex-col border-2 border-azul-claro rounded-full justify-between mb-1 p-1">
                                <div className="w-full rounded-full h-2.5 bg-azul-petroleo">
                                    <div className="bg-azul-claro h-2.5 rounded-full w-1/2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex flex-1 w-1/3">
                    <div className="group w-full p-4 bg-white/5 space-y-2 rounded-xl shadow border-2 border-gray-700 hover:bg-white/10">
                        <div className="flex flex-col">
                            <h1 className="mb-4 text-xl font-bold text-white">Certificados</h1>
                            <div className="bg-zinc-800 py-2 px-6 rounded-2xl border-2 border-azul-claro flex items-center">
                                <div className="flex flex-col mr-4">
                                    <strong className="font-semi-bold">Certificado em Fundamentos do Scrum</strong>
                                    <span className="text-sm text-gray-400">SCRUMstudy - Accreditation Body for Scrum and Agile</span>
                                </div>
                                <div>
                                    <Link href={"https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-LucasRodrigues-922080.pdf"} target="_blank">
                                        <button className="border-2 border-azul-claro bg-zinc-900 py-1 px-4 rounded-full">
                                            <p className="text-sm bold">Certificado</p>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Habilidades;