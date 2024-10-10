import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  resolve: {
    
  },
  build: {
    outDir: 'dist', // Define la carpeta de salida como 'dist' para Netlify
    sourcemap: true, // Útil para depuración en producción, puedes deshabilitarlo si no lo necesitas
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'], // Puedes separar dependencias grandes para optimizar la carga
        },
      },
    },
  },
});
