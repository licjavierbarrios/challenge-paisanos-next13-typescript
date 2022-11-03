/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
    swcMinify: true,
	},
	images: {
		domains: ["cdn.cloudflare.steamstatic.com", "res.cloudinary.com"],
	},

};

module.exports = nextConfig;
