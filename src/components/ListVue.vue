<template>  
    <div class="temoignage">
        <div class="slide-container2">
            <div class="temoin-title2">
            <h1>A la recherche d'assistants virtuels?</h1>
        </div>
            <Swiper 
                :modules="modules"
                :slides-per-view="3"
                :space-between="0"
                navigation
                :pagination="{ clickable: true, dynamicBullets:true}"
                :grab-cursor="true"
                :breakpoints="{0:{slidesPerView:1},675:{slidesPerView:2},1050:{slidesPerView:3},}"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
            >
            <SwiperSlide v-for="item in table" :key="item.id">
            <div class="slide-content2">
                <div class="card-wrapper2">
                    <div class="card2">
                        <div class="image-content2">
                            <span class="overlay2"></span>
                            <div class="card-image2">
                                <img :src="require(`../assets/${item.src}`)" alt="" class="card-img2">
                            </div>
                        </div>
                        <div class="card-content2">
                            <h2 class="name2">{{ item.nom }}</h2>
                            <p class="name3">{{ item.profession }}</p>
                            <p class="name3">{{ item.email }}</p>

                            <ul class="about">
                                <li v-for="item in item.service" :key="item.ids"><span>{{ item.nombre }}</span>{{ item.noms }}</li>
                            </ul>

                            <p class="description2">
                                {{ item.description }}
                            </p>
                            <button v-on:click="contacter" class="btn2">Contacter</button>
                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<script>
    import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';
    import table from '../assets/table';
    export default {
        name: 'TemoignaVue',
        methods:{
            contacter(){
            
            this.$router.push({name:'VendeurPage'});
            
        },
        },
        components: {
            Swiper,
            SwiperSlide,
        },
        data(){
            return{
                table : table,
            }
        },
        setup() {
            const onSwiper = (swiper) => {
                console.log(swiper);
            };
            const onSlideChange = () => {
                console.log('slide change');
            };
            return {
                onSwiper,
                onSlideChange,
                modules: [Navigation, Pagination, Scrollbar, A11y],
            };
        },
    }
</script>

<style>

    .temoignage2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: transparent;
    }


    .slide-container2 {
        max-width: 1170px;
        width: 100%;
        border-radius: 10px;
        background: transparent;
        gap: 3px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        /* padding: 40px 0; */
        padding: 4rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
    }

    .slide-content2 {
        margin: 0 15px;
    }

    .card2 {
        border-radius: 25px;
        background-color: #FFF;
        width: 320px;
    }

    .image-content2,
    .card-content2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 14px;
    }

    .image-content2 {
        row-gap: 5px;
        position: relative;
        padding: 25px 0;
    }

    .overlay2 {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background-color: #da17a6;
        border-radius: 25px 25px 0 25px;
    }

    .overlay2::before,
    .overlay2::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: -40px;
        height: 40px;
        width: 40px;
        background-color: #da17a6;
    }

    .overlay2::after {
        border-radius: 0 25px 0 0;
        background-color: #FFF;
    }

    .card-image2 {
        position: relative;
        height: 150px;
        width: 150px;
        border-radius: 50%;
        background-color: #FFF;
        padding: 3px;
    }

    .card-image2 .card-img2 {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 50%;
        border: 4px solid #ac1282;
    }

    .card-content2 .name2 {
        font-size: 18px;
        font-weight: 500;
        color: #333;
    }
    .card-content2 .name3 {
        font-size: 0.9rem;
        color: #818181;
        margin : 0;
    }
    .card-content2 .about {
        justify-content: space-between;
        position: relative;
        margin: 35px 0;
    }
    .card-content2 .about li {
        display: flex;
        flex-direction: column;
        color: #818181;
        font-size: 0.9rem;
    }
    .card-content2 .about li span {
        color: #1d1d1d;
        font-weight: 600;
    }
    .card-content2 .about::after {
        position: absolute;
        content: "";
        bottom: -16px;
        display: block;
        background: #ccc;
        height: 1px;
        width: 100%;
    }

    .card-content2 .description2 {
        font-size: 14px;
        color: #707070;
        text-align: center;
    }

    .card-content2 button {
        border: none;
        font-size: 16px;
        color: #FFF;
        padding: 8px 16px;
        background-color: #ac1282;
        border-radius: 16px;
        margin: 14px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .card-content2 button:hover {
        background: #da17a6;
    }

    .swiper-button-prev {
    left: 0px;
    right: auto;
    }

    .swiper-button-next {
    right: var(--swiper-navigation-sides-offset,0px);
    left: auto;
    }

</style>