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
                yellowCustom: "#fcb302",
                textColor1: "#707070",
                lightGray: "#f1f5f9",
            },
        },
    },
    plugins: [],
} satisfies Config;
