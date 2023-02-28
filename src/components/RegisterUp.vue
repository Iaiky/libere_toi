<template>
    <div class="body">

    
        <img class="logo" src="../assets/Logo.jpg" >
        <h1>
            Register
        </h1>
        <div class="register">
            
            <input type="text" placeholder="Enter Name"/>
            <input type="text" placeholder="Enter email"/>
            <input type="text" placeholder="Phone number"/>
            <input type="password" placeholder="Enter password"/>
            <button>Sign up</button>
        </div>
    </div>
</template>
<script>
</script>
<style>
.body{
    text-align: center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
.logo{
    width: 100px;
}
.register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;

}
.register button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: #ac1282;
    color: #fff;
    cursor: pointer;
}
</style>