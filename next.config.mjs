/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.mmafacts.com",
			},
			{
				protocol: "https",
				hostname: "www.flagsapi.com",
			},
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
			},
			{
				protocol: "https",
				hostname: "s.gravatar.com",
			},
			{
				protocol: "https",
				hostname: "s.yimg.com",
			},
		],
	},
};

export default nextConfig;
