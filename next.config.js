/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.pexels.com",
				port: "",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				port: "",
				pathname: "**",
			},
		],
		deviceSizes: [640, 750, 828, 1080, 1200],
	},
	transpilePackages: ["@react-email"],
};

module.exports = nextConfig;
