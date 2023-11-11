import HomePartner from "../../data/HomePartner.json";
import { cx } from "../utils";

const Partner = () => {
    return (
        <div className="w-full py-5 animate-fade">
            <h1 className="text-center text-black font-sans font-normal text-[20px] md:text-[25px]">
                Thank You Our Clients & Partners
            </h1>
            <div className="flex relative flex-col justify-center items-center mx-auto px-2">
                <div className="flex flex-row items-center gap-2">
                    {HomePartner.filter((id) => id.id <= 7).map((data, idx) => (
                        <span
                            key={data.id + idx}
                            className={cx(
                                `  w-full max-w-[100px] `,
                                data.id === 2 && "mx-1",
                                data.id === 3 && "scale-[1.15]",
                                data.id === 4 && "scale-[0.9]",
                                data.id === 5 && "scale-[1.1]",
                                data.id === 7 && "scale-[0.8]"
                            )}
                        >
                            <img
                                src={data.url}
                                alt={data.alt}
                                className="w-full"
                            />
                        </span>
                    ))}
                </div>
                <div>
                    <div className="flex flex-row items-center gap-2">
                        {HomePartner.filter(
                            (id) => id.id > 7 && id.id <= 14
                        ).map((data, idx) => (
                            <span
                                key={data.id + idx}
                                className={cx(
                                    ` max-w-[100px]`,
                                    data.id === 10 && "scale-[0.9]",
                                    data.id === 11 && "scale-[0.9]",
                                    data.id === 12 && "scale-[1.1]",
                                    data.id === 13 && "scale-[0.9]",
                                    data.id === 14 && "scale-[1.1]"
                                )}
                            >
                                <img
                                    src={data.url}
                                    alt={data.alt}
                                    className="w-full"
                                />
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <div className="flex flex-col justify-center items-center">
                        <span className="flex flex-row items-center gap-2 ">
                            {HomePartner.filter(
                                (id) => (id.id > 14) & (id.id <= 19)
                            ).map((data, idx) => (
                                <span
                                    key={data.id + idx}
                                    className={cx(
                                        `  max-w-[100px]`,
                                        data.id === 15 && "scale-[1.1]",
                                        data.id === 17 && "scale-[1.1] ",
                                        data.id === 18 && "scale-[0.9]",
                                        data.id === 19 && "scale-[0.8]"
                                    )}
                                >
                                    <img
                                        src={data.url}
                                        alt={data.alt}
                                        className="w-full"
                                    />
                                </span>
                            ))}
                        </span>
                        <span className="flex flex-row items-center justify-center gap-2">
                            {HomePartner.filter(
                                (id) => (id.id > 19) & (id.id <= 24)
                            ).map((data, idx) => (
                                <span
                                    key={data.id + idx}
                                    className={cx(
                                        `  max-w-[100px]`,
                                        data.id === 20 && "scale-[0.8]",
                                        data.id === 21 && "scale-[1.1]",
                                        data.id === 22 && "scale-[0.85]",
                                        data.id === 23 && "scale-[1.1]",
                                        data.id === 24 && "scale-[0.9]"
                                    )}
                                >
                                    <img
                                        src={data.url}
                                        alt={data.alt}
                                        className="w-full"
                                    />
                                </span>
                            ))}
                        </span>
                    </div>
                    <span className=" max-w-[80px] scale-[0.8] md:scale-[1]  ">
                        <img
                            src={HomePartner[24]?.url}
                            alt={HomePartner[24]?.alt}
                            className="w-full"
                        />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Partner;
