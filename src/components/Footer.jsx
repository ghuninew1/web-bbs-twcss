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
            className="relative bg-black border-[#1d1d1c] border-t w-full overflow-hidden"
        >
            <div
                className={cx(
                    isVisible
                        ? "translate-y-0 delay-[100ms] opacity-100 "
                        : "translate-y-[30px] opacity-0 ",
                    "transition duration-[400ms] ease-out",
                    "flex flex-col md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] justify-center gap-x-[20px] md:gap-x-[40px] px-2 pt-3 pb-1 md:pb-3 "
                )}
            >
                <div className="text-[13px] text-gray-400 md:text-[14px] text-start md:text-end antialiased tracking-wide grow">
                    <p>{footerData[0].links[0]}</p>
                    <p>{footerData[0].links[1]}</p>
                    <p className="md:mt-2">{footerData[0].links[2]}</p>
                </div>
                <div className="flex flex-row md:flex-col justify-center items-center mx-auto my-1 md:my-0 grow-0">
                    <div className="mb-0 md:mb-2">
                        {footerData[1].links.map((link, index) => (
                            <a
                                href={link.to}
                                key={index}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={link.src}
                                    alt={link.name}
                                    width={30}
                                    height={30}
                                    loading="lazy"
                                    className="inline-block mx-1 w-[30px] h-[30px] hover:scale-125 duration-200 ease-out cursor-pointer"
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
                                    src={link.src}
                                    alt={link.name}
                                    width={30}
                                    height={30}
                                    loading="lazy"
                                    className="inline-block mx-1 w-[30px] h-[30px] hover:scale-125 duration-200 ease-out cursor-pointer"
                                />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="text-[13px] text-gray-400 md:text-[14px] md:text-start text-end antialiased tracking-wide grow">
                    <p className="md:mb-2">{footerData[2].links[0]}</p>
                    <p>{footerData[2].links[1]}</p>
                    <p>{footerData[2].links[2]}</p>
                </div>
            </div>
        </footer>
    );
}
