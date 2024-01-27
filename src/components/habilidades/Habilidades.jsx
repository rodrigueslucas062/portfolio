const Habilidades = () => {
    return (
        <div className="flex flex-col md:flex-row my-10 gap-4">
            {/* Seção para telas pequenas (celulares) */}
            <div className="md:hidden flex flex-col gap-4 flex-1">
                <div className="flex flex-col w-full max-w-xl bg-white/5 rounded-xl shadow border-2 border-gray-700 hover:bg-white/10 p-4">
                    <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Tecnologias</h1>
                    <div className="flex flex-col-3 space-y-2">
                        <div className="flex flex-col gap-4 justify-between">
                            <div className="bg-zinc-800 p-2 px-4 rounded-2xl border-2 border-azul-claro flex items-center justify-center">
                                <span className="text-xs text-gray-400 px-4 ">HTML</span>
                            </div>
                            <div className="bg-zinc-800 p-2 px-4 rounded-2xl border-2 border-azul-claro flex items-center justify-center">
                                <span className="text-xs text-gray-400 px-4 ">CSS</span>
                            </div>
                            <div className="bg-zinc-800 p-2 px-4 rounded-2xl border-2 border-azul-claro flex items-center justify-center">
                                <span className="text-xs text-gray-400 px-4 ">JavaScript</span>
                            </div>
                            <div className="bg-zinc-800 p-2 px-4 rounded-2xl border-2 border-azul-claro flex items-center justify-center">
                                <span className="text-xs text-gray-400 px-4 ">JavaScript</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 justify-between">
                            <div className="bg-zinc-800 p-2 px-4 rounded-2xl border-2 border-azul-claro flex items-center justify-center">
                                <span className="text-xs text-gray-400 px-4 ">React</span>
                            </div>
                            <div className="bg-zinc-800 p-2 px-4 rounded-2xl border-2 border-azul-claro flex items-center justify-center">
                                <span className="text-xs text-gray-400 px-4 ">Next.js</span>
                            </div>
                            <div className="bg-zinc-800 p-2 px-4 rounded-2xl border-2 border-azul-claro flex items-center justify-center">
                                <span className="text-xs text-gray-400 px-4 ">Figma</span>
                            </div>
                        </div>
                    </div>
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
                        <div className="flex flex-col w-full">
                            <h1>Não sei oque por aqui</h1>
                            <h1>Escolher paleta de cor alem do cinza</h1>
                            <h1>Trabalhar responsividade</h1>
                            <h1>Adicionar conteudo em projetos</h1>
                            <h1>certificações</h1>
                            <h1>texto enormemente enorme so pra encher o tamanho da div pra testar uma coisa que não consigo entender pq nao da certo aaaaa</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Seção para telas grandes (desktop) */}
            <div className="hidden md:flex flex-1 gap-4">
                <div className="flex flex-col w-1/3 bg-white/5 rounded-xl shadow border-2 border-gray-700 hover:bg-white/10 p-4">
                    <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Tecnologias</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex flex-col-5 gap-4 justify-between">
                            <div className="bg-zinc-800 p-2 px-4 rounded-2xl border-2 border-azul-claro flex items-center justify-center">
                                <span className="text-xs text-gray-400 px-4 ">HTML</span>
                            </div>
                            <div className="bg-zinc-800 p-2 px-4 rounded-2xl border-2 border-azul-claro flex items-center justify-center">
                                <span className="text-xs text-gray-400 px-4 ">CSS</span>
                            </div>
                            <div className="bg-zinc-800 p-2 px-4 rounded-2xl border-2 border-azul-claro flex items-center justify-center">
                                <span className="text-xs text-gray-400 px-4 ">JavaScript</span>
                            </div>
                            <div className="bg-zinc-800 p-2 px-4 rounded-2xl border-2 border-azul-claro flex items-center justify-center">
                                <span className="text-xs text-gray-400 px-4 ">JavaScript</span>
                            </div>
                        </div>
                        <div className="flex flex-col-5 gap-4 justify-between">
                            <div className="bg-zinc-800 p-2 px-4 rounded-2xl border-2 border-azul-claro flex items-center justify-center">
                                <span className="text-xs text-gray-400 px-4 ">React</span>
                            </div>
                            <div className="bg-zinc-800 p-2 px-4 rounded-2xl border-2 border-azul-claro flex items-center justify-center">
                                <span className="text-xs text-gray-400 px-4 ">Next.js</span>
                            </div>
                            <div className="bg-zinc-800 p-2 px-4 rounded-2xl border-2 border-azul-claro flex items-center justify-center">
                                <span className="text-xs text-gray-400 px-4 ">Figma</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 group w-full max-w-xl bg-white/5 rounded-xl shadow border-2 border-gray-700 hover:bg-white/10 p-4">
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
                <div className="flex flex-col w-1/3 bg-white/5 rounded-xl shadow border-2 border-gray-700 hover:bg-white/10 p-4">
                    <div className="flex flex-col w-full">
                        <h1>Não sei oque por aqui</h1>
                        <h1>Escolher paleta de cor alem do cinza</h1>
                        <h1>Trabalhar responsividade</h1>
                        <h1>Adicionar conteudo em projetos</h1>
                        <h1>certificações</h1>
                        <h1>texto enormemente enorme so pra encher o tamanho da div pra testar uma coisa que não consigo entender pq nao da certo aaaaa</h1>
                        <h1>texto enormemente enorme so pra encher o tamanho da div pra testar uma coisa que não consigo entender pq nao da certo aaaaa</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Habilidades;