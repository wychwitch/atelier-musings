/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,mdx,md}'],
  theme: {
    extend: {
      colors:{
      'hex': {
        'text': '#020302',
        'background': '#fafafa',
        'primary': '#b6afda',
        'secondary': '#f5d6e3',
        'accent': '#bdd9af',
      },
      'rites': {
        'text': '#06050a',
        'background': '#efeef7',
        'primary': '#51458c',
        'secondary': '#ffffff',
        'accent': '#5b4d9d',
        },
      'ritual': {
        'text': '#130105',
        'background': '#fde3e7',
        'primary': '#f792a4',
        'secondary': '#fffafb',
        'accent': '#f57a91',
      },
     }
    },
  },
  plugins: [],
}

