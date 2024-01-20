import React, { useEffect, useState } from 'react';

const Banner = () => {
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        setClicked(true);
    }, []);

    return (
        <section className="flex gap-4 my-18">
            <div className="w-1/2">
                <div id="text-drop" className={clicked ? 'clicked flex' : ''}>
                    <div className="a">A</div>
                    <div className="l">l</div>
                    <div className="o">o</div>
                    <div className="u">u</div>
                    <div className="smile">:)</div>
                </div>
                <h1 className='strong'></h1>
            </div>
            <div className="w-1/2">
                <h2>Alguma imagem bacana que combine com o site</h2>
            </div>
        </section>
    );
};

export default Banner;