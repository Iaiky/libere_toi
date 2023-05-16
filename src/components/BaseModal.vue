<template>
    <div class="modale" v-if="revele">
        <div class="overlay" v-on:click="toggleModale"></div>
        <div class="modal">  
            <button v-on:click="toggleModale">&times;</button>
            <h1>{{ service.titre }}</h1>
            <div class="field">
                    <h4>Description :</h4><br/>
                    <p>{{ service.description }}</p>
                    <br/>
            </div>
            <div class="field"><h4>Categorie : </h4><p>{{ service.categorie }} </p><br/></div>
                
            <div class="field"><h4>Prix : </h4><p>{{ service.prix }}</p><br/></div>
                

            <div class="field"><h4>Delai : </h4><p>{{ service.delai }} </p><br/></div>    
            <div class="field">
                <h4>Consigne :</h4><br/>
                <p>{{ service.consigne }}</p>
                <br/>
            </div>
            <p>Créé par {{ service.prenom }}</p>
        </div>
    </div>
    
    
  </template>

<script>
export default {
  data() {
    return {
    
    }
  },
  props:{
    revele:{type : String, required : true},
    toggleModale:{type : String, required : true},
    service:{
        titre:{type: String, required : true},
        categorie:{type: String, required : true},
        prix:{type: Number, required : true},
        delai:{type: String, required : true},
        consigne:{type: String, required : true},
        prenom:{type: String, required : true},
        description:{type: String, required : true}
    }
    // titre:{type: String, required : true},
    // categorie:{type: String, required : true},
    // prix:{type: Number, required : true},
    // delai:{type: String, required : true},
    // consigne:{type: String, required : true},
    // prenom:{type: String, required : true},
    // description:{type: String, required : true},
  },

}
</script>



<style scoped>

.modal {
    background: #f1f1f1;
    color: #333;
    position: fixed;
    z-index: 999;
    top: 10%;
    left: 50%;
    width: 500px;
    max-height: 650px;
    padding: 20px;
    margin-left: -250px;
    margin-bottom: -325px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    transition: 0.2s;
}
.overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
.modal button {
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: transparent;
    border: 0;
    font-size: 30px;
    cursor: pointer;
    border-radius: 40%;
}

.modal button:hover{
    opacity: 0.7;
    background-color: lightgrey;
    transition: 0.1s;

}
.modal h1 {
    align-self: center;
}

.field {
    padding: 10px;
}

.field h4 {
    display: inline;
    
}

.field p {
    display: inline;
    
}
</style>