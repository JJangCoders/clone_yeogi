/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'www.yeogi.com',
			},
		],
	},
};

module.exports = nextConfig;
