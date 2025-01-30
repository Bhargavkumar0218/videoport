export default defineConfig({
  server: {
    port: 5173, // Vite runs on 5173 by default
    proxy: {
      "/api": {
        target: "http://localhost:5000", // Match your backend port
        changeOrigin: true,
        secure: false,
      },
    },
  },
});