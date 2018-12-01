export interface SideNavItem {
    path?: string;
    text: string;
    icon: string;
    isExpanded?: boolean;
    submenuItems?: any[];
}

export const sidenavMenuItems: SideNavItem[] = [
    {
        path: '/',
        text: 'Home',
        icon: 'home',
    },
    {
        path: '/dash',
        text: 'Dashboard',
        icon: 'dashboard',
    },
    {
        path: '/products/new',
        text: 'Products',
        icon: 'account_circle',
    },
    {
        path: '/users',
        text: 'Users',
        icon: 'account_circle',
    },
    {
        text: 'Categories',
        icon: 'category',
        isExpanded: false,
        submenuItems: [
            {
                path: '/categories',
                text: 'List',
                icon: 'list',
            },
            {
                path: '/categories/new',
                text: 'Create',
                icon: 'list',
            },
        ]
    }
];
