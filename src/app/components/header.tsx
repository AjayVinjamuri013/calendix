import {CalendarDays } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
      <header className="flex gap-4 justify-between p-6 text-gray-600">
        <div className="flex items-center gap-10">
          <Link href={'/'} className="text-blue-600 font-bold text-xl flex gap-1 items-center">
            <CalendarDays size={24}/>
            Calendix
          </Link>
          <nav className="flex gap-4">
            <Link href={'/features'}>Features</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/pricing'}>pricing</Link>
          </nav>
        </div>
        <nav className="flex gap-4 items-center">
          <Link href={'/features'}>Sign In</Link>
          <Link href={'/features'} className="bg-blue-600 text-white px-4 py-2 rounded-full">Get started</Link>
        </nav>
      </header>
    )
}