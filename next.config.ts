import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    webpack: (config) =>  {
        config.resolve = {
            ...config.resolve,
            fallback: {
                fs: false
            }
        }
        return config
    }
};

export default nextConfig;
