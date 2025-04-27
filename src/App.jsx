import ChatWidget from "./components/ChatWidget";
const WidgetPage = (searchParams) => {
  const {
    domain = "test.danavan.ai",
    chatBotId = "ac5fefda-5607-49bd-a8fd-071ac64f6eba"
  } = searchParams;
  return (
    <div>
      <ChatWidget domain={domain} chatBotId={chatBotId} />
    </div>
  );
};

export default WidgetPage;
