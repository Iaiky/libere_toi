<template>
    <div>
        <input type="file" accept="image/*" class="miafina" ref="file" @change="change">
        <div class="sary">
            <img :src="src" alt="Avatar" class ="modif">
            <div class="sary2">
                <button @click="ouvrir()" class="buttons"><i class="fab fa-camera"></i></button>
            </div>
        </div>
    </div>
</template>  

<script>
export default {
    props: {
        value: File,
        defaultSrc: String
    },
    data() {
        return {
            src : this.defaultSrc,
            file : null
        }
    },
    methods: {
        ouvrir() {
            this.$refs.file.click();
        },
        change(e) {
            this.file = e.target.files[0];
            this.$emit('input', this.file);
            let reader = new FileReader();
            reader.readAsDataURL(this.file);
            reader.onload = (e) => {
                this.src = e.target.result;
            }
        }
    }

}
</script>
<style>
.miafina {
   display: none;
  /* visibility: hidden; */
}
.modif {
    width: 120px;
    height: 120px;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 9999px;
    display: block;
    box-shadow: 1px 3px 12px rgba(0, 0, 0, 0.18);
}
.sary{
    position: relative;
    display: inline-block;
    border-radius: 9999px;
    font-size: small;
}
.sary2 {
    position: absolute;
    top: 0;
    height : 100%;
    width : 100% ;
    --bg-opacity: 1;
    background-color: #000000;
    /*background-color: rgba(0, 0, 0, var(--bg-opacity));*/
    opacity: 25;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    
    border-radius: 9999px;

}
.buttons {
   /* border-radius: 9999px;*/
    opacity: 0;
   /* background-color: rgba(1,var(--bg-opacity)) ;*/
    color: #fff;
   /* outline: none;
    
    border: 1px solid #ac1282;*/
    background: #ac1282;
    cursor: pointer;
}
</style>
