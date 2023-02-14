import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
let router = new Router({
    mode: "history",
    routes: [{
        path:'/',
        name:'login',
        component:()=>
            import('./components/superAdmin/loginSuper')
    },
    {
        path:'/admindash',
        name:'admindash',
        component:()=>
            import('./components/admin/dashBoard')
    },
    // {
    //     path:'/admin',
    //     name:'admin',
    //     component:()=>
    //         import('./components/superAdmin/superPanel')
    // },
    {
        path: '/admin',
        name: 'admin',
        component:()=>
            import('./components/superAdmin/superPanel'),
        children:[
            {
                path:'/dashBoard',
                props:true,
                component:()=>
                    import('./components/superAdmin/dashBoard')
            },
            {
                path:'/superprofile',
                props:true,
                component:()=>
                    import('./components/superAdmin/superProfile')
            },
        ]
    }
    ]
})
// router.beforeEach((to,from,next) => {
//     if(to.name=='login' && localStorage.getItem('Token') || (to.name=="reg" && localStorage.getItem('Token'))){
//         next({ name: 'profile'})
//         return;
//     }
//     else next()
// }) 
export default router;