/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                font1: ["font1"],
                font2: ["font2"],
            },
            backgroundImage: {
                "service-bg": "url('/img/service/bg.webp')",
            },
            keyframes: {
                arrow: {
                    "0%, 100%": { transform: "translateX(-25%)" },
                    "50%": { transform: "translateX(0)" },
                },
                fade: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                zoomIn: {
                    "0%": { opacity: 0, transform: "scale(0)" },
                    "100%": { opacity: 1, transform: "scale(1)" },
                },
                zoomOut: {
                    "0%": { opacity: 1, transform: "scale(1)" },
                    "100%": { opacity: 0, transform: "scale(0)" },
                },
            },
            animation: {
                arrow: "arrow 1s ease-in-out infinite",
                fade: "fade 1s ease-in-out",
                zoomIn: "zoomIn 0.5s ease-in",
                zoomOut: "zoomOut 0.5s ease-out",
            },
        },
    },
    plugins: [],
};
