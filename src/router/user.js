const user = [
    {
        path: "/",
        component: () => import("../index.vue"),
        children: [
            {
                path:"",
                name:"client.home",
                component: () => import('../pages/home.vue'),
                // meta: {title : Home}
            },
            {
                path: "shop",
                name: "client.shop",
                component: () => import('../pages/shop.vue'),
                // meta: {title : Shop}
            },
            {
                path: "about",
                name: "client.about",
                component: () =>import('../pages/about.vue'),
                // meta: { title: Contact}
            },
            {
                path: "contact",
                name: "client.contact",
                component: ()=> import('../pages/contact.vue'),
            },
            {
                path: "detail",
                name: "client.product.detail",
                component: () => import('../pages/detail.vue'),
            }

        ]
    }
];

export default user;