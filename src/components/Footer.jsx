import { cx } from "./utils";
import footerData from "../assets/footerData.json";
import { useIntersectionObserver } from "../hook/useIntersectionObserver";

export default function Footer() {
    const [ref, entry] = useIntersectionObserver({
        threshold: 0,
        root: null,
        rootMargin: "0px",
    });
    const isVisible = entry?.isIntersecting;

    return (
        <footer
            ref={ref}
            className="relative w-full bg-black overflow-hidden border-t border-[#1d1d1c] min-h-[5vh]"
        >
            <div
                className={cx(
                    isVisible
                        ? "translate-y-0 delay-[100ms] opacity-100 "
                        : "translate-y-[30px] opacity-0 ",
                    "transition duration-[400ms] ease-out",
                    "flex flex-col md:flex-row md:flex-nowrap justify-center gap-x-[20px] md:gap-x-[40px] px-2 py-3 "
                )}
            >
                <div className="grow text-start md:text-end text-gray-400 text-[13px] md:text-[14px] tracking-wide antialiased">
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
                                    width={30}
                                    height={30}
                                    loading="lazy"
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
                                    width={30}
                                    height={30}
                                    loading="lazy"
                                    className="w-[30px] h-[30px] inline-block mx-1 hover:scale-125 ease-out duration-200 cursor-pointer"
                                />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="grow text-end md:text-start text-gray-400 text-[13px] md:text-[14px] tracking-wide antialiased">
                    <p className="md:mb-2">{footerData[2].links[0]}</p>
                    <p>{footerData[2].links[1]}</p>
                    <p>{footerData[2].links[2]}</p>
                </div>
            </div>
        </footer>
    );
}
