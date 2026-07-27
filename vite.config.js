import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'data-loader',
      resolveId(id) {
        if (id.startsWith('data:')) return id;
      },
      load(id) {
        if (id.startsWith('data:')) {
          const filePath = path.resolve(__dirname, id.slice(5) + '.js');
          let content = fs.readFileSync(filePath, 'utf-8');
          // Strip BOM if present
          if (content.charCodeAt(0) === 0xFEFF) {
            content = content.slice(1);
          }
          return 'export default ' + content + ';';
        }
      },
    },
  ],
});