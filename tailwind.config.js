/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Ultrawide/4K/5K (3440x1440, 3840x2160, 5120x2160): conteúdo passa a ser
        // centralizado com max-width em vez de esticar até a borda.
        uw: "2560px", // ajustado: monitor ultrawide do usuário reporta 2560px de largura lógica (CSS), não 3440px físico
      },
    },
  },
  plugins: [],
};
