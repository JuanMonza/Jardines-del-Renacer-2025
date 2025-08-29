import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const imagenes = [
    { id: 1, src: 'https://images.pexels.com/photos/161284/cemetery-crosses-graves-peace-161284.jpeg', alt: 'Senderos serenos del jardín' },
    { id: 2, src: 'https://images.pexels.com/photos/1084236/pexels-photo-1084236.jpeg', alt: 'Fuente de agua rodeada de naturaleza' },
    { id: 3, src: 'https://images.pexels.com/photos/776632/pexels-photo-776632.jpeg', alt: 'Detalle de flores en el parque' },
    { id: 4, src: 'https://images.pexels.com/photos/236163/pexels-photo-236163.jpeg', alt: 'Vista panorámica de los jardines' },
    { id: 5, src: 'https://images.pexels.com/photos/1387212/pexels-photo-1387212.jpeg', alt: 'Banca solitaria para la reflexión' },
    { id: 6, src: 'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg', alt: 'Árbol centenario en el parque' },
];

function Galeria() {
    const sectionRef = useRef(null);

    useEffect(() => {
        // 1. Mismo método de contexto de GSAP
        const ctx = gsap.context(() => {
            gsap.from(".gallery-item", {
                opacity: 0,
                scale: 0.8,
                duration: 0.6,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
            });
        }, sectionRef);

        // 2. Función de limpieza
        return () => ctx.revert();
    }, []);

    return (
        <section id="galeria" ref={sectionRef} className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-green-dark mb-2">Un Refugio de Paz</h2>
                <p className="text-lg text-gray-600 mb-12">Cada rincón de nuestros jardines está diseñado para la memoria y la serenidad.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {imagenes.map((imagen) => (
                        <div
                            key={imagen.id}
                            // 3. Añadimos la clase 'gallery-item'
                            className="gallery-item overflow-hidden rounded-lg shadow-lg cursor-pointer"
                        >
                            <img
                                src={imagen.src}
                                alt={imagen.alt}
                                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Galeria;