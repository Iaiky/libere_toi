<template>
    <div class="historique">
        <table class="historique-liste">
            <tr>
                <th>Date</th>
                <th>idCommande</th>
                <th>motif</th>
                <th>Action</th>
            </tr>
            <tr v-for="item in data" :key="item.idcommande">
                <td>{{ item.dateCreation }}</td>
                <td>{{item.idcommande}}</td>
                <td>{{ item.motif }}</td>
                <td><button>Valider</button></td>
            </tr>
        </table>
    </div>
</template>

<script>

    export default {
        name: 'HistoriqueVue',
        data() {
            return {
            }
        },
        props:{
            data:{type : Array, required : true},
        },
        methods:{


            // async getValidCommandeClient(id){
            //     let result = await axios.get("http://localhost:3000/commande/validClient/"+id);
            //     // console.log(result.data);
            //     this.historique = result.data;
            // },
            // async getCommande(){
            //     let result = await axios.get("http://localhost:3000/commande/validation");
            //     console.log(result.data);
            //     this.historique = result.data;
            // },
            // historiqueListe(type, liste){
            //     console.log(type);
            //     if (type == 3) {
            //         this.getCommandeVendeur(liste);
            //     }else if (type === 2){
            //         this.getCommandeClient(liste);
            //     }
            //     else if (type === 1){
            //     this.getCommande();}
                
            //     console.log(liste);
            // }
        },
        // async created(){
        //     let users = localStorage.getItem('user-info');
        //     this.user = users;          
        //     this.username = JSON.parse(users).data[0].prenom;
        //     this.usertype= JSON.parse(users).data[0].type;
        //     this.userID = JSON.parse(users).data[0].iduser;
        //     this.historiqueListe(this.usertype, this.userID);
            
        // },
    }
</script>

<style>

</style>