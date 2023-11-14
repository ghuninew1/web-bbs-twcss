import { useRef } from "react";
import facebook from "../assets/footer/facebook.avif";
import youtube from "../assets/footer/youtube.avif";
import instagram from "../assets/footer/instagram.avif";
import whatapp from "../assets/footer/whatapp.avif";
import vimeo from "../assets/footer/vimeo.avif";
import linkedin from "../assets/footer/linkedin.avif";
import useOnScreen from "./utils/useOnScreen";
import { cx } from "./utils";

const footerData = [
    {
        title: "left",
        links: [
            "151 Sukhumvit 101/1, Bangchak,",
            "Phrakhanong, Bangkok 10260, Thailand",
            "Copyright ©Big Brain Studio",
        ],
    },
    {
        title: "center",
        links: [
            {
                to: "https://www.facebook.com/BigBrainStudiooo/",
                src: facebook,
                name: "Facebook",
            },
            {
                to: "https://www.youtube.com/channel/UCRzFBsaHEEDe57EyQ48LQHQ",
                src: youtube,
                name: "Youtube",
            },
            {
                to: "https://www.instagram.com/bigbrain_studio/",
                src: instagram,
                name: "Instagram",
            },
        ],
        links2: [
            {
                to: "tel:+66945395991",
                src: whatapp,
                name: "Whatapp",
            },
            {
                to: "https://vimeo.com/user140518698",
                src: vimeo,
                name: "Vimeo",
            },
            {
                to: "http://www.linkedin.com/in/bigbrain-studio",
                src: linkedin,
                name: "Linkedin",
            },
        ],
    },
    {
        title: "right",
        links: [
            "Email: contact@bigbrain-studio.com",
            "Fax: +662 118 3624  Tel: +662 118 3920",
            "Cell: +669 4539 5991",
        ],
    },
];

export default function Footer() {
    const ref = useRef();
    const isVisible = useOnScreen(ref);

    return (
        <footer
            ref={ref}
            className="relative w-full bg-black overflow-hidden border-t border-[#1d1d1c]"
        >
            {" "}
            <div
                className={cx(
                    isVisible
                        ? "opacity-100 translate-y-0 delay-[100ms]"
                        : "opacity-0 translate-y-[30px]",
                    "transition duration-[400ms] ease-out",
                    "flex flex-col md:flex-row md:flex-nowrap justify-center gap-x-[20px] md:gap-x-[40px] px-2 py-3 "
                )}
            >
                <div className="grow text-start md:text-end text-gray-400 text-[13px] md:text-[14px] tracking-wide">
                    <p>{footerData[0].links[0]}</p>
                    <p>{footerData[0].links[1]}</p>
                    <p className="md:mt-2">{footerData[0].links[2]}</p>
                </div>
                <div className="grow-0 flex flex-row md:flex-col justify-center items-center mx-auto my-1 md:my-0 ">
                    <div className="mb-0 md:mb-2">
                        {footerData[1].links.map((link, index) => (
                            <a
                                href={link.to}
                                key={index}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    key={index}
                                    src={link.src}
                                    alt={link.name}
                                    className="w-[30px] h-[30px] inline-block mx-1 hover:scale-125 ease-out duration-200 cursor-pointer"
                                />
                            </a>
                        ))}
                    </div>
                    <div className="mb-0">
                        {footerData[1].links2.map((link, index) => (
                            <a
                                href={link.to}
                                key={index}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    key={index}
                                    src={link.src}
                                    alt={link.name}
                                    className="w-[30px] h-[30px] inline-block mx-1 hover:scale-125 ease-out duration-200 cursor-pointer"
                                />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="grow text-end md:text-start text-gray-400 text-[13px] md:text-[14px] tracking-wide">
                    <p className="md:mb-2">{footerData[2].links[0]}</p>
                    <p>{footerData[2].links[1]}</p>
                    <p>{footerData[2].links[2]}</p>
                </div>
            </div>
        </footer>
    );
}
