<template>
  <div class="error">
      <h1 class="err" v-if="error.statusCode === 404">404 Page Not Found</h1>
      <div v-else>
        <h1 class="err">500 Internal Server Error</h1>
        <br><hr><br>
        <center>
            <pre>{{ error.message }}</pre>
        </center>
      </div>
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

    .error br {
        @apply select-none;
    }

    .err {
        font-size: 3.5em;
    }
</style>