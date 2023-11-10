import Title from "../Title";
import facebook from "../../assets/footer/facebook.webp";
import youtube from "../../assets/footer/youtube.webp";
import instagram from "../../assets/footer/instagram.webp";
import whatapp from "../../assets/footer/whatapp.webp";
import vimeo from "../../assets/footer/vimeo.webp";
import linkedin from "../../assets/footer/linkedin.webp";

const Contact = () => {
    const links = [
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
    ];

    return (
        <div className='w-full max-w-[1100px] animate-fade grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto px-5 md:px-10  items-center  pt-[30px] md:pt-[40px]'>
            <Title title='Contact' />
            <div
                id='contact'
                className='pt-10 md:pt-5  shadow-lg rounded-md p-3 border-[#dcbcbc36] border-2 h-full '
            >
                <div className='text-[30px] font-bold text-center text-white'>
                    Contact
                </div>

                <form
                    action='https://getform.io/f/e4109843-da24-41ca-b68c-8856bfe7a695'
                    method='POST'
                    className=' w-full px-3 flex flex-col gap-2 mt-3 '
                >
                    {" "}
                    <div className='flex flex-col md:flex-row gap-2 justify-center items-center'>
                        <input
                            type='text'
                            name='name'
                            placeholder='Name'
                            className='border-lime-700 border-2 rounded-md  h-10 p-2 w-full md:w-1/2 '
                        />
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            className='border-lime-700 border-2 rounded-md  h-10 p-2 w-full md:w-1/2'
                        />
                    </div>
                    <input
                        type='text'
                        name='subject'
                        placeholder='Subject'
                        className='border-lime-700 border-2 rounded-md  h-10 p-2 w-full'
                    />
                    <textarea
                        type='text'
                        name='message'
                        cols={20}
                        rows={5}
                        placeholder='Message'
                        className='border-lime-700 border-2 rounded-md  h-20 p-2 w-full'
                    ></textarea>
                    <button
                        type='submit'
                        className='mt-2 w-full md:w-[60%] mx-auto h-10 bg-slate-200 border-lime-700 border-2 rounded-md hover:bg-lime-700 hover:text-white transition-all'
                    >
                        Send
                    </button>
                </form>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 '>
                <div className='text-base text-center md:text-right text-white w-full'>
                    <h3>BIG BRAIN STUDIO CO.,LTD.</h3>
                    <p>151 Sukhumvit 101/1, Bangchak,</p>
                    <p>Phrakhanong, Bangkok 10260, Thailand</p>
                </div>
                <div className='flex flex-row  justify-center items-center mx-auto my-1 md:my-0 '>
                    <div className='mb-0 md:mb-2'>
                        {links.map((link, index) => (
                            <img
                                key={index}
                                src={link.src}
                                alt={link.name}
                                className='w-[30px] md:w-[40px] inline-block mx-2 hover:scale-110 ease-out duration-200 cursor-pointer'
                            />
                        ))}
                    </div>
                </div>
                <div className='aspect-video w-full'>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.556153671707!2d100.61402207619273!3d13.684731498840582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a16b35ceceb5%3A0xe527940423e3cdf1!2sBig%20Brain%20Studio%20Co.%2CLtd.!5e0!3m2!1sth!2sth!4v1686721116416!5m2!1sth!2sth'
                        width='100%'
                        height='100%'
                        title='Googld Map'
                        tabIndex='0'
                        allow='autoplay; clipboard-write; encrypted-media; picture-in-picture;'
                        allowFullScreen=''
                        loading='lazy'
                    />
                </div>
            </div>
        </div>
    );
};

Contact.displayName = "Contact";

export default Contact;
