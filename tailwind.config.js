/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',  // Scans all files with these extensions in the src folder
    './public/**/*.html',               // Scans all HTML files in the public folder
    './components/**/*.{html,js,ts,jsx,tsx}', // Scans files in a components folder if you have one
  ],
  theme: {
    extend: { 
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        inconsolata: ['Inconsolata', 'monospace']
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'mlg': '1035px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '2500px',

        '2max-sm': {'max': '319px'},
        'max-sm': {'max': '639px'},  
        'max-md': {'max': '767px'},  
        'max-lg': {'max': '1023px'}, 
        'max-xl': {'max': '1279px'}, 
        'max-2xl': {'max': '1535px'}, 
        'max-3xl': {'max': '1900px'},
        'max-4xl': {'max': '2600px'},
        'max-1274': {'max': '1274px'},

        'between-lg-xl': { 'min': '1024px', 'max': '1274px' },

        'max-1080': {'max': '1080px'},
        'max-1040': {'max': '1040px'},
        'max-992': {'max': '992px'},
        'max-769': {'max': '769px'},
        'max-576': {'max': '576px'},
        'max-425': {'max': '425px'},
        'max-375': {'max': '375px'},
        'max-320': {'max': '320px'},





        'max-2560px': {'max': '2560px'},
        'max-laptop-L': {'max': '1440px'},
        'max-laptop': {'max': '1024px'},
        'max-tablet': {'max': '768px'},
        'max-mobile-L': {'max': '425px'},
        'max-mobile-M': {'max': '375px'},
        'max-mobile-S': {'max': '320px'}








      },
    },
  },
  plugins: [],
}
