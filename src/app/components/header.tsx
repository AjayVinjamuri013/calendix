"use server";

import { session } from "@/libs/session";
import {CalendarDays} from "lucide-react";
import Link from "next/link";
import RightNav from "./RightNav";

export default async function Header() {
  const email = await session().get('email');

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
        <RightNav email={email}/>
      </header>
    )
}