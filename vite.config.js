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
      fileName: () => "chatbot-widget.js"
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {
          react: "React", // اصلاح синтакس
          "react-dom": "ReactDOM"
        },
        // تنظیم نام فایل‌های استاتیک (مانند CSS)
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
    cssCodeSplit: false, // غیرفعال کردن تقسیم‌بندی CSS
    cssMinify: true // فشرده‌سازی CSS
  },
  css: {
    transformer: "postcss", // استفاده از PostCSS برای Tailwind
    devSourcemap: true // برای دیباگ در توسعه
  }
});
