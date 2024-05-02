/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./sections/**/*.liquid",
        "./templates/**/*.liquid",
        "./snippets/**/*.liquid",
        "./layout/**/*.liquid",
    ],
    corePlugins: {
        preflight: false, // REMOVE THIS IF WORKING ON "CORE"
    },
    theme: {
        extend: {},
        // EXTEND THE STYLES - COLOURS, TYPOGRAPHY, ETC
    },
    prefix: "tw-", // REMOVE THIS IF WORKING ON "CORE"
    plugins: [],
};
