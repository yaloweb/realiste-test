<template>
    <nav class="nav-menu">
        <router-link
            v-for="menuItem in menu"
            :key="menuItem.id"
            :to="menuItem.link"
            class="nav-menu-link"
        >
            <img
                :src="menuItem.image"
                alt=""
            >
            <span>
                {{ menuItem.title }}
            </span>
        </router-link>
    </nav>
</template>

<script>
export default {
    name: 'NavMenu',
    data: () => ({
        menu: [
            {
                id: 1,
                title: 'Квартиры',
                image: '/images/icons/star.svg',
                link: '#'
            },
            {
                id: 2,
                title: 'Сделки',
                image: '/images/icons/circle-arrow.svg',
                link: '#'
            },
            {
                id: 3,
                title: 'Оценка',
                image: '/images/icons/cash.svg',
                link: '#'
            },
            {
                id: 4,
                title: 'Обмен',
                image: '/images/icons/exchange.svg',
                link: '#'
            },
            {
                id: 5,
                title: 'Индекс',
                image: '/images/icons/lightning-in-frame.svg',
                link: '#'
            },
        ]
    })
}
</script>
