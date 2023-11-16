export default function emptyCache() {
    if ("caches" in window) {
        caches.keys().then((names) => {
            // Delete all the cache files
            names.forEach((name) => {
                caches.delete(name);
            });
        });
        console.log("Cache cleared");

        // Makes sure the page reloads. Changes are only visible after you refresh.
        // window.location.reload(true);
    }
}
