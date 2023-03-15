import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import findImageDuplicates from '../dist/index.mjs'

export default defineConfig({
  plugins: [vue(), findImageDuplicates({ imagePath: ['src/assets/images/recur'] })]
})
