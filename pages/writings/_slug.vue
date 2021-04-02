<template>
	<div class="writing-container w-full sm:w-4/5">
		<nuxt-content class="writing w-full" :document="article" />
	</div>
</template>

<style>
    .writing-container {
        display: flex;
        justify-content: center;
		align-items: center;
		margin: auto;
		padding: 0.5em;
	}

    .nuxt-content pre {
        border-radius: 0.3em;
    }
</style>

<script>
	export default {
		layout: 'default',
		async asyncData({ $content, params, error }) {
			const article = await $content('articles', params.slug).fetch()

			if (!article) return error({ error: '404', message: 'Writing Not Found' })

			return { article }
		},
		head() {
			return {
				title: `${this.article.title} | cosmicice`
			}
		}
	}
</script>
