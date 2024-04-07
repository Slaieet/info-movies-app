/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        darkbg: '#20252C',
        darkbgTwo: '#434b58',
        darktext: '#fafafa'
      }
    }
  },
  plugins: []
}
