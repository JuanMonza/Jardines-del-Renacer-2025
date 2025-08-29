import React from 'react';

function Footer() {
    return (
        <footer className="bg-green-dark text-off-white">
            <div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Columna 1: Logo y Eslogan */}
                <div className="md:col-span-1">
                    <h3 className="font-bold text-xl mb-4 tracking-wider">Jardines del Renacer</h3>
                    <p className="text-off-white/70">Un homenaje al amor y al recuerdo, diseñado para la paz y la serenidad.</p>
                </div>

                {/* Columna 2: Enlaces Rápidos */}
                <div>
                    <h4 className="font-semibold mb-4">Navegación</h4>
                    <ul className="space-y-2 text-off-white/70">
                        <li><a href="#" className="hover:text-gold-accent transition-colors">Inicio</a></li>
                        <li><a href="#" className="hover:text-gold-accent transition-colors">Servicios</a></li>
                        <li><a href="#" className="hover:text-gold-accent transition-colors">Galería</a></li>
                        <li><a href="#" className="hover:text-gold-accent transition-colors">Contacto</a></li>
                    </ul>
                </div>

                {/* Columna 3: Contacto */}
                <div>
                    <h4 className="font-semibold mb-4">Contacto</h4>
                    <ul className="space-y-2 text-off-white/70">
                        <li>Pereira, Risaralda, Colombia</li>
                        <li>(606) 123 4567</li>
                        <li>contacto@jardinesdelrenacer.com</li>
                    </ul>
                </div>

                {/* Columna 4: Redes Sociales */}
                <div>
                    <h4 className="font-semibold mb-4">Síguenos</h4>
                    <ul className="space-y-2 text-off-white/70">
                        <li><a href="#" className="hover:text-gold-accent transition-colors">Facebook</a></li>
                        <li><a href="#" className="hover:text-gold-accent transition-colors">Instagram</a></li>
                    </ul>
                </div>

            </div>

            {/* Barra Inferior de Copyright */}
            <div className="border-t border-off-white/20">
                <div className="max-w-6xl mx-auto py-6 px-6 text-center text-sm text-off-white/50">
                    <p>© 2025 Jardines del Renacer. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;