// import Image from "./utils/Image";
import facebook from "../assets/footer/facebook.webp";
import youtube from "../assets/footer/youtube.webp";
import instagram from "../assets/footer/instagram.webp";
import whatapp from "../assets/footer/whatapp.webp";
import vimeo from "../assets/footer/vimeo.webp";
import linkedin from "../assets/footer/linkedin.webp";

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
    return (
        <footer className='relative w-full bg-black h-auto overflow-hidden animate-fade delay-500 border-t border-[#1d1d1c] '>
            <div className='flex flex-col md:flex-row md:flex-nowrap justify-center gap-x-[20px] md:gap-x-[40px] px-2 py-3 '>
                <div className='grow text-start md:text-end text-gray-400 text-[13px] md:text-[14px] font-sans'>
                    <p>{footerData[0].links[0]}</p>
                    <p>{footerData[0].links[1]}</p>
                    <p className='md:mt-2'>{footerData[0].links[2]}</p>
                </div>
                <div className='grow-0 flex flex-row md:flex-col justify-center items-center mx-auto my-1 md:my-0 '>
                    <div className='mb-0 md:mb-2'>
                        {footerData[1].links.map((link, index) => (
                            <img
                                key={index}
                                src={link.src}
                                alt={link.name}
                                className='w-[30px] h-[30px] inline-block mx-1 hover:scale-110 ease-out duration-200 cursor-pointer'
                            />
                        ))}
                    </div>
                    <div className='mb-0'>
                        {footerData[1].links2.map((link, index) => (
                            <img
                                key={index}
                                src={link.src}
                                alt={link.name}
                                className='w-[30px] h-[30px] inline-block mx-1 hover:scale-110 ease-out duration-200 cursor-pointer'
                            />
                        ))}
                    </div>
                </div>
                <div className='grow text-end md:text-start text-gray-400 text-[13px] md:text-[14px] font-sans '>
                    <p className='md:mb-2'>{footerData[2].links[0]}</p>
                    <p>{footerData[2].links[1]}</p>
                    <p>{footerData[2].links[2]}</p>
                </div>
            </div>
        </footer>
    );
}