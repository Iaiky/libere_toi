<template>
    
    
    <div class="list-AV2">
        <div class="liste2">
            <div class="list-title">
                <h1>Témoignages</h1>
            </div>
            <form ref="form" @submit.prevent="sendEmail">
                <label>Name</label>
                <input type="text" name="name" v-model="name">
                <label>Email</label>
                <input type="email" name="email" v-model="email">
                <label>Message</label>
                <textarea name="message" v-model="message"></textarea>
                <input type="submit" value="Send">
            </form>
        </div>
            
    </div>
</template>
<script >

    
    import emailjs from '@emailjs/browser';

export default {
    data (){
        return {
            name :'',
            email:'',
            message:''
        }
    },
  methods: {
    sendEmail() {
      emailjs.sendForm('service_libere', 'template_2oeuksu', this.$refs.form, 'qmgfDldg-8BgvQiZH')
        
        .then((result) => {
            console.log('SUCCESS!', result.text);
            alert('ManDEH LE IZY')
        }, (error) => {
            console.log('FAILED...', error.text);
        });
        this.name = '',
        this.email = '',
        this.message = ''
    }
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
.email, .message {
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
.name{
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