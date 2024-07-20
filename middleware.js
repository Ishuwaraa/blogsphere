import middleware from 'next-auth/middleware'

export const config = {
    matcher: ['/profile/:path*', '/createBlog']
}

export default middleware