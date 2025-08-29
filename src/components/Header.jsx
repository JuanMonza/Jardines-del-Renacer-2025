import React, { useState, useEffect } from 'react';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    // 1. Nuevo estado para controlar el menú móvil (abierto/cerrado)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white shadow-md text-green-dark' : 'bg-transparent text-white'
        }`;

    // Función para cerrar el menú al hacer clic en un enlace
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className={headerClasses}>
                <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                    {/* 2. Enlaces de escritorio: ocultos en pantallas pequeñas (hidden), visibles en medianas y grandes (md:flex) */}
                    <ul className="hidden md:flex flex-1 justify-start space-x-8">
                        <li><a href="#inicio" className="hover:text-gold-accent transition-colors duration-200">Inicio</a></li>
                        <li><a href="#servicios" className="hover:text-gold-accent transition-colors duration-200">Servicios</a></li>
                    </ul>

                    <a href="#inicio" className="font-bold text-xl tracking-wider hover:text-gold-accent transition-colors duration-200">
                        Jardines del Renacer
                    </a>

                    <ul className="hidden md:flex flex-1 justify-end space-x-8">
                        <li><a href="#galeria" className="hover:text-gold-accent transition-colors duration-200">Galería</a></li>
                        <li><a href="#contacto" className="hover:text-gold-accent transition-colors duration-200">Contacto</a></li>
                    </ul>

                    {/* 3. Botón de Hamburguesa: visible solo en pantallas pequeñas (md:hidden) */}
                    <div className="md:hidden flex-1 flex justify-end">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50 space-y-1.5">
                            <span className={`block w-6 h-0.5 transition-all duration-300 ${isScrolled ? 'bg-green-dark' : 'bg-white'} ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block w-6 h-0.5 transition-all duration-300 ${isScrolled ? 'bg-green-dark' : 'bg-white'} ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 transition-all duration-300 ${isScrolled ? 'bg-green-dark' : 'bg-white'} ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </button>
                    </div>
                </nav>
            </header>

            {/* 4. Overlay del Menú Móvil */}
            <div className={`fixed top-0 left-0 w-full h-full bg-green-dark/95 backdrop-blur-sm z-40
                       transition-opacity duration-300 ease-in-out
                       ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <ul className="flex flex-col items-center justify-center h-full space-y-8 text-white text-2xl">
                    <li><a href="#inicio" onClick={handleLinkClick} className="hover:text-gold-accent">Inicio</a></li>
                    <li><a href="#servicios" onClick={handleLinkClick} className="hover:text-gold-accent">Servicios</a></li>
                    <li><a href="#galeria" onClick={handleLinkClick} className="hover:text-gold-accent">Galería</a></li>
                    <li><a href="#contacto" onClick={handleLinkClick} className="hover:text-gold-accent">Contacto</a></li>
                </ul>
            </div>
        </>
    );
}

export default Header;