let savedPosition = null;

export function saveOurworkScroll() {
    if (window.innerWidth < 768) savedPosition = window.scrollY;
}

export function restoreOurworkScroll() {
    if (window.innerWidth < 768 && savedPosition !== null) {
        window.scrollTo({ top: savedPosition, behavior: "instant" });
    }
    savedPosition = null;
}
