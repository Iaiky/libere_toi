<template>
    <div>
        <input type="file" accept="image/*" class="hidden" ref="file" @change="change">
        <button @click="ouvrir()">Avatar</button>
    </div>
</template>  

<script>
export default {
    props: {
        value: File
    },
    methods: {
        ouvrir() {
            this.$refs.file.click();
        },
        change(e) {
            this.$emit('input', e.target.files[0]);
        }
    }

}
</script>
<style>

</style>
