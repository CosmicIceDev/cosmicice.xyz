<template>
	<nav class="navbar" :class="{ 'shadow': !scrolled }">
		<input id="nav-toggle" type="checkbox">
		<div class="logo" style="float: left;" id="logo">
			<NuxtLink to="/">
				<img src="~/assets/images/cat.svg" class="select-none draggable" style="width: auto; height: 5em;">
			</NuxtLink>
			<h1 class="draggable">c</h1>
			<h1 class="draggable">o</h1>
			<h1 class="draggable">s</h1>
			<h1 class="draggable">m</h1>
			<h1 class="draggable">i</h1>
			<h1 class="draggable">c</h1>
			<h1 class="draggable">i</h1>
			<h1 class="draggable">c</h1>
			<h1 class="draggable">e</h1>
		</div>
		<ul class="links">
			<li><NuxtLink onclick="closeNav()" class="icelink" to="/projects">Projects</NuxtLink></li>
			<li><NuxtLink onclick="closeNav()" class="icelink" to="/writings">Writings</NuxtLink></li>
			<li><NuxtLink onclick="closeNav()" class="icelink" to="/contact">Contact</NuxtLink></li>
			<!--<DarkMode />-->
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
			showNav: true,
		}
	},
	mounted () {
		window.addEventListener('scroll', this.onScroll)
		
		const draggableElems = document.querySelectorAll('.draggable');
		
		let draggies = [];

		for (let i = 0; i < draggableElems.length; i++) {
			let draggableElem = draggableElems[i];
			let draggie = new Draggabilly(draggableElem, {});
			draggies.push(draggie);
		}
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
		padding-top: 0.5em;
		height: 100px;
		background-color: #fff;
		z-index: 10;
	}

	.draggable {
		@apply select-none;
		cursor: default;
	}

	.is-pointer-down {
		cursor: pointer;
		text-shadow: 0 0 red,.5px .2px red,1px .4px red,1.5px .6000000000000001px red,2px .8px red,0 0 0 red;
		transition: text-shadow .2s;
		display: block;
	}

	.is-dragging {
		cursor: pointer;
		text-shadow: 0 0 red,.5px .2px red,1px .4px red,1.5px .6000000000000001px red,2px .8px red,0 0 0 red;
		transition: text-shadow .2s;
		display: block;
	}

	nav .logo {
		@apply float-left flex items-center ;
		color: #282828;
		height: 6em;
		width: auto;
		padding-left: 0.7em;
	}

	nav .logo h1 {
		font-size: 3em;
		font-weight: 600;
	}

	nav .logo:focus {
		border: none;
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

	/*@media screen and (max-width: 450px) {
		nav .logo {
			background: url('~assets/images/method-draw-image.svg');
		}
	}*/
</style>