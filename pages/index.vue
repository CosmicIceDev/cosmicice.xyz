<template>
	<div class="container">
		<div class="float-left" content="draggabilly + tippy" v-tippy="{ size : 'large', distance: '20', delay: 0, duration: 0, hideOnClick: true }">
			<h1 class="title cursor-pointer draggable">HIII</h1>
			<h1 class="title">HIII</h1><h1 class="title">HIII</h1><h1 class="title">HIII</h1><h1 class="title">HIII</h1><h1 class="title">HIII</h1><h1 class="title">HIII</h1><h1 class="title">HIII</h1><h1 class="title">HIII</h1><h1 class="title">HIII</h1><h1 class="title">HIII</h1><h1 class="title">HIII</h1><h1 class="title">HIII</h1><h1 class="title">HIII</h1><h1 class="title">HIII</h1><h1 class="title">HIII</h1><h1 class="title">HIII</h1><h1 class="title">HIII</h1><h1 class="title">HIII</h1><h1 class="title">HIII</h1><h1 class="title">HIII</h1>
		</div>
	</div>
</template>


<style>
.tippy-tooltip {
	border-radius: 0;
}

.container {
	margin: 0 auto;
	height: auto;
	text-align: center;
}

.title {
	font-family: 'Playfair Display', sans-serif;
	display: block;
	font-weight: 300;
	font-size: 100px;
	color: #35495e;
	letter-spacing: 1px;
}

.subtitle {
	font-weight: 300;
	font-size: 42px;
	color: #526488;
	word-spacing: 5px;
	padding-bottom: 15px;
}

.links {
	padding-top: 15px;
}
</style>

<script>
	export default {
		head: {
			title: 'cosmicice'
		}
	}
</script>
