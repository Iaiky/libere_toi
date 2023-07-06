<template>
    <div class="rightSide">
        <div class="header">
            <div class="imgText">
                <div class="userimg">
                    <!-- <img :src="require(`../../assets/image/${pdp}`)" alt="" class="cover"> -->
                    <!-- <img src="../../assets/image/no_image.png"  class="cover"/> -->
                </div>
                <h4>{{ nomreceveur }}<br>
                    <!-- <span>online</span> -->
                </h4>
            </div>
            <ul class="nav_icons">
                <li><i class="material-icons">&#xe8b6;</i></li>
                <li><i style="font-size:24px" class="fa">&#xf142;</i></li>
            </ul>
        </div>

                <!-- Chatbox -->
                <div class="chatBox">
                    <!-- <div class="messages my-message">
                        <p>hi<br><span>12:15</span></p>
                    </div>
                    <div class="messages frnd-message">
                        <p>Hello<br><span>12:15</span></p>
                    </div> -->
                    <div v-for="item in messages" :key="item.idmessage" >
                        <div v-if="item.envoyeur === usr" class="messages my-message">
                            <p>{{ item.msg }}<br><span>{{ item.time }}</span></p>
                        </div>
                        <div v-else class="messages frnd-message">
                            <p>{{ item.msg }}<br><span>{{ item.time }}</span></p>
                        </div>

                    </div>
                    
                </div>

                <!-- input chatbox -->
                    <div class="chatbox-input">
                        
                            <i style="font-size:24px" class="fa">&#xf118;</i>
                            <i class="material-icons">&#xe226;</i>
                            <input type="text" placeholder="Tapez votre message.." v-model="msg" required>
                            <!-- <i style="font-size:24px" class="fa" >&#xf1d8;</i> -->
                            <i class="material-icons" v-on:click="envoyerMessage" >&#xe163;</i>
                        
                    </div>
            </div>
</template>


<script>
    import axios from 'axios';

    export default {
        name:'ChatMessage',
        components : {
        },
        data() {
            return {
                messages : [],
                layout : 'active',
                pdp:'',
                usr:'',
                receveur:'',
                nomreceveur:'',
                msg:''
            }
        },
        methods : {
            async getMessage(ide, idr){
                let result = await axios.get("http://localhost:3000/message/"+ide+"/"+idr);
                console.log(result.data);
                this.messages = result.data;
                this.nomreceveur = result.data[0].nomreceveur;
                this.pdp = result.data[0].photoProfil;
            },

            async getreceveur(id) {
                let result = await axios.get("http://localhost:3000/clients/"+id);
                console.log(result.data[0]);
                this.receveur = result;
            },

            async envoyerMessage() {
                try{
                    var qs = require('qs');
                    let envoiemessage = await axios.post("http://localhost:3000/message/",
                    qs.stringify({
                        message:this.msg,
                        idenvoyeur:this.usr,
                        idreceveur:this.$route.params.idreceveur                
                    })
                );
                console.warn(envoiemessage);
                if(envoiemessage.status==200){
                    // this.$router.push({name:'ProfilClient'})
                    window.location.reload()
                }
                }catch (err){
                this.messge = "Something went wrong";
                this.error = true;                }
            },

        },
        created(){
            let users = localStorage.getItem('user-info');
            let idv = JSON.parse(users).data[0].iduser;        
            this.getMessage(idv,this.$route.params.idreceveur);
            this.getreceveur(this.$route.params.idreceveur);

            this.usr = idv;

        }
    }
</script>

<style >
</style>