/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'harmony-dark-green': '#093C2B',
                'harmony-light-tan': '#E3D5CA',
                'harmony-red': '#FF2E31',
                'harmony-orange': '#FF9A2E',
            },
        },
    },
    plugins: [],
}