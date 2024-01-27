const Navbar = () => {
    return (
        <nav className="flex mb-3 gap-16 justify-center">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <a href="#" className="bg-white/5 px-6 p-3 rounded-xl flex flex-col gap-2 hover:bg-white/10"> Sobre</a>
                        </li>
                        <li>
                            <a href="#" className="bg-white/5 px-6 p-3 rounded-xl flex flex-col gap-2 hover:bg-white/10">Habilidades</a>
                        </li>
                        <li>
                            <a href="#" className="bg-white/5 px-6 p-3 rounded-xl flex flex-col gap-2 hover:bg-white/10">Projetos</a>
                        </li>
                        <li>
                            <a href="#" className="bg-white/5 px-6 p-3 rounded-xl flex flex-col gap-2 hover:bg-white/10">Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;