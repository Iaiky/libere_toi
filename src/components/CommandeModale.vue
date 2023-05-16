<template>
    <div class="modale" v-if="revele">
        <div class="overlay" v-on:click="toggleModale"></div>
        <div class="modal">  
            <h2>Fiche de commande</h2>
            <button class="exit" v-on:click="toggleModale">&times;</button>
            <form>
                <div class="field">
                    <label>Description :</label><br/>
                    <input type="text" v-model="description" required/>
                </div>
                <div class="field">
                    <label>Service:</label>
                    <v-select :options="service" :reduce="(list) => list.idservice" v-model="idservice" label="titre" @update:modelValue="getVendeur(idservice)"></v-select>
                </div>
                <div class="field">
                    <label>Vendeur :</label><br/>
                    <p>{{ vendeur.nom }}</p>
                </div>
                <button class="ok" v-on:click="commander">Commander</button>
            </form>
        </div>
        
    </div>
    
    
  </template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
    service:[],
    idservice:'',
    vendeur:'',
    client:'',
    description:'',

    }
  },
  props:{
    revele:{type : String, required : true},
    toggleModale:{type : String, required : true},

  },
  components:{
    vSelect: window["vue-select"]
  },
  methods:{
    async getCategorie(){
                let result = await axios.get('http://localhost:3000/service/listeNom');
                this.service = result.data.data;
            },
    async getVendeur(id) {
        if (id === '') {
            this.vendeur='';
        }else{
            let result = await axios.get('http://localhost:3000/service/vendeurNom/'+id);
            // console.warn(result.data.data[0]);
            this.vendeur = result.data.data[0];
        }
    },
    async commander() {
        try{
                        var qs = require('qs');
                        let commande = await axios.post("http://localhost:3000/commande/",
                        qs.stringify({
                            description:this.description,
                            client:this.client,
                            idvendeur:this.vendeur.idvendeur,
                            idservice:this.idservice
                            
                        })
                    );
                    console.warn(commande);
                    if(commande.status==200){
                        this.$router.push({name:'ProfilClient'})
                    }
                    }catch (err){
                    this.messge = "Something went wrong";
                    this.error = true;                }
    },

  },
  created(){
    let users = localStorage.getItem('user-info');
    this.user = users;           
    this.client = JSON.parse(users).data[0].iduser;
  },
  mounted(){
            this.getCategorie();
        }    

}
</script>



<style scoped>

.modal {
    background: #f1f1f1;
    color: #333;
    position: fixed;
    z-index: 999;
    top: 10%;
    left: 50%;
    width: 500px;
    min-height: 500px;
    padding: 20px;
    margin-left: -250px;
    margin-bottom: -325px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    transition: 0.2s;
}
.overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

.ok {
    position: absolute;
    bottom: 15px;
    right: 15px;
    cursor: pointer;
}
.modal .exit {
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: transparent;
    border: 0;
    font-size: 30px;
    cursor: pointer;
    border-radius: 40%;
}

.modal button:hover{
    opacity: 0.7;
    background-color: lightgrey;
    transition: 0.1s;

}
.modal h1 {
    align-self: center;
}



</style>