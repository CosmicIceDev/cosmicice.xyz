<!--<template>
  <div class="neofetch flex flex-col sm:flex-row">
	<div class="ascii">
		<etc>                   -`
			<br>                  .o+`
			<br>                 `ooo/
			<br>                `+oooo:
			<br>               `+oooooo:
			<br>               -+oooooo+:
			<br>             `/:-:++oooo+:
			<br>            `/++++/+++++++:
			<br>           `/++++++++++++++:
			<br>          `/+++ooooooooooooo/`
			<br>         ./ooosssso++osssssso+`
			<br>        .oossssso-````/ossssss+`
			<br>       -osssssso.      :ssssssso.
			<br>      :osssssss/        osssso+++.
			<br>     /ossssssss/        +ssssooo/-
			<br>   `/ossssso+/:-        -:/+osssso+-
			<br>  `+sso+:-`                 `.-/+oso:
			<br> `++:.                           `-/+/
			<br> .`                                 `/
		</etc>
	</div>
	<div class="content">
		<span>cosmic</span>@<span>cat</span><br>
		----------<br>
		<span>OS: </span>Arch Linux <i class="not-italic text-xs">(At least Soon&trade;)</i><br>
		<span>Host: </span>Dell Inc. Inspiron N5110<br>
		<span>Kernel: </span>5.11.7.arch1-1<br>
		<span>Uptime: </span>{{ uptime }}<br>
		<span>Shell: </span>zsh 5.8<br>
		<span>Resolution: </span>1920x1080, 1366x768<br>
		<span>CPU: </span>Intel i7-2670QM (8) @ 2.200GHz<br>
		<span>GPU: </span>Nvidia GT525M<br>
		<span>Memory: </span>8098MiB<br>
		<span>
			<NuxtLink to="/">/home</NuxtLink>
		</span>
	</div>
  </div>
</template>

<script>
	export default {
		layout: 'neofetch',
		data() {
			const startDate = new Date(1615194000000);
			const currentDate = new Date();
			
			let difference = currentDate.getTime() - startDate.getTime();

			let daysDifference = Math.floor(difference/1000/60/60/24);
			difference -= daysDifference*1000*60*60*24;

			let hoursDifference = Math.floor(difference/1000/60/60);
			difference -= hoursDifference*1000*60*60;
			
			let minutesDifference = Math.floor(difference/1000/60);
			difference -= minutesDifference*1000*60;

			return {
				uptime: `${daysDifference} day${daysDifference > 1 ? 's' : ''} ` + hoursDifference + ` hour${hoursDifference > 1 ? 's' : ''} ` + minutesDifference + ` minute${minutesDifference > 1 ? 's' : ''}`
			};
		}
	}
</script>

<style>
	@font-face {
    	font-family: fira;
    	src: url('https://cdn.jsdelivr.net/gh/mozilla/Fira@master/woff/FiraMono-Bold.woff');
  	}

	body {
		background-color: #0f1419;
		padding: 0.8rem 0 0 0.5rem;
	}

	.neofetch {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: 'fira', monospace;
		color: #eee;
	}

	etc {
		font-size: 1.1rem;
		line-height: 0.8em;
		display: inline-block;
		vertical-align: top;
		white-space: pre;
		color: #bff5f3;
	}

	.content span {
		color: #bff5f3;
	}

	.content {
		font-size: 1.15rem;
		padding: 3rem 0 0 1rem;
	}
</style>-->