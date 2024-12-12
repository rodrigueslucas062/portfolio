import TagsGrid from "../habilidades/tags";
import * as Dialog from "@radix-ui/react-dialog";
import { CertificadosGrid, CertificadosGridModal } from "../habilidades/certificados";
import { RevealList } from "next-reveal";
import { X } from "@phosphor-icons/react";

const Sobre = () => {
    return (
        <RevealList
            origin="bottom"
            distance="20px"
            duration={1000}
            delay={200}
            reset={false}
            interval={600}
        >
            <div className="flex max-lg:flex-col gap-4 bg-zinc-800 mt-3">
                <div className="flex flex-1">
                    <div className="group w-full p-4 bg-white/5 space-y-2 rounded-xl border-2 border-gray-700 hover:bg-white/10">
                        <div className="max-md:flex-col flex gap-4 justify-around">
                            <article className="text-wrap lg:w-1/2 bg-zinc-900 p-4 rounded-lg">
                                <h1 className="text-2xl font-bold text-white mb-4">Educação</h1>
                                <ol className="relative border-s border-azul-claro">
                                    <li className="mb-4 ms-4">
                                        <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-azul-escuro bg-azul-claro"></div>
                                        <h3 className="text-lg font-semibold text-white">Bacharel em Sistemas de Informação</h3>
                                        <time className="mb-1 text-sm font-normal leading-none text-gray-400">Fev/2021 - Dez/2024</time>
                                    </li>
                                    <li className="mb-4 ms-4">
                                        <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-azul-escuro bg-azul-claro"></div>
                                        <h3 className="text-lg font-semibold text-white">Colégio Cotemig</h3>
                                        <time className="mb-1 text-sm font-normal leading-none text-gray-400">Fev/2017 - Dez/2019</time>
                                    </li>
                                </ol>
                            </article>
                            <div className="w-full lg:w-1/2 space-y-4 bg-zinc-900 p-4 rounded-lg">
                                <h1 className="mb-4 text-xl font-bold text-white">Idiomas</h1>
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
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-base font-medium text-white">Alemão</span>
                                        <span className="text-base font-medium text-white">Básico</span>
                                    </div>
                                    <div className="flex flex-col border-2 border-azul-claro rounded-full justify-between mb-1 p-1">
                                        <div className="w-full rounded-full h-2.5 bg-azul-petroleo">
                                            <div className="bg-azul-claro h-2.5 rounded-full w-1/3"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-md:flex-col flex gap-4">
                            <div className="flex flex-col lg:w-1/2 bg-zinc-900 rounded-lg p-4">
                                <h1 className="mb-4 text-xl font-bold text-white">Tecnologias</h1>
                                <TagsGrid />
                            </div>
                            <div className="flex flex-col lg:w-1/2 bg-zinc-900 rounded-lg p-4 space-y-4">
                                <div className="flex justify-between">
                                    <h1 className="text-xl font-bold text-white">Certificados</h1>
                                    <Dialog.Root>
                                        <Dialog.Trigger>
                                            <div className="text-sm text-gray-400 flex gap-2 items-center hover:bg-zinc-800 px-2 py-1 rounded-md hover:ring-1 ring-azul-claro">
                                                Exibir todos
                                            </div>
                                        </Dialog.Trigger>

                                        <Dialog.Portal>
                                            <Dialog.DialogOverlay className="inset-0 fixed bg-black/20">
                                                <Dialog.DialogContent className="fixed z-10 inset-0 md:inset-auto max-md:top-[40%] lg:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[60vh] bg-zinc-800 max-md:rounded-t-3xl lg:rounded-3xl flex flex-col outline-none overflow-hidden ring-1 ring-azul-claro">
                                                    <Dialog.Close className="hover:bg-gray-300 p-2 rounded-full absolute top-2 right-2 hover:text-zinc-900 text-gray-200">
                                                        <X size={20} />
                                                    </Dialog.Close>
                                                    <div className="flex justify-center p-4 overflow-x-hidden">
                                                        <div className="rounded-lg mt-8 inline-block w-5/6 space-y-3">
                                                            <h2 className="font-semibold text-center text-lg">Certificados</h2>
                                                            <CertificadosGridModal />
                                                        </div>
                                                    </div>
                                                </Dialog.DialogContent>
                                            </Dialog.DialogOverlay>
                                        </Dialog.Portal>

                                    </Dialog.Root>
                                </div>
                                <CertificadosGrid />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1">
                    <div className="group w-full p-4 bg-white/5 space-y-2 rounded-xl shadow border-2 border-gray-700 hover:bg-white/10">
                        <h1 className="text-3xl font-bold text-white">Experiências</h1>
                        <ol className="relative border-s border-azul-claro">
                            <li className="mb-4 ms-4">
                                <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-azul-claro"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400">CP3 Tecnologia, Jun/2023 - Atualmente</time>
                                <h3 className="text-lg font-semibold text-white">Analista de sistemas Júnior</h3>
                                <p className="mb-4 text-sm font-normal text-gray-400">Atuo desenvolvendo Micro Frontends escaláveis com React para aplicações de grande escala</p>
                            </li>
                            <li className="mb-4 ms-4">
                                <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-azul-claro"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400">RentzApp, Mai/2023 - Dez/2023</time>
                                <h3 className="text-lg font-semibold text-white">Desenvolvedor Front-end</h3>
                                <p className="mb-4 text-sm font-normal text-gray-400">Atuei utilizando React e Next.js na criação de componentes, páginas estáticas e dinâmicas, integração com APIs GraphQL para a listagem de produtos, e funcionalidades SEO.</p>
                            </li>
                            <li className="mb-4 ms-4">
                                <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-azul-claro"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400">Dunning, Abr/2022 - Nov/2022</time>
                                <h3 className="text-lg font-semibold text-white">Desenvolvedor Full-stack</h3>
                                <p className="text-sm font-normal text-gray-400">Desempenhei um papel na manutenção do banco de dados, implementação de melhorias com Java e Html, e na documentação e teste das APIs internas.</p>
                            </li>
                            {/* <li className="ms-4">
                            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-azul-claro"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400">Irsis, Ago/2021 - Abr/2022</time>
                            <h3 className="text-lg font-semibold text-white">Suporte a Sistemas CRM</h3>
                            <p className="text-sm font-normal text-gray-400">Atuei realizando melhorias, manutenções, customizações e oferecendo suporte no sistema CRM Dynamics 365, atendendo às necessidades específicas de cada cliente.</p>
                        </li> */}
                        </ol>
                    </div>
                </div>
            </div>
        </RevealList >
    );
}

export default Sobre;