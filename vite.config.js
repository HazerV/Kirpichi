import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fonts from './src/assets/fonts'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


