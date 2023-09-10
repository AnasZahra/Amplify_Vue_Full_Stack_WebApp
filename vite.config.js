import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import \'@/assets/base.css\';'
      }
    }
  },
  define: {
    // By default, Vite doesn't include shims for NodeJS,
    // necessary for segment analytics lib to work
    global: {}
  }
})
