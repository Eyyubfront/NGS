import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: process.env.VITE_PORT ? parseInt(process.env.VITE_PORT, 10) : 3000,
  },
});
