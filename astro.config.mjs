import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.ukabcs.co.uk',
  integrations: [sitemap(), react()],
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'lucide-astro',
        'lucide-react',
        'motion',
        'class-variance-authority',
        'cn'
      ]
    }
  }
});
