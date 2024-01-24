import { Briefcase, GraduationCap } from "lucide-react";
import Image from "next/image";

const Sobre = () => {
    const avatarUrl = 'https://avatars.githubusercontent.com/u/39422637?s=400&u=b6bddbc97edde098ad4d50599d99479aff0cb6d9&v=4';
    return (
        <div className="flex my-10 gap-4">
            <div className="flex group flex-1 w-1/3">
                <div className="grid grid-cols-1 md:grid-cols-2 w-full bg-white/5 rounded-xl shadow border-2 border-gray-700 hover:bg-white/10">
                    <div className="flex flex-col items-center py-10">
                        <Image className="mb-3 rounded-full shadow-lg border-2 p-1 border-gray-600" src={avatarUrl} alt="Lucas Rodrigues" width={125} height={125} />
                        <h5 className="mb-1 text-xl font-medium text-white">Lucas Rodrigues</h5>
                        <span className="text-sm text-gray-400">Desenvolvedor Front-end</span>
                    </div>
                    <div className="flex flex-col py-10 px-4 space-y-4">
                        <h1 className="text-3xl font-bold text-white">Qualificações</h1>
                        <div className="flex gap-2 items-center">
                            <GraduationCap />
                            <span className="text-sm text-gray-400">Sistemas de informação</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Briefcase />
                            <span className="text-sm text-gray-400">Web designer</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Briefcase />
                            <span className="text-sm text-gray-400">UX/UI</span>
                        </div>
                    </div>
                    <div className="px-10 space-y-4 w-full">
                        <h1 className="mb-4 text-xl font-bold text-white">Idiomas</h1>
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-base font-medium text-white">Português</span>
                                <span className="text-base font-medium text-white">Nativo</span>
                            </div>
                            <div className="flex flex-col border-2 border-gray-700 group-hover:border-gray-500 rounded-full justify-between mb-1 p-1">
                                <div className="w-full rounded-full h-2.5 bg-purple-950">
                                    <div className="bg-purple-700 h-2.5 rounded-full w-full"></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-base font-medium text-white">Inglês</span>
                                <span className="text-base font-medium text-white">Intermediario</span>
                            </div>
                            <div className="flex flex-col border-2 border-gray-700 group-hover:border-gray-500 rounded-full justify-between mb-1 p-1">
                                <div className="w-full rounded-full h-2.5 bg-purple-950">
                                    <div className="bg-purple-700 h-2.5 rounded-full w-1/2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 group w-full max-w-xl bg-white/5 rounded-xl shadow border-2 border-gray-700 hover:bg-white/10 p-4">
                <article className="text-wrap">
                    <p>Estudante de Sistemas de Informação apaixonado por programação e desenvolvimento de software. Atuo como desenvolvedor front-end, em tecnologias como React e Next.js. Comprometido em aprimorar continuamente minhas habilidades, busco constantemente aprender e aplicar conhecimentos para impulsionar minha formação profissional.</p>
                    <hr className="border-gray-700 group-hover:border-gray-500 my-8" />
                    <h1 className="text-2xl font-bold text-white mb-4">Educação</h1>
                    <div className="space-y-4">
                        <div className="flex flex-col">
                            <strong className="font-semi-bold">Bacharel Sistemas de Informação</strong>
                            <span className="text-sm text-zinc-500">Fev/2021 - Em curso, Dez/2024</span>
                        </div>
                        <div className="flex flex-col">
                            <strong className="font-semi-bold">Colégio Cotemig</strong>
                            <span className="text-sm text-zinc-500">Fev/2017 - Dez/2019</span>
                        </div>
                    </div>
                </article>
            </div>
            <div className="flex flex-1 w-1/3">
                <div className="group w-full p-4 bg-white/5 space-y-4 rounded-xl shadow border-2 border-gray-700 hover:bg-white/10">
                    <h1 className="text-3xl font-bold text-white">Experiências</h1>
                    <ol className="relative border-s border-gray-700 group-hover:border-gray-500">
                        <li className="mb-6 ms-4">
                            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-500">RentzApp, Mai/2023 - Nov/2023</time>
                            <h3 className="text-lg font-semibold text-white">Desenvolvedor Front-end</h3>
                            <p className="mb-4 text-sm font-normal text-gray-400">Atuei utilizando React e Next.js na criação de componentes, páginas estáticas e dinâmicas, integração com APIs GraphQL para a listagem de produtos, e funcionalidades SEO.</p>
                        </li>
                        <li className="mb-6 ms-4">
                            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-500">Dunning, Abr/2022 - Nov/2022</time>
                            <h3 className="text-lg font-semibold text-white">Desenvolvedor Full-stack</h3>
                            <p className="text-sm font-normal text-gray-400">Desempenhei um papel na manutenção do banco de dados, implementação de melhorias tanto no frontend quanto no backend, e na documentação das APIs.</p>
                        </li>
                        <li className="ms-4">
                            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-500">Irsis, Ago/2021 - Abr/2022</time>
                            <h3 className="text-lg font-semibold text-white">Suporte a Sistemas CRM</h3>
                            <p className="text-sm font-normal text-gray-400">Atuei realizando melhorias, manutenções, customizações e oferecendo suporte em um sistema CRM, atendendo às necessidades específicas do cliente.</p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Sobre;