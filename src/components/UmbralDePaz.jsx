import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function UmbralDePaz() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(titleRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
    });

    tl.from(subtitleRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
    }, "-=0.8");

  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* CORRECCIÓN AQUÍ: Ahora busca "background.mp4" */}
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