---
title: Moving to Sveltekit
date: 2023-06-20
edited: 2023-6-25
tags:
 - design
 - web-weaving
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


I will edit this later, rn prism.js is NOT scrolling for some reason.
