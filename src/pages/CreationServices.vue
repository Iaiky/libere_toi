<template>
    
    <HeaderVue/>
    <div class="list-AV2">
        <div class="liste2">
            <div class="list-title">
                <h1>Creation de services</h1>
            </div>
            <form enctype="multipart/form-data">
                
                <div class="list-title1">
                    <h2>Titre de service</h2>
                    <input class="input" type="text" v-model="titre" id="Titre" placeholder="Titre..." required>
                </div> 
                <div class="list-title1">
                    <h2>Cathégorie du services</h2>
                    <v-select :options="listCategorie" :reduce="(list) => list.categorie" v-model="categorie" label="titre"></v-select>
                </div> 
                <div class="list-title1">
                    <h2>Prix</h2>
                    <input class="input" type="number" v-model="prix" id="Prix" placeholder="Prix..." required>
                </div>
                <div class="list-title1">
                    <h2>Description </h2>
                    <textarea class="input" v-model="description"  id="Description" placeholder="Description..." required></textarea>
                </div>
                <div class="list-title1">
                    <h2>Delai</h2>
                    <input class="input" type="text" v-model="delai" id="Delai" placeholder="Delai..." >
                </div>
                <div class="list-title1">
                    <h2>Galerie</h2>
                    <div class="box_image">
                    <avatar-input @fileImage="imageFile" v-model="image" :default-src="require(`../assets/image/no_image.png`)"></avatar-input>
                    </div>
                </div>
                <div class="list-title1">
                    <h2>Consigne de réalisation</h2>
                    <textarea class="textarea"  id="Consigne" v-model="consigne" rows="8" placeholder="Consigne de réalisation..." required></textarea>
                </div>
                <button class="button" v-on:click="creeService">Publication</button>
            </form>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'

    import HeaderVue from '../components/HeaderVue.vue'
    import services from "../assets/services"
    import AvatarInput from '@/components/AvatarInput.vue'

    export default{
        name:'ListVue',
        data(){
            return{
                ListAV : services,
                previewImage :null,
                listCategorie:[],
                titre:'',
                categorie:'',
                prix:'',
                description:'',
                delai:'',
                consigne:'',
                image_source: '',
                message : '',
                error : false,
                idvendeur:null,
                user:'',
                image:''

            }
        },
        methods:{
            Cliker(){
            
            this.$router.push({name:'ServicesAv'});
            
            },
            async creeService(){
                const formData = new FormData();
                formData.append('file', this.image);

                try{
                    let result = await axios.post('http://localhost:3000/upload/single', formData); 
                    console.warn(result.data.file.filename);
                    this.image_source = result.data.file.filename;
                    this.message = "File has been uploaded";
                    this.image = "";
                    this.error = false;

                    try{
                        var qs = require('qs');
                        let service = await axios.post("http://localhost:3000/service/",
                        qs.stringify({
                            description:this.description,
                            idcategorie:this.categorie,
                            titre:this.titre,
                            prix:this.prix,
                            delai:this.delai,
                            consigne:this.consigne,
                            idvendeur:this.idvendeur,
                            image_source:this.image_source,
                        })
                    );
                    console.warn(service);
                    if(service.status==200){
                        this.$router.push({name:'VendeurPage'})
                    }
                    }catch (err){
                    this.messge = "Something went wrong";
                    this.error = true;                }
                        
                    

                }catch (err){
                    this.messge = "Something went wrong";
                    this.error = true;                }
                
            },
            imageFile(value){
                console.log(value)
                this.image = value;
            },
            // async showImg(){
            //     let result = await axios.get('http://localhost:3000/vendeur/img');
            //     this.src = result.data[0].source;
            // }
            async getCategorie(){
                let result = await axios.get('http://localhost:3000/categorie/listeNomCategorie');
                this.listCategorie = result.data.data;
            }
        },
        async created(){
            let users = localStorage.getItem('user-info');
            this.user = users;           
            this.idvendeur = JSON.parse(users).data[0].iduser;
        },
        mounted(){
            this.getCategorie();
        },
        components:{
            HeaderVue,
            AvatarInput,
            vSelect: window["vue-select"]
        }
    }
</script>
<style scoped>
@import "vue-select/dist/vue-select.css";

.list-AV2 {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
}
.list-AV2 .liste2 {
    
        justify-content: center;
        align-items: center;
        padding: 2rem;
        border-radius: 10px;
        width: 1170px;
        background: #ffffffc4;
        /* background-image: url("../assets/body.png"); */
        display: flex;
        flex-direction: column;
        gap: 3px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }
form {
    width:100% ;
    max-width: 600px;
    justify-content: center;
    align-items: center;
}
.list-title1{
    margin-bottom: 30px;
    
   
    justify-content: center;
    align-items: center;
}
.input, .textarea {
    justify-content: center;
    align-items: center;
    width: 100%;
    padding:10px;
    outline: 0;
    color: #ac1282;
    background: #fff;
    font-size: 15px;
    font-weight: 500;
    transition: 0.8s;
    border: none;
    border-radius: 30px;
}
.label {
    height: 100%;
    position: absolute;
    left: 0;
    top: auto;
    padding: 10px;
    color: #FFF;
    cursor: text;
}
.button {
    padding: 10px;
    color :#fff;
    outline: none;
    background: #ac1282;
    border: 1px solid #ac1282;
    width: 100%;
    cursor: pointer;

}
.imagePreviewWrapper{
    width: 250px;
    height: 250px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: cover;
    background-position: center center;
    background-image: 'url( ${previewImage} )';

}
.box_image{
    background: #fff;
    border-radius: 30px;
}
</style>