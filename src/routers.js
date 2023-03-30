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
import ChatPage from './pages/Chat.vue'

// Admin dashboard import pages
import AdminVue from './pages/dashboard/AdminVue.vue'
import Dashboard from './pages/dashboard/Dashboard.vue'
import DashboardClient from './pages/dashboard/DashboardClient.vue'
import DashboardVendeur from './pages/dashboard/DashboardVendeur.vue'
import DashboardService from './pages/dashboard/DashboardService.vue'
import DashboardValidation from './pages/dashboard/DashboardValidation.vue'

//Client and service page
import ClientPage from './pages/ClientPage.vue'
import ServicesAv from './pages/ServicesAv.vue'
import VendeurServices from './pages/VendeurServices.vue'

import CreationServices from './pages/CreationServices.vue'
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
    {
        name : 'ChatPage',
        component : ChatPage,
        path: '/chat'
    },

    // Dashboard route..............................................
    {
        name : 'Dashboard',
        component : AdminVue,
        path: '/dashboard'
    },
    {
        name : 'DashboardHome',
        component : Dashboard,
        path: '/dashboardHome'
    },
    {
        name : 'DashboardClient',
        component : DashboardClient,
        path: '/dashboardClient'
    },
    {
        name : 'DashboardVendeur',
        component : DashboardVendeur,
        path: '/dashboardVendeur'
    },
    {
        name : 'DashboardService',
        component : DashboardService,
        path: '/dashboardService'
    },
    {
        name : 'DashboardValidation',
        component : DashboardValidation,
        path: '/dashboardValidation'
    },
        {
        name : 'ClientPage',
        component : ClientPage,
        path: '/client'
    },
    {
        name : 'ServicesAv',
        component : ServicesAv,
        path: '/Services'
    },
    {
        name : 'VendeurServices',
        component : VendeurServices,
        path: '/vendeurservices'
    },
    {
        name : 'CreationServices',
        component : CreationServices,
        path: '/creationservices'
    },
    
];
const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router;  


