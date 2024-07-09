import { fetchFigmaData } from "@/pages/api/figma";
import { useEffect, useState } from "react";

export default function AllProjects() {
    const [fileUrl, setFileUrl] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadFigmaData = async () => {
            try {
                const data = await fetchFigmaData();
                const figmaFileId = process.env.NEXT_PUBLIC_FIGMA_FILE_ID;
                const fileUrl = `https://www.figma.com/file/${figmaFileId}`;
                setFileUrl(`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(fileUrl)}`);
            } catch (error) {
                console.error('Error fetching Figma data:', error);
                setError(error.message);
            }
        };

        loadFigmaData();

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const ceu = document.querySelector('.ceu');
            const montanha = document.querySelector('.montanha');
            const terreno = document.querySelector('.terreno');
            const factor = 0.5;

            if (ceu && montanha && terreno) {
                ceu.style.height = `${100 - scrollPosition * factor}vh`;
                montanha.style.height = `${100 - scrollPosition * factor}vh`;
                terreno.style.height = `${100 - scrollPosition * factor}vh`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <section className="ceu" id="home">
                <div className="montanha">
                    <div className="terreno">
                        <div className="text-center py-[15%]">
                            <span className="text-8xl text-white font-semibold">Projetos</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex overflow-hidden">
                <div className="w-1/2 p-8">
                    <span>
                        Esse projeto foi desenvolvido para o trabalho final da matéria de Gerenciamento de Projetos da faculdade. Consiste em uma plataforma para disponibilizar os dados da apresentação das turmas de TI. Neste projeto tive a oportunidade de liderar uma pequena equipe de desenvolvimento, desenvolvi o layout no Figma e orientei meus colegas a desenvolver a aplicação, também desenvolvi algumas funcionalidades no site.
                    </span>
                </div>
                <div className="w-1/2">
                    <iframe style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} width="100%" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FWVxv3zCVC91AkKkKsrSwmx%2FExpo-Una-prototype%3Fnode-id%3D0-1%26t%3DOKUDIt7KnEwDwq6u-1" allowfullscreen></iframe>
                </div>
            </section>
        </>
    );
}
