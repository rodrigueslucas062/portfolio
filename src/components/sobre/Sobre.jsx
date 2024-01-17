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
            <div className="w-1/3">
                <div className="grid grid-cols-1 md:grid-cols-2 w-full bg-white/5 rounded-xl shadow border-2 border-gray-700 hover:bg-white/10">
                    <div className="flex flex-col items-center py-10">
                        <Image className="mb-3 rounded-full shadow-lg border-2 p-1 border-gray-700" src={avatarUrl} alt="Lucas Rodrigues" width={125} height={125}/>
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
                                    <Image width={48} height={48} src={htmlIcon} alt="HTML Icon" />
                                    <span className="block text-xs text-gray-400 mt-2">HTML</span>
                                </div>
                                <div className="align-middle">
                                    <Image width={96} height={96} src={cssIcon} alt="CSS Icon" className="imagem"/>
                                    <span className="block text-xs text-gray-400 mt-2">CSS</span>
                                </div>
                                <div className="align-middle">
                                    <Image width={48} height={48} src={javascriptIcon} alt="JavaScript Icon" />
                                    <span className="block text-xs text-gray-400 mt-2">JavaScript</span>
                                </div>
                                <div className="align-middle">
                                    <Image width={48} height={48} src={reactIcon} alt="React Icon" />
                                    <span className="block text-xs text-gray-400 mt-2">React</span>
                                </div>
                                <div className="align-middle">
                                    <Image width={48} height={48} src={nextjsIcon} alt="Next.js Icon" />
                                    <span className="block text-xs text-gray-400 mt-2">Next.js</span>
                                </div>
                                <div className="align-middle">
                                    <Image width={48} height={48} src={figmaIcon} alt="Figma Icon" />
                                    <span className="block text-xs text-gray-400 mt-2">Figma</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-xl bg-white/5 rounded-xl shadow border-2 border-gray-700 hover:bg-white/10 p-4">
                <article className="text-wrap">
                    <p>Estudante de Sistemas de Informação apaixonado por programação e desenvolvimento de software. Atuo como desenvolvedor front-end, em tecnologias como React e Next.js. Comprometido em aprimorar continuamente minhas habilidades, busco constantemente aprender e aplicar conhecimentos para impulsionar minha formação profissional.</p>
                    <hr className="my-8"/>
                    {/* TO DO: Elaborar texto */}
                    <p>texto secundario</p>
                </article>
            </div>
            <div className="w-1/3">
                <div className="w-full bg-white/5 rounded-xl shadow border-2 border-gray-700 hover:bg-white/10">
                    <h1>teste</h1>
                </div>
            </div>
        </div>
    );
}

export default Sobre;