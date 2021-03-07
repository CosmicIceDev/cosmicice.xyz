<template>
	<nav class="navbar" :class="{ 'shadow': !scrolled }">
		<input id="nav-toggle" type="checkbox">
		<NuxtLink class="logo" to="/">
		</NuxtLink>
		<ul class="links">
			<li><NuxtLink onclick="if (document.getElementById('nav-toggle').checked) document.getElementById('nav-toggle').checked = false;" class="icelink" to="/projects">Projects</NuxtLink></li>
			<li><NuxtLink onclick="if (document.getElementById('nav-toggle').checked) document.getElementById('nav-toggle').checked = false;" class="icelink" to="/writings">Writings</NuxtLink></li>
			<li><NuxtLink onclick="if (document.getElementById('nav-toggle').checked) document.getElementById('nav-toggle').checked = false;" class="icelink" to="/contact">Contact</NuxtLink></li>
		</ul>
		<label for="nav-toggle" class="icon-burger">
			<div class="line"></div>
			<div class="line"></div>
			<div class="line"></div>
		</label>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			scrolled: true,
			lastScrollPosition: 0,
			showNav: true
		}
	},
	mounted () {
		window.addEventListener('scroll', this.onScroll)
	},
	beforeDestroy () {
		window.removeEventListener('scroll', this.onScroll)
	},
	methods: {
		onScroll () {
			const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
			if (currentScrollPosition < 0) {
				return
			}

			if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
				return
			}
			
			this.scrolled = currentScrollPosition < this.lastScrollPosition
			this.lastScrollPosition = currentScrollPosition
		}
	}
}
</script>

<style>
	nav {
		@apply fixed left-0 right-0 top-0;
		padding: 0 2%;
		height: 100px;
		background-color: #fff;
		z-index: 10;
	}

	nav .logo {
		@apply float-left flex items-center select-none; 
		color: #282828;
		height: 6em;
		width: 23em;
		background: url('~assets/images/cosmicice.svg');
		background-repeat: no-repeat;
	}

	nav .logo img {
		padding-top: 0.5em;
		width: 22em;
		height: auto;
	}

	nav .links {
		@apply absolute right-0 float-right p-0 m-0 flex justify-evenly items-center;
		width: 50%;
		height: 100%;
	}

	nav .links li {
		@apply list-none uppercase pl-4 pr-4;
	}

	nav .links a {
		@apply block font-bold no-underline;
		color: #282828;
		font-size: 1.4em;
	}

	.shadow {
		@apply shadow-lg;
		transition: 0.2s ease-in-out;
	}

	#nav-toggle {
		@apply absolute;
		top: -100px;
	}

	nav .icon-burger {
		@apply hidden absolute cursor-pointer;
		right: 5%;
		top: 50%;
		transform: translateY(-50%);
	}

	nav .icon-burger .line {
		width: 30px;
		height: 3px;
		background-color: #282828;
		margin: 5px;
		border-radius: 1.5px;
		transition: all .3s ease-in-out;
	}

	@media screen and (max-width: 915px) {
		nav .logo {
			@apply float-none w-auto justify-center;
			background-color: #fff;
			padding-right: 3.7em;
		}

		nav .links {
			@apply float-none fixed w-auto h-auto flex-col justify-evenly overflow-hidden box-border;
			left: 0;
			right: 0;
			bottom: 100%;
			top: 100px;
			background-color: #fff;
			color: #fff;
			z-index: 9;
			transition: all .5s ease-in-out;
		}

		nav .links a {
			font-size: 1.7em;
			color: #282828;
		}

		nav :checked ~ .links {
			bottom: 0;
		}
		
		nav :checked ~ nav {
			background-color: #fff;
		}

		nav .icon-burger {
			@apply block;
		}

		nav :checked ~ .icon-burger .line:nth-child(1) {
			transform: translateY(9px) rotate(225deg);
		}

		nav :checked ~ .icon-burger .line:nth-child(3) {
			transform: translateY(-7px) rotate(-225deg) ;
		}

		nav :checked ~ .icon-burger .line:nth-child(2) {
			opacity: 0;
		}
	}

	@media screen and (max-width: 450px) {
		nav .logo {
			background-image: url('~assets/images/cat.svg');
			background-repeat: no-repeat;
			height: 5em;
			width: 5em;
		}
	}
</style>