/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "cdn.myanimelist.net"
            },
            {
                hostname: "avatars.githubusercontent.com"
            },
            {
                protocol: "https",
                hostname: "platform-lookaside.fbsbx.com"
            },
            {
                hostname: "lh3.googleusercontent.com"
            }
        ]
    }
}

module.exports = nextConfig
