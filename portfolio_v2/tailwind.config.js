// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["'Fira Code'", 'monospace'],
      },
      fontSize: {
        base: '1rem',      // Tamanho de fonte padrão
        large: '2.2rem',   // Tamanho de fonte grande para títulos
      },
      fontWeight: {
        regular: '400',    // Peso padrão da fonte
        bold: '500',       // Peso mais forte para destaques
      },
      colors: {
        brandPrimary: 'rgb(194, 142, 255)',      // Light purple (cor principal)
        brandBackground: 'rgb(31, 23, 35)',      // Dark background (cor de fundo)
        brandHighlight: 'rgb(255, 255, 255)',    // White (destaque ou cor de texto)
        brandGrayLight: 'rgb(215, 215, 215)',    // Light gray (cor neutra de apoio)
      },      
    },
  },
  plugins: [],
};
