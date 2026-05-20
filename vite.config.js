import fs from 'fs'
import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const projectRoot = fs.realpathSync(process.cwd())

// https://vite.dev/config/
export default defineConfig({
  root: projectRoot,
  base: './',
  resolve: {
    preserveSymlinks: true,
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      input: path.resolve(projectRoot, 'index.html'),
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]'
      }
    }
  }
})
