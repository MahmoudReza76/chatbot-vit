import ChatWidget from "./components/ChatWidget";
import "./index.css";

window.chatbotDomain = "test.danavan.ai";

const WidgetPage = ({searchParams}) => {
  const {chatBotId = "ac5fefda-5607-49bd-a8fd-071ac64f6eba"} =
    searchParams || {};

  return (
    <div>
      <ChatWidget domain={window.chatbotDomain} chatBotId={chatBotId} />
    </div>
  );
};

export default WidgetPage;
