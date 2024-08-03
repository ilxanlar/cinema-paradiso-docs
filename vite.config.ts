import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'cinema-paradiso-docs',
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
      include: '**/*.svg',
    })
  ],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
  server: {
    open: true
  }
})
