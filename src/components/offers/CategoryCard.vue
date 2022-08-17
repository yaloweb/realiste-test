<template>
    <div class="category-card">

        <router-link
            :to="link"
            class="category-card-link"
        />

        <div class="category-card-img">
            <img
                :src="image"
                alt=""
            >
        </div>

        <div
            v-if="title"
            class="category-card-title"
            v-html="title"
        />

        <div
            v-if="description"
            class="category-card-description"
            v-html="description"
        />

    </div>
</template>

<script>
export default {
    name: 'CategoryCard',
    props: {
        title: String,
        description: String,
        link: String,
        image: String
    }
}
</script>
