<template>
    
    <HeaderVue/>
    <div class="list-AV2">
        <div class="liste2">
            <div class="list-title">
                <h1>Creation de services</h1>
            </div>
            <form>
                <div class="list-title1">
                    <h2>Titre de service</h2>
                    <input class="input" type="text" id="Titre" placeholder="Titre..." required>
                </div> 
                <div class="list-title1">
                    <h2>Cathégorie du services</h2>
                    <input class="input" type="text" id="Cathégorie" placeholder="Cathégorie..." required>
                </div> 
                <div class="list-title1">
                    <h2>Prix</h2>
                    <input class="input" type="text" id="Prix" placeholder="Prix..." required>
                </div>
                <div class="list-title1">
                    <h2>Description </h2>
                    <textarea class="input"  id="Description" placeholder="Description..." required></textarea>
                </div>
                <div class="list-title1">
                    <h2>Delai</h2>
                    <input class="input" type="text" id="Delai" placeholder="Delai..." required>
                </div>
                <div class="list-title1">
                    <h2>Consigne de réalisation</h2>
                    <textarea class="textarea"  id="Consigne" rows="8" placeholder="Consigne de réalisation..." required></textarea>
                </div>
                <div class="list-title1">
                    <h2>Galerie</h2>
                    <div class="box_image">
                        <div class="imagePreviewWrapper" :style="{ 'background-image' : `url(${ previewImage})` }" @click="selectImage"></div>
                        <input ref="fileInput" type="file" @input="pickfile">
                    </div>
                </div> 
                <button class="button" type="submit">Publication</button>
            </form>
        </div>
            
    </div>
</template>
<script>

    import HeaderVue from '../components/HeaderVue.vue'
    import services from "../assets/services"
    export default{
        name:'ListVue',
        data(){
            return{
                ListAV : services,
                previewImage :null
            }
        },
        methods:{
            Cliker(){
            
            this.$router.push({name:'ServicesAv'});
            
        },
            async login(){

            },
            selectImage () {
            this.$refs.fileInput.click()
        },
            pickfile () {
             let input = this.$refs.fileInput
             let file = input.files
             if (file && file[0]) {
                let reader = new FileReader
                reader.onload = e => {
                    this.previewImage = e.target.result
                }
                reader.readAsDataURL (file[0])
                this.$emit('input', file[0])
             } 
        }
        },
        mounted(){
            
        },
        components:{
            HeaderVue,
        }
    }
</script>
<style>
.list-AV2 {
    display: flex;
    justify-content: center;
    align-items: center;
}
.list-AV2 .liste2 {
    
        justify-content: center;
        align-items: center;
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
form {
    width:90% ;
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