/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
    theme: {
        extend:{
            fontFamily: {
                fugaz: ["Fugaz One"],
                goldman: ["Goldman"]
            },
            colors: {
                yellow: {
                    500: "#FFBF31",
                },
            pink: {
                500: "#E8236A",
                700: "#6A0251"
            },
            Blue: {
                500: "#AECCE0"
            }
            },
        }
    }
  };