import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'http://localhost:4321',
  build: {
    format: 'file',
  },
  server: {
    port: 4321,
  },
});
