<template>
    <HeaderVue/>
    <div class="client-profile">
        <div class="component-1">
            <nav>
                <button>Commande</button>
                <button>Message</button>
            </nav>   
        </div>
        <div class = "component-2">
            <div class ="Block">
                <h2>Historique</h2>
                    <div class="col-div-6">
                        <div class="box-6">
                            <div class="content-box">
                                <table>
                                    <tr>
                                        <th>Date</th>
                                        <th>Id Service</th>
                                        <th>Service</th>
                                    </tr>
                                    <tr v-for="item in donnee" :key="item.id" >
                                        <td>{{ item.company }}</td>
                                        <td>{{ item.contact }}</td>
                                    </tr>
                                </table>

                            </div>
                        </div>
                    </div>
            </div>
            <div class="Block">
                <h2>Validation Paiement</h2>
                
                    <div class="col-div-6">
                        <div class="box-6">
                            <div class="content-box">
                                <table>
                                    <tr>
                                        <th>Date</th>
                                        <th>Id Service</th>
                                        <th>Service</th>
                                        <th>Action</th>
                                    </tr>
                                    <tr v-for="item in donnee" :key="item.id" >
                                        <td>{{ item.company }}</td>
                                        <td>{{ item.contact }}</td>
                                        <td>{{ item.country }}</td>
                                    </tr>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="component-2">
                <div>
                    <h2>Temoignage</h2>
                </div>
            </div>
        </div>
        
        
</template>

<script>
    import HeaderVue from '../components/HeaderVue.vue'

    import vendeur from '../assets/vendeur'
    export default {
        name :'VendeurPage',
        data() {
            return {
                vendeur : vendeur
            }
        },
        methods:{

        },
        components:{
            HeaderVue
        }
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