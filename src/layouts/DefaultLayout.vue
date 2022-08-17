<template>
    <div class="wrapper">

        <AppHeader />

        <slot />

    </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader';
export default {
    name: 'DefaultLayout',
    components: { AppHeader }
}
</script>
