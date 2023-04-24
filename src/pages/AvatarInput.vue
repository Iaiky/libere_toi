<template>
    <div>
        <input type="file" accept="image/*" class="miafina" ref="file" @change="change">
        <div class="sary">
            <img :src="src" alt="Avatar" class ="modif">
            <div class="sary2">
                <button @click="ouvrir()">Avatar</button>
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
    border-radius: 50%;
    display: block;
    box-shadow: 1px 3px 12px rgba(0, 0, 0, 0.18);
}
.sary{
    position: relative;
    display: inline-block;
    border-radius: 15px 50px 30px 5px;
    font-size: small;
}
.sary2 {
    position: absolute;
    top: 0;
    --bg-opacity: 1;
    background-color: #000000;
    background-color: rgba(0, 0, 0, var(--bg-opacity));
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    border-radius: 15px 50px 30px 5px;

}
</style>
