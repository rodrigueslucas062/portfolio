import ProjetosGrid from "./projetos"
import { useEffect, useRef } from "react";


const MainContent = () => {
    const svgRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            const svg = svgRef.current;
            if (svg) {
                const rect = svg.getBoundingClientRect();
                const width = rect.width;
                const height = rect.height;
                svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
            }
        };

        const handleScroll = () => {
            handleResize();
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <section className="flex-1 py-4 space-x-5 px-4 2xl:px-0">
                <div className="md:hidden gap-2">
                    <h2 className="font-bold text-2xl my-5">Projetos</h2>
                    <div className="flex flex-col gap-4 mt-4">
                        <ProjetosGrid />
                    </div>
                </div>

                <div className="hidden md:block gap-4">
                    <h2 className="font-bold text-2xl mb-4">Projetos</h2>
                    <span>Clique no card para mais informações</span>
                    <div className="flex gap-8 mt-4">
                        <ProjetosGrid />
                    </div>
                </div>
            </section>
            <svg
                ref={svgRef}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1920 1080"
                preserveAspectRatio="xMinYMin slice"
                style={{
                    position: "fixed",
                    width: "100vw",
                    height: "100vh",
                    top: 0,
                    left: 0,
                    zIndex: -1,
                }}
            >
                <defs>
                    <path
                        id="selector-zigzag-path"
                        d="M-5 5L5.1 15 15 5l10 10"
                        strokeLinecap="square"
                        strokeWidth="7"
                        stroke="#3d444b"
                        fill="none"
                    />
                    <pattern
                        id="selector-zigzag-bg"
                        patternUnits="userSpaceOnUse"
                        width="20"
                        height="20"
                        patternTransform="scale(2.5)"
                    >
                        <g id="selector-zigzag-animated-group">
                            <g>
                                <use href="#selector-zigzag-path" />
                                <animateTransform
                                    attributeName="transform"
                                    type="translate"
                                    keyTimes="0;1"
                                    repeatCount="indefinite"
                                    dur="1.5s"
                                    values="0 0; 0 20"
                                />
                            </g>
                        </g>
                        <g
                            id="selector-zigzag-animated-group"
                            transform="translate(0, -20)"
                        >
                            <g>
                                <use href="#selector-zigzag-path" />
                                <animateTransform
                                    attributeName="transform"
                                    type="translate"
                                    keyTimes="0;1"
                                    repeatCount="indefinite"
                                    dur="1.5s"
                                    values="0 0; 0 20"
                                />
                            </g>
                        </g>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="#65696F" />
                <rect
                    width="100%"
                    height="100%"
                    transform="translate(0,0)"
                    fill="url(#selector-zigzag-bg)"
                />
            </svg>
        </>
    )
}

export default MainContent