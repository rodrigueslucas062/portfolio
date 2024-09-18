import { FlaskConical, Github, Linkedin, Mail } from "lucide-react";
import { RevealList } from "next-reveal";
import Link from "next/link";
import { toast } from "sonner";

const Contato = () => {

    const handleCopyLink = (text) => {
        navigator.clipboard.writeText(text)
        toast.success('Endereço de email copiado', {
            position: 'bottom-center',
            duration: 2000,
        })
    }

    return (
        <RevealList
            origin="bottom"
            distance="20px"
            duration={1000}
            delay={200}
            reset={false}
            interval={600}
        >

            <section id="contato" className="bg-zinc-900 py-4">
                <div className="px-8">
                    <h1 className="text-3xl mb-4">Contato</h1>
                    <span>Gostou de algo? Entre em contato :)</span>
                </div>
                <div className="flex max-lg:flex-col max-lg:space-y-4 justify-around p-4 items-center lg:my-4">
                    <Link className="flex gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 hover:transition-all duration-500 ease-in-out group max-lg:w-full"
                        href={"https://github.com/rodrigueslucas062"}
                        target="_blank" >
                        <Github className="group-hover:bg-white group-hover:text-zinc-900 p-1 rounded-full" />
                        Github
                    </Link>
                    <Link className="flex gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 hover:transition-all duration-500 ease-in-out cursor-pointer max-lg:w-full"
                        href={'mailto:rodrigueslucas062@gmail.com'}
                        onClick={() => handleCopyLink('rodrigueslucas062@gmail.com')}>
                        <Mail />
                        <span>rodrigueslucas062@gmail.com</span>
                    </Link>
                    <Link className="flex gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 hover:transition-all duration-500 ease-in-out group max-lg:w-full"
                        href={"https://www.linkedin.com/in/rodrigueslucasdev/"}
                        target="_blank" >
                        <Linkedin className="group-hover:bg-azul-claro p-1 rounded-md" />
                        LinkedIn
                    </Link>
                </div>
                <div className="flex justify-center gap-1">
                    <span className="text-sm">Made for </span>
                    <FlaskConical size={18} className="text-lime-500" />
                    <span className="text-sm">By Lucas</span>
                </div>
            </section>
        </RevealList>
    )
}

export default Contato;