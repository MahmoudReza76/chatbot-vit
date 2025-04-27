// src/chatbot-widget.jsx
import React from "react";
import {createRoot} from "react-dom/client";
import ChatWidget from "./components/ChatWidget";

// تابع برای رندر ویجت
function renderChatbot({domain, chatBotId, targetId}) {
  const container = document.getElementById(targetId);
  if (!container) {
    console.error(`Element with ID ${targetId} not found.`);
    return;
  }

  const root = createRoot(container);
  root.render(<ChatWidget domain={domain} chatBotId={chatBotId} />);
}

// تابع برای مقداردهی اولیه ویجت
function initChatbot() {
  // پیدا کردن تمام تگ‌های script که ویجت را لود می‌کنند
  const scripts = document.querySelectorAll('script[src*="chatbot-widget.js"]');

  scripts.forEach((script) => {
    const domain = script.getAttribute("data-domain");
    const chatBotId = script.getAttribute("data-chatbot-id");
    const targetId = script.getAttribute("data-target-id");

    if (domain && chatBotId && targetId) {
      renderChatbot({domain, chatBotId, targetId});
    } else {
      console.error(
        "Missing required data attributes: data-domain, data-chatbot-id, or data-target-id"
      );
    }
  });
}

// اطمینان از اجرای تابع وقتی DOM آماده است
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initChatbot);
} else {
  initChatbot();
}

// افزودن تابع به window برای دسترسی دستی (اختیاری)
window.initChatbot = initChatbot;
window.renderChatbot = renderChatbot;
