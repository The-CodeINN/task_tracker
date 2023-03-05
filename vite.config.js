import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "^/api": {
        // "http://localhost:5000/tasks";
        target:
          "https://5000-thecodeinn-tasktracker-pc94gsv8aem.ws-eu89.gitpod.io/tasks",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  },
  plugins: [vue()],
});
