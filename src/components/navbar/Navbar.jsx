import { useRouter } from 'next/router';
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image"
import Perfil from '../../../public/images/perfil.jpeg'
import { FlaskConical, MoreHorizontal, X } from "lucide-react"

const Navbar = () => {
    const router = useRouter();

    const isNotePadRoute = router.pathname === '/notepad';
    const notebookText = isNotePadRoute ? 'Anotações' : 'Tarefas Gerais';

    return (
        <nav className="fixed flex top-8 w-full justify-center z-10">
            <div className="flex w-full lg:w-2/5 border-2 border-zinc-900 bg-gray-50/70 items-center justify-between px-4 py-2 rounded-full backdrop-blur-sm transition-visible duration-500 ease-in-out">
                <Image className="rounded-xl border-2 border-zinc-900" src={Perfil} alt="Lucas Rodrigues" width={50} height={50} />
                {/* <h5 className="mb-1 text-xl font-semibold text-zinc-800">{router.pathname === '/dailytasks' ? 'Tarefas Diárias' : notebookText}</h5> */}
                <ul className="max-md:hidden flex flex-col p-4 md:p-0 font-medium max-md:space-y-2 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:border-0">
                    <li>
                        <a href="#" className="bbg-zinc-200 hover:bg-zinc-400 text-zinc-900 hover:text-zinc-200 px-6 p-2 rounded-xl flex flex-col gap-2">Sobre</a>
                    </li>
                    <li>
                        <a href="#" className="bbg-zinc-200 hover:bg-zinc-400 text-zinc-900 hover:text-zinc-200 px-6 p-2 rounded-xl flex flex-col gap-2">Habilidades</a>
                    </li>
                    <li>
                        <a href="#" className="bbg-zinc-200 hover:bg-zinc-400 text-zinc-900 hover:text-zinc-200 px-6 p-2 rounded-xl flex flex-col gap-2">Projetos</a>
                    </li>
                    <li>
                        <a href="#" className="bbg-zinc-200 hover:bg-zinc-400 text-zinc-900 hover:text-zinc-200 px-6 p-2 rounded-xl flex flex-col gap-2">Contato</a>
                    </li>
                </ul>
                <Dialog.Root>
                    <Dialog.Trigger className="lg:invisible bg-zinc-200 hover:bg-zinc-400 text-zinc-900 hover:text-zinc-200 p-2 rounded-full">
                        <MoreHorizontal size={18} />
                    </Dialog.Trigger>

                    <Dialog.Portal>
                        <Dialog.DialogOverlay className="inset-0 fixed bg-black/70">
                            <Dialog.DialogContent className="fixed z-10 inset-0 md:inset-auto max-md:top-[45%] lg:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[65vh] bg-gray-200 max-md:rounded-t-3xl lg:rounded-3xl flex flex-col outline-none overflow-hidden">
                                <Dialog.Close className="hover:bg-gray-300 p-2 rounded-full absolute top-2 right-2 text-zinc-800">
                                    <X className="size-5" />
                                </Dialog.Close>
                                <div className="flex flex-col items-center justify-center gap-3 px-2 lg:px-4 pt-1.5">
                                    <div className="rounded-lg mt-4 lg:mt-8 justify-center inline-block w-3/4 lg:w-3/5 relative text-zinc-900">
                                        <div className='flex justify-center'>
                                            <span className="font-semibold text-zinc-900 text-lg">{router.pathname === '/dailytasks' ? 'Tarefas Diárias' : notebookText}</span>
                                        </div>
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
                                <div className="flex text-zinc-800 font-semibold mt-auto pb-2 w-3/4 lg:w-3/5 mx-auto flex-col space-y-2 bottom-0">
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
