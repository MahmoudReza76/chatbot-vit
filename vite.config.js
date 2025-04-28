// vite.config.js
import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import {fileURLToPath} from "url";
import {dirname, resolve} from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/chatbot-widget.jsx"),
      name: "ChatbotWidget",
      formats: ["iife"],
      fileName: () => "30603ad0ee0fc8b.js"
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith(".css")) {
            return "chatbot-widget.css";
          }
          return assetInfo.name;
        }
      }
    },
    outDir: "dist",
    emptyOutDir: true,
    cssCodeSplit: false,
    cssMinify: true,
    sourcemap: true
  },
  css: {
    transformer: "postcss",
    devSourcemap: true
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(
      process.env.NODE_ENV || "production"
    ),
    "process.env": {}
  }
});
