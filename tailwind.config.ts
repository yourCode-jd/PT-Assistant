import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#18251e", moss: "#315f45", lime: "#d4e8be", paper: "#f7f8f4" }, fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"] } } }, plugins: [] } satisfies Config;
