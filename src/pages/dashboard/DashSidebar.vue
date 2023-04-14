<template>
    <div class="sidebar" :style="{width: sidebarWidth}">
        <div class="tete">
            <h1 v-if="collapsed">
                <img class="imglogo" src="../../assets/image/Logo.png" alt="">
        </h1>
        <h1 v-else>
                <img class="imglogo" src="../../assets/image/Logo.png" alt="">
                <p>Libère-toi</p>
        </h1>
        </div>
        
        <DashSidebarLink to="/" icon="fas fa-home">Home</DashSidebarLink>
        <DashSidebarLink to="/dashboardHome" icon="fas fa-columns">Dashboard</DashSidebarLink>
        <DashSidebarLink to="/dashboardClient" icon="fas fa-users">Client</DashSidebarLink>
        <DashSidebarLink to="/dashboardVendeur" icon="fas fa-user">Vendeur</DashSidebarLink>
        <DashSidebarLink to="/dashboardService" icon="fas fa-shopping-bag">Service</DashSidebarLink>
        <DashSidebarLink to="/dashboardValidation" icon="fas fa-tasks">Validation</DashSidebarLink>
        <!-- <DashSidebarLink to="/dashboard" icon="fas fa-chart-bar">Analytics</DashSidebarLink> -->
        <!-- <DashSidebarLink to="/dashboard" icon="fas fa-image">Images</DashSidebarLink> -->

        <span
            class="collapse-icon"
            :class="{'rotate-180':collapsed}"
            @click="toggleSidebar"
        >
            <i class="fas fa-angle-double-left" />
        </span>
    </div>
</template>


<script>
    import { collapsed, toggleSidebar, sidebarWidth } from './state'
    import DashSidebarLink from './DashSidebarLink.vue';

    export default {
        props:{},
        components : {
            DashSidebarLink
        },
        setup() {
            return { collapsed, toggleSidebar, sidebarWidth }
        }
    }
</script>


<style>
    :root {
        --sidebar-bg-color: #272c4a;
        --sidebar-item-hover:#3e4764;
        --sidebar-item-active:#1b203d;
    }
</style>

<style scoped>
    .sidebar {
        color: white;
        background-color: var(--sidebar-bg-color);
        height: 100%;

        float: left;
        position:fixed;
        z-index: 1;
        top: 0;
        left: 0;
        bottom: 0;
        padding: 0.5em;

        transition: 0.3s ease;

        display: flex;
        flex-direction: column;
        /* gap: 5px; */

    }

    .collapse-icon {
        position: absolute;
        bottom: 0;
        padding: 0.75em;

        color: rgba(255, 255, 255, 0.7);

        transition: 0.2s linear;
    }

    .rotate-180 {
        transform: rotate(180deg);
        transition: 0.2s linear;
    }

    .imglogo {
        min-width: 50px;
        height: 50px;
    }
    .imglogo:hover {
        cursor: pointer;
    }

    .sidebar h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.2s linear;
        color: #ac1282;
    }

    .tete {
        max-height: 100px;
        min-height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>