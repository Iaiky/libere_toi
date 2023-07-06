<template>
    
        <HeaderVue/>
        <div class="list-AV">
            <div class="liste">
                <div class="list-title">
                    <h1>Catégorie : {{ categorie }}</h1>
                </div>
                <div class="list-list-1" >
                <div class="AV-1" v-for="item in service" :key="item.idservice" v-on:click="openModal(item)">
                        
                        <div class="card-image1" v-on:click="Voir(item.categorie)">
                                <h2 class="name">{{ item.titre }}</h2>
                                <img :src="item.image_source" alt="" class="card-img1">                             
                        </div>
                </div>
            </div>
            </div>
        </div>
            <BaseModal 
                v-bind:revele="revele" 
                v-bind:toggleModale="toggleModale"
                v-bind:service="serviceModal"
            />
        <FooterVue/>
    
</template>

<script>
    import HeaderVue from '../components/HeaderVue.vue'
    import FooterVue from "../components/FooterVue.vue"
    import BaseModal from '../components/BaseModal.vue'

    import axios from 'axios'

    export default {
        name:'ListeServiceCategorie',
        data() {
            return {
                service:[],
                serviceModal:{},
                revele : false,
                categorie :''

            }
        },
        components:{
            HeaderVue,
            FooterVue,
            BaseModal,

        },
        methods:{
            async getService(id){
                let result = await axios.get("http://localhost:3000/service/categorie/"+id);
                // console.log(result.data.data);
                this.service = result.data.data;
            },
            toggleModale: function(){
                this.revele = !this.revele
            },
            openModal(service) {
                this.serviceModal = service;
                this.revele = true;
            },
            async getCategorie(id){
                let result = await axios.get("http://localhost:3000/categorie/"+id);
                // console.log(result.data[0].titre);
                this.categorie = result.data[0].titre;
            },
        },
        created(){
            let users = localStorage.getItem('user-info');
            this.user = users;
            // let idv = JSON.parse(users).data[0].iduser;

            this.getService(this.$route.params.idCategorie);
            this.getCategorie(this.$route.params.idCategorie);
        }
    }
</script>

<style scoped>

.list-AV {
        display: flex;
        justify-content: center;
    }

    .list-AV .liste {
        padding: 4rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        border-radius: 10px;
        width: 1170px;
        background: #ffffffc4;
        /* background-image: url("../assets/body.png"); */
        display: flex;
        flex-direction: column;
        gap: 3px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }


    .list-AV .liste .list-list-1 {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        grid-column-gap: 30px;
        -moz-column-gap: 30px;
        column-gap: 30px;
        grid-row-gap: 15px;
        row-gap: 15px;
        }

    .list-AV .liste .list-list-1 .AV-1 {
        width: 320px;
        height: 280px;
        background: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 8px;
        padding:0;
        font-size: 23px;
        font-weight: 500;
        cursor: pointer;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }

    .list-AV .liste .list-list-1 .AV-1:hover {
        box-shadow: none;
        background: rgba(255, 255, 255, 0.815);
    }

    .card-image1 {
        height: 280px;
        width: 320px;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* padding: 10px 14px; */
    }
     
    .card-image1 .name {
        font-size: 23px;
        padding: 10px;
        margin: 10px;
    }

    .card-image1 img {
        max-height: 195px;
        max-width: 292px;
        border-radius: 5px;
    }
</style>