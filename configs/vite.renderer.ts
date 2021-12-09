import { join } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import styleImport from 'vite-plugin-style-import'
import pkg from '../package.json'

// https://vitejs.dev/config/
export default defineConfig({
  mode: process.env.NODE_ENV,
  root: join(__dirname, '../src/renderer'),
  publicDir: join(__dirname, '../src/renderer/public'),
  plugins: [
    react(),
    styleImport({
      libs: [{
        libraryName: 'antd',
        esModule: true,
        resolveStyle: (name) => `antd/es/${name}/style/index`,
      },],
    }),
  ],
  base: './',
  build: {
    emptyOutDir: true,
    outDir: '../../dist/renderer',
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  server: {
    host: pkg.env.HOST,
    port: pkg.env.PORT,
  },
})
