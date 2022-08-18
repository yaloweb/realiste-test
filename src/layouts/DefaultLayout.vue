<template>
    <div class="wrapper">

        <AppHeader />

        <slot />

        <section class="s-nav-menu">
            <div class="container">

                <NavMenu />

            </div>
        </section>

    </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader';
import NavMenu from '@/components/NavMenu';

export default {
    name: 'DefaultLayout',
    components: { AppHeader, NavMenu }
}
</script>
