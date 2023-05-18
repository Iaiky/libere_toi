<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col">
                    <h4>Company</h4>
                    <div class="ul">
                        <li><a href="#" v-on:click="Touch">About us</a></li>
                        <li><a href="#" v-on:click="Touch1">Our services</a></li>
                    </div>
                </div>
                <div class="footer-col">
                    <h4>Get help</h4>
                    <div class="ul">
                        <li><a href="#" v-on:click="Pointer">FAQ</a></li>
                        <li><a href="#" v-on:click="Pointer1">CGU</a></li>
                    </div>
                </div>
                <div class="footer-col">
                    <h4>SAV</h4>
                    <div class="ul">
                        <li><a href="#">What ?</a></li>
                    </div>
                </div>
                <div class="footer-col">
                    <h4>Contact</h4>
                    <div>
                        <a href="#"><i class="fa fa-facebook-f"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name : 'FooterVue',
    methods:{
        Touch(){
            
            this.$router.push({name:'AboutUs'});
            
        },
        Touch1(){
            
            this.$router.push({name:'ServicesVue'});
            
        },
        Touch2(){
            
            this.$router.push({name:'PrivacyPolicy'});
            
        },
        Touch3(){
            
            this.$router.push({name:'AffiliateProgram'});
            
        },
        Pointer(){
            
            this.$router.push({name:'FaQ'});
            
        },
        Pointer1(){
            
            this.$router.push({name:'ShippingVue'});
            
        },
        Pointer2(){
            
            this.$router.push({name:'OrderStatuts'});
            
        },
        Pointer3(){
            
            this.$router.push({name:'PayementOptions'});
            
        },
    }
}
</script>
<style>
.footer{
    background-color: #24262b;
    padding: 20px 0;
    justify-content: flex-end;
    bottom: 0px;
    left: 0px;
    width: 100%;
}
.container{
    margin: auto;
    max-width: 1270px;
}
.row{
    display: flex;
    flex-wrap: wrap;
}
.footer-col{
    width: 22%;
    padding: 0 19px;
}
.footer-col h4{
    font-size: 20px;
    margin-bottom: 30px;
    font-weight: 500;
    position: relative;
}
.footer-col h4::before{
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: #e91e63;
    height: 2px;
    box-sizing: border-box;
    width: 50px;
}

.footer-col .ul li:not(:last-child){
    margin-bottom: 10px;
}
.footer-col .ul li a{
    font-size: 16px;
    text-transform: capitalize;
    color: #ffffff;
    text-decoration: none;
    font-weight: 300;
    color: #bbbbbb;
    display: block;
    transition: all 0.3s ease;
}
.footer-col .ul li a:hover{
    color: #ffffff;
    padding-left: 10px;
}
.ul {
    display: block;
}
li{
    list-style: none;
}

</style>