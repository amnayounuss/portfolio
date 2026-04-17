"use client";

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Links = [
    { name: "home", path: "#home" },
    { name: "services", path: "#services" },
    { name: "resume", path: "#resume" },
    { name: "portfolio", path: "#portfolio" },
    { name: "contact", path: "#contact" },
]

const Nav: React.FC = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-12 font-display">
            {Links.map((link, index) => {
                const isActive = link.path === pathname;
                return (
                    <Link 
                        href={link.path} 
                        key={index} 
                        className={`group relative flex items-center gap-2 lowercase text-sm font-bold tracking-widest transition-all duration-500 ${isActive ? "text-accent" : "text-white/40 hover:text-white"}`}
                    >
                        {isActive && (
                            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                        )}
                        {link.name}
                        <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover:w-full ${isActive ? "w-full" : "w-0"}`} />
                    </Link>
                );
            })}
        </nav>
    )
}

export default Nav