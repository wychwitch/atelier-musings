---
title: Moving to Sveltekit
date: 2023-06-21
tags:
 - design
 - web-weaving
 - colors
---
<script>
import Palette from '$lib/components/Palette.svelte'
export const palettes = [
      {
        text: '#020302',
        'background': '#fafafa',
        'primary': '#b6afda',
        'secondary': '#f5d6e3',
        'accent': '#bdd9af',
      },
      {
        'text': '#06050a',
        'background': '#efeef7',
        'primary': '#51458c',
        'secondary': '#ffffff',
        'accent': '#5b4d9d',
        },
      {
        'text': '#130105',
        'background': '#fde3e7',
        'primary': '#f792a4',
        'secondary': '#fffafb',
        'accent': '#f57a91',
      }
    ]
</script>
Alright so, time to actually put this blog into use!

Since I made my first small-web site I've learned a lot, and have since learned about svelte and other web-technologies that I want to experiment with!

The first step was to change domains: as much as I love atelierwy.ch, I realized it was pretty redundent since wychwit.ch was going unused.

My first decision was to redo the pallet! I used [realtimecolors.com](https://realtimecolors.com/) to generate some, and I adjusted the results slightly afterwards!
<Palette palettes={palettes} />

What's really fun about sveltekit, is that instead of creating those palletes one by one, I created a component and passed a list of them directly in! It was as easy as, well, this! 

```svelte
<script>
  export let palettes
  console.log("wa")
</script>

{#if palettes.length}
  {#each palettes as palette}
<ul class="flex flex-row justify-center my-3">
    <li class="h-32 w-32 mx-2 rounded-xl text-center flex flex-col align-center justify-center" 
    style="background-color: {palette.text}">
        <p class="m-0" style="color: {palette.background}" >Text</p>
        <p class="m-0 select-all" 
        style="color: {palette.background}">{palette.text}</p>
    </li>
    <li class="border-4 h-32 w-32 mx-2 rounded-xl text-center flex flex-col align-center justify-center" style="background-color: {palette.background}; border-color:{palette.primary}">
        <p class="m-0" style="color: {palette.text}">BG</p>
        <p class="m-0 select-all" style="color: {palette.text}">{palette.background}</p>
    </li>
    <li class="h-32 w-32 mx-2 rounded-xl text-center flex flex-col align-center justify-center" style="background-color: {palette.primary}">
        <p class="m-0" style="color: {palette.text}">Primary</p>
        <p class="m-0 select-all" style="color: {palette.text}">{palette.primary}</p>
    </li>
    <li class="border-4 h-32 w-32 mx-2 rounded-xl text-center flex flex-col align-center justify-center" style="background-color: {palette.secondary}; border-color:{palette.primary}">
        <p class="m-0" style="color: {palette.text}">Secondary</p>
        <p class="m-0 select-all" style="color: {palette.text}">{palette.secondary}</p>
    </li>
    <li class="h-32 w-32 mx-2 rounded-xl text-center flex flex-col align-center justify-center" style="background-color: {palette.accent}">
        <p class="m-0" style="color: {palette.text}">Accent</p>
        <p class="m-0 select-all" style="color: {palette.text}">{palette.accent}</p>
    </li>
</ul>
  {/each}

{/if}
```

I will edit this later, rn prism.js is NOT scrolling for some reason.
