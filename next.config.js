/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["images.pexels.com", "res.cloudinary.com"],
		deviceSizes: [640, 750, 828, 1080, 1200],
	},
};

module.exports = nextConfig;
