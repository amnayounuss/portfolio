"use client";
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "about",
        path: "/resume",
    },
    {
        name: "portfolio",
        path: "/portfolio",
    },
    {
        name: "contact",
        path: "/contact",
    },


]


const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {Links.map((link, index) => {
                return <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent" } 
                capitalize font-medium hover:text-accent transition-all`}>
                    {link.name}
                </Link>
            })}
        </nav>
    )
}

export default Nav