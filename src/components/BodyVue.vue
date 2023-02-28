<template>
    
    <div class="cont">
        <img :src="logoIcon" class="body" />

    </div>
</template>
<script>
import body from '../assets/body.png';
export default {
data(){
    return{
        logoIcon: body
    }
}
}
</script>
<style>

.cont{
height: 500px;
}
.body{
position: absolute;
width: 100%;
height:80%;
}
.Témoingnages h3 {
text-align: center;
align-items: center;
}
</style>