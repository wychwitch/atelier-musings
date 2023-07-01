<script>
import Tags from '$lib/components/Tags.svelte'
export let data;
const { title, date, Content, tags, edited} = data
</script>
<article class="bg-hex-background rounded border-8 border-hex-primary ">
  <h1 class="text-center">{ title }</h1>
  {#if data.tags.length}
    <aside class="text-center">
      <Tags tags={data.tags} />
    </aside>
  {/if}
  <p class="text-right m-0 px-6 text-hex-primary pt-3 text-lg">Published: {date}</p>
  {#if data.edited}
    <p class="text-right m-0 px-6 text-hex-primary pt-3 text-lg">Edited: {edited}</p>
  {/if}
    <section class="px-6 pt-10">
  <Content />
    </section>
</article>

  
