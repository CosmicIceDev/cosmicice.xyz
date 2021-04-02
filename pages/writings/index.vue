<template>
  	<div class="flex justify-center flex-col m-auto items-center pb-16">
	  	<h1 class="writings-header pb-4">Writings</h1>
	  	<hr class="w-4/5 pb-4">
	  	<div class="container w-100 lg:w-4/5 mx-auto flex flex-col" v-for="article of articles" :key="article.slug">
      		<div class="writing-card flex flex-col md:flex-row overflow-hidden bg-white rounded mt-4 w-100 mx-2 hover:shadow-xl text-left">
        		<div class="h-64 w-auto md:w-1/2 overflow-hidden">
					<NuxtLink :to="`/writings/${article.slug}`">
						<img class="writing-img inset-0 h-full w-full object-cover object-center" :src="require(`~/assets/images/${article.img}`)" />
					</NuxtLink>
        		</div>
        		<div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
					<NuxtLink :to="`/writings/${article.slug}`" class="font-semibold text-xl truncate size writing-link">{{ article.title }}</NuxtLink>
          			<p class="mt-2">
            			{{ article.description }}
          			</p>
					<div class="flex pt-3 sm:pt-0">
						<img class="w-10 h-10 rounded-full mr-2" :src="require(`~/assets/images/${article.author.name}.png`)" alt="Avatar of Writer">
						<p class="text-sm text-gray-700 tracking-wide font-semibold mt-2">{{ article.author.name }} &bull; {{ formatDate(article.createdAt) }}</p>
					</div>
          			
        		</div>
      		</div>
    	</div>
	</div>
</template>

<style>

	.writings-header {
		font-size: 4em;
	}

	.writing-card {
		transition: 0.2s ease-in-out;
	}

	.writing-img {
		transition: transform 1.7s;
	}

	.writing-link {
		width: fit-content;
		border-bottom: 2px solid #ef8b80;
		box-shadow: inset 0 -4px 0 #ef8b80;
		transition: background 0.1s cubic-bezier(.33,.66,.66,1);
	}

	.writing-link:hover {
		background: #ef8b80;
	}

	.writing-img:hover {
		transform: scale(1.5);
		transition: transform 1.7s;
		transform-origin: 50% 50%;
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