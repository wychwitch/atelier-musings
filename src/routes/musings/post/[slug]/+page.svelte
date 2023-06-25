<script>
import Tags from '$lib/components/Tags.svelte'
export let data;
const { title, date, Content, tags, edited} = data
</script>
<article class="bg-hex-background rounded border-8 border-hex-primary">
  <h1 class="text-center">{ title }</h1>
  {#if data.tags.length}
    <aside class="text-center">
      <Tags tags={data.tags} />
    </aside>
  {/if}
  <p class="text-right m-0">Published: {date}</p>
  {#if data.edited}
    <p class="text-right m-0">Edited: {edited}</p>
  {/if}
  <Content />
</article>


<style>
  article{
    padding: 1rem 3rem;
  }
  
</style>
