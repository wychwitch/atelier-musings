<script>
  export let palettes
</script>
<section>
{#if palettes.length}
  {#each palettes as palette}
<ul class="flex flex-row justify-center my-10 flex-wrap">
    <li class="h-32 w-32 m-2 rounded-xl text-center flex flex-col align-center justify-center" style="background-color: {palette.text}">
        <p class="m-0" style="color: {palette.background}" >Text</p>
        <p class="m-0 select-all" style="color: {palette.background}">{palette.text}</p>
    </li>
    <li class="border-4 h-32 w-32 m-2 rounded-xl text-center flex flex-col align-center justify-center" style="background-color: {palette.background}; border-color:{palette.primary}">
        <p class="m-0" style="color: {palette.text}">BG</p>
        <p class="m-0 select-all" style="color: {palette.text}">{palette.background}</p>
    </li>
    <li class="h-32 w-32 m-2 rounded-xl text-center flex flex-col align-center justify-center" style="background-color: {palette.primary}">
        <p class="m-0" style="color: {palette.text}">Primary</p>
        <p class="m-0 select-all" style="color: {palette.text}">{palette.primary}</p>
    </li>
    <li class="border-4 h-32 w-32 m-2 rounded-xl text-center flex flex-col align-center justify-center" style="background-color: {palette.secondary}; border-color:{palette.primary}">
        <p class="m-0" style="color: {palette.text}">Secondary</p>
        <p class="m-0 select-all" style="color: {palette.text}">{palette.secondary}</p>
    </li>
    <li class="h-32 w-32 m-2 rounded-xl text-center flex flex-col align-center justify-center" style="background-color: {palette.accent}">
        <p class="m-0" style="color: {palette.text}">Accent</p>
        <p class="m-0 select-all" style="color: {palette.text}">{palette.accent}</p>
    </li>
</ul>
  {/each}

{/if}
        </section>
