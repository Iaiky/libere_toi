<template>
    <HeaderVue/>
    <BodyVue/>
    <ListVue />
    <TemoingnageVue />
    <FooterVue/>
</template>

<script>
import HeaderVue from './HeaderVue.vue'
import BodyVue from './BodyVue.vue'
import ListVue from "./ListVue.vue"
import TemoingnageVue from "./TemoingnageVue.vue"

import FooterVue from "./FooterVue.vue"
export default {
    name : 'HomeVue',
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
    components :{
        HeaderVue,
        BodyVue,
        ListVue,
        TemoingnageVue,
        FooterVue

    }

}
</script>