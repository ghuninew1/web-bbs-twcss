import { Title } from "../../";
import { useRef, useState } from "react";
import contactData from "./contactData.json";
import Portal from "../../utils/Portal";
import { GoogleMapEmbed } from "../../Iframe";

const ShowMessage = ({ handleClose, messageRef }) => {
    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label="Contact message"
            onClick={(event) => event.stopPropagation()}
            className="flex flex-col items-center gap-6 bg-[#0b1b12]/90 shadow-2xl shadow-black/50 mx-auto px-6 py-10 border border-green-400/25 rounded-3xl w-full max-w-md text-center"
        >
            <div className="font-medium text-white text-xl sm:text-2xl leading-relaxed">{messageRef.current.value}</div>
            <button
                type="button"
                className="bg-lime-700 hover:bg-lime-600 px-6 py-2.5 border border-lime-400/50 rounded-xl focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-2 font-semibold text-white transition-colors"
                onClick={handleClose}
            >
                Close
            </button>
        </div>
    );
};
const Contact = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const subjectRef = useRef(null);
    const messageRef = useRef(null);
    const [show, setShow] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            subject: subjectRef.current.value,
            message: messageRef.current.value,
        };

        if (!data.name || !data.email || !data.subject || !data.message) {
            messageRef.current.value = "Please fill all the name and email and subject and message";
            setShow(true);
            return;
        } else {
            fetch("https://forminit.com/f/bkkylgwb", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            messageRef.current.value = "Thank you for your message";
            setShow(true);
            nameRef.current.value = "";
            emailRef.current.value = "";
            subjectRef.current.value = "";
        }
    };
    const handleClose = () => {
        setShow(false);
        messageRef.current.value = "";
    };

    return (
        <div className="relative items-center grid grid-cols-1 md:grid-cols-2 mx-auto mb-10 px-2 md:px-5 w-full max-w-[1100px]">
            <Title title="Contact" />

            <Portal isOpen={show} closeModal={handleClose}>
                <ShowMessage messageRef={messageRef} handleClose={handleClose} />
            </Portal>

            <div className="flex flex-col justify-center items-center bg-[#101310] shadow-black/30 shadow-xl px-4 sm:px-7 py-8 md:py-10 border border-white/15 rounded-3xl h-full animate-fadeInLeft">
                <div className="mb-5 font-medium text-white text-3xl md:text-4xl text-center">Contact</div>

                <form className="flex flex-col gap-3 mt-3 w-full text-white animate-fade" onSubmit={handleSubmit}>
                    <div className="flex md:flex-row flex-col justify-center items-center gap-2">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="p-2 px-3 border-1 border-lime-700 rounded-xl focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-2 w-full md:w-1/2 h-auto"
                            ref={nameRef}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="p-2 px-3 border-1 border-lime-700 rounded-xl focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-2 w-full md:w-1/2 h-auto"
                            ref={emailRef}
                        />
                    </div>
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="p-2 px-3 border-1 border-lime-700 rounded-xl focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-2 w-full h-auto"
                        ref={subjectRef}
                    />
                    <textarea
                        type="text"
                        name="message"
                        cols={20}
                        rows={5}
                        placeholder="Message"
                        className="p-2 px-3 border-1 border-lime-700 rounded-xl focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-2 w-full h-auto"
                        ref={messageRef}
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-lime-600 hover:bg-lime-800 mx-auto mt-4 border border-lime-400 rounded-xl focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-2 w-full md:w-[60%] h-11 font-bold text-white text-xl transition-colors"
                    >
                        Send
                    </button>
                </form>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 ml-0 md:ml-1 p-3 border-[#dcbcbc36] md:border-2 rounded-3xl animate-fadeInRight">
                <div className="w-full text-white text-base text-center md:text-right antialiased tracking-wide animate-fade">
                    <h3 className="mb-2 font-medium text-[18px] tracking-wider">BIG BRAIN STUDIO CO.,LTD.</h3>
                    <p>99/1 Plan House Bangkok Building 3rd Floor,</p>
                    <p>Sukhumvit 68,Bang Na Nuea, Bang Na, Bangkok 10260, Thailand</p>
                </div>
                <div className="flex flex-row justify-center items-center mx-auto my-2 md:my-1">
                    <div className="mb-0 md:mb-2 animate-fade">
                        {contactData.map((link, index) => (
                            <a href={link.to} key={index} target="_blank" rel="noreferrer">
                                <img
                                    key={index}
                                    src={link.src}
                                    alt={link.name}
                                    width={40}
                                    height={40}
                                    loading="lazy"
                                    className="inline-block mx-2 w-[38px] md:w-[40px] hover:scale-125 duration-200 ease-out cursor-pointer"
                                />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="w-full aspect-video animate-fade">
                    <GoogleMapEmbed src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.6886858169355!2d100.59698321220726!3d13.676684398969778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a16b35ceceb5%3A0xe527940423e3cdf1!2sBig%20Brain%20Studio%20Co.%2CLtd.!5e0!3m2!1sth!2sth!4v1768994546320!5m2!1sth!2sth" />
                </div>
            </div>
        </div>
    );
};

Contact.displayName = "Contact";

export default Contact;
