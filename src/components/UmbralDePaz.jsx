import React, { useRef, useEffect } from 'react'; // 1. Importamos los hooks y GSAP
import { gsap } from 'gsap';

function UmbralDePaz() {
    // 2. Creamos las referencias para los elementos de texto
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    // 3. Este es el hook que ejecuta la animación cuando el componente carga
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // Animación para el título
        tl.from(titleRef.current, {
            opacity: 0,
            y: 20, // Empieza 20px más abajo
            duration: 1,
        });

        // Animación para el subtítulo, empieza un poco después que la del título
        tl.from(subtitleRef.current, {
            opacity: 0,
            y: 20,
            duration: 1,
        }, "-=0.8"); // El "-=0.8" crea un solapamiento elegante

    }, []); // El array vacío asegura que la animación solo se ejecute una vez

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            <video
                src="/videos/background.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                Tu navegador no soporta el tag de video.
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-green-dark/60"></div>
            <div className="relative z-10 text-center">
                {/* 4. Conectamos las referencias a los elementos JSX */}
                <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold text-off-white tracking-wider">
                    Un Homenaje al Amor y al Recuerdo
                </h1>
                <p ref={subtitleRef} className="mt-4 text-lg md:text-xl text-off-white/80">
                    Un espacio de paz para honrar la vida.
                </p>
            </div>
        </section>
    );
}

export default UmbralDePaz;