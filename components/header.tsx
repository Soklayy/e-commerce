"use client"
import { menus } from '@/constants/menu'
import { Bell } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'

function Header() {
    const pathname = usePathname()
    return (
        <header className='bg-gray-800 flex justify-between items-center px-6 h-16'>
            <h1 className="text-xl font-semibold text-green-500">{menus.filter((value) => value.path == pathname)[0]?.name}</h1>
            <div className="relative cursor-pointer">
                <span className="bg-red-600 font-semibold text-white p-1 rounded-full absolute -top-3 -right-2 flex items-center justify-center w-5 h-5 text-[0.60rem]">
                    100
                </span>
                <Bell strokeWidth={4} size={25} absoluteStrokeWidth className='text-green-500' />
            </div>
        </header>
    )
}

export default Header