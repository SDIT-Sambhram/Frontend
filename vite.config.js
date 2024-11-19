import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import cssnano from 'cssnano';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  base: '/', // Ensure root path is correctly set for deployment
  
  // Add server configuration for network access
  server: {
    host: '0.0.0.0',  // Expose to all network interfaces
    port: 3000,       // Specify port
    strictPort: true, // Fail if port is in use
    watch: {
      usePolling: true // Helps with some network file systems
    }
  },

  plugins: [
    react(),
    compression({
      algorithm: 'brotliCompress', // Use Brotli compression
      ext: '.br',
    }),
  ],

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code
          vendor: ['react', 'react-dom', 'react-router-dom'],
        }
      }
    },
    minify: 'terser',
    chunkSizeWarningLimit: 1500,
    terserOptions: {
      compress: { // Remove console.logs in production
        drop_debugger: true,
      },
    },
  },

  css: {
    postcss: {
      plugins: [
        cssnano({
          preset: 'default', // Default minification options
        }),
      ],
    },
  },

  define: {
    'process.env': process.env,
  },

  // Optional: Add HMR and other development optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});