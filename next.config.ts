import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath: "/Real-History-Project",
    images: {
        loader: "akamai",
        path: "/",
    }
};

export default nextConfig;
