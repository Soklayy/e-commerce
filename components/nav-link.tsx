'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { menus } from '@/constants/menu'

export function Links() {
    const pathname = usePathname()
    return (
        <nav className="flex-grow px-6 space-y-2">
            {
                menus.map((menu,index)=>(<Link href={menu.path} className={pathname === menu.path ? 'active' : 'nav-link'} key={index}><menu.Icon size={18} />{menu?.name}</Link>))
            }
        </nav>
    )
}