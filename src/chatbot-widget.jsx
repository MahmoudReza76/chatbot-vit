// src/chatbot-widget.jsx
import React from "react";
import {createRoot} from "react-dom/client";
import ChatWidget from "./components/ChatWidget";
import "./index.css"; // وارد کردن CSS برای باندل

function renderChatbot({domain, chatBotId, targetId}) {
  const container = document.getElementById(targetId);
  if (!container) {
    console.error(`Element with ID ${targetId} not found.`);
    return;
  }

  // ایجاد Shadow DOM
  const shadow = container.attachShadow({mode: "open"});
  const wrapper = document.createElement("div");
  shadow.appendChild(wrapper);

  // افزودن استایل‌ها به Shadow DOM
  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href = "https://chatbot-vit.vercel.app/chatbot-widget.css";
  console.log("Loading CSS:", styleLink.href);
  shadow.appendChild(styleLink);

  const root = createRoot(wrapper);
  root.render(<ChatWidget domain={domain} chatBotId={chatBotId} />);
}

function initChatbot() {
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

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initChatbot);
} else {
  initChatbot();
}

window.initChatbot = initChatbot;
window.renderChatbot = renderChatbot;
