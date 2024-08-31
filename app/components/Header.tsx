import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "../../public/logo.png"

function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
        <div className='flex items-center space-x-2'>
            <Link href="/" >
            <Image 
            className='rounded-full' 
            src={logo}
            width={150} height={150} alt='logo' />
            </Link>
          
        </div>
        <div>
            <Link
            href="https://www.instagram.com/jimwhiteford/"
            className='px-5 py-3 text-center text-sm md:text-base bg-gray-900 text-[#006678] flex items-center rounded-full'>
                Follow my journey here.
            </Link>
        </div>
    </header>
  )
}

export default Header