import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Contato = () => {
    return (
        <footer className="bg-zinc-900 pt-8">
            <div className="md:hidden flex px-4 flex-col my-4 space-y-4 justify-around">
                <div className="flex gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10">
                    <Github />
                    <Link href={"https://github.com/rodrigueslucas062"}>Github</Link>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10">
                    <Mail />
                    <span>rodrigueslucas062@gmail.com</span>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10">
                    <Linkedin />
                    <Link href={"https://www.linkedin.com/in/rodrigueslucasdev/"}>LinkedIn</Link>
                </div>
            </div>

            <div className="hidden md:flex my-4 justify-around">
                <div className="flex gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10">
                    <Github />
                    <Link href={"https://github.com/rodrigueslucas062"}>Github</Link>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10">
                    <Mail />
                    <span>rodrigueslucas062@gmail.com</span>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10">
                    <Linkedin />
                    <Link href={"https://www.linkedin.com/in/rodrigueslucasdev/"}>LinkedIn</Link>
                </div>
            </div>
            <div className="flex justify-center gap-1 p-4">
                <h1>Feito com 💚 by</h1>
                <Link href={"https://github.com/rodrigueslucas062"} target="_blank">Lucas Rodrigues</Link>
            </div>
        </footer>
    )
}

export default Contato;