const Sobre = () => {
    return (
        <section id="sobre" className="flex max-lg:flex-col gap-4 bg-zinc-800">
            <div className="flex flex-1">
                <div className="group w-full p-4 bg-white/5 space-y-2 rounded-xl shadow border-2 border-gray-700 hover:bg-white/10">
                    <article className="text-wrap">
                        <h1 className="text-2xl font-bold text-white mb-4">Educação</h1>
                        <ol className="relative border-s border-gray-700 group-hover:border-gray-500">
                            <li className="mb-4 ms-4">
                                <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                                <h3 className="text-lg font-semibold text-white">Bacharel em Sistemas de Informação</h3>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400">Fev/2021 - Dez/2024</time>
                            </li>
                            <li className="mb-4 ms-4">
                                <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                                <h3 className="text-lg font-semibold text-white">Colégio Cotemig</h3>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400">Fev/2017 - Dez/2019</time>
                            </li>
                        </ol>
                    </article>
                </div>
            </div>
            <div className="flex flex-1">
                <div className="group w-full p-4 bg-white/5 space-y-2 rounded-xl shadow border-2 border-gray-700 hover:bg-white/10">
                    <h1 className="text-3xl font-bold text-white">Experiências</h1>
                    <ol className="relative border-s border-gray-700 group-hover:border-gray-500">
                        <li className="mb-4 ms-4">
                            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400">RentzApp, Mai/2023 - Dez/2023</time>
                            <h3 className="text-lg font-semibold text-white">Desenvolvedor Front-end</h3>
                            <p className="mb-4 text-sm font-normal text-gray-400">Atuei utilizando React e Next.js na criação de componentes, páginas estáticas e dinâmicas, integração com APIs GraphQL para a listagem de produtos, e funcionalidades SEO.</p>
                        </li>
                        <li className="mb-4 ms-4">
                            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400">Dunning, Abr/2022 - Nov/2022</time>
                            <h3 className="text-lg font-semibold text-white">Desenvolvedor Full-stack</h3>
                            <p className="text-sm font-normal text-gray-400">Desempenhei um papel na manutenção do banco de dados, implementação de melhorias com Java e Html, e na documentação e teste das APIs internas.</p>
                        </li>
                        <li className="ms-4">
                            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400">Irsis, Ago/2021 - Abr/2022</time>
                            <h3 className="text-lg font-semibold text-white">Suporte a Sistemas CRM</h3>
                            <p className="text-sm font-normal text-gray-400">Atuei realizando melhorias, manutenções, customizações e oferecendo suporte no sistema CRM Dynamics 365, atendendo às necessidades específicas de cada cliente.</p>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Sobre;