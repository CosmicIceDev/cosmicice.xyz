<template>
	<div class="footer">
		<h3>&copy; <NuxtLink class="icelink" to="/">cosmicice</NuxtLink> 2017-2021.</h3>
	</div>
</template>

<style>
	.footer {
		@apply left-0 right-0 top-0 select-none;
		padding: 0 2.5%;
		height: 3.7em;
		z-index: 10;
		background-color: transparent;
	}

	.footer h3 {
		@apply float-left flex items-center font-bold;
		font-size: 1.3em;
	}

	.icelink {
		@apply pl-2 pr-2;
	}
</style>