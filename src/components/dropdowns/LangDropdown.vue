<template>
    <div class="lang-dropdown">

        <div class="lang-dropdown-icon">
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
                        @click.prevent
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
        ]
    })
}
</script>
