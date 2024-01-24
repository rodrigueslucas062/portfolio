const Habilidades = () => {
    return (
        <section>
            <div className="py-4 px-10">
                <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Tecnologias</h1>
                <div className="flex flex-col space-y-2">
                    <div className="flex flex-col-5 gap-4">
                        <div className="bg-zinc-800 p-2 px-4 rounded-2xl border-2 border-gray-700 flex items-center justify-center">
                            <span className="text-xs text-gray-400 px-4 ">HTML</span>
                        </div>
                        <div className="bg-zinc-800 p-2 px-4 rounded-2xl border-2 border-gray-700 flex items-center justify-center">
                            <span className="text-xs text-gray-400 px-4 ">CSS</span>
                        </div>
                        <div className="bg-zinc-800 p-2 px-4 rounded-2xl border-2 border-gray-700 flex items-center justify-center">
                            <span className="text-xs text-gray-400 px-4 ">JavaScript</span>
                        </div>
                    </div>
                    <div className="ml-2 flex flex-col-3 gap-6">
                        <div className="bg-zinc-800 p-2 px-4 rounded-2xl border-2 border-gray-700 flex items-center justify-center">
                            <span className="text-xs text-gray-400 px-4 ">React</span>
                        </div>
                        <div className="bg-zinc-800 p-2 px-4 rounded-2xl border-2 border-gray-700 flex items-center justify-center">
                            <span className="text-xs text-gray-400 px-4 ">Next.js</span>
                        </div>
                        <div className="bg-zinc-800 p-2 px-4 rounded-2xl border-2 border-gray-700 flex items-center justify-center">
                            <span className="text-xs text-gray-400 px-4 ">Figma</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Habilidades