import { Title } from "../../";
import { useEffect, useRef, useState } from "react";
import contactData from "./contactData.json";
import { GoogleMapEmbed } from "../../Iframe";
import Portal from "../../utils/Portal";
import { cx } from "../../utils";

const messages = {
    success: { title: "Message sent", text: "Your message has been sent. Thank you for contacting Big Brain Studio." },
    error: { title: "Unable to send", text: "We couldn't send your message. Please try again." },
    invalid: { title: "Check your details", text: "Please fill in all fields." },
};

const ShowMessage = ({ status, onClose, returnFocusRef }) => {
    const closeRef = useRef(null);
    useEffect(() => {
        const returnFocus = returnFocusRef.current;
        closeRef.current?.focus();
        return () => returnFocus?.focus();
    }, [returnFocusRef]);
    const isSuccess = status === "success";
    const handleKeyDown = (event) => {
        if (event.key === "Escape") onClose();
        if (event.key === "Tab") {
            event.preventDefault();
            closeRef.current?.focus();
        }
    };
    return (
        <div role="dialog" aria-modal="true" aria-labelledby="contact-dialog-title" aria-describedby="contact-dialog-description"
            onClick={(event) => event.stopPropagation()} onKeyDown={handleKeyDown}
            className="flex flex-col items-center gap-4 bg-[#0b1b12]/95 shadow-2xl shadow-black/50 mx-auto px-6 py-8 sm:py-10 border border-green-400/25 rounded-3xl w-full max-w-md text-center text-white">
            <div aria-hidden="true" className={cx("flex items-center justify-center border rounded-full w-14 h-14 text-3xl", isSuccess ? "border-lime-400/50 bg-lime-500/15 text-lime-300" : "border-amber-400/50 bg-amber-500/15 text-amber-300")}>{isSuccess ? "✓" : "!"}</div>
            <h2 id="contact-dialog-title" className="font-semibold text-xl sm:text-2xl">{messages[status].title}</h2>
            <p id="contact-dialog-description" className="text-white/80 leading-relaxed">{messages[status].text}</p>
            <button ref={closeRef} type="button" onClick={onClose}
                className="bg-lime-700 hover:bg-lime-600 mt-2 px-7 py-2.5 border border-lime-400/50 rounded-xl focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-2 font-semibold text-white transition-colors">
                Close
            </button>
        </div>
    );
};

const Contact = () => {
    const [status, setStatus] = useState("idle");
    const submitting = useRef(false);
    const submitRef = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (submitting.current) return;
        const form = event.currentTarget;
        const fields = new FormData(form);
        const data = Object.fromEntries(["name", "email", "subject", "message"].map((key) => [key, fields.get(key).trim()]));
        if (Object.values(data).some((value) => !value)) {
            setStatus("invalid");
            return;
        }

        submitting.current = true;
        setStatus("submitting");
        try {
            const response = await fetch("https://issuedesk.bigbrain-studio.com/api/resend", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const result = await response.json().catch(() => null);
            if (!response.ok || result?.success !== true) throw new Error("Submission failed");
            form.reset();
            setStatus("success");
        } catch {
            setStatus("error");
        } finally {
            submitting.current = false;
        }
    };
    return (
        <div className="relative items-center gap-2 grid grid-cols-1 md:grid-cols-2 mx-auto mb-10 px-2 md:px-5 w-full max-w-[1100px]">
            <Title title="Contact" />

            <Portal isOpen={Boolean(messages[status])} closeModal={() => setStatus("idle")}>
                {messages[status] && <ShowMessage status={status} onClose={() => setStatus("idle")} returnFocusRef={submitRef} />}
            </Portal>

            <div className="flex flex-col justify-center items-center bg-[#101310ad] shadow-black/30 shadow-xl px-4 sm:px-7 py-8 md:py-10 border border-white/15 rounded-3xl h-full animate-fadeInLeft">
                <div className="mb-5 font-font1 font-medium text-white text-4xl md:text-5xl text-center">Contact</div>

                <form className="flex flex-col gap-3 mt-3 w-full text-white animate-fade" onSubmit={handleSubmit}>
                    <div className="flex md:flex-row flex-col justify-center items-center gap-2">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="p-2 px-3 border-1 border-lime-700 rounded-xl focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-2 w-full md:w-1/2 h-auto"
                            aria-label="Name"
                            required
                            maxLength={100}
                            disabled={status === "submitting"}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="p-2 px-3 border-1 border-lime-700 rounded-xl focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-2 w-full md:w-1/2 h-auto"
                            aria-label="Email"
                            required
                            maxLength={254}
                            disabled={status === "submitting"}
                        />
                    </div>
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="p-2 px-3 border-1 border-lime-700 rounded-xl focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-2 w-full h-auto"
                        aria-label="Subject"
                        required
                        maxLength={150}
                        disabled={status === "submitting"}
                    />
                    <textarea
                        type="text"
                        name="message"
                        cols={20}
                        rows={5}
                        placeholder="Message"
                        className="p-2 px-3 border-1 border-lime-700 rounded-xl focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-2 w-full h-auto"
                        aria-label="Message"
                        required
                        maxLength={5000}
                        disabled={status === "submitting"}
                    ></textarea>
                    <button
                        type="submit"
                        ref={submitRef}
                        disabled={status === "submitting"}
                        className="disabled:opacity-60 disabled:cursor-wait bg-lime-600 hover:bg-lime-800 mx-auto mt-4 border border-lime-400 rounded-xl focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-2 w-full md:w-[60%] h-11 font-bold text-[#101310] text-xl transition-colors"
                    >
                        {status === "submitting" ? "Sending…" : "Send"}
                    </button>
                </form>
            </div>
            <div className="flex flex-col justify-center items-center bg-[#101310ad] shadow-black/30 shadow-xl px-4 sm:px-7 py-8 md:py-10 border border-white/15 rounded-3xl h-full animate-fadeInRight">
                <div className="w-full text-white text-center md:text-right antialiased tracking-wide animate-fade">
                    <h3 className="mb-2 font-font1 font-medium text-2xl md:text-3xl tracking-wider">
                        BIG BRAIN STUDIO CO.,LTD.
                    </h3>
                    <p className="mb-1 text-sm md:text-base">99/1 Plan House Bangkok Building 3rd Floor,</p>
                    <p className="mb-1 text-sm md:text-base">Sukhumvit 68,Bang Na Nuea, Bang Na, Bangkok 10260, Thailand</p>
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
