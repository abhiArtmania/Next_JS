/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.pexels.com']
    },
    output: 'export',
    redirects: async () => {
        return [{
            source: '/abouts',
            destination: '/',
            permanent: false
        },{
            source: '/studentList/:studentId',
            destination: '/studentList',
            permanent: false
        }]
    }
};

export default nextConfig;
