import { NextResponse } from 'next/server';

export default function middleware(req){
    const newUrl = new URL('/login',req.url)
    return NextResponse.redirect(newUrl);
}

export const config = {
    matcher: [
        '/about/aboutCollege',
        '/studentList/:studentId+',
        '/study/:day/:lectureNo*',
    ]
}