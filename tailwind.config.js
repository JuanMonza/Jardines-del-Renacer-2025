/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'green-dark': '#00332B',      // Verde oscuro institucional
                'green-teal': '#00695C',      // Verde azulado para interacciones
                'gold-accent': '#C5A668',     // Dorado/Ocre para acentos y hovers
                'off-white': '#F8F6F2',       // Tono crema para fondos
            },
            fontFamily: {
                'sans': ['Montserrat', 'sans-serif'], // Tipografía principal
            }
        },
    },
    plugins: [],
}