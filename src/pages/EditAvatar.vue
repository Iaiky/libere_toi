<template>
    <form id="profil-form" @submit.prevent="submit">
        <avatar-input v-model="form.avatar" :default-src="require(`../assets/image/no_image.png`)"></avatar-input>
        
    </form>
</template>  

<script>
import AvatarInput from './AvatarInput.vue'
export default {
    data (){
        return {
            form : {
                avatar : null
            }
        } 
    },
    
    methods: {
        submit() {
            console.log('submitting' , this.form)
        },
        
    }, 
    components : {
        AvatarInput
    }

}
</script>
<style>

</style>
