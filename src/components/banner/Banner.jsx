import React, { useEffect, useState } from 'react';
import TrackVisibility from 'react-on-screen';
import headerImg from "../../../public/images/header-img.svg"
import Perfil from '../../../public/images/perfil.jpeg'
import Image from 'next/image';
import Link from 'next/link';
import { Briefcase, GithubLogo, GraduationCap, LinkedinLogo } from '@phosphor-icons/react';

const Banner = () => {
    const Curriculo = "/files/LucasRodrigues.pdf"
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const [index, setIndex] = useState(1)
    const toRotate = ["Desenvolvedor Front-end", "Web Designer", "UI/UX Designer"]
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker) }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text,])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setIndex(prevIndex => prevIndex - 1)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setIndex(1)
            setDelta(500)
        } else {
            setIndex(prevIndex => prevIndex + 1)
        }
    }

    return (
        <section className="py-24 lg:py-40 bg-center-top bg-cover bg-no-repeat banner" id="home">
            <div className="justify-center">
                <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <div className='px-4 md:px-10 mb-8 max-2xl:space-y-8'>
                                <h2 className='font-bold text-3xl 2xl:text-6xl mb-3'>{`Alou, eu sou o Lucas`} </h2>
                                <h1 className='font-semibold text-2xl 2xl:text-4xl mb-4'><span className="txt-rotate" data-rotate='["Desenvolvedor Front-end", "Web Designer", "UI/UX Designer"]'><span className="wrap">{text}</span></span></h1>
                                <p className='md:w-2/3 font-medium md:text-md 2xl:text-xl'>Estudante de Sistemas de Informação, atuo como desenvolvedor front-end, em tecnologias como React e Next.js, busco constantemente aprender e aplicar conhecimentos para impulsionar minha formação profissional. </p>
                            </div>
                            <div className="flex flex-1 w-full xl:w-3/4 2xl:w-[45%] max-2xl:pt-8 px-4 md:px-10">
                                <div className="group w-full p-4 bg-white/5 space-y-2 rounded-xl shadow border-2 border-gray-700 backdrop-blur-sm">
                                    <div className="md:grid grid-cols-2 h-2/3 mb-6">
                                        <div className="flex flex-col items-center pt-10">
                                            <Image className="mb-3 rounded-full shadow-lg border-2 p-1 border-azul-claro" src={Perfil} alt="Lucas Rodrigues" width={125} height={125} />
                                            <h5 className="mb-1 text-xl font-medium text-white">Lucas Rodrigues</h5>
                                            <span className="text-sm mb-4 text-gray-400">Desenvolvedor Front-end</span>
                                            <div className="flex gap-4 mb-4">
                                                <Link href={"https://github.com/rodrigueslucas062"} className='hover:bg-white hover:text-zinc-900 hover:transition-all duration-500 ease-in-out p-1 rounded-full'>
                                                    <GithubLogo size={20} weight="duotone" />
                                                </Link>
                                                <Link href={"https://www.linkedin.com/in/rodrigueslucasdev/"} className='hover:bg-azul-claro hover:transition-all duration-500 ease-in-out p-1 rounded-md'>
                                                    <LinkedinLogo size={22} weight="duotone" />
                                                </Link>
                                            </div>
                                            <a href={Curriculo} target="_blank"
                                                rel="noopener noreferrer"
                                                className="border-2 border-azul-claro bg-zinc-900 py-2 px-6 rounded-lg">Download CV</a>
                                        </div>
                                        <div className="flex flex-col pt-10 px-4 space-y-4">
                                            <h5 className="text-3xl font-bold text-white">Qualificações</h5>
                                            <div className="flex gap-2 items-center">
                                                <Briefcase size={20} weight="duotone" className='text-white' />
                                                <span className="text-sm text-gray-400">Desenvolvedor Front-end</span>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <GraduationCap size={20} weight="duotone" className='text-white' />
                                                <span className="text-sm text-gray-400">Sistemas de informação</span>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <GraduationCap size={20} weight="duotone" className='text-white' />
                                                <span className="text-sm text-gray-400">Web designer</span>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <GraduationCap size={20} weight="duotone" className='text-white' />
                                                <span className="text-sm text-gray-400">UX/UI</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                </TrackVisibility>
                <TrackVisibility>
                    {({ isVisible }) => (
                        <div className="invisible md:visible w-2/6 h-2/6 max-2xl:w-1/4 max-2xl:h-1/4 absolute top-8 right-4 mt-4">
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                <Image src={headerImg} alt="Header Img" />
                            </div>
                        </div>
                    )}
                </TrackVisibility>
            </div>
        </section>
    )
}

export default Banner;