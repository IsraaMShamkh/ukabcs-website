import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://www.ukabcs.co.uk',
  integrations: [sitemap(), react()],
  output: 'static',
  vite: {
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