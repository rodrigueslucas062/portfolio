import { useRouter } from 'next/router';
import * as Dialog from "@radix-ui/react-dialog";
import { FlaskConical, MoreHorizontal, X } from "lucide-react"
import { navLinks } from './NavLinks';
import { useEffect, useState } from 'react';

const sectionNames = {
    sobre: "Sobre",
    habilidades: "Habilidades",
    projetos: "Projetos",
    contato: "Contato",
}

const Navbar = () => {
    const router = useRouter()
    const [currentSection, setCurrentSection] = useState('')

    useEffect(() => {
        function handleScroll() {
            const sections = Array.from(document.querySelectorAll('section'))
            const scrollPosition = window.scrollY
            let closestSectionId = ''

            sections.forEach((section) => {
                if (section.offsetTop <= scrollPosition + 100) {
                    closestSectionId = section.id
                }
            })

            setCurrentSection(sectionNames[closestSectionId] || "Portfólio")
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <nav className="fixed flex top-3 w-full justify-center z-10 px-4 2xl:px-0">
            <div className="flex w-full lg:w-2/5 border-2 border-zinc-900 bg-gray-50/70 items-center lg:justify-center px-4 py-2 rounded-full backdrop-blur-sm transition-visible duration-500 ease-in-out">
                <div className='lg:hidden max-md:mx-auto text-zinc-900 text-lg font-semibold p-2'>
                    <span>{currentSection}</span>
                </div>
                <ul className="max-md:hidden flex font-medium rounded-lg">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className="hover:ring-2 ring-azul-claro text-zinc-900 2xl:px-6 px-4 py-2 rounded-xl flex gap-3">{item.label}</a>
                        </li>
                    ))}
                </ul>
                <Dialog.Root>
                    <Dialog.Trigger className="lg:invisible bg-zinc-200 hover:bg-zinc-400 text-zinc-900 hover:text-zinc-200 p-2 rounded-full">
                        <MoreHorizontal size={18} />
                    </Dialog.Trigger>

                    <Dialog.Portal>
                        <Dialog.DialogOverlay className="inset-0 fixed bg-black/70">
                            <Dialog.DialogContent className="fixed z-10 inset-0 md:inset-auto max-md:top-[55%] lg:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[65vh] bg-zinc-800 max-md:rounded-t-3xl lg:rounded-3xl flex flex-col outline-none overflow-hidden">
                                <Dialog.Close className="hover:bg-gray-300 p-2 rounded-full absolute top-2 right-2 text-gray-200 hover:text-zinc-800">
                                    <X className="size-5" />
                                </Dialog.Close>
                                <ul className="flex flex-col mt-8 py-6 px-8 font-medium space-y-6 rounded-lg">
                                    {navLinks.map((item) => (
                                        <li key={item.label}>
                                            <a href={item.href} className="bg-white/5 text-center px-6 p-3 rounded-xl flex flex-col gap-2 hover:bg-white/10">{item.label}</a>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex marker:text-gray-200 font-semibold mt-auto pb-2 w-3/4 lg:w-3/5 mx-auto flex-col space-y-2 bottom-0">
                                    <div className="flex justify-center">
                                        <span className="text-sm">Made for </span>
                                        <FlaskConical className="text-lime-500" />{" "}
                                        <span className="text-sm">By Lucas</span>
                                    </div>
                                </div>
                            </Dialog.DialogContent>
                        </Dialog.DialogOverlay>
                    </Dialog.Portal>

                </Dialog.Root>
            </div>
        </nav>
    );
};

export default Navbar;
