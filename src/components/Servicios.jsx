import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const nuestrosServicios = [
    {
        titulo: 'Soluciones de Inhumación',
        descripcion: 'Espacios de paz y serenidad en nuestros jardines para un descanso digno.',
    },
    {
        titulo: 'Servicios de Cremación',
        descripcion: 'Opciones respetuosas y modernas con columbarios y cinerarios.',
    },
    {
        titulo: 'Planes a Futuro',
        descripcion: 'Asegure la tranquilidad de sus seres queridos con previsión y planificación.',
    },
];

function Servicios() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.from(cardsRef.current, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
            },
        });
    }, []);

    return (
        <section id="servicios" ref={sectionRef} className="bg-off-white py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-green-dark mb-2">
                    Acompañamiento en el Recorrido
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                    Ofrecemos un servicio integral basado en el respeto y la empatía.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    {nuestrosServicios.map((servicio, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            className="bg-white p-8 rounded-lg shadow-md border border-gray-200 cursor-pointer
                         transition-all duration-300 ease-in-out 
                         hover:shadow-xl hover:-translate-y-2 hover:border-gold-accent"
                        >
                            <h3 className="text-2xl font-semibold text-green-teal mb-4">{servicio.titulo}</h3>
                            <p className="text-gray-600">{servicio.descripcion}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Servicios;