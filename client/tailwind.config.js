/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'harmony-light': '#f8f9fd',
                'harmony-dark': '#171d29',
                'harmony-green': '#23c55e',
                'harmony-orange': '#FF9A2E',
            },
        },
    },
    plugins: [],
}