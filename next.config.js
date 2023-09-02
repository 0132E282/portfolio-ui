/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, 
    images: {
        domains: ['res.cloudinary.com'],
    },
    env : {
        API_URL:'https://js-post-api.herokuapp.com'
    }
}

module.exports = nextConfig
