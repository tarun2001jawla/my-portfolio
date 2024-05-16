// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      css: {
        imports: [
          'antd/dist/antd.css',
        ],
      },
    },
  },
});