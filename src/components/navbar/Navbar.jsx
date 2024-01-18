const Navbar = () => {
    return (
        <nav className="mb-3">
            <div className="flex gap-16 justify-center">
                <ul>
                    <div className="bg-white/5 px-6 p-3 rounded-xl flex flex-col gap-2 hover:bg-white/10">
                        Sobre
                    </div>
                </ul>
                <ul>
                    <div className="bg-white/5 p-3 rounded-xl flex flex-col gap-2 hover:bg-white/10">
                        Habilidades
                    </div>
                </ul>
                <ul>
                    <div className="bg-white/5 p-3 rounded-xl flex flex-col gap-2 hover:bg-white/10">
                        Projetos
                    </div>
                </ul>
                <ul>
                    <div className="bg-white/5 p-3 rounded-xl flex flex-col gap-2 hover:bg-white/10">
                        Contato
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;