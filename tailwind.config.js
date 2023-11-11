/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                font1: ["font1"],
                font2: ["font2"],
            },
            keyframes: {
                arrow: {
                    "0%, 100%": { transform: "translateX(-25%)" },
                    "50%": { transform: "translateX(0)" },
                },
                fade: {
                    from: { opacity: 0 },
                    to: { opacity: 100 },
                },
                fadeOut: {
                    from: { opacity: 100 },
                    to: { opacity: 0 },
                },
                fadeInDown: {
                    from: { opacity: 0, transform: "translateY(-100%)" },
                    to: { opacity: 100, transform: "translateY(0)" },
                },
                fadeInUp: {
                    from: { opacity: 0, transform: "translateY(100%)" },
                    to: { opacity: 100, transform: "translateY(0)" },
                },
                fadeInLeft: {
                    from: { opacity: 0, transform: "translateX(-100%)" },
                    to: { opacity: 100, transform: "translateX(0)" },
                },
                fadeInRight: {
                    from: { opacity: 0, transform: "translateX(100%)" },
                    to: { opacity: 100, transform: "translateX(0)" },
                },
                zoomIn: {
                    from: {
                        opacity: 0,
                        transform: "scale(0) translateY(100%)",
                    },
                    to: { opacity: 100, transform: "scale(1) translateY(0)" },
                },
                zoomOut: {
                    from: { opacity: 100, transform: "scale(1)" },
                    to: { opacity: 0, transform: "scale(0)" },
                },
            },
            animation: {
                arrow: "arrow 1s ease-in-out infinite",
                fade: "fade 1s ease-in-out",
                fadeOut: "fadeOut 1s ease-out",
                zoomIn: "zoomIn 0.6s ease-in-out",
                zoomOut: "zoomOut 0.6s ease-out",
                fadeInDown: "fadeInDown 0.6s ease-in-out",
                fadeInUp: "fadeInUp 0.6s ease-in-out",
                fadeInLeft: "fadeInLeft 0.6s ease-in-out",
                fadeInRight: "fadeInRight 0.6s ease-in-out",
            },
        },
    },
    plugins: [],
};
