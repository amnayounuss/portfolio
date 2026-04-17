import React from 'react'
import Link from 'next/link'
import Nav from './Nav'
import MobileNav from './MobileNav'

const Header: React.FC = () => {
  return (
    <header className="py-6 xl:py-10 text-white sticky top-0 z-50 bg-primary/20 backdrop-blur-xl border-b border-white/[0.05]">
      <div className='container mx-auto flex justify-between items-center px-4 xl:px-8'>
        <Link href="#home">
          <h1 className='text-3xl font-display font-bold tracking-tighter uppercase hover:text-accent transition-all duration-500 group'>
            Amna<span className='text-accent group-hover:rotate-12 inline-block transition-transform'>_</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-12">
          <Nav />
          <Link href="#contact" className="btn-editorial">
            Work with me
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden ">
          <MobileNav />
        </div>

      </div>
    </header>
  )
}

export default Header