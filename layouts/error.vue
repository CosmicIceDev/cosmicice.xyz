<template>
  <div class="error">
      <h1 class="err" v-if="error.statusCode === 404">404 Page Not Found</h1>
      <div v-else>
        <h1 class="err">An Error Occurred...</h1>
        <pre>{{error}}</pre>
      </div>
  </div>
</template>

<script>
export default {
    props: ['error'],
    layout: 'default',
    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start()
            setTimeout(() => this.$nuxt.$loading.finish(), 1000)
        })
    }
}
</script>

<style>
    .error {
        @apply flex justify-center items-center align-middle;
        height: 65vh;
    }

    .err {
        font-size: 4em;
    }
</style>