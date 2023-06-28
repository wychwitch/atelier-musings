<script>
import Icon from '@iconify/svelte';
</script>
<main class="flex-col justify-cente align-center">
  <img src="images/wychbug.png" alt="my persona bouncing" class="m-12 w-48 animate-bounce">
  <section class="mx-48">
    <h1 class="text-6xl text-center text-hex-primary p-8">Wych's site!</h1> 
    <p class="text-center">Hello and welcome to my site! Right now it's still very much under <Icon class="inline" icon="eos-icons:rotating-gear" color="#b6afda"/>construction<Icon icon="eos-icons:rotating-gear" class="inline" color="#b6afda"/>, but I hope you enjoy your stay!</p> 
    <div class="flex-row flex-wrap space-x-8 text-center p-8">
      <p class="inline group">
        <Icon class="inline" icon="material-symbols:garden-cart-rounded" color="#bdd9af" width="48" />
        <a href="https://wychwit.ch/flowerbed" class="transition-all ease-in-out border-b-4 border-hex-accent group-hover:border-b-8">
          Digital Garden
        </a>
      </p>
      <p class="inline group">
        <a href="/musings" class="transition-all ease-in-out border-b-4 border-hex-primary group-hover:border-b-8">
        Blog and Essays
        </a>
        <Icon class="inline" icon="mingcute:paper-fill" color="#b6afda" width="48"/>
      </p>
    </div>
  </section>
</main>
