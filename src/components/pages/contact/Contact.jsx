import Title from "../../Title";
import { useRef, useState, memo } from "react";
// import { cx } from "../../utils";
import contactData from "./contactData.json";
import Portal from "../../utils/Portal";

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
            messageRef.current.value =
                "Please fill all the name and email and subject and message";
            setShow(true);
            return;
        } else {
            fetch("https://getform.io/f/e4109843-da24-41ca-b68c-8856bfe7a695", {
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

    const ShowMessage = () => {
        return (
            <div className="bg-white rounded-md flex flex-col justify-center items-center mx-auto gap-2 py-10 px-5">
                <div className="text-2xl font-bold text-center">
                    {messageRef.current.value}
                </div>
                <button
                    className="bg-lime-700 text-white rounded-md p-2 hover:bg-lime-900 transition-all"
                    onClick={handleClose}
                >
                    Close
                </button>
            </div>
        );
    };

    return (
        <div className="relative w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-2 mx-auto px-2 md:px-5 items-center mb-10">
            <Title title="Contact" />

            <Portal isOpen={show} closeModal={handleClose}>
                <ShowMessage />
            </Portal>

            <div className="pt-10 md:pt-5 shadow-lg rounded-md p-3 border-[#dcbcbc36] md:border-2 h-full flex flex-col items-center justify-center animate-fadeInLeft">
                <div className="text-3xl md:text-4xl font-medium text-center text-white mb-5">
                    Contact
                </div>

                <form
                    className=" w-full px-3 flex flex-col gap-2 mt-3 animate-fade"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="border-lime-700 border-2 rounded-md h-10 p-2 w-full md:w-1/2 "
                            ref={nameRef}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="border-lime-700 border-2 rounded-md h-10 p-2 w-full md:w-1/2"
                            ref={emailRef}
                        />
                    </div>
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="border-lime-700 border-2 rounded-md h-10 p-2 w-full"
                        ref={subjectRef}
                    />
                    <textarea
                        type="text"
                        name="message"
                        cols={20}
                        rows={5}
                        placeholder="Message"
                        className="border-lime-700 border-2 rounded-md h-20 p-2 w-full"
                        ref={messageRef}
                    ></textarea>
                    <button
                        type="submit"
                        className="text-xl font-bold mt-2 w-full md:w-[60%] mx-auto h-10 bg-lime-600 border-lime-400 border-2 rounded-md hover:bg-lime-900 hover:text-white transition-all"
                    >
                        Send
                    </button>
                </form>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 ml-0 md:ml-1 rounded-md p-3 border-[#dcbcbc36] md:border-2 animate-fadeInRight">
                <div className="text-base text-center md:text-right text-white w-full tracking-wide animate-fade antialiased">
                    <h3 className="tracking-wider text-[18px] font-medium mb-2">
                        BIG BRAIN STUDIO CO.,LTD.
                    </h3>
                    <p>151 Sukhumvit 101/1, Bangchak,</p>
                    <p>Phrakhanong, Bangkok 10260, Thailand</p>
                </div>
                <div className="flex flex-row justify-center items-center mx-auto my-2 md:my-1">
                    <div className="mb-0 md:mb-2 animate-fade">
                        {contactData.map((link, index) => (
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
                                    width={40}
                                    height={40}
                                    loading="lazy"
                                    className="w-[38px] md:w-[40px] inline-block mx-2 hover:scale-125 ease-out duration-200 cursor-pointer"
                                />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="aspect-video w-full animate-fade">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.556153671707!2d100.61402207619273!3d13.684731498840582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a16b35ceceb5%3A0xe527940423e3cdf1!2sBig%20Brain%20Studio%20Co.%2CLtd.!5e0!3m2!1sth!2sth!4v1686721116416!5m2!1sth!2sth"
                        width="100%"
                        height="100%"
                        title="Googld Map"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture;"
                        allowFullScreen
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
};

Contact.displayName = "Contact";

const MemoContact = memo(Contact);

export default MemoContact;
