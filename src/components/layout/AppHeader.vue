<template>
    <header class="header">
        <div class="container">

            <div class="header-row">

                <div class="header-logo">
                    <router-link to="/" class="logo">
                        <img src="images/logo.svg" alt="">
                    </router-link>
                </div>

                <div class="header-lang">
                    <LangDropdown />
                </div>

            </div>

        </div>
    </header>
</template>

<script>
import LangDropdown from '@/components/dropdowns/LangDropdown';

export default {
    name: 'AppHeader',
    components: { LangDropdown }
}
</script>
