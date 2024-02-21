import { useEffect, useState } from 'react';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMenuVisible, setIsMenuVisible] = useState(true)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 200) {
                setIsMenuVisible(true)
            } else {
                setIsMenuVisible(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <nav className="bg-zinc-900 fixed w-full z-20 top-0 start-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-3">
                <div className="flex justify-end md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden bg-zinc-100"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        onClick={toggleMenu}>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`${isMenuOpen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 font-medium max-md:space-y-2 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:border-0">
                        <li>
                            <a href="#" className="bg-white/5 px-6 p-3 rounded-xl flex flex-col gap-2 hover:bg-white/10">Sobre</a>
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
    );
};

export default Navbar;