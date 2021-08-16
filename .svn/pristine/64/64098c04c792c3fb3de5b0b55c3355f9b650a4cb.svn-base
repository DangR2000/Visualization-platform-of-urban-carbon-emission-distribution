import Vue from "vue";
import VueRouter from "vue-router";
//一个个link对象 - 分类
// import CesiumScene from "@/views/CesiumScene.vue";
import home from "@/views/home.vue";
// import map from "@/views/map.vue";
import login from "@/views/login/login.vue";
import register from "@/views/login/register.vue";
import Details from "@/views/details/Detail";
import display3D from "@/views/details/display3D";
Vue.use(VueRouter);

const routes = [{
        path: "/",
        component: home,
    },
    {
        path: "/login",
        name: "login",
        component: login,
    },
    {
        path: "/register",
        name: "register",
        component: register,
    },
    // {
    //     path: "/map",
    //     name: "map",
    //     component: map,
    // },
    {
        path: "/detail",
        component: Details,
    },
	{
	    path: "/display3D",
	    component: display3D,
	},
    
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;