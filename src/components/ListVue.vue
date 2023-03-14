<template>
    <div class="list-AV">
        <div class="liste">
            <div class="list-title">
                <h1>A la recherche d'assistants virtuels? </h1>
            </div> 
            <div class="list-list">
                <div class="AV" v-for="item in ListAV" :key="item.id">
                        <p>{{item.title}}</p>
                        <p>{{ item.desc }}</p>
                </div>
            </div> 
        </div>
            
    </div>
</template>
<script>
    import table from "../assets/table"
    export default{
        name:'ListVue',
        data(){
            return{
                ListAV : table
            }
        },
        methods:{
            async login(){

            }
        },
        mounted(){
            
        }
    }
</script>
<style>
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

    .list-AV .liste .list-title {

    }

    .list-AV .liste .list-list {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        grid-column-gap: 30px;
        -moz-column-gap: 30px;
        column-gap: 30px;
        grid-row-gap: 15px;
        row-gap: 15px;
        }

    .list-AV .liste .list-list .AV {
        width: 238px;
        height: 138px;
        background: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 8px;
        padding: 20px;
        font-size: 23px;
        font-weight: 500;
        cursor: pointer;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }

    .list-AV .liste .list-list .AV:hover {
        box-shadow: none;
        background: rgba(255, 255, 255, 0.815);
    }
</style>