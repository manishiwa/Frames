/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source: '/growthepie',
        destination: 'https://www.growthepie.xyz/',
        permanent: false
      },
      {
        source: '/modesinglechain',
        destination: 'https://www.growthepie.xyz/chains/mode',
        permanent: false
      }
    ]
  }
};

module.exports = nextConfig;
