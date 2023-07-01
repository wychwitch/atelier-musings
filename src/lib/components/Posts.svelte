<script>
import Tags from '$lib/components/Tags.svelte'
export let posts
</script>
<section>
{#if posts.length}
<ul class="flex flex-col sm:flex-row flex-wrap w-full justify-center">
  {#each posts as post}
    <li class="md:mx-2 my-2 w-full md:w-96 md:h-80 border-4 odd:border-hex-primary even:border-hex-primary rounded-lg p-4 bg-hex-background">
      <h2>
<a class="border-b-4 border-hex-secondary hover:border-b-8 transition-all ease-in-out delay-25" href={post.path}>
          {post.meta.title}
        </a>
      </h2>
     <p class="text-base">Published {post.meta.date}</p>
        <br>
{#if post.meta.tags.length}
    <p class="inline align-middle">tags:</p> <Tags tags={post.meta.tags} /> 
{/if}
      <br>
      <p class="text-lg">{@html post.Preview} </p>
      <p class="my-6"><a href={post.path} class="readmore rounded-lg bg-hex-primary p-2 hover:border-4 hover:bg-transparent border-hex-primary transition-all ease-in-out delay-25">Read More</a></p>
    </li>
  {/each}
</ul>

{/if}
</section>
<style >
  a.readmore::after{
    content:""
  }
  a{
    font-size: inherit;
  }
h2{
    font-size: 2rem;
  }
</style>
