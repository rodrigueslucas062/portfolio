import ProjetosGrid from "./projetos"

const MainContent = () => {
    return (
        <section className="flex-1 space-x-5">
            <div className="md:hidden gap-2">
                <h2 className="font-bold text-2xl my-10">Projetos</h2>
                <div className="flex flex-col gap-4 mt-4">
                    <ProjetosGrid />
                </div>
            </div>

            <div className="hidden md:block gap-4">
                <h2 className="font-bold text-2xl mt-10 mb-4">Projetos</h2>
                <span>Clique no card para mais informações</span>
                <div className="grid grid-cols-6 gap-4 mt-4">
                    <ProjetosGrid />
                </div>
            </div>
        </section>
    )
}

export default MainContent