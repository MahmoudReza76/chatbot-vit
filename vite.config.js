// vite.config.js
import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import {fileURLToPath} from "url";
import {dirname, resolve} from "path";

// تعریف __dirname و __filename در ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/chatbot-widget.jsx"), // استفاده از resolve برای مسیر
      name: "ChatbotWidget",
      formats: ["iife"],
      fileName: () => "chatbot-widget.js"
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    },
    outDir: "dist",
    emptyOutDir: true,
    cssCodeSplit: false // غیرفعال کردن تقسیم‌بندی CSS
  },
  css: {
    // تنظیمات برای تولید فایل CSS
    preprocessorOptions: {
      // اگر از SCSS یا سایر پیش‌پردازنده‌ها استفاده می‌کنید
    },
    // تنظیم نام فایل CSS خروجی
    output: {
      fileName: "chatbot-widget.css"
    }
  }
});
