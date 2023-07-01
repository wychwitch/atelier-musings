<script>
import Icon from '@iconify/svelte';
</script>
<header class="z-10 pt-4 bg-rites-background fixed md:static h-24 w-full md:bg-transparent border-b-8 md:border-b-transparent border-b-hex-primary justify-between">
  <a href="/">
    <span class="hidden md:inline text-4xl">/home</span>
  </a>
  <nav>
    <ul class="flex-row align-center justify-between">
      <li>
        <a class="md:hidden w-fit h-fit" href="/">
<Icon icon="iconamoon:home-fill" width="42" color="#b6afda" />
        </a>
      </li>
      <li>
        <a href="/musings/">

          <Icon class="md:hidden w-fit h-fit" icon="fa6-solid:newspaper" width="46" color="#b6afda" />
          <span class="hidden md:inline text-4xl">/musings</span>
        </a>
      </li>
      <li>
        <a href="/about/">
          <Icon class="md:hidden w-fit h-fit" icon="octicon:feed-person-16" width="46" color="#b6afda" />
          <span class="hidden md:inline text-4xl">/about</span>
        </a>
      </li>
      <li>
        <a href="/contact/">
          <Icon class="md:hidden w-fit h-fit" icon="majesticons:mail" width="46" color="#b6afda" />
          <span class="hidden md:inline text-4xl">/contact</span>
        </a>
      </li>
    </ul>
  </nav>
</header>

<style>
ul {
  margin: 0;
  list-style-type: none;
  display: flex;
  gap: 1rem;
}
li{
  margin: 0 1rem;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
