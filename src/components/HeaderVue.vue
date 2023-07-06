<template>
    <input type="checkbox" id="check">
    <div class="navbar">
        <div class="logo">
            <img src="../assets/image/Logo.png" />
            <div class="nav-title">
                <h2>Libère-toi</h2>
            </div>
            <div class="nav-link">
                <ul>          
                    <li>
                        <a href="#" v-on:click="Home">Home</a>
                    </li>
                    <li>
                        <a href="#" v-on:click="Categorie">Categories</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>  
                </ul>
            </div>
        </div>       
        <div class="searchbox">
            <input type="text" placeholder="Recherche..."/>
            <i class="fa fa-search"></i>
        </div>
        
        <div class="connexion" v-if="user" >    
            <div class="imgText" v-on:click="DirectToPofil(usertype)" >
                <div class="userimg">
                    <img :src="require(`../assets/image/${userPDP}`)" alt="" class="cover">
                </div>
            </div>        
            <p>{{ username }}</p>
            <button v-on:click="logout"><i class="fas fa-sign-out" /> Se déconnecter</button>
        </div>
        <div class="connexion" v-else >
                    <a href="#" v-on:click="Clicker">Se connecter</a>
                    <button v-on:click="Cliker">S'inscrire</button>
        </div>
        <label class="bar" for="check">
        <i class="fa fa-bars" id="bars"></i>
        <i class="fa fa-times" id="times"></i>
    </label>
    </div>
</template>

<script>
import Logo from '../assets/image/Logo.png';
export default {
    name : 'HeaderVue',
    methods:{
        Cliker(){    
            this.$router.push({name:'RegisterUp'});
        },
        Clicker(){
            this.$router.push({name:'LoginUp'});
        },
        Home(){
            this.$router.push({name:'HomeVue'});
        },
        Categorie(){
            this.$router.push({name:'ListeCategorie'});
        },
        logout(){
            localStorage.clear();
            this.$router.push({name:'LoginUp'});
        },
        DirectToPofil(xy){
            if (xy===2){
                return this.$router.push({name:'ProfilClient'});
            }else if (xy===3){
                return this.$router.push({name:'VendeurPage'});
            }else {
                return this.$router.push({name:'DashboardHome'});
            }
        }          
    },
    data(){
        return{
            logoIcon: Logo,
            user : '',
            username:'',
            usertype:'',
            userPDP:''
        }
    },
    // async mounted(){
    //         let users = localStorage.getItem('user-info');
    //         this.user = users;           
    //         this.username = JSON.parse(users).data[0].prenom;
    //         this.usertype= JSON.parse(users).data[0].type;
    // },
    async created(){
            let users = localStorage.getItem('user-info');
            this.user = users;           
            this.username = JSON.parse(users).data[0].prenom;
            this.usertype= JSON.parse(users).data[0].type;
            this.userPDP= JSON.parse(users).data[0].photoProfil;
    },
   
}
</script>

<style>
.navbar{
    background: rgba(255, 255, 255, .7);
    padding: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    position: absolute;
    position: -webkit-sticky; 
    position: sticky;
    z-index:10;
    top: 0;
    gap: 3px;
}

/* La partie gauche */
.navbar .logo {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: nowrap;
    flex-grow: 0.5;
}

.navbar .logo img {
    height: 65px;
    width: 65px;
    cursor: pointer;
}

.navbar .logo .nav-title h2 {
    white-space: nowrap;
    color: #ac1282;
    cursor: pointer;
}

.navbar .logo .nav-link {
    display: flex;
    justify-content: start;
}

.navbar .logo .nav-link ul {
    display:flex;
    align-items :center; 
    list-style-type: none;
} 

.navbar .logo .nav-link li {
    margin-left: 15px; 
    list-style: none;
    display: inline-block;
}

.navbar .logo .nav-link li a {
    font-size: 18px;
    text-transform: capitalize;
    color: #000000;
    text-decoration: none;
    font-weight: 300;
    transition: all 0.3s ease;
}

.navbar .logo .nav-link li a:hover {
    color: #9adcea ;
    /* padding-left: 10px; */
}

/* La partie droite */
.navbar .connexion {
    display: flex;
    justify-content:end;
    align-items: center;
    padding-right: 10px;
    gap: 8px;
}

.navbar .connexion a {
    font-size: 18px;
    padding: 9px 10px;
    color: #000000;
    text-decoration: none;
    transition: all 0.3s ease;
}

.navbar .connexion a:hover {
    color: #da17a6;
}

.navbar .connexion button {
    background: #ac1282;
    padding: 10px 15px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    font-size: 16px;
    color: #ffffff;
}

.navbar .connexion button:hover {
    background: #da17a6;
}

/* Searchbox  */
.navbar .searchbox {
    height: 40px;
    display: flex;
    cursor: pointer;
    padding: 10px 20px;
    background: #ffffffcb;
    border-radius: 30px;
    align-items: center;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.navbar .searchbox input {
    width: 400px;
    outline: none;
    border: none;
    font-weight: 500;
    transition: 0.8s;
    background: transparent;
}

.navbar .searchbox a .fas {
    color: #1daf;
    font-size: 18px;
}

.navbar .bar{
    position: relative;
    margin: auto;
    display: none;
}

.navbar .bar i{
    position: absolute;
    color: #000000;
    font-size: 35px;
}

input[type="checkbox"]{
   /* -webkit-appearance: none;*/
    display: none;
}

.imgText {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.imgText h4 {
    font-weight: 500;
    line-height: 1.2em;
    margin-left: 15px;
}

.imgText h4 span {
    font-size: 0.8em;
    color: #555;
}
.userimg {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 50%;
}

.userimg .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    object-fit: cover;
}

/* Responsive */
@media screen and (max-width: 1250px) {
    .navbar .searchbox input {
    width:0px;
    outline: none;
    border: none;
    font-weight: 500;
    transition: 0.8s;
    background: transparent;
    }

    .navbar .searchbox:hover input {
    width: 400px;
    }
}























@media screen and (max-width: 768px) {
    .navbar{
        display: flex;
        flex-direction: column;
        padding: 0;
        height: 10vh;
    }

    .navbar .logo {
        display: flex;
        flex-direction: column;
    }

    .navbar .logo img{
        display: inline-block;
        height: 65px;
        width: 65px;
        cursor: pointer;
        /* padding: 15px 30px;  */
    }

    .navbar .logo .nav-title h2 {
        visibility: hidden;
    }
    .navbar .logo .nav-link ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-right: 50px;
        visibility: collapse;
    }

    .navbar .logo .nav-link li {
        list-style: none;
        display: inline-block;
    }

    .navbar .searchbox{
        width: 95%;
        display: inline-flex;
        justify-content: center;
        margin-bottom: 15px;
        visibility: collapse;
    }

    .navbar .searchbox input{
        width: 85%;
    }

    .navbar .connexion {
        display: flex;
        flex-direction: column;
        visibility: hidden;
    }

    .navbar .bar{
        display: block;
        position: absolute;
        top: 24px;
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

    #check:checked ~ .navbar {
        height: auto;
    }
    
    #check:checked ~ .navbar .logo .nav-link ul {
        visibility: visible;
    }

    #check:checked ~ .navbar .logo .nav-title h2 {
        visibility: visible;
    }

    #check:checked ~ .navbar .navbar .searchbox {
        visibility: visible;
    }

    #check:checked ~ .navbar .connexion {
        visibility: visible;
    }
    /* #check:checked ~ .navbar .connexion,
                    .navbar .searchbox,
                    .navbar .logo .nav-link ul{
        visibility: visible;
    } */
}
</style>