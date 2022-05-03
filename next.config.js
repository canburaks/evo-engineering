const path = require("path")
const { i18n } = require("./next-i18next.config")

module.exports = {
    env: {
        host:
            process.env.NODE_ENV === "production"
                ? process.env.HOST
                : "http://localhost:3000"
    },
    images: {
        deviceSizes: [360, 480, 576, 768, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60,

        domains: ["res.cloudinary.com", "vercel.com", "evo-e.com"]
    },
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "css")]
    },
    trailingSlash: true,
    devIndicators: {
        buildActivity: false
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true
    },
    i18n
}
