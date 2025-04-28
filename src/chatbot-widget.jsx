import React from "react";
import {createRoot} from "react-dom/client";
import ChatWidget from "./components/ChatWidget";
import "./index.css";

// فرض می‌کنیم domain از WidgetPage به صورت ثابت یا از طریق window دریافت می‌شود
const DEFAULT_DOMAIN = "test.danavan.ai"; // یا از WidgetPage به صورت دینامیک

function renderChatbot({chatBotId, domain = DEFAULT_DOMAIN}) {
  const container = document.createElement("div");
  container.id = "chatbot-dynamic-container";
  document.body.appendChild(container);

  // ایجاد Shadow DOM
  const shadow = container.attachShadow({mode: "open"});
  const wrapper = document.createElement("div");
  shadow.appendChild(wrapper);

  // لود CSS
  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href = "https://chatbot-vit.vercel.app/chatbot-widget.css";
  console.log("Attempting to load CSS:", styleLink.href);
  styleLink.onerror = () =>
    console.error("Failed to load CSS:", styleLink.href);
  styleLink.onload = () =>
    console.log("CSS loaded successfully:", styleLink.href);
  shadow.appendChild(styleLink);

  const root = createRoot(wrapper);
  root.render(<ChatWidget domain={domain} chatBotId={chatBotId} />);
}

function initChatbot() {
  const scripts = document.querySelectorAll("script[data-chatbot-id]");

  scripts.forEach((script) => {
    const chatBotId = script.getAttribute("data-chatbot-id");
    console.log("Script attributes:", {chatBotId});

    if (chatBotId) {
      renderChatbot({
        chatBotId,
        domain: window.chatbotDomain || "test.danavan.ai"
      });
    } else {
      console.error("Missing required data attribute: data-chatbot-id", {
        chatBotId
      });
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
