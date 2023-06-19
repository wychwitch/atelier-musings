/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
      'dyed-white': '#e0c8ea',
      'pale-violet': {
        100: '#c6afd0',
        200: '#baa1c4',
        300: '#ac96b6'
      },
      'dusky-violet': '#b6a9bc',
      'dead-violet': '#695e6e',
      'deep-violet': '#504054',
      'dirty-violet': '#573d4a',
      'flushed-violet': '#9f6080',
      'river-spirit':'#5A6296'
      }
    },
  },
  plugins: [],
}

