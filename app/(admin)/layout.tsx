import Header from '@/components/header';
import { Links } from '@/components/nav-link';
import React from 'react'
export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex max-h-screen min-h-screen bg-gray-100">
            <aside className="w-64 bg-gray-900 text-white flex flex-col">
                <div className="px-6 py-4 m-auto">
                    <h1 className="text-2xl font-bold text-green-500 uppercase"><span className=' text-white'>A</span>dmin</h1>
                </div>
                <Links />
            </aside>
            <main className="flex-1 flex flex-col">
                <Header/>
                <div className="overflow-y-auto px-6 mt-4 max-h-full" >
                    {children}
                </div>
            </main>
        </div>
    )
}
