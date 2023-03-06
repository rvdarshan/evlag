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
            },
            {
                path:'/securityregistration',
                props:true,
                component:()=>
                    import('./components/superadmin/securityRegistration')
            },
            {
                path:'/updatepassword',
                props:true,
                component:()=>
                    import('./components/superadmin/updatePassword')
            },
            {
                path:'/securitylist',
                props:true,
                component:()=>
                    import('./components/superadmin/securityList')
            },
            {
                path:'/securityprofile',
                props:true,
                component:()=>
                    import('./components/superadmin/securityProfile')
            },
            {
                path:'/securityupdate',
                props:true,
                component:()=>
                    import('./components/superadmin/securityUpdate')
            },
            {
                path:'/userlog',
                props:true,
                component:()=>
                    import('./components/superadmin/userLog')
            },
            {
                path:'/roughwork',
                props:true,
                component:()=>
                    import('./components/sample/roughWork')
            }

        ]
    }
]
})
export default router;