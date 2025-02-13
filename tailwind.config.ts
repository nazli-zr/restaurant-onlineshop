import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primeryColor: "#f3ecdc",
                modalHeaderBg: "#f3f3f3",
                footerbg: "#1a1a1a",
                blackCustom: "#0a0909",
                witheCustom: "#FFFFFF",
                redCustom: "#ec1c23",
                yellowCustom: "#fcb302",
                textColor1: "#707070",
                textColor2: "#c4c4c7",
                lightGray: "#f1f5f9",
                bordergray: "#e9e9e9",
            },
        },
    },
    plugins: [],
} satisfies Config;
