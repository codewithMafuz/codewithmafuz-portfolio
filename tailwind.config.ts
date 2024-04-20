import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                dark: '#030712',
                sky: '#ecfeff',
                blue: '#dbeafe',
            },
        },
    },
    plugins: [require('daisyui')],
    darkMode : "class",
};
export default config;
