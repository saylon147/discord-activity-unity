import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    allowedHosts: [
      'danger-led-dvds-rod.trycloudflare.com'
    ]
  }
})
