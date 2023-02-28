<template>
    <input type="checkbox" id="check">
    <div class="navbar">
        <div class="nav">
            <img :src="logoIcon" width="55" height="55" />
        </div>
        <div class="searchbox">
            <input type="text" placeholder="Search here ..."/>
            <i class="fa fa-search"></i>
        </div>
        <ul>
            
            <li>
                <a href="#" v-on:click="Clicker0">Home</a>
            </li>
            <li>
                <a href="#">Services</a>
            </li>
            <li>
                <a href="#">Blog</a>
            </li>
            <li>
                <a href="#" v-on:click="Clicker">Login</a>
            </li>
            <li>
                <a href="#" v-on:click="Cliker">Register</a>
            </li>
            <label class="bar" for="check">
                <i class="fa fa-bars" id="bars"></i>
                <i class="fa fa-times" id="times"></i>
            </label>
            
        </ul>

        
    </div>
</template>

<script>
import Logo from '../assets/Logo.jpg';
export default {
    name : 'HeaderVue',
    methods:{
        Cliker(){
            
            this.$router.push({name:'RegisterUp'});
            

        },
        Clicker(){
            this.$router.push({name:'LoginUp'});
        },
        Clicker0(){
            this.$router.push({name:'HomeVUE'});
        },
    },
    data(){
        return{
            logoIcon: Logo
        }
    }
}
</script>
<style>
.navbar{
    background-color:#24262b;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 24px;
    padding-right: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
nav {
    display: flex;
    align-items: center;
}
ul{
    display:flex;
    align-items: center; 
    list-style-type: none;
    margin: 0 10px;
}
li{
   margin-left: 16px; 
   list-style: none;
 /*  display: inline-block;*/
   
}
li a{
    font-size: 18px;
    text-transform: capitalize;
    color: #ffffff;
    text-decoration: none;
    font-weight: 300;
    color: #ffffff;
    transition: all 0.3s ease;
}
li a:hover {
    color: #ac1282;
    padding-left: 10px;
}

.navbar ul .search{
    position: relative;
    left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    z-index: 10;
    cursor: pointer;
}
.searchbox{
    display: flex;
    margin : auto 0;
    height : 35px;
    line-height: 35px;
/*
    position: absolute;


    right: 100%;
    width: 100%;
    height: 100%;
   
    background: #fff;
    align-items: center;
    padding: 0 30px;
    transition: 0.5s ease-in-out;*/
}
.searchbox input{
    width: 350px;
    border: none;
    outline: none;
    height: 100%;
    color: #ac1282;
    font-size: 20px;
    background: #fff;
    border-bottom: 1px solid rgba(0,0,0,0.5);
    padding: 0 10px;
}
.searchbox i{
    color: #24262b;
    font-size: 20px;
    background: #fff;
    height: 73%;
    padding: 5px;
    position: relative;
    cursor: pointer;
    z-index: 1;
}
.searchbox i:hover{
    color: #fff;
}
.searchbox i::after{
    height: 100%;
    width: 0%;
    content: '';
    background: #ac1282;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: 0.3s;
}
.searchbox i:hover::after{
    width: 100%;
}
.navbar .bar{
    position: relative;
    margin: auto;
    display: none;
}
.navbar .bar i{
    position: absolute;
    color: #fff;
    font-size: 35px;

}
input[type="checkbox"]{
   /* -webkit-appearance: none;*/
    display: none;
}
@media screen and (max-width: 1250px) {
    .navbar{
        display: block;
        padding: 0;
    }
    .navbar .nav{
        display: inline-block;
        padding: 15px 30px; 
    }
    .navbar .searchbox{
        width: 100%;
        display: inline-flex;
        justify-content: center;
        margin-bottom: 15px;
    }
    .navbar .searchbox input{
        width: 90%;
    }
    .navbar ul{
        display: flex;
        flex-direction: column;
        background: #fff;
        height: 0;
        visibility: visible;
        transition: 0.3s;
    }
    .navbar ul li{
        text-align: center;
    }
    .navbar ul li a{
        color: #24262b;
        font-size: 25px;
        padding: 25px;
        display: block;
    }
    .navbar .bar{
        display: block;
        position: absolute;
        top: 20px;
        right: 80px;
        cursor: pointer;
    }
    .navbar .bar #times{
        display: none;
    }
    #check:checked ~ .navbar .bar #times{
        display: block;
    }
    #check:checked ~ .navbar .bar #bars{
        display: none;
    }
    #check:checked ~ .navbar ul{
        visibility: visible;
        height: 400px;
    }
}
</style>