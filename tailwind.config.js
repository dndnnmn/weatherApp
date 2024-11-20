/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', 
    './weatherApp/**/*.{html,js}', 
  ],
  theme: {
    extend: {},
  },
  plugins: [ 
    require('daisyui'),
  ],
}

