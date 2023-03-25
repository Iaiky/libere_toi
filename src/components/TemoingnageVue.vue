<template>  
    <div class="temoignage">
        <div class="slide-container">
            <div class="temoin-title">
            <h1>De confiance avec de bons retours</h1>
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
            <SwiperSlide v-for="item in temoin" :key="item.id">
            <div class="slide-content">
                <div class="card-wrapper">
                    <div class="card">
                        <div class="image-content">
                            <span class="overlay"></span>
                            <div class="card-image">
                                <img :src="require(`../assets/${item.src}`)" alt="" class="card-img">
                            </div>
                        </div>
                        <div class="card-content">
                            <h2 class="name">{{ item.nom }}</h2>
                            <p class="description">
                                {{ item.description }}
                            </p>
                            <button class="btn">Voir plus...</button>
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
    import temoin from '../assets/temoin'
    export default {
        name: 'TemoignaVue',
        methods:{
        },
        components: {
            Swiper,
            SwiperSlide,
        },
        data(){
            return{
                temoin : temoin,
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

    .temoignage {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: transparent;
    }


    .slide-container {
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

    .slide-content {
        margin: 0 15px;
    }

    .card {
        border-radius: 25px;
        background-color: #FFF;
        width: 320px;
    }

    .image-content,
    .card-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 14px;
    }

    .image-content {
        row-gap: 5px;
        position: relative;
        padding: 25px 0;
    }

    .overlay {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background-color: #da17a6;
        border-radius: 25px 25px 0 25px;
    }

    .overlay::before,
    .overlay::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: -40px;
        height: 40px;
        width: 40px;
        background-color: #da17a6;
    }

    .overlay::after {
        border-radius: 0 25px 0 0;
        background-color: #FFF;
    }

    .card-image {
        position: relative;
        height: 150px;
        width: 150px;
        border-radius: 50%;
        background-color: #FFF;
        padding: 3px;
    }

    .card-image .card-img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 50%;
        border: 4px solid #ac1282;
    }

    .card-content .name {
        font-size: 18px;
        font-weight: 500;
        color: #333;
    }

    .card-content .description {
        font-size: 14px;
        color: #707070;
        text-align: center;
    }

    .card-content button {
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

    .card-content button:hover {
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