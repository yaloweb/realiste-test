<template>
    <div class="home-page">

        <section class="s-offers">
            <OffersSlider
                v-if="offers"
                :items="offers"
            />
        </section>

    </div>
</template>

<script>
import OffersSlider from '@/components/sliders/OffersSlider';
import offers from '@/mokingData/offers';

export default {
    name: 'Home',
    components: { OffersSlider },
    data: () => ({
        offers: []
    }),
    methods: {
        setOffers(data) {
            this.offers = data
        }
    },
    mounted() {
        this.setOffers(offers)
    }
}
</script>
