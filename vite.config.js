import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Visual Studio holds locks on files in .vs, which crashes the watcher (EBUSY).
      ignored: ['**/.vs/**'],
    },
  },
})
