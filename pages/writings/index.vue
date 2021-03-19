<template>
  <!--<div class="writings hidden">
	<br>
    <h1 class="writings-header">Writings</h1>
    <br><br>
	<div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5" v-for="article of articles" :key="article.slug">
		<NuxtLink :to="`/writings/${article.slug}`" class="rounded-lg overflow-hidden shadow-lg card">
			<img class="w-full" :src="require(`~/assets/images/${article.img}`)" alt="Mountain">
			<div class="px-6 py-4">
				<div class="font-bold text-xl mb-2">{{ article.title }}</div>
				<p class="text-gray-700 text-base">
				{{ article.description }}
				</p>
			</div>
			<div class="px-6 pb-2 text-left flex">
				<img class="w-10 h-10 rounded-full mr-4" :src="require(`~/assets/images/${article.author.name}.jpg`)" alt="Avatar of Writer">
				<div class="text-sm">
					<p class="text-gray-900 leading-none">{{ article.author.name }}</p>
					<p class="text-gray-600">{{ formatDate(article.createdAt) }}</p>
				</div>
			</div>
		</NuxtLink>
	</div>
  </div>-->
  <div class="flex justify-center flex-col m-auto">
	  <h1 class="">Writings</h1>
	  <hr class="w-4/5">
	  <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5" v-for="article of articles" :key="article.slug">
		  
	  </div>
  </div>
</template>

<style>

	.writings {
		text-align: center;
	}

	.writings-header {
		font-size: 4em;
	}


	.card { transition: 0.3s; }
	.card:hover {
		--tw-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
		box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
	}

</style>

<script>
  export default {
	head: {
		title: 'Writings | cosmicice'
	},

    async asyncData({ $content, params }) {
      const articles = await $content('articles')
        .only(['title', 'description', 'img', 'slug', 'author', 'createdAt'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
	},
	
	methods: {
		formatDate(date) {
			const options = { year: 'numeric', month: 'long', day: 'numeric' }
	      	return new Date(date).toLocaleDateString('en', options)
		}
	},

	mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start()
            setTimeout(() => this.$nuxt.$loading.finish(), 1000)
        })
    }
  }
</script>