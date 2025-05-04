/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: "#e63605",
                light: "#faf5ec",
                dark: "#181925"
            }
        },
    },
    plugins: [],
}
