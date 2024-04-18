import TagsGrid from "./tags";
import CertificadosGrid from "./certificados";

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
                    <div className="flex flex-col flex-1 group w-full space-y-4 max-w-xl bg-white/5 rounded-xl shadow border-2 border-gray-700 hover:bg-white/10 p-4">
                        <h1 className="text-xl font-bold text-white">Certificados</h1>
                        <CertificadosGrid />
                    </div>
                </div>
            </div>

            {/* Seção para telas grandes (desktop) */}
            <div className="hidden md:flex flex-1 gap-4">
                <div className="hidden md:flex flex-1 w-1/3">
                    <div className="group w-full p-4 bg-white/5 space-y-2 rounded-xl shadow border-2 border-gray-700 hover:bg-white/10">
                        <h1 className="mb-4 text-xl font-bold text-white">Tecnologias</h1>
                        <TagsGrid />
                    </div>
                </div>
                <div className="hidden md:flex flex-1 w-1/3">
                    <div className="group w-full p-4 bg-white/5 space-y-2 rounded-xl shadow border-2 border-gray-700 hover:bg-white/10">
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
                </div>
                <div className="hidden md:flex flex-1 w-1/3">
                    <div className="group w-full p-4 bg-white/5 space-y-2 rounded-xl shadow border-2 border-gray-700 hover:bg-white/10">
                        <div className="flex flex-col space-y-4">
                            <h1 className="text-xl font-bold text-white">Certificados</h1>
                            <CertificadosGrid />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Habilidades;