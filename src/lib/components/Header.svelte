<script>
import Icon from '@iconify/svelte';
</script>
<header class="z-10 bg-rites-background fixed md:static h-24 w-full md:bg-transparent border-b-8 md:border-b-transparent border-b-hex-primary">
  <a href="/">
      <Icon class="md:hidden"  icon="iconamoon:home-fill" width="46" color="#b6afda" />
      <span class="hidden md:inline text-4xl">/home</span>

  </a>
  <nav>
    <ul>
      <li>
        <a href="/musings/">

          <Icon class="md:hidden" icon="fa6-solid:newspaper" width="46" color="#b6afda" />
          <span class="hidden md:inline text-4xl">/musings</span>
        </a>
      </li>
      <li>
        <a href="/about/">
          <Icon class="md:hidden" icon="octicon:feed-person-16" width="46" color="#b6afda" />
          <span class="hidden md:inline text-4xl">/about</span>

        </a>
      </li>
      <li>
        <a href="/contact/">
          <Icon class="md:hidden" icon="majesticons:mail" width="46" color="#b6afda" />
          <span class="hidden md:inline text-4xl">/contact</span>

        </a>
      </li>
    </ul>
  </nav>
</header>

<style>
header {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

ul {
  margin: 0;
  list-style-type: none;
  display: flex;
  gap: 2rem;
}
li{
  margin: 0 1rem;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
