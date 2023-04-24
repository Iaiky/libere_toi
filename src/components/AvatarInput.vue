<template>
    <div>
        <input type="file" accept="image/*" class="hidden" ref="file" v-on:change="change" >
        <img :src="src" alt="avatar" class="avatar" />
        <p>{{ nom }}</p>
        <button v-on:click="browse()">Browse</button>
    </div>
</template>

<script>
    export default {
        props: {
            value: File,
            defaultSrc : String
        },
        data(){
            return {
                src:this.defaultSrc,
                file:null,
                nom:null,
            }
        },
        methods : {
            browse() {
                this.$refs.file.click();
            },
            change(e) {
                this.file = e.target.files[0];
                this.$emit('input', this.file);
                let reader = new FileReader();
                reader.readAsDataURL(this.file);
                reader.onload = (e) => {
                    this.src = e.target.result;
                    this.nom = this.file.name;
                    this.$emit('fileImage', this.file);
                }
                
            }
        }
    }
</script>

<style scoped>
    .hidden {
        display: none;
    }

    .avatar {
        width: 120px;
        height: 120px;
        -o-object-fit: cover;
        object-fit: cover;
        display: block;
        box-shadow: 1px 3px 12px rgba(0, 0, 0, 0.18);
    }
</style>