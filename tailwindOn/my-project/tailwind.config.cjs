
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Caminhos de varredura (coloque-os novamente aqui, verificando a pasta 'src')
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}", // O mais importante para o React
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}