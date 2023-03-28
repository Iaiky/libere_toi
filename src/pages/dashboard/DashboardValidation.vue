<template>
    <div class="dashboard">

        <div id="main" :style="{'margin-left' : sidebarWidth}" >
            <Sidebar />
            <div class="head">
                <div class="col-div-6">
                    <span style="font-size:30px;cursor:pointer; color: white;" class="nav" 
                    v-on:click="toggleSidebar" 
                    >
                        <span v-if="collapsed" ><i class="fas fa-angle-double-right" /></span> 
                        <span v-else ><i class="fas fa-angle-double-left" /></span>
                        Client
                    </span>
                </div>
            
                <div class="col-div-6">
                    <div class="profile">

                        <p>Admin <span>ADMINISTRATEUR</span></p>
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>

            <div class="clearfix"></div>
            <br/>
            <div class="cont">
                <Notification titre="Vendeurs" total="67" icon="fa fa-users" />
                <Notification titre="Services" total="65" icon="fa fa-shopping-bag" />
                <Notification titre="Commandes" total="65" icon="fa fa-list" />
            </div>    
            <div class="clearfix"></div>
            <br/><br/>
            <div class="cont">
                <TableListe :donnee="tableExample" />
                <TableListe :donnee="tableExample" />
                <TableListe :donnee="tableExample" />
            </div>    
            <div class="clearfix"></div>
        </div>
    </div>
</template>
    

<script>
    import Sidebar from './DashSidebar.vue';
    import Notification from './Notification.vue';
    import TableListe from './ListeVue.vue'
    
    import { collapsed, toggleSidebar,sidebarWidth } from './state';

    export default {
        components: {
            Sidebar,
            Notification,
            TableListe
        },
        props:{},
        setup() {
            return { collapsed, toggleSidebar,sidebarWidth }
        },
        data() {
            return {
                tableExample : [
                    {
                        id : "1",
                        company : "Centro comercial Moctezuma",
                        contact : "Francisco Chang",
                        country : "Mexico",
                    },
                    {
                        id : "2",
                        company : "Ernst Handel",
                        contact : "Roland Mendel",
                        country : "Austria",
                    },
                    {
                        id : "3",
                        company : "Island Trading",
                        contact : "Helen Bennett",
                        country : "UK",
                    },
                    {
                        id : "4",
                        company : "Ernst Handel",
                        contact : "Roland Mendel",
                        country : "Madagascar",
                    },
                    {
                        id : "5",
                        company : "Island Trading",
                        contact : "Helen Bennett",
                        country : "UK",
                    },
                    {
                        id : "6",
                        company : "Ernst Handel",
                        contact : "Roland Mendel",
                        country : "Madagascar",
                    },
                ]
            }
        }
    }
</script>


<style scoped>
    .dashboard .box-4{
	margin-left: 10px;
    }

</style>