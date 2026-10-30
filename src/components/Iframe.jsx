export const Iframe = ({ src, isOn = false }) => {
    if (!isOn) return null;
    return (
        <iframe
            src={src}
            width="100%"
            height="100%"
            title="video player"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    );
};

export function YouTubeEmbed({ src, title }) {
    return (
        <iframe
            src={src}
            title={title}
            width="100%"
            height="100%"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
        />
    );
}

export function GoogleMapEmbed({ src, title = "Google Map" }) {
    return (
        <iframe
            src={src}
            title={title}
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
        />
    );
}