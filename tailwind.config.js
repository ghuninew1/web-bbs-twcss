/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                font1: ["font1"],
            },
            keyframes: {
                arrow: {
                    "0%, 100%": { transform: "translateX(-25%)" },
                    "50%": { transform: "translateX(0)" },
                },
                fade: {
                    "0%, 20%": { opacity: 0 },
                    "100%": { opacity: 100 },
                },
                fadeOut: {
                    "0%, 30%": { opacity: 100 },
                    "100%": { opacity: 0 },
                },
                fadeInDown: {
                    "0%, 20%": { opacity: 0, transform: "translateY(-50%)" },
                    "100%": { opacity: 100, transform: "translateY(0)" },
                },
                fadeInUp: {
                    "0%, 20%": { opacity: 0, transform: "translateY(50%)" },
                    "100%": { opacity: 100, transform: "translateY(0)" },
                },
                fadeInLeft: {
                    "0%, 20%": { opacity: 0, transform: "translateX(-50%)" },
                    "100%": { opacity: 100, transform: "translateX(0)" },
                },
                fadeInRight: {
                    "0%, 20%": { opacity: 0, transform: "translateX(50%)" },
                    "100%": { opacity: 100, transform: "translateX(0)" },
                },
                zoom: {
                    "0%, 30%": {
                        opacity: 0,
                        transform: "scale(0) ",
                    },
                    "100%": { opacity: 100, transform: "scale(1)" },
                },
                zoomIn: {
                    "0%, 30%": {
                        opacity: 0,
                        transform: "scale(0) translateY(100%)",
                    },
                    "100%": {
                        opacity: 100,
                        transform: "scale(1) translateY(0)",
                    },
                },
                zoomOut: {
                    "0%, 30%": {
                        opacity: 100,
                        transform: "scale(1)",
                    },
                    "100%": { opacity: 0, transform: "scale(0)" },
                },
            },
            animation: {
                arrow: "arrow 1s ease-in-out infinite",
                fade: "fade 1s ease-in-out",
                fadeOut: "fadeOut 1s ease-out",
                zoom: "zoom 0.6s ease-in-out",
                zoomIn: "zoomIn 0.6s ease-in-out",
                zoomOut: "zoomOut 0.8s ease-out",
                fadeInDown: "fadeInDown 0.8s ease-in-out",
                fadeInUp: "fadeInUp 0.8s ease-in-out",
                fadeInLeft: "fadeInLeft 0.8s ease-in-out",
                fadeInLeftDelay: "fadeInLeft 0.8s ease-in-out 0.3s",
                fadeInRight: "fadeInRight 0.8s ease-in-out",
                fadeInRightDelay: "fadeInRight 0.8s ease-in-out 0.3s",
            },
        },
    },
    plugins: [],
};
