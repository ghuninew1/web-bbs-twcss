import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        open: true,
        host: true,
    },
    preview: {
        open: true,
        host: true,
        port: 6440,
        allowedHosts: ["localhost", "127.0.0.1","ghuninew.thddns.net","192.168.0.100"],
        cors: true,
    },
});
