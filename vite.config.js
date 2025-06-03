import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // base: '/sustech2025/',
  plugins: [react(), 
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  theme: {
    extend: {
      fontFamily: {
        blackletter: ["UnifrakturMaguntia", "serif"], // Custom font
        serif: ["Goudy Old Style", "serif"], // Alternative
      },
    },
  },
})
