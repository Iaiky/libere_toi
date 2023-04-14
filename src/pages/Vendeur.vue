<template>
    <HeaderVue/>
    <div class="vendeur-profile">
        <div class="header-wrapper">
            <header></header>
            <div class="cols-container">
                <div class="left-col">
                    <div class="img-container">
                        <div v-on:click="toggleModale1" class="list-serv" >
                            <img src="../assets/Z.jpg" alt="">
                        </div>
                        <span></span>
                    </div>
                    <h2>{{ vendeur.nom }}</h2>
                    <p>{{ vendeur.profession }}</p>
                    <p>{{ vendeur.email }}</p>

                    <ul class="about">
                        <li v-for="item in vendeur.service" :key="item.ids"><span>{{ item.nombre }}</span>{{ item.noms }}</li>
                    </ul>

                    <div class="content">
                        <p>{{ vendeur.description }}</p>

                        <ul>
                            <li><i class="fab fa-twitter"></i></li>
                            <li><i class="fab fa-pinterest"></i></li>
                            <li><i class="fab fa-facebook"></i></li>
                            <li><i class="fab fa-dribble"></i></li>
                        </ul>
                    </div>
                </div>
                <div class="right-col">
                    <nav>
                        <ul>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">historique</a></li>
                           
                        </ul>
                        <button v-on:click="Message">Message</button>
                    </nav>

                    <div class="photos">
                        <div v-on:click="toggleModale" class="list-serv" v-for="item in vendeur.service" :key="item.ids">
                            <p>{{ item.desc }}</p>
                            
                            <img :src="require(`../assets/${item.src}`)" alt="" class="card-img1">
                            <p>{{ item.noms }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <modale v-bind:revele="revele" v-bind:toggleModale="toggleModale" v-bind:revele1="revele1" v-bind:toggleModale1="toggleModale1" ></modale>
    </div>
</template>

<script>
    import HeaderVue from '../components/HeaderVue.vue'

    import vendeur from '../assets/vendeur'
    import ModalTest from './ModalTest'
    import PdP from './PdP'
    export default {
        name :'VendeurPage',
        data() {
            return {
                vendeur : vendeur,
                revele : false,
                revele1 : false
            }
        },
        methods:{
            Message(){
            
            this.$router.push({name:'ChatPage'});
            
        },
        toggleModale: function(){
            this.revele = !this.revele
        },
        toggleModale1: function(){
            this.revele1 = !this.revele1
        },
        },
        components:{
            HeaderVue,
            'modale': ModalTest, 
             
        }
    }
</script>

<style>
    .vendeur-profile{
        width: 80%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: #ffffffc4;
        min-height: 100vh;
        align-self: center;
        padding: 0.5rem;
        border-radius: 10px;
        gap: 3px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }

    .vendeur-profile ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
    }

    .vendeur-profile a {
        text-decoration: none;
    }

    .header-wrapper header {
        width: 100%;
        background: url(../assets/G.jpg) no-repeat 50% 20% / cover;
        min-height: calc(100px + 15vw);
        border-radius: 10px;
    }

    .header-wrapper .cols-container .left-col {
        padding: 25px 20px;
        text-align: center;
        max-width: 350px;
        position: relative;
        margin: 0 auto;
    }

    .header-wrapper .cols-container .left-col .img-container {
        position: absolute;
        top: -50px;
        left: 50%;
        transform: translateX(-50%);
    }

    .header-wrapper .cols-container .left-col .img-container img {
        width: 120px;
        height: 120px;
        object-fit: cover;
        border-radius: 50%;
        display: block;
        box-shadow: 1px 3px 12px rgba(0, 0, 0, 0.18);
    }

    /* .header-wrapper .cols-container .left-col .img-container span {
        position: absolute;
        background: #2afa6a;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        bottom: 3px;
        right: 11px;
        border: 2px solid #fff;
    } */

    .header-wrapper .cols-container .left-col h2 {
        margin-top: 60px;
        font-weight: 600;
        font-size: 22px;
        margin-bottom: 5px;
    }

    .header-wrapper .cols-container .left-col p {
        font-size: 0.9rem;
        color: #818181;
        margin: 0;
    }

    .header-wrapper .cols-container .left-col .about {
        justify-content: space-between;
        position: relative;
        margin: 35px 0;
    }

    .header-wrapper .cols-container .left-col .about li {
        display: flex;
        flex-direction: column;
        color: #818181;
        font-size: 0.9rem;
    }

    .header-wrapper .cols-container .left-col .about li span {
        color: #1d1d1d;
        font-weight: 600;
    }

    .header-wrapper .cols-container .left-col .about::after {
        position: absolute;
        content: "";
        bottom: -16px;
        display: block;
        background: #ccc;
        height: 1px;
        width: 100%;
    }

    .header-wrapper .cols-container .content p {
        font-size: 1rem;
        color-scheme: #1d1d1d;
        line-height: 1.8em;
    }

    .header-wrapper .cols-container .content ul {
        gap: 30px;
        justify-content: center;
        align-items: center;
        margin-top: 25px
    }

    .header-wrapper .cols-container .content ul li {
        font-size: 1.3rem;
    }

    .header-wrapper .cols-container .right-col nav {
        display: flex;
        align-items: center;
        padding: 30px 0;
        justify-content: space-between;
        flex-direction: column;
    }

    .header-wrapper .cols-container .right-col nav ul {
        display: flex;
        gap: 20px;
        flex-direction: column;
    }

    .header-wrapper .cols-container .right-col nav ul a {
        text-transform: uppercase;
        color: #818181;
    }

    .header-wrapper .cols-container .right-col nav button {
        background: #ac1282;
        color: #fff;
        border: none;
        padding: 10px 25px;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 20px;
    }

    .header-wrapper .cols-container .right-col nav ul li:nth-child(1) a {
        color: #1d1d1d;
        font-weight: 600;
    }

    .header-wrapper .cols-container .right-col nav button:hover {
        opacity: 0.8;
    }

    .header-wrapper .cols-container .right-col .photos {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
        gap: 20px;
    }

    .header-wrapper .cols-container .right-col .photos .list-serv {
        max-width: 100%;
        display: block;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
        background-color: #ccc;
    }

    /* responsiveness */

    @media (min-width: 868px) {
        .header-wrapper .cols-container {
            max-width: 1200px;
            margin: 0 auto;
            width: 90%;
            justify-content: space-between;
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 50px;
        }

        .header-wrapper .cols-container .left-col {
            padding: 25px 0;
        }

        .header-wrapper .cols-container .right-col nav ul {
            flex-direction: row;
            gap: 30px;
        }

        .header-wrapper .cols-container .right-col .photos {
            height: 365px;
            overflow: auto;
            padding: 0 0 30px;
        }
    }

    @media (min-width: 1017px) {
        .header-wrapper .cols-container .left-col {
            margin: 0;
            margin-right: auto;
        }

        .header-wrapper .cols-container .right-col nav {
            flex-direction: row;
        }

        .header-wrapper .cols-container .right-col nav button {
            margin-top: 0;
        }
    }
        
</style>