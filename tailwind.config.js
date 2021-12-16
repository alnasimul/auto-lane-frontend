module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      tableLayout: ['hover', 'focus']
    },
  },
  corePlugins: {
    // ...
   tableLayout: false,
  },
  plugins: [
    require('@themesberg/flowbite/plugin')
]
}
