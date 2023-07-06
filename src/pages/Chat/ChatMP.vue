<template>
    <div class="block active" v-if="active===true" >
        <div class="imgbox">
            <img :src="require(`../../assets/image/${image}`)" alt="" class="cover">
        </div>
        <div class="details">
            <div class="listHead">
                <h4>{{ name }}</h4>
                <p class="time">{{ lastMessage.time }}</p>
            </div>
            <div class="message_p">
                <p>{{ lastMessage.msg }}</p>
            </div>
        </div>
    </div>
    <div v-if="active===false">
        <div class="block" :class="{unread:status}"  v-on:click="redirectMP(receveur, lastMessage.idmessage)">
            <div class="imgbox">
                <img :src="require(`../../assets/image/${image}`)" alt="" class="cover">
            </div>
            <div class="details">
                <div class="listHead">
                    <h4>{{ name }}</h4>
                    <p class="time">{{ lastMessage.time }}</p>
                </div>
                <div class="message_p">
                    <p>{{ lastMessage.msg }}</p>
                    <b v-if="lastMessage.status === 0">!</b>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import axios from 'axios';

    export default {
        name:'MPListe',
        props: {
            // to: { type: String, required: true },
            name: { type: String, required: true },
            // time: { type: String, required: true },
            // status: { type: Boolean, required: false },
            image: { type: String, required: true },
            receveur: { type: Number, required: true },
            iduser: { type: Number, required: true },
        },
        data(){
            return{
                lastMessage : '',
                active:false,
                status:'',
            }
        },
        methods:{
            async getLastMessage(ide, idr){
                let result = await axios.get("http://localhost:3000/message/LastMP/"+ide+"/"+idr);
                console.log(result.data[0]);
                this.lastMessage = result.data[0];
                this.status = !this.lastMessage.status;
            },
            chackStatus(x,y){
                let x1 = x;
                if(x1==y){
                    this.active=true;
                }
            },
            async redirectMP(id,idm){               
                let result = await axios.put("http://localhost:3000/message/"+idm);
                console.warn(result);
                if(result.status==200){
                    this.$router.push({path:`/chat/${id}`});
                }
            }

        },
        created(){
            this.getLastMessage(this.iduser,this.receveur);
            // this.$route.params.idCategorie
            this.chackStatus(this.receveur,this.$route.params.idreceveur);
        }
    }
</script>

<style>

</style>