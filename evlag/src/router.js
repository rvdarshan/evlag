import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
let router = new Router({
    mode: 'history',
    routes:[{
        path: '/',
        name: 'login',
        component:()=>
            import('./components/basic/loginAdmin')
    },
    {
        path:'/admin',
        name:'admin',
        component:()=>
            import('./components/superadmin/adminPanel'),
        children:[
            {
                path: '/dashboard',
                props:true,
                component:()=>
                    import('./components/superadmin/dashBoard'),
            },
            {
<<<<<<< Updated upstream
                path: '/adminpanel',
                props:true,
                component:()=>
                    import('./components/admin/adminPanel'),
            },
=======
                path:'/profilesuper',
                props:true,
                component:()=>
                    import('./components/superadmin/profileSuper'),
            },
            {
                path:'/securitymanagement',
                props:true,
                component:()=>
                    import('./components/superadmin/securityPage'),
            }

>>>>>>> Stashed changes
        ]
    }
]
})
export default router;