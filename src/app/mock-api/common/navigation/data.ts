/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    // {
    //     id: 'dashboards',
    //     title: 'Dashboards',
    //     subtitle: '',
    //     type: 'group',
    //     icon: 'heroicons_outline:home',
    //     children: [
    //         {
    //             id: 'dashboards.daily',
    //             title: 'Dashboard Daily',
    //             type: 'basic',
    //             icon: 'heroicons_outline:chart-pie',
    //             link: '/dashboard'
    //         },
    //     ]
    // },

    // {
    //     type: 'spacer',
    // },
    {
        id: 'notices',
        title: 'Notices',
        subtitle: '',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'notices.evidences',
                title: 'View Evidences',
                type: 'basic',
                icon: 'heroicons_outline:view-list',
                link: '/notices/evidences'
            },
            {
                id: 'notices.evidences-details',
                title: 'Upload Evidences',
                type: 'basic',
                icon: 'heroicons_outline:camera',
                link: '/notices/evidences-details'
            },
            // {
            //     id: 'weekly.tasks',
            //     title: 'Planning',
            //     type: 'basic',
            //     icon: 'heroicons_outline:check-circle',
            //     link: '/'
            // },
            // {
            //     id: 'weekly.tasks',
            //     title: 'Tasks',
            //     type: 'basic',
            //     icon: 'heroicons_outline:check-circle',
            //     link: '/tasks'
            // },
        ]
    },


    {
        id: 'weekly',
        title: 'Weekly',
        subtitle: 'Planning / Tasks',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'weekly.tasks',
                title: 'Planning',
                type: 'basic',
                icon: 'heroicons_outline:check-circle',
                link: '/'
            },
            // {
            //     id: 'weekly.tasks',
            //     title: 'Planning',
            //     type: 'basic',
            //     icon: 'heroicons_outline:check-circle',
            //     link: '/'
            // },
            // {
            //     id: 'weekly.tasks',
            //     title: 'Tasks',
            //     type: 'basic',
            //     icon: 'heroicons_outline:check-circle',
            //     link: '/tasks'
            // },
        ]
    },

    {
        type: 'spacer',
    },

    {
        id: 'admin',
        title: 'Admin',
        subtitle: '',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'team',
                title: 'Team',
                type: 'basic',
                icon: 'heroicons_outline:user-group',
                link: '/'
            },
            {
                id: 'setting',
                title: 'Setting',
                type: 'basic',
                icon: 'heroicons_outline:cog',
                link: '/settings'
            },
            {
                type: 'divider',
            },
            {
                id: 'logout',
                title: 'Logout',
                type: 'basic',
                icon: 'heroicons_outline:logout',
                link: '/'
            },
        ]
    },

];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
