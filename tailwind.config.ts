import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primeryColor: "#f3ecdc",
                blackCustom: "#0a0909",
                witheCustom: "#ffffff",
                redCustom: "#ec1c23",
            },
        },
    },
    plugins: [],
} satisfies Config;
