import HomeVue from './pages/HomeVue.vue'
import RegisterUp from './components/RegisterUp'
import LoginUp from './components/LoginUp'
import AboutUs from './pages/AboutUs'
import ServicesVue from './pages/ServicesVue'
import PrivacyPolicy from './pages/PrivacyPolicy'
import AffiliateProgram from './pages/AffiliateProgram'
import FaQ from './pages/FaQ'
import ShippingVue from './pages/ShippingVue'
import OrderStatuts from './pages/OrderStatuts'
import PayementOptions from './pages/PayementOptions'
import VendeurPage from './pages/Vendeur.vue'

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
    {
        name : 'VendeurPage',
        component : VendeurPage,
        path: '/vendeur'
    },
    
];
const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router;  


