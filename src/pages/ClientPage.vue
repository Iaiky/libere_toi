<template>
    <HeaderVue/>
    <BodyVue/>
    <ListVue />
    <ListeService />
    <TemoingnageVue />
    <FooterVue/>
    <div class="client">
    
    </div>
</template>

<script>
import HeaderVue from '../components/HeaderVue.vue'
import BodyVue from '../components/BodyVue.vue'
import ListVue from "../components/ListVue.vue"
import ListeService from "../components/ListeService.vue"
import TemoingnageVue from "../components/TemoingnageVue.vue"
import FooterVue from "../components/FooterVue.vue"
    export default {
        name:'ClientPage',
        methods:{
            Cliker(){          
                this.$router.push({name:'RegisterUp'});          
            },
            Clicker(){
                this.$router.push({name:'LoginUp'});
            },
            Touch(){
                this.$router.push({name:'AboutUs'});
            },
            Touch1(){
                this.$router.push({name:'ServicesVue'});
            },
            Touch2(){
                this.$router.push({name:'PrivacyPolicy'});
            },
            Touch3(){
                this.$router.push({name:'AffiliateProgram'});
            },
            Pointer(){
                this.$router.push({name:'FaQ'});
            },
            Pointer1(){
                this.$router.push({name:'ShippingVue'});
            },
            Pointer2(){
                this.$router.push({name:'OrderStatus'});
            },
            Pointer3(){
                this.$router.push({name:'PayementOptions'});
            },
        },
        components : {
            HeaderVue,
            BodyVue,
            ListVue,
            ListeService,
            TemoingnageVue,
            FooterVue
        },
        data() {
            return {

            }
        }
    }

</script>

<style>

</style>