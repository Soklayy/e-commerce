import { Layers2, LayoutDashboard, LogOut, LucideIcon, ShoppingBag, ShoppingCart, Tag, User } from "lucide-react";

export interface Menu {
    name: string;
    path: string;
    Icon: LucideIcon;
}

export const menus: Menu[] = [
    {
        name: 'Dashboard',
        path: '/',
        Icon: LayoutDashboard
    },
    {
        name: 'Categories',
        path: '/categories',
        Icon: Layers2
    },
    {
        name: 'Brands',
        path: '/brands',
        Icon: Tag
    },
    {
        name: 'Products',
        path: '/products',
        Icon: ShoppingBag
    },
    {
        name: 'Review Order',
        path: '/orders',
        Icon: ShoppingCart
    },
    {
        name: 'Users',
        path: '/users',
        Icon: User
    },
    {
        name: 'Logout',
        path: '/logout',
        Icon: LogOut
    }
]