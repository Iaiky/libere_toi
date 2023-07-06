<template>
    <div class="leftSide">              
                <!-- header -->
                <div class="header">
                    <div class="userimg">
                        <img :src="require(`../../assets/image/${userPDP}`)" alt="" class="cover">
                    </div>
                    <p>{{ username }}</p>
                    <ul class="nav_icons">
                        <li><i class="material-icons">&#xe8c4;</i></li>
                        <li><i class="material-icons">&#xe0ca;</i></li>
                        <li><i style="font-size:24px" class="fa">&#xf142;</i></li>
                    </ul>
                </div>
                <!-- search -->
                <div class="search_chat">
                    <div>
                        <input type="text" placeholder="Recherche ..." id="">
                        <i class="material-icons">&#xe8b6;</i>
                    </div>
                </div>
                <!-- Chat list -->
                <div class="chatlist">
                    <!-- <div class="block active">
                        <div class="imgbox">
                            <img src="../../assets/Naej.png" alt="" class="cover">
                        </div>
                        <div class="details">
                            <div class="listHead">
                                <h4>Iaikitiana Naej</h4>
                                <p class="time">10:56</p>
                            </div>
                            <div class="message_p">
                                <p>Make whatsapp like app with html css</p>
                            </div>
                        </div>
                    </div>

                    <div v-for="item in chatList" :key="item.id">
                        <div  v-if="item.LastMessage.vue === true" class="block" v-on:click="item.LastMessage.vue === false" >
                            <div class="imgbox">
                                <img :src="require(`../../assets/${item.src}`)" alt="" class="cover">
                            </div>
                            <div class="details">
                                <div class="listHead">
                                    <h4>{{item.nom}}</h4>
                                    <p class="time">{{item.LastMessage.time}}</p>
                                </div>
                                <div class="message_p">
                                    <p>{{item.LastMessage.desc}}</p>
                                </div>
                            </div>
                        </div>
                        <div  v-if="item.LastMessage.vue === false" class="block unread">
                            <div class="imgbox">
                                <img :src="require(`../../assets/${item.src}`)" alt="" class="cover">
                            </div>
                            <div class="details">
                                <div class="listHead">
                                    <h4>{{item.nom}}</h4>
                                    <p class="time">{{item.LastMessage.time}}</p>
                                </div>
                                <div class="message_p">
                                    <p>{{item.LastMessage.desc}}</p>
                                    <b>!</b>
                                </div>
                            </div>
                        </div>
                    </div> -->
                    
                    <div v-for="item in ListeMP" :key="item.idmessage">
                        <ChatMP :name="item.nom" :image="item.photoProfil" :receveur="item.receveur" :iduser="iduser"/>
                    </div>
                    

                </div>
            </div>
</template>


<script>
    import ChatExample from '../../assets/chatExample'
    import ChatMP from './ChatMP.vue';
    import axios from 'axios'

    export default {
        name:'ChatList',
        components : {
            ChatMP
        },
        data() {
            return {
                chatList : ChatExample,
                layout : 'active',
                username :'',
                usertype :'',
                userPDP :'',
                ListeMP:'',
                iduser:''
            }
        },
        methods : {
            async getListeMP(id){
                let result = await axios.get("http://localhost:3000/message/ListeMP/"+id);
                // console.log(result.data);
                this.ListeMP = result.data;
            },
        },
        async created(){
            let users = localStorage.getItem('user-info');
            this.user = users;           
            let idv = JSON.parse(users).data[0].iduser;

            this.getListeMP(idv);

            this.username = JSON.parse(users).data[0].prenom;
            this.usertype= JSON.parse(users).data[0].type;
            this.userPDP= JSON.parse(users).data[0].photoProfil;
            this.iduser = JSON.parse(users).data[0].iduser;

            
        },
    }
</script>

<style>
    
</style>