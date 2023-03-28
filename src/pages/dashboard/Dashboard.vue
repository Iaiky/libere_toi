<template>
    <div class="dashboard">

        <div id="main" :style="{'margin-left' : sidebarWidth}" >
            <Sidebar />
            <div class="head">
                <div class="col-div-6">
                    <span style="font-size:30px;cursor:pointer; color: white;" class="nav" 
                    v-on:click="toggleSidebar" 
                    >
                        <span v-if="collapsed" ><i class="fas fa-angle-double-right" /></span> 
                        <span v-else ><i class="fas fa-angle-double-left" /></span>
                        Dashboard
                    </span>
                </div>
            
                <div class="col-div-6">
                    <div class="profile">

                        <p>Admin <span>ADMINISTRATEUR</span></p>
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>

            <div class="clearfix"></div>
            <br/>
            
            <div class="cont">
                <Notification titre="Clients" total="65" icon="fa fa-users" />
                <Notification titre="Commandes" total="23" icon="fa fa-list" />
                <Notification titre="Services" total="45" icon="fa fa-shopping-bag" />
                <Notification titre="Validations..." total="57" icon="fa fa-tasks" />
            </div>
            <div class="clearfix"></div>
            <br/><br/>

            <div class="cont">
                <TableListe :donnee="tableExample" />

                <div class="col-div-4">
                    <div class="box-4">
                    <div class="content-box">
                        <p>Total <span>voir</span></p>

                        <div class="circle-wrap">
                <div class="circle">
                <div class="mask full">
                    <div class="fill"></div>
                </div>
                <div class="mask half">
                    <div class="fill"></div>
                </div>
                <div class="inside-circle"> 70% </div>
                </div>
            </div>
                    </div>
                </div>
                </div>
            </div>    
            <div class="clearfix"></div>
        </div>
    </div>
</template>


<script>
    import Sidebar from './DashSidebar.vue'
    import Notification from './Notification.vue'
    import TableListe from './ListeVue.vue'

    import { collapsed, toggleSidebar,sidebarWidth } from './state'

    export default {
        name :'DashboardPage',
        data() {
            return {
                tableExample : [
                    {
                        id : "1",
                        company : "Centro comercial Moctezuma",
                        contact : "Francisco Chang",
                        country : "Mexico",
                    },
                    {
                        id : "2",
                        company : "Ernst Handel",
                        contact : "Roland Mendel",
                        country : "Austria",
                    },
                    {
                        id : "3",
                        company : "Island Trading",
                        contact : "Helen Bennett",
                        country : "UK",
                    },
                    {
                        id : "4",
                        company : "Ernst Handel",
                        contact : "Roland Mendel",
                        country : "Madagascar",
                    },
                ]
            }
        },
        methods:{

        },
        components:{
            Sidebar,
            Notification,
            TableListe
        },
        setup(){
            return { collapsed, toggleSidebar, sidebarWidth } 
        }
    }
</script>


<style>
    .dashboard{
        margin:0px;
        padding: 0px;
        height: 100vh;
        background-color:#1b203d;

    }
    .dashboard .clearfix{
        clear: both;
    }
    .dashboard .logo{
        margin: 0px;
        margin-left: 28px;
        font-weight: bold;
        color: white;
        margin-bottom: 30px;
    }
    .dashboard .logo span{
        color: #f7403b;
    }
    #main {
    transition: margin-left .5s;
    padding: 16px;
    margin-left: 250px;
    }
    .dashboard .head{
        padding:20px;
    }
.dashboard .col-div-6{
	width: 50%;
	float: left;
}
.dashboard .profile{
	display: inline-block;
	float: right;
	width: 160px;
}
.dashboard .pro-img{
	float: left;
	width: 40px;
	margin-top: 5px;
}
.dashboard .profile p{
	color: white;
	font-weight: 500;
	margin-left: 55px;
	margin-top: 10px;
	font-size: 13.5px;
}
.dashboard .profile p span{
	font-weight: 400;
    font-size: 12px;
    display: block;
    color: #8e8b8b;
}
.dashboard .col-div-3{
	width: 25%;
	float: left;
}
.dashboard .box{
	width: 85%;
	height: 100px;
	background-color: #272c4a;
	margin-left: 10px;
	padding:10px;
}
.dashboard .box p{
	font-size: 35px;
    color: white;
    font-weight: bold;
    line-height: 30px;
    padding-left: 10px;
    margin-top: 20px;
    display: inline-block;
}
.dashboard .box p span{
	font-size: 20px;
	font-weight: 400;
	color: #818181;
}
.dashboard .box-icon{
	font-size: 40px!important;
    float: right;
    margin-top: 35px!important;
    color: #818181;
    padding-right: 10px;
}
.dashboard .col-div-8{
	width: 70%;
	float: left;
}
.dashboard .col-div-4{
	width: 30%;
	float: left;
}
.dashboard .content-box{
	padding: 20px;
}
.dashboard .content-box p{
	margin: 0px;
    font-size: 20px;
    color: #f7403b;
}
.dashboard .content-box p span{
	float: right;
    background-color: #ddd;
    padding: 3px 10px;
    font-size: 15px;
}
.dashboard .box-8, .box-4{
	width: 90%;
	background-color: #272c4a;
	max-height: 450px;
    overflow-y: auto ;
	
}
.dashboard .nav2{
	display: none;
}

.dashboard .box-8{
	/* margin-left: 10px; */
}

.cont {
        display: flex;
        justify-content: space-evenly;
    }

.dashboard table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  
}
.dashboard td, th {
  text-align: left;
  padding:15px;
  color: #ddd;
  border-bottom: 1px solid #81818140;
}
.dashboard .circle-wrap {
  margin: 50px auto;
  width: 150px;
  height: 150px;
  background: #e6e2e7;
  border-radius: 50%;
}
.dashboard .circle-wrap .circle .mask,
.dashboard .circle-wrap .circle .fill {
  width: 150px;
  height: 150px;
  position: absolute;
  border-radius: 50%;
}
.dashboard .circle-wrap .circle .mask {
  clip: rect(0px, 150px, 150px, 75px);
}

.dashboard .circle-wrap .circle .mask .fill {
  clip: rect(0px, 75px, 150px, 0px);
  background-color: #f7403b;
}
.dashboard .circle-wrap .circle .mask.full,
.dashboard .circle-wrap .circle .fill {
  animation: fill ease-in-out 3s;
  transform: rotate(126deg);
}

@keyframes fill {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(126deg);
  }
}
.dashboard .circle-wrap .inside-circle {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: #fff;
  line-height: 130px;
  text-align: center;
  margin-top: 10px;
  margin-left: 10px;
  position: absolute;
  z-index: 100;
  font-weight: 700;
  font-size: 2em;
}
</style>