"use client";

import { AnimatePresence, easeIn, easeInOut, motion } from 'framer-motion'
import { usePathname } from 'next/navigation';
import React from 'react'

const PageTransition = ({ children }) => {
    const pathname = usePathname()
    return (
        <div key={pathname}>
            {children}
        </div>
    )
}

export default PageTransition