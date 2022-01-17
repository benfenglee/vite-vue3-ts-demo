import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
export default defineConfig({
  plugins: [vue()],
  // css预处理
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/theme/_handler.scss";'
      }
    }
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
      '@components': path.join(__dirname, './src/components'),
      '@assets': path.join(__dirname, './src/assets'),
      '@pages': path.join(__dirname, './src/pages'),
      '@router': path.join(__dirname, './src/router')
    }
  },
  server: {
    port: 9981,
    open: true,
    proxy: {
      '/api': {
        target: 'http://192.168.199.163:5001/api',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
