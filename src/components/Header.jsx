import React, { useState, useEffect } from 'react';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Clases dinámicas para el estilo del header
    const headerClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white shadow-md text-green-dark' : 'bg-transparent text-white'
        }`;

    return (
        <header className={headerClasses}>
            <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Columna Izquierda: Primera mitad de los enlaces */}
                <ul className="flex flex-1 justify-start space-x-8">
                    <li><a href="#" className="hover:text-gold-accent transition-colors duration-200">Inicio</a></li>
                    <li><a href="#" className="hover:text-gold-accent transition-colors duration-200">Servicios</a></li>
                    <li><a href="#" className="hover:text-gold-accent transition-colors duration-200">Nosotros</a></li>
                </ul>

                {/* Columna Central: El logo que lleva al inicio */}
                <a href="#" className="font-bold text-xl tracking-wider hover:text-gold-accent transition-colors duration-200">
                    Jardines del Renacer
                </a>

                {/* Columna Derecha: Segunda mitad de los enlaces */}
                <ul className="flex flex-1 justify-end space-x-8">
                    <li><a href="#" className="hover:text-gold-accent transition-colors duration-200">Galería</a></li>
                    <li><a href="#" className="hover:text-gold-accent transition-colors duration-200">Contacto</a></li>
                    <li><a href="#" className="hover:text-gold-accent transition-colors duration-200">Obituarios</a></li>
                </ul>

            </nav>
        </header>
    );
}

export default Header;