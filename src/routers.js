import HomeVue from './components/HomeVue.vue'
import RegisterUp from './components/RegisterUp'
import LoginUp from './components/LoginUp'
import AboutUs from './components/pages/AboutUs'
import ServicesVue from './components/pages/ServicesVue'
import PrivacyPolicy from './components/pages/PrivacyPolicy'
import AffiliateProgram from './components/pages/AffiliateProgram'
import FaQ from './components/pages/FaQ'
import ShippingVue from './components/pages/ShippingVue'
import OrderStatuts from './components/pages/OrderStatuts'
import PayementOptions from './components/pages/PayementOptions'
import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        name : 'HomeVue',
        component : HomeVue,
        path : '/',
    },
    {
        name : 'RegisterUp',
        component : RegisterUp,
        path : '/RegisterUp',
    },
    {
        name : 'LoginUp',
        component : LoginUp,
        path: '/LoginUp'
    },
    {
        name : 'AboutUs',
        component : AboutUs,
        path: '/AboutUs'
    },
    {
        name : 'ServicesVue',
        component : ServicesVue,
        path: '/ServicesVue'
    },
    {
        name : 'PrivacyPolicy',
        component : PrivacyPolicy,
        path: '/PrivacyPolicy'
    },
    {
        name : 'AffiliateProgram',
        component : AffiliateProgram,
        path: '/AffiliateProgram'
    },
    {
        name : 'FaQ',
        component : FaQ,
        path: '/FaQ'
    },
    {
        name : 'ShippingVue',
        component : ShippingVue,
        path: '/ShippingVue'
    },
    {
        name : 'OrderStatuts',
        component : OrderStatuts,
        path: '/OrderStatus'
    },
    {
        name : 'PayementOptions',
        component : PayementOptions,
        path: '/PayementOptions'
    },
    
];
const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router;  


