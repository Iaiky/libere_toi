<template>
    <div class="col-div-3">
        <div class="box">
            <p>{{ total }}<br/><span>{{ titre }}</span></p>
            <i :class="iconText"></i>
        </div>
    </div>
</template>

<script>

    export default {
        name:'notificationVue',
        props: {
            titre:{
                type : String,
                required: true,
                default : "Titre Notif"
            },
            total:{
                type : Number,
                required: true,
                default : 0
            },
            icon:{
                type : String,
                required: true,
                default : "fas fa-exclamation"
            },
        },
        computed:{
            iconText() { return this.icon + " box-icon"}
        }
    }

</script>