import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '^/api': {
        // "http://localhost:5000/tasks";
        // "https://my-json-server.typicode.com/The-CodeINN/task_tracker/",

        target: 'https://mockend.com/The-CodeINN/task_tracker/tasks',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
      },
    },
  },
  plugins: [vue()],
});
