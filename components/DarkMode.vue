<template>
    <button @click="toggle">{{ this.$colorMode.value == "light" ? "☀" : "🌙" }}</button>
</template>

<script>
    export default {
        methods: {
            toggle() {
                this.$colorMode.preference = 
                    this.$colorMode.value == "light" ? "dark" : "light";
            }
        }
    };
</script>
