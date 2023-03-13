<template>
    <div class="begin">
        <div class="beginning">
            <!-- <img src="../assets/body.png" /> -->
            <div class="slogan-title">
                <h1>Libère-toi financièrement!</h1>
                <h3>Et profite pleinement de la vie.</h3>
            </div>
            <div class="slogan-2">
                <div class="button-begin">
                    <button v-on:click="Cliker">Commencer</button>
                </div>
                <div class="slogan-subtitle">
                    <p>* Atteindre la liberté financière</p>
                    <p>* Devenir totalement indépendant(e)</p>
                    <p>* Profiter pleinement de la vie.</p>
                </div>
            </div>   
        </div>
    </div>
    
</template>
<script>
export default {
    name: 'BodyVue',
    methods:{

    },
    data(){
        return{

        }
    }
}
</script>
<style>
    .begin {
        display: flex;
        justify-content: center;
    }

    .beginning {
        padding: 4rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        border-radius: 10px;
        width: 1170px;
        background: #ffffffc4;
        background-image: url("../assets/body.png");
        display: flex;
        flex-direction: column;
        gap: 3px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }

    .begin .beginning .slogan-title {
        align-self: center;
    }

    .begin .beginning .slogan-title h1 {
        font-size: 75px;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-style: italic;
        /* color: linear-gradient(to right, #9adcea, #ac1282); */
        color: #ac1282;
    }

    .begin .beginning .slogan-2 {
        display: flex;
        justify-content: space-around;
    }

    .begin .beginning .slogan-2 .button-begin {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .begin .beginning .slogan-2 .slogan-subtitle {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        
    }

    .begin .beginning .slogan-2 .slogan-subtitle p {
        font-style: italic;
        font-size: 25x;
    }

    .begin .beginning .slogan-title h3 {
        font-size: 30px;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: black;
    }

    .begin .beginning .button-begin button {
        background: #ac1282;
        padding: 10px 15px;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s ease 0s;
        font-size: 16px;
        color: #ffffff;
    }

    .begin .beginning .button-begin button:hover {
        padding: 15px 20px;
        background: #da17a6;
    }

    @media screen and (max-width: 1200px){
        .beginning {
        width: 970px;
    }
    }

    @media screen and (max-width: 992px){
        .beginning {
        width: 750px;
    }
    }

    @media screen and (max-width: 480px){
        .beginning {
        width: 462px;
    }
    }
</style>