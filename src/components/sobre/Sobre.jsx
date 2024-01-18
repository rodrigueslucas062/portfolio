import { GraduationCap } from "lucide-react";
import Image from "next/image";
import htmlIcon from '../../../public/images/icons/html.png';
import cssIcon from '../../../public/images/icons/css.png';
import javascriptIcon from '../../../public/images/icons/javascript.png';
import reactIcon from '../../../public/images/icons/react.png';
import nextjsIcon from '../../../public/images/icons/nextjs.png';
import figmaIcon from '../../../public/images/icons/figma.png';

const Sobre = () => {
    const avatarUrl = 'https://avatars.githubusercontent.com/u/39422637?s=400&u=b6bddbc97edde098ad4d50599d99479aff0cb6d9&v=4';
    return (
        <div className="flex my-10 gap-4">
            <div className="flex flex-1 w-1/3">
                <div className="grid grid-cols-1 md:grid-cols-2 w-full bg-white/5 rounded-xl shadow border-2 border-gray-700 hover:bg-white/10">
                    <div className="flex flex-col items-center py-10">
                        <Image className="mb-3 rounded-full shadow-lg border-2 p-1 border-gray-600" src={avatarUrl} alt="Lucas Rodrigues" width={125} height={125} />
                        <h5 className="mb-1 text-xl font-medium text-white">Lucas Rodrigues</h5>
                        <span className="text-sm text-gray-400">Desenvolvedor Front-end</span>
                    </div>
                    <div className="flex flex-col py-10 px-4 space-y-4">
                        <h1 className="text-3xl font-bold text-white">Qualificações</h1>
                        <div className="flex gap-2">
                            <GraduationCap />
                            <span className="text-sm text-gray-400">Sistemas de informação</span>
                        </div>
                        <div className="flex gap-2">
                            <GraduationCap />
                            <span className="text-sm text-gray-400">Web designer</span>
                        </div>
                        <div className="flex gap-2">
                            <GraduationCap />
                            <span className="text-sm text-gray-400">UX/UI</span>
                        </div>
                    </div>
                    <div className="py-4 px-16">
                        <div className="flex flex-col">
                            <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Tecnologias</h1>
                            {/* TO DO: Melhorar icones */}
                            <div className="flex gap-12 items-center">
                                <div className="align-middle">
                                    <Image width={36} height={36} src={htmlIcon} alt="HTML Icon" />
                                    <span className="block text-xs text-gray-400 mt-2">HTML</span>
                                </div>
                                <div className="align-middle">
                                    <Image width={36} height={36} src={cssIcon} alt="CSS Icon" />
                                    <span className="block text-xs text-gray-400 mt-2">CSS</span>
                                </div>
                                <div className="align-middle">
                                    <Image width={36} height={36} src={javascriptIcon} alt="JavaScript Icon" />
                                    <span className="block text-xs text-gray-400 mt-2">JavaScript</span>
                                </div>
                                <div className="align-middle">
                                    <Image width={36} height={36} src={reactIcon} alt="React Icon" />
                                    <span className="block text-xs text-gray-400 mt-2">React</span>
                                </div>
                                <div className="align-middle">
                                    <Image width={36} height={36} src={nextjsIcon} alt="Next.js Icon" />
                                    <span className="block text-xs text-gray-400 mt-2">Next.js</span>
                                </div>
                                <div className="align-middle">
                                    <Image width={36} height={36} src={figmaIcon} alt="Figma Icon" />
                                    <span className="block text-xs text-gray-400 mt-2">Figma</span>
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
                    {/* TO DO: Elaborar texto */}
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
                    <div className="flex gap-2">
                        <div className="flex flex-col w-1/2">
                            <strong className="font-semi-bold">Desenvolvedor Front-end</strong>
                            <span className="text-sm text-zinc-500 underline">RentzApp, Mai/2023 - Nov/2023</span>
                        </div>
                        <div className="w-1/2">
                            <p className="text-sm">Atuei como desenvolvedor Front-end, utilizando React e Next.js na criação de componentes, páginas estáticas e dinâmicas, integração com APIs GraphQL para a listagem de produtos, e funcionalidades SEO.
                            </p>
                        </div>
                    </div>
                    <hr className="border-gray-700 group-hover:border-gray-500" />
                    <div className="flex gap-2">
                        <div className="flex flex-col w-1/2">
                            <strong className="font-semi-bold">Desenvolvedor Full-stack</strong>
                            <span className="text-sm text-zinc-500 underline">Dunning, Abr/2022 - Nov/2022</span>
                        </div>
                        <div className="w-1/2">
                            <p className="text-sm">Como desenvolvedor Full-stack, desempenhei um papel na manutenção do banco de dados, implementação de melhorias tanto no frontend quanto no backend, e na documentação das APIs.</p>
                        </div>
                    </div>
                    <hr className="border-gray-700 group-hover:border-gray-500" />
                    <div className="flex gap-2">
                        <div className="flex flex-col w-1/2">
                            <strong className="font-semi-bold">Suporte a Sistemas CRM</strong>
                            <span className="text-sm text-zinc-500 underline">Irsis, Ago/2021 - Abr/2022</span>
                        </div>
                        <div className="w-1/2">
                            <p className="text-sm">Atuei realizando melhorias, manutenções, customizações e oferecendo suporte em um sistema CRM, atendendo às necessidades específicas do cliente.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sobre;