const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Blender Pro', ...defaultTheme.fontFamily.sans],
        'title': ["'Press Start 2P'",...defaultTheme.fontFamily.mono]
      }
    },
  },
  plugins: [],
}

