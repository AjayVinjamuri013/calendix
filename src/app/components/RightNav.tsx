'use client'
import Link from "next/link";

export default function RightNav({email}:{email:string}){
    const hasLoggedOut = location.href.includes('logged-out');
    if(email && !hasLoggedOut){
        return(
            <nav className="flex gap-4 items-center">
                <Link href={'/dashboard'} className="btn-blue">Dashboard</Link>
                <a href={'/api/logout'}>Logout</a>
          </nav>
        )
    }
    if(!email){
        return(
            <nav className="flex gap-4 items-center">
            <Link href={'/api/auth'}>Sign In</Link>
            <Link href={'/about'} className="bg-blue-600 text-white px-4 py-2 rounded-full">Get started</Link>
          </nav>
        )
    }
}