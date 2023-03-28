<template>
    <div class="AdminBoard">
        <Sidebar />
        <div :style="{'margin-left': sidebarWidth}" >
            
        </div>
    </div>
</template>


<script>
    import Sidebar from './DashSidebar.vue'
    import { sidebarWidth } from './state';

    export default {
        components: {
        Sidebar
},
        props:{},
        setup() {
            return { sidebarWidth }
        }
    }
</script>


<style>



</style>