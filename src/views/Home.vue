<template>
    <div class="home-page">

        <section class="s-offers">
            <OffersSlider
                v-if="offers"
                :items="offers"
            />
        </section>

        <section class="s-nav-menu">
            <div class="container">

                <NavMenu />

            </div>
        </section>

    </div>
</template>

<script>
import OffersSlider from '@/components/sliders/OffersSlider';
import offers from '@/mokingData/offers';
import NavMenu from '@/components/NavMenu';

export default {
    name: 'Home',
    components: { NavMenu, OffersSlider },
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
