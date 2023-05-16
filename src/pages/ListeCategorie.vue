<template>
    
        <HeaderVue/>
        <ListeService/>
        <FooterVue/>
    
</template>

<script>
    import HeaderVue from '../components/HeaderVue.vue'
    import ListeService from '../components/ListeService.vue'
    import FooterVue from "../components/FooterVue.vue"

    export default {
        name:'ListeCategorie',
        data() {
            return {

            }
        },
        components:{
            HeaderVue,
            ListeService,
            FooterVue

        }
    }
</script>

<style>
</style>