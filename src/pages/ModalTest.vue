<template>
    <div class="body" v-if="revele" v-on:click="toggleModale" >
        <div class="modal_content">
            <div class="modal_header">
                <h1 class="modal_title">
                    ModalTest
                </h1>
                <button class="modal_close" v-on:click="toggleModale">x</button>
            </div>
            <div class="modal_body">
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Pariatur fuga impedit, voluptatibus laboriosam mollitia dicta non consectetur 
                    illum asperiores! Enim blanditiis quod laboriosam quo fugit,
                    fuga ad tempora maxime neque!
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : "ModalTest",
    props : ['revele', 'toggleModale']
    
};
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.body{
    text-align: center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    /* niova**/
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:rgba(0,0,0,0.5) ;
}
.modal_content{
    min-width: 370px;
    width: 600px;
    background: #fff;
    
    margin: auto;
}
.modal_header{
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    border-bottom: 1px solid #eee;
}
.modal_title {
    font-weight: normal;
    font-size: 25px;
}
.modal_close {
    padding: 5px;
    cursor: pointer;
    font-size: 25px;
}
.modal_body{
    padding: 10px;
    text-align: justify;
}
</style>