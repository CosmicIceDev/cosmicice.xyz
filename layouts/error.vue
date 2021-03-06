<template>
  <div class="error">
      <h1 class="err" v-if="error.statusCode === 404">404 Page Not Found</h1>
      <h1 class="err" v-else>An Error Occurred...</h1>
  </div>
</template>

<script>
export default {
    props: ['error'],
    layout: 'default'
}
</script>

<style>
    .error {
        @apply flex justify-center items-center align-middle;
        height: 65vh;
    }

    .err {
        font-size: 5em;
    }
</style>