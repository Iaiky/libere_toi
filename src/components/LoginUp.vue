<template>
        <div class="login-card-container">
            <div class="login-card">
                <div class="login-card-logo">
                    <img src="../assets/image/Logo.png" alt="logo">
                </div>
                <div class="login-card-header">
                    <h1>Se connecter</h1>
                    <div>Connectez-vous pour utiliser la plateforme</div>
                </div>
                <form class="login-card-form">
                    <div class="form-item">
                        <div class="form-item-icon"><i class="material-icons">&#xe0be;</i></div>

                        <input type="text" v-model="email" placeholder="adresse email" required autofocus>

                    </div>
                    <div class="form-item">
                        <div class="form-item-icon"><i class="material-icons">&#xe897;</i></div>
                        <input type="password" v-model="mdp" placeholder="Mot de passe" required>
                    </div>
                    <div class="form-item-other">
                        <div class="checkbox">
                            <input type="checkbox" id="RememberMeCheckbox" v-model="checked">
                            <label for="RememberMeCheckbox">Remember me</label> 
                        </div>
                        <a href="#">Mot de passe oublié?</a>
                    </div>
                    <button v-on:click="Login">Se connecter</button>
                </form>
                <div class="login-card-footer">
                    Pas de compte? <router-link to="/RegisterUp">Créer gratuitement ici</router-link>
                </div>
            </div>
            <div class="login-card-social">
                <div>HOME</div>
                <div class="login-card-social-btn">
                    <router-link to="/">
                        <i class="fas fa-home" />
                    </router-link>
                </div>
            </div>
        </div>
            
</template>

<script>
    import axios from 'axios'

    export default{
        name:'LoginPage',
        data(){
            return{
                email:'',
                mdp:'',
                checked:false
            }
        },
        methods:{
            async Login(){
                var qs = require('qs');
                let result = await axios.post("http://localhost:3000/clients/auth",
                    qs.stringify({
                        email:this.email,
                        mdp:this.mdp
                    })
                );

                console.warn(result);
                if(result.status==200){
                    localStorage.setItem("user-info",JSON.stringify(result.data))
                    this.$router.push({name:'HomeVue'})
                }
            }
        },
        mounted(){
            let user = localStorage.getItem('user-info');
            if(user){
                this.$router.push({name:'HomeVue'})
            }
        }
    }
</script>

<style>
.login-card-container {
    display: flex;
    flex-direction: column;
}
    .login-card {
    width: 450px;
    background: rgba(255, 255, 255, .5);
    padding: 4rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-radius: 10px;
    position: relative;
    align-self: center;
}

.login-card::before {
    content: '';
    position: absolute;
    background: rgba(255, 255, 255, .15);
    inset: 0;
    transform: rotate(-5deg);
    z-index: -1;
}

.login-card-logo {
    margin-bottom: 2rem;
}

.login-card-logo img {
    width: 175px;
}

.login-card-logo,
.login-card-header,
.login-card-footer {
    text-align: center;
}

.login-card a {
    text-decoration: none;
    color: #35339a;
}

.login-card a:hover {
    text-decoration: underline;
}

.login-card-header {
    margin-bottom: 2rem;
}

.login-card-header h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: .5rem;
}

.login-card-header h1 + div {
    font-size: calc(1rem* .8);
    opacity: .8;
}

.login-card form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.login-card-form .form-item {
    position: relative;
}

.login-card-form .form-item .form-item-icon {
    position: absolute;
    top: 0.7rem;
    left: 1.4rem;
    font-size: 1.3rem;
    opacity: .4;
}

.login-card-form .form-item-other .checkbox {
    display: flex;
    align-items: center;
    gap: 7px;
}

.login-card-form .form-item-other input[type="checkbox"] {
    display: flex;
    align-items: center;
    gap: 7px;
}

.login-card-form .form-item-other {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: calc(1rem * .8);
    margin-bottom: .5rem;
}

.login-card-footer{
    margin-top: 1.5rem;
    font-size: calc(1rem *.8);
}

.login-card input[type="text"],
.login-card input[type="password"],
.login-card input[type="email"],
.login-card input[type="tel"] {
    border: none;
    outline: none;
    background: rgba(255, 255, 255, .3);
    padding: 1rem 1.5rem;
    padding-left: calc(1rem * 3.5);
    border-radius: 100px;
    width: 100%;
    transition:  .5s;
}

.login-card-input:focus {
    background: white;
}

.login-card-input[type="checkbox"] {
    width: 16px;
    height: 16px;
    accent-color: black;
}

.login-card-form button {
    background: black;
    color: white;
    padding: 1rem;
    border-radius: 100px;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: .5s;
}

.login-card-form button:hover {
    background-color: rgba(0, 0, 0, .85);
    cursor: pointer;
}

.login-card-social {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.login-card-social > div {
  opacity: .8;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: calc(1rem * .8);
}

.login-card-social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.login-card-social-btn a {
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, .6);
  border-radius: 100px;
  transition: all .5s;
}

.login-card-social-btn a:hover {
  background: white;
  transform: scale(1.1);
}


@media (max-width: 768px) {

    body {
        padding: 2rem 0;
    }

    .login-card {
        width: 300px;
        padding: 2rem;
    }
}
</style>