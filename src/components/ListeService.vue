<template>
    <div class="list-AV">
        <div class="liste">
            <div class="list-title">
                <h1>Catégorie de services</h1>
            </div> 
            <div class="list-list-1" v-on:click="Voir">
                <div class="AV-1" v-for="item in listeCategorie" :key="item.categorie">
                        
                        <div class="card-image1">
                                <h2 class="name">{{ item.titre }}</h2>
                                <img :src="require(`../assets/image/${item.source}`)" alt="" class="card-img1">                             
                        </div>
                </div>
            </div> 
        </div>
            
    </div>
</template>
<script>
    // import services from "../assets/services"
    import axios from 'axios'

    export default{
        name:'ListVue',
        data(){
            return{
                listeCategorie : []
            }
        },
        methods:{
            Voir(){
            
            this.$router.push({name:'ServicesAv'});
            
        },
        async loadData(){
                let result = await axios.get("http://localhost:3000/categorie/listeCategorie");
                this.listeCategorie = result.data.data;
            },
        },
        mounted(){
            this.loadData();
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
 .button-begin1 button{
        border: none;
        font-size: 16px;
        color: #FFF;
        padding: 8px 16px;
        background-color: #ac1282;
        border-radius: 16px;
        margin: 14px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
</style>