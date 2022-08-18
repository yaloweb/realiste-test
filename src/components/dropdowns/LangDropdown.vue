<template>
    <div
        class="lang-dropdown"
        :class="{'active': opened}"
        @click.stop
    >

        <div
            class="lang-dropdown-icon"
            @click="toggleLandDropdown"
        >
            <img src="images/icons/globe.svg" alt="">
        </div>

        <div class="lang-dropdown-list">
            <ul>
                <li
                    v-for="localization in localizations"
                    :key="localization.id"
                >
                    <a
                        :href="`/${localization.code}`"
                        @click.prevent="selectLang"
                    >
                        {{ localization.title }}
                    </a>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    name: 'LangDropdown',
    data: () => ({
        localizations: [
            { id: 1, code: 'ru', title: 'Русский' },
            { id: 2, code: 'en', title: 'English' },
        ],
        opened: false
    }),
    methods: {
        toggleLandDropdown() {
            if (window.innerWidth < 992) {
                this.opened = !this.opened
            }
        },
        closeLangDropdown() {
            this.opened = false
        },
        selectLang() {
            // select lang functional
            //...
            this.closeLangDropdown()
        }
    },
    mounted() {
        document.addEventListener('click', this.closeLangDropdown)
    },
    beforeDestroy() {
        document.removeEventListener('click', this.closeLangDropdown)
    }
}
</script>
