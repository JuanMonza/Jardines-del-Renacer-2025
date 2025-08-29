import React from 'react';

// URL de un video de alta calidad y libre de derechos.
// Más adelante, lo cambiaremos por un video propio de los jardines.
const videoURL = "https://videos.pexels.com/video-files/4784391/4784391-hd_1920_1080_25fps.mp4";

function UmbralDePaz() {
    return (
        // 1. Añadimos 'relative' y 'overflow-hidden' al contenedor principal.
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

            {/* 2. El video de fondo */}
            <video
                src={videoURL}
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                Tu navegador no soporta el tag de video.
            </video>

            {/* 3. El overlay semitransparente para mejorar el contraste */}
            <div className="absolute top-0 left-0 w-full h-full bg-green-dark/60"></div>

            {/* 4. El contenido centrado */}
            <div className="relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-off-white tracking-wider">
                    Un Homenaje al Amor y al Recuerdo
                </h1>
                <p className="mt-4 text-lg md:text-xl text-off-white/80">
                    Un espacio de paz para honrar la vida.
                </p>
            </div>

        </section>
    );
}

export default UmbralDePaz;