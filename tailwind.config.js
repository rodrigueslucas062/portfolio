/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'azul-claro': '#3582C5',
        'azul-escuro': '#052A59',
        'azul-petroleo': '#065690',
        'roxo': '#8A278D',
        'outro-roxo': '#C53DBC',
        'rosa': '#D93B92',
        'outro-rosa': '#F0028D',
       }
    },
  },
  plugins: [],
}
