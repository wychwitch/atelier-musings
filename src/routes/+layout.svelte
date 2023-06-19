<script>
import Header from '$lib/components/Header.svelte'
import '$lib/styles/web.css'
import '$lib/app.css'
import '$lib/styles/prism.css'
import { fade } from 'svelte/transition'
export let data
</script>


<Header />
{#key data.currentRoute}
  <main class="rounded" in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
    <slot />
  </main>
{/key}
<footer class="text-center mail my-4">
  <a class="align-middle group" href="mailto:mail@wychwit.ch">mail@wychwit.ch
  <svg class="inline align-middle group-hover:animate-bounce transition-all ease-in-out" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><path fill="none" stroke="#9f6080" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m7 9l3.75 3a2 2 0 0 0 2.5 0L17 9m4 8V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"/></g></svg>
  </a>

</footer>
<style>
footer a::after{
  content: none;
}
</style>
