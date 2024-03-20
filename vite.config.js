import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', //base url of website
  build: {
    outDir: 'dist', // Output directory for build files
  },
})
