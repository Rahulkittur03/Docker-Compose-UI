import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080, // Change this to your desired port
    // host: '0.0.0.0', // Optional: If you want to expose it to your network
    // strictPort: true, // Optional: Exit if the port is already in use
  },
})
