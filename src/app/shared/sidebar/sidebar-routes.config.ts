import { RouteInfo } from './sidebar.metadata';

// export const ROUTES: RouteInfo[] = [
//     {
//         path: '', title: 'Master Data', icon: 'ft-trending-up', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu:[
//             {
//                 path: '/setupCompany', title: 'Create Company', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
//             },
//             {
//                 path: 'chart-of-accounts', title: 'Chart Of Accounts', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
//             },
//             {
//                 path: 'uom', title: 'Unit of Measurement', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
//             },
//             {
//                 path: 'raw-products', title: 'Raw Products', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
//             },
//             {
//                 path: 'finished-products', title: 'Finished Products', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
//             },
//             {
//                 path: 'charges-master', title: 'Charges Master', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
//             },
//             {
//                 path: 'branch-master', title: 'Branch Master', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
//             },
//             {
//                 path: 'bankmaster', title: 'Bank Master', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
//             },
//             {
//                 path: 'godown-master', title: 'Godown Master', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
//             },
//             {
//                 path: 'bill-of-material', title: 'Bill of Material', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
//             },
//         ]
//     },

//     {
//         path: '', title: 'Master', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
//         {
//             path: '', title: 'Account Master', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [    
//                 {
//                     path: 'chart-of-accounts', title: 'Chart Of Accounts', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
//                 },
//             ]
//         },
//         {
//             path: '', title: 'Inventory Master', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
//                 {
    
//                 }
//             ]
    
//         }
//     ]
    
//     },
    
  
// ];

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
    {
         path: '', title: 'Master', icon: 'ft-trending-up', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu:[
            { path: '', title: 'Account Master', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                    {
                      path:'chart-of-accounts', title: 'Chart Of Accounts', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                    },
                    {
                     path: 'branch-master', title: 'Branch Master', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                    },
                    
                ] 
            },
            { path: '', title: 'Inventory Master', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                {
                    path:'godown-master', title: 'Godown Master', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                },
                {
                    path:'raw-products', title: 'Products Master', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                },
                {
                    path: 'uom', title: 'Units Master', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                },
            ] 
        },
         ]
    },
    {
        path: '', title: 'Data Entry', icon: 'ft-trending-up', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu:[
    
                {
                    path: 'bill-of-material', title: 'Bill of Material', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                },
            
        ]
    },
    {
        path: '', title: 'Registers', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu:[]
    },
    {
        path: '', title: 'Reports', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu:[]
    },
    {
        path: '', title: 'MIS Reports', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu:[]
    },
    {
        path: '', title: 'Backup/Restore', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu:[]
    },
    {
        path: '', title: 'Change Company', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu:[]
    },
    {
        path: '', title: 'Company Settings', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu:[]
    },
    {
        path: '', title: 'Calculator', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu:[]
    },
    {
        path: '', title: 'Help', icon:'', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu:[]
    },
];
