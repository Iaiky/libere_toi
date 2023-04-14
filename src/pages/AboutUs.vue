<template>
    <div class="body">
        <h1>
            About us
        </h1>
        <div class="imagePreviewWrapper" :style="{ 'background-image' : `url(${ previewImage})` }" @click="selectImage"></div>
        <input class=" center_text" ref="fileInput" type="file" @input="pickfile">
    </div>
</template>
<script>
export default {
    data(){
        return {
            previewImage :null
        };
    },
    methods :{
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
    }
}
</script>
<style scoped>

.logo{
    width: 100px;
}
.login input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;

}
.login button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: #ac1282;
    color: #fff;
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
.center_text{
    justify-content: center;
        align-items: center;
}
</style>