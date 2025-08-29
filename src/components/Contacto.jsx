import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// URL de una imagen de fondo serena y de alta calidad
const bgImageURL = 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg';

function Contacto() {
    // Referencias para la sección y la imagen de fondo
    const sectionRef = useRef(null);
    const bgImageRef = useRef(null);

    useEffect(() => {
        // Animación Parallax
        gsap.fromTo(bgImageRef.current,
            { y: '-20%' }, // La imagen empieza un 20% más arriba
            {
                y: '20%',    // Y termina un 20% más abajo
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    scrub: 1, // El "1" hace que el efecto sea suave y siga el scroll
                    start: 'top bottom', // La animación empieza cuando la sección entra por abajo
                    end: 'bottom top',   // Y termina cuando sale por arriba
                }
            }
        );
    }, []);

    return (
        <section ref={sectionRef} id="contacto" className="relative h-[70vh] overflow-hidden">
            {/* Imagen de Fondo */}
            <img
                ref={bgImageRef}
                src={bgImageURL}
                alt="Fondo de paisaje sereno"
                className="absolute top-0 left-0 w-full h-[140%] object-cover" // La imagen es más alta para tener espacio para moverse
            />
            {/* Overlay Oscuro para Contraste */}
            <div className="absolute top-0 left-0 w-full h-full bg-green-dark/70"></div>

            {/* Contenido de Texto */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-2">
                    Contáctanos
                </h2>
                <p className="text-lg md:text-xl text-white/90">
                    Estamos aquí para servirte. Ponte en contacto con nosotros.
                </p>
            </div>
        </section>
    );
}

export default Contacto;