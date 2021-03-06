<template>
  <nav>
    <input id="nav-toggle" type="checkbox">
    <div class="logo">cosmicice</div>
    <ul class="links">
      <li><a class="link" href="#home">Home</a></li>
      <li><a class="link" href="#about">About</a></li>
      <li><a class="link" href="#work">Work</a></li>
      <li><a class="link" href="#projects">Projects</a></li>
      <li><a class="link" href="#contact">Contact</a></li>
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

}
</script>

<style>
  nav {
    @apply fixed left-0 right-0 top-0;
    padding: 0 5%;
    height: 100px;
    background-color: transparent;
    z-index: 10;
  }

  nav .logo {
    @apply float-left flex items-center; 
    width: 40%;
    height: 100%;
    font-size: 24px;
    color: #282828;
  }

  nav .links {
    @apply float-right p-0 m-0 flex justify-around items-center;
    width: 60%;
    height: 100%;
  }

  nav .links li {
    @apply list-none uppercase;
  }

  nav .links a {
    @apply block font-bold no-underline;
    color: #282828;
    font-size: 1.4em;
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
    height: 5px;
    background-color: #f1f1f1;
    margin: 5px;
    border-radius: 3px;
    transition: all .3s ease-in-out;
  }

  .link {
    display: inline-block;
    color: #000;
    text-decoration: none;
  }

  .link::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background: #000;
      transition: width .3s;
  }

  .link:hover::after {
      width: 100%;
  }

  @media screen and (max-width: 768px) {
    nav .logo {
      @apply float-none w-auto justify-center;
    }

    nav .links {
      @apply float-none fixed w-auto h-auto flex-col justify-evenly overflow-hidden box-border;
      left: 0;
      right: 0;
      bottom: 100%;
      top: 100px;
      background-color: rgba(0,0,0,.8);
      color: #f1f1f1;
      z-index: 9;
      transition: all .5s ease-in-out;
    }

    nav .links a {
      font-size: 1.7em;
      color: #f1fff1;
    }

    nav :checked ~ .links {
      bottom: 0;
    }

    nav .icon-burger {
      @apply block;
    }

    nav :checked ~ .icon-burger .line:nth-child(1) {
      transform: translateY(10px) rotate(225deg);
    }

    nav :checked ~ .icon-burger .line:nth-child(3) {
      transform: translateY(-10px) rotate(-225deg) ;
    }

    nav :checked ~ .icon-burger .line:nth-child(2) {
      opacity: 0;
    }
  }
</style>