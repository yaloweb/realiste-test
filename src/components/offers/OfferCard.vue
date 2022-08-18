<template>
    <div class="offer-card">

        <a
            :href="link"
            class="offer-card-link"
        />

        <div
            v-if="top"
            class="offer-card-top">
            <span>TOP {{ top }}</span>
        </div>

        <div
            v-if="title"
            class="offer-card-title"
            v-html="title"
        />

        <div
            v-if="description"
            class="offer-card-description"
            v-html="description"
        />

        <div class="offer-card-btn">
            <router-link
                :to="link"
                class="btn"
            >Посмотреть
            </router-link>
        </div>

        <div class="offer-card-image">
            <div
                v-if="imagesIsArray"
                class="offer-card-image-grid"
            >
                <div
                    v-for="imageItem in image"
                    :key="imageItem.id"
                    class="offer-card-image-grid-item"
                >
                    <img
                        :src="imageItem.src"
                        alt=""
                    >
                </div>
            </div>
            <img
                v-else
                :src="image"
                alt=""
            >
        </div>

    </div>
</template>

<script>
export default {
    name: 'OfferCard',
    props: {
        top: Number,
        title: String,
        description: String,
        link: String,
        image: [String, Array]
    },
    computed: {
        imagesIsArray() {
            return Array.isArray(this.image)
        }
    }
}
</script>
