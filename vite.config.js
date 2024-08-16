import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true //automatically opens port 3000 on your browser 
  }
})


// when we run vite.config.js it pulls down our index.
// localhost:3000 pulls down your index.html file 