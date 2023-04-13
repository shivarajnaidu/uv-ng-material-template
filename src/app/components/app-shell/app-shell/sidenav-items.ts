export const menuItems = [
    {
        icon: 'dashboard_customize',
        text: 'Dashboard',
        path: ['/dashboard'],
        subMenus: [],
    },
    {
        icon: 'group_work',
        text: 'Master',
        path: [],
        subMenus: [
            {
                icon: 'category',
                text: 'Category',
                path: ['/category'],
            }, {
                icon: 'label',
                text: 'Tags',
                path: ['/tags'],
            }

        ],
    },
    {
        icon: 'verified_user',
        text: 'Login',
        path: ['/login'],
        subMenus: [],
    }, {
        icon: 'verified_user',
        text: 'Sign Up',
        path: ['/signup'],
        subMenus: [],
    },
    {
        icon: 'account_circle',
        text: 'Users',
        path: ['/users'],
        subMenus: [],
    },
    
    {
        icon: 'money',
        text: 'Profile',
        path: ['/my-profile'],
        subMenus: [],
    },
]