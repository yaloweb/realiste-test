<template>
  <div id="app">

    <component :is="layout">
        <router-view />
    </component>

  </div>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout';

export default {
    name: 'App',
    components: {
        DefaultLayout
    },
    computed: {
        layout() {
            return (this.$route.meta.layout || 'default') + '-layout'
        }
    }
}
</script>
