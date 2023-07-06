<template>
    <HeaderVue/>
    <div class="client-profile">
        <div class="component-1">
            <nav>
                <button v-on:click="toggleModale">Commande</button>
                <button v-on:click="this.$router.push({name:'ChatPage'})">Message</button>
            </nav>   
        </div>
        <div class = "component-2">
            <div class ="Block">
                <h2>Historique de commande</h2>
                <Historique :data="historique"/>
            </div>
            <div class="Block">
                <h2>Validation Paiement</h2>
                <!-- <table class="historique-liste">
                    <tr>
                        <th>Date</th>
                        <th>idCommande</th>
                        <th>motif</th>
                        <th>Action</th>
                    </tr>
                    <tr v-for="item in payer" :key="item.idcommande">
                        <td>{{ item.dateCreation }}</td>
                        <td>{{item.idcommande}}</td>
                        <td>{{ item.motif }}</td>
                        <td><button>Valider</button></td>
                    </tr>
                </table> -->
                <Historique :data="payer" valide="yes"/>
                </div>
            </div>
            <div class="component-2">
                <div>
                    <h2>Temoignage</h2>
                </div>
            </div>
        </div>
        <CommandeModale 
        v-bind:revele="revele" 
        v-bind:toggleModale="toggleModale"/>
        
</template>

<script>
    import HeaderVue from '../components/HeaderVue.vue'
    import Historique from '../components/Historique.vue'
    import CommandeModale from '../components/CommandeModale.vue'
    import axios from 'axios'

    import vendeur from '../assets/vendeur'
    export default {
        name :'VendeurPage',
        data() {
            return {
                vendeur : vendeur,
                payer : [],
                revele : false,
                historique : [],
                
            }
        },
        methods:{
            async getValidCommandeClient(id){
                let result = await axios.get("http://localhost:3000/commande/validClient/"+id);
                // console.log(result.data);
                this.payer = result.data;
            },
            toggleModale: function(){
                this.revele = !this.revele
            },
            async getCommandeClient(id){
                let result = await axios.get("http://localhost:3000/commande/commandeClient/"+id);
                // console.log(result.data);
                this.historique = result.data;
            },
        },
        components:{
            HeaderVue,
            Historique,
            CommandeModale
        },
        async created(){
            let users = localStorage.getItem('user-info');
            this.user = users;           
            this.userID = JSON.parse(users).data[0].iduser;
            this.getValidCommandeClient(this.userID);
            this.getCommandeClient(this.userID);
        },

    }
</script>

<style>
    .client-profile{
        width: 80%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: #ffffffc4;
        min-height: 100vh;
        align-self: center;
        padding: 0.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 10px;
    }

    .component-1 nav button {
        background: #ac1282;
        color: #fff;
        border: none;
        padding: 10px 25px;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 20px;
    }
    .component-1 nav button:hover {
        opacity: 0.8;
    }
    .component-2 {
       
        border-radius: 10px;
        width: 100%;
        background: #ffffffc4;
        display: flex;
        gap: 3px;
        
        justify-content: space-around;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        align-content: flex-end;
    }
    .Block{
        
        padding-bottom: 10px;
        display: flex;
        flex-direction: column;
    }
    .col-div-6{
        width: 100%;
        float: left;
    }
    .box-6{
        background-color: #ac1282;
        max-height: 550px;
        overflow-y: auto;
    }
    .content-box {
         padding: 20px;
         align-content: flex-end;
    }
    /* responsiveness */

    @media (min-width: 868px) {
        .component-1 {
            max-width: 1200px;
            margin: 0 auto;
            width: 90%;
            justify-content: space-between;
            display: block;
            grid-template-columns: 1fr 2fr;
            gap: 50px;
        }
    }
    @media (min-width: 1017px) {
        .component-1 nav {
            flex-direction: row;
        }

        .component-1 nav button {
            margin-top: 0;
        }
    }
        
</style>