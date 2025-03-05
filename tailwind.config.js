/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ms': '320px',
        
        'ms1': '360px',
        
        'pro': '375px',

        'ms2': '390px',

        'sm': '410px',
        
        'md': '768px',

        'md1': '800px',

        'md2': '884px',
   
        'lg': '1024px',
  
        'xl': '1280px',

        'xl2': '1440px',

        '2xl': '1536px',
      },

      colors: {
        darkTheme: 'rgba(4, 11, 20, 1)',
        skyBlue: 'rgba(20, 157, 221, 1)',
        headingDarkblue: 'rgba(5, 13, 24, 1)',
        customgray: 'rgba(168, 169, 180, 1)',
        mintCream: 'rgba(242, 246, 244, 1)',
        CharcoalGray: 'rgba(39, 40, 41, 1)',
        mintGray: 'rgba(244, 244, 244, 1)',  
        creamGray: 'rgb(242, 249, 252)',  
        Gray: 'rgb(82, 83, 84)',  
       },

       fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        signika: ['Signika Negative', 'sans-serif'],
        worksans: ['Work Sans', 'sans-serif'], 
      },
         
      
    },
  }, 
  plugins: [],
}