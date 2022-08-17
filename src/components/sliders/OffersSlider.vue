<template>
    <div class="offers-slider">
        <div class="offers-slider-swiper">
            <swiper :options="sliderOptions">
                <swiper-slide
                    v-for="item in items"
                    :key="item.id"
                >
                    <OfferCard
                        v-if="item.type === 'offer-card'"
                        :top="item.top"
                        :title="item.title"
                        :description="item.description"
                        :link="item.link"
                        :image="item.image"
                    />
                    <CategoryCard
                        v-if="item.type === 'category-card'"
                        :title="item.title"
                        :description="item.description"
                        :link="item.link"
                        :image="item.image"
                    />
                </swiper-slide>
            </swiper>
        </div>
        <div class="offers-slider-scrollbar" />
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import OfferCard from '@/components/offers/OfferCard';
import CategoryCard from '@/components/offers/CategoryCard';

export default {
    name: 'CardSlider',
    components: {
        Swiper,
        SwiperSlide,
        OfferCard,
        CategoryCard
    },
    props: {
        items: {
            type: Array,
            default: () => []
        }
    },
    data: () => ({
        sliderOptions: {
            slidesPerView: 'auto',
            centeredSlides: true,
            scrollbar: {
                el: '.offers-slider-scrollbar',
                draggable: true
            }
        }
    })
}
</script>
