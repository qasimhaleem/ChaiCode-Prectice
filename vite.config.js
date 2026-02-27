import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(), tailwindcss(),],
  resolve: {
    alias: {
      // This tells Vite that '@' refers to your 'src' folder
      "@": path.resolve(__dirname, "./src"),
    },
  },
})